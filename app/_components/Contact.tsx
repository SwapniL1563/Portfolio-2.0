"use client";

import React, { FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  // Function to handle the form submit
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "08a51ff1-5711-4684-a77a-b8fa65219ea9",
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    });

    if (response.ok) {
      toast({
        description: "Your message has been sent.",
      });
    } else {
      toast({
        description: "There was an error sending your message. Please try again.",
      });
    }
  }

  return (
    <>
      <div className="my-24 flex justify-center">
        <div className="md:w-3/4 w-10/12">
          {/* Form Section */}
          <form className="w-full md:w-[45%] text-white" onSubmit={handleSubmit}>
            <h1 className="text-xl md:text-3xl font-semibold text-white mb-3 md:mb-4">
              Let's Connect
            </h1>
            <div className="flex flex-col mb-2">
              <input
                className="glass placeholder:text-gray-500 px-4 py-3 outline-none"
                type="text"
                name="name"
                required
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col mb-2">
              <input
                className="glass placeholder:text-gray-500 px-4 py-3 outline-none"
                type="email"
                name="email"
                required
                placeholder="email@example.com"
              />
            </div>
            <div className="flex flex-col mb-2">
              <textarea
                className="glass placeholder:text-gray-500 px-4 py-3 outline-none"
                name="message"
                required
                rows={3}
                placeholder="Enter Message"
              ></textarea>
            </div>

            {/* Button With Toast Message */}
            <button
              className="primary-bg text-black rounded-[0.45rem] font-medium placeholder:text-gray-500 px-4 py-3 outline-none  hover:bg-blue-700"
              type="submit"
            >
              <div className="flex justify-center gap-3 items-center">
                <h1>Send Message</h1>
                <Send size={20} />
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
