"use client";
import React, { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("app/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-2 pb-4 sm:pt-4 sm:pb-6 max-w-full sm:max-w-[90%] md:max-w-[80%] mx-auto text-center min-h-[90vh] flex flex-col justify-start bg-black relative overflow-hidden">
      <div className="p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-pink-600 sm:border-2 shadow-lg sm:shadow-xl bg-black text-black">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sora mb-3 sm:mb-4 text-white">
          Contact Me
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-pink-600 font-sora mb-4 sm:mb-6">
          Have a project in mind or just want to say hi? I'd love to hear from
          you! Whether it's a development idea, collab, or tech talk — drop me a
          message and I'll get back to you.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 text-left">
            <div className="space-y-3 sm:space-y-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full border border-pink-600 sm:border-2 bg-black text-white p-2 sm:p-3 rounded-lg sm:rounded-xl placeholder-white font-medium text-sm sm:text-base"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full border border-pink-600 sm:border-2 bg-black text-white p-2 sm:p-3 rounded-lg sm:rounded-xl placeholder-white font-medium text-sm sm:text-base"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-pink-600 sm:border-2 bg-black text-white p-2 sm:p-3 rounded-lg sm:rounded-xl placeholder-white font-medium text-sm sm:text-base"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full border border-pink-600 sm:border-2 bg-black text-white p-2 sm:p-3 rounded-lg sm:rounded-xl placeholder-white font-medium text-sm sm:text-base"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-pink-600 sm:border-2 bg-black text-white p-2 sm:p-3 h-40 sm:h-full rounded-lg sm:rounded-xl placeholder-white font-medium text-sm sm:text-base"
                required
              ></textarea>
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 sm:mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-black bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base md:text-lg rounded-full hover:opacity-90 transition-all flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  Sending...
                  <span className="animate-spin">⟳</span>
                </>
              ) : (
                <>
                  Send Message <Send size={16} className="sm:size-[18px]" />
                </>
              )}
            </button>
          </div>
        </form>

        {submitStatus === "success" && (
          <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-green-200 border border-green-500 text-green-900 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base">
            <Check size={16} className="sm:size-[20px]" />
            <p>Your message has been sent successfully!</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-red-200 border border-red-500 text-red-900 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base">
            <AlertCircle size={16} className="sm:size-[20px]" />
            <p>Failed to send message. Please try again later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
