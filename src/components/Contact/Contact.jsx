import React, { useState } from "react";
import { enqueueSnackbar } from "notistack";
import Spinner from "../Spinner";
import contactMe from "/assets/contact me.png";
import { useSelector } from "react-redux";

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
        enqueueSnackbar("Message successfully sent!", { variant: "success" });
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
          className={`flex justify-between items-center h-screen ${
            theme ? "bg-[#1A1A1A]" : "bg-gray-100"
          } rounded-xl mt-10 mb-10`}
        >
          <div className="hidden md:block">
            <img src={contactMe} alt="" className="h-[500px]" />
          </div>

          <div>
            <center
              className={`text-4xl font-bold sm:text-5xl m-3 mt-10 ${
                theme ? "text-white" : "text-black"
              }`}
            >
              Get in Touch! 😀
            </center>

            <form onSubmit={onSubmit} className="flex flex-col md:w-3/4 gap-6 m-6">
              <input
                type="text"
                name="name"
                placeholder="name"
                className={`${!theme && "border-2"} rounded-lg p-2 ${
                  theme ? "bg-black text-white" : "bg-white"
                }`}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className={`${!theme && "border-2"} rounded-lg p-2 ${
                  theme ? "bg-black text-white" : "bg-white"
                }`}
                required
              />
              <textarea
                name="message"
                placeholder="write something"
                className={`${
                  !theme && "border-2"
                } rounded-lg p-2 h-40 overflow-y-auto resize-none ${
                  theme ? "bg-black text-white" : "bg-white"
                }`}
                maxLength="200"
                required
              ></textarea>

              <center>
                <button
                  type="submit"
                  className={`text-center font-bold ${
                    theme
                      ? "bg-white hover:bg-green-900 hover:text-white transition duration-300 ease-in-out"
                      : "hover:bg-green-900 hover:text-white transition duration-300 ease-in-out bg-black text-white"
                  } rounded-2xl px-8 p-2`}
                >
                  Submit Form
                </button>
              </center>
            </form>

            <div>
              <center
                className={`text-4xl font-bold ${
                  theme ? " text-white" : "text-black"
                }`}
              >
                or
              </center>
              <a href="mailto:workwithdevnaam@gmail.com">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-4">
                  Contact Me via Email
                </button>
              </a>
              <a href="https://wa.me/message/V4RUENYDMTNGH1">
                <button className="bg-green-500 text-white font-bold py-2 px-4 m-4 rounded">
                  Contact Me via WhatsApp
                </button>
              </a>
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
