import { Send } from "lucide-react";
import { GradientText } from "../components/GradientText";
import React from "react";

export function Contact() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const formUrl = process.env.FORM_URL;
      if (!formUrl) {
        console.error("FORM_URL is not defined in the environment variables");
        return;
      }
      const response = await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "entry.YOUR_NAME_ENTRY_ID": data.name as string,
          "entry.YOUR_EMAIL_ENTRY_ID": data.email as string,
          "entry.YOUR_MESSAGE_ENTRY_ID": data.message as string,
        }).toString(),
      });

      if (response.ok) {
        console.log("Form successfully submitted");
      } else {
        console.error("Error submitting form", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
  return (
    <section id="contact" className="gradient-bg relative pb-[20px]">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 relative py-32 ">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
            Let's Create Something <GradientText>Extraordinary</GradientText>
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg text-white mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-8 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 text-lg"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
