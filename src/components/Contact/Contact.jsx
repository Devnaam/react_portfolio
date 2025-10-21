import React, { useState } from "react";
import { enqueueSnackbar } from "notistack";
import Spinner from "../Spinner";
import { useSelector } from "react-redux";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  const theme = useSelector((state) => state.themeChanger.value);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "e8595b4f-2c3e-4863-9dce-620382dc0e2a");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        enqueueSnackbar(
          "Message sent! I'll reply within 24 hours.",
          { variant: "success" }
        );
        event.target.reset();
      } else {
        enqueueSnackbar("Error: " + (data.message || "Submission failed"), {
          variant: "error",
        });
      }
    } catch (error) {
      enqueueSnackbar("Something went wrong. Please try again.", {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
        <div
          className={`${
            theme ? "text-white bg-black" : "text-black bg-white"
          } min-h-screen py-12 transition-colors duration-500`}
        >
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Let's Build Something{" "}
                <span className="text-orange-500">Together</span>
              </h1>
              <p className={`text-lg ${theme ? "text-gray-400" : "text-gray-600"}`}>
                Tell me about your project and I'll respond within 24 hours with
                a detailed proposal
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div
                className={`${
                  theme ? "bg-gray-900" : "bg-gray-50"
                } p-8 rounded-lg`}
              >
                <h2 className="text-2xl font-bold mb-6">Quick Contact Form</h2>
                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block mb-2 font-semibold">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300 text-black"
                      } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-2 font-semibold">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300 text-black"
                      } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    />
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label className="block mb-2 font-semibold">
                      Project Brief <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      placeholder="Example: I need a real estate platform with user authentication, property listings, and search filters. Timeline: 8 weeks."
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300 text-black"
                      } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    />
                    <p
                      className={`text-sm mt-2 ${
                        theme ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      Include: What you need, key features, and timeline
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Project Details →
                  </button>
                </form>

                {/* Trust Badge */}
                <div
                  className={`mt-6 p-4 rounded-lg ${
                    theme ? "bg-gray-800" : "bg-white"
                  } border ${theme ? "border-gray-700" : "border-gray-200"}`}
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">24-Hour Response Guarantee</p>
                      <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                        You'll hear back with a detailed proposal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternative Contact Methods */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Me</h2>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/YOUR_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-6 rounded-lg mb-4 ${
                      theme ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-50 hover:bg-gray-100"
                    } transition-colors duration-300`}
                  >
                    <div className="flex items-center gap-4">
                      <FaWhatsapp className="text-4xl text-green-500" />
                      <div>
                        <p className="font-bold text-lg">WhatsApp</p>
                        <p className={theme ? "text-gray-400" : "text-gray-600"}>
                          Quick response for urgent projects
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:your.email@example.com"
                    className={`block p-6 rounded-lg mb-4 ${
                      theme ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-50 hover:bg-gray-100"
                    } transition-colors duration-300`}
                  >
                    <div className="flex items-center gap-4">
                      <FaEnvelope className="text-4xl text-orange-500" />
                      <div>
                        <p className="font-bold text-lg">Email</p>
                        <p className={theme ? "text-gray-400" : "text-gray-600"}>
                          your.email@example.com
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-6 rounded-lg ${
                      theme ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-50 hover:bg-gray-100"
                    } transition-colors duration-300`}
                  >
                    <div className="flex items-center gap-4">
                      <FaLinkedin className="text-4xl text-blue-500" />
                      <div>
                        <p className="font-bold text-lg">LinkedIn</p>
                        <p className={theme ? "text-gray-400" : "text-gray-600"}>
                          Connect professionally
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* What Happens Next */}
                <div
                  className={`p-6 rounded-lg ${
                    theme ? "bg-gray-900" : "bg-gray-50"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="text-orange-500 font-bold text-xl">1</div>
                      <div>
                        <p className="font-semibold">Initial Response (24hrs)</p>
                        <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                          I'll review your project and ask clarifying questions
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-orange-500 font-bold text-xl">2</div>
                      <div>
                        <p className="font-semibold">Proposal (2-3 days)</p>
                        <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                          Detailed scope, timeline, and pricing
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-orange-500 font-bold text-xl">3</div>
                      <div>
                        <p className="font-semibold">Kickoff (1 week)</p>
                        <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                          Agreement signed, development starts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Contact;
