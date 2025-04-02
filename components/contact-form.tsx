"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError(null);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (serviceID && templateID) {
      emailjs.send(serviceID, templateID, formData, userID).then(
        (response) => {
          console.log("Email successfully sent:", response);
          setFormData({ name: "", email: "", message: "", subject: "" });
          setLoading(false);
        },
        (error) => {
          console.error("Failed to send email:", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Missing EmailJS credentials");
      setLoading(false);
    }
  };

  const isFormValid =
    Object.values(formData).every((value) => value.trim() !== "") &&
    !emailError;

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-400"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-400"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-400"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-400"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
        ></textarea>
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        disabled={loading || !isFormValid}
      >
        {loading ? (
          <>
            Loading...
            <span className="animate-spin"> ⏳ </span>
          </>
        ) : (
          "Send Message"
        )}{" "}
      </Button>
    </form>
  );
};

export default ContactForm;
