// Backend route example (Next.js API route)
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { messages } = req.body;

  const systemPrompt = `You are Devnaam's portfolio assistant. Your goal is to qualify leads and help visitors.

ABOUT DEVNAAM:
- Full-stack developer (Next.js, React, Node.js, PostgreSQL, AI integration)
- Specializes in SaaS platforms, AI tools, and web applications
- Past projects: RentFair (PG rental platform), Inventory AI (business analytics), Skill Exchange Platform
- Pricing: $50-150/hour depending on project complexity
- Available for: Freelance projects, consulting, long-term contracts

YOUR TASKS:
1. Qualify leads: Ask about project type, budget, timeline
2. Answer technical questions confidently
3. Show relevant past work examples
4. For qualified leads: Suggest scheduling a call or filling contact form
5. Be friendly, concise (max 3-4 sentences), and professional

IMPORTANT:
- Don't make pricing promises without understanding scope
- Always offer to schedule a detailed discussion for complex questions
- Highlight relevant portfolio projects when asked about experience`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    
    const chat = model.startChat({
      history: messages.slice(0, -1).map(msg => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }]
      }))
    });

    const result = await chat.sendMessage(systemPrompt + "\n\nUser: " + messages[messages.length - 1].content);
    const response = await result.response;

    res.status(200).json({ message: response.text() });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ 
      message: "I'm experiencing technical difficulties. Please email devnaam@example.com or try again later!" 
    });
  }
}
