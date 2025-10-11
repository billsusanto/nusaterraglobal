"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

// Form validation schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
  company: z.string().max(0, { message: "This field should be empty" }), // Honeypot field
});

// TypeScript type for the form data
type ContactFormData = z.infer<typeof contactFormSchema>;

// Default message template
const messageTemplate = `Hi, thank you for contacting Nusaterra Global Resources! 🌍
To help us serve you better, please provide the following details:
1. Full Name / Company Name: [______]
2. Country / Location: [______]
3. Product of Interest: [Shisha Charcoal / BBQ Charcoal / Zeolite / Activated Carbon] [______]
4. Specifications Required: [e.g., Cube 25, Hexagonal, Mesh 150, Granular, etc.] [______]
5. Quantity Needed: [Trial order, bulk purchase, 1 FCL, etc.] [______]
6. Packaging Preference: [10 kg box, 20 kg bag, customized, etc.] [______]
7. Destination Port: [______]
Once we receive your details, our team will get back to you with pricing, lead time, and export options (FOB).`;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Initialize with user ID (public key)
    emailjs.init("C0XPIh9aNgIw9yznW");
  }, []);

  // Create a form with validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: messageTemplate,
      company: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      // Honeypot check - reject if not empty
      if (data.company) {
        throw new Error(
          "Submission blocked. If you are human, please try again."
        );
      }

      // Create template parameters using all possible naming conventions
      // EmailJS templates can have different parameter names
      const templateParams = {
        // Standard EmailJS parameters
        user_name: data.name,
        user_email: data.email,
        message: data.message,
        reply_to: data.email,
        to_name: "Nusaterra Team",
        to_email: "justin.siswanto@nusaterrablobal.com",
        subject: "New Product Inquiry",

        // Alternative parameter names that might be in the template
        from_name: data.name,
        from_email: data.email,
        email: data.email,
        name: data.name,
        recipient: "justin.siswanto@nusaterrablobal.com", 

        // Additional context info
        template_params: {
          to: "justin.siswanto@nusaterrablobal.com",
        },
      };

      console.log("Sending email with params:", templateParams);

      try {
        // Try different approach by using the send method directly
        // Include the recipient address in all possible locations
        const response = await emailjs.send(
          "service_23f16lv", // EmailJS service ID
          "template_jbvewaj", // Template ID
          {
            ...templateParams,
            to: "justin.siswanto@nusaterrablobal.com",
            recipient: "justin.siswanto@nusaterrablobal.com",
          },
          "C0XPIh9aNgIw9yznW" // EmailJS public key
        );

        console.log("Email successfully sent!", response);

        if (response.status !== 200) {
          throw new Error(`Failed to send message. Status: ${response.status}`);
        }
      } catch (err) {
        console.error("EmailJS error details:", err);
        // Define a type for the EmailJS error
        interface EmailJSError {
          text?: string;
          message?: string;
        }
        // Type assertion with more specific type
        const emailError = err as EmailJSError;
        throw new Error(
          `Email sending failed: ${
            emailError.text || emailError.message || "Unknown error"
          }`
        );
      }

      // Success - clear form and show success message
      setFormStatus({
        type: "success",
        message: "Thanks! Your message has been sent. We'll reply soon.",
      });

      // Reset form but keep template
      reset({
        name: "",
        email: "",
        message: messageTemplate,
        company: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      // Provide a more helpful error message based on what happened
      let errorMessage =
        "Something went wrong while sending your message. Please try again.";

      if (error instanceof Error) {
        // If we have a specific error message, use it
        errorMessage = error.message;
      }

      // Check for common EmailJS errors in the message
      if (errorMessage.includes("412")) {
        errorMessage =
          "Email template error: Please contact the website administrator.";
      } else if (errorMessage.includes("429")) {
        errorMessage = "Too many messages sent. Please try again later.";
      } else if (errorMessage.includes("401") || errorMessage.includes("403")) {
        errorMessage =
          "Authentication error: Please contact the website administrator.";
      } else if (errorMessage.includes("recipients address is empty")) {
        errorMessage =
          "Email configuration error: Please contact the website administrator with error code 'RCPT_EMPTY'.";
        console.error(
          "EMAIL DEBUG - Recipients empty. Please check the EmailJS template configuration."
        );
      }

      setFormStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

      {/* Status message */}
      {formStatus.type && (
        <div
          className={`p-4 mb-6 rounded-md ${
            formStatus.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
          role="alert"
        >
          {formStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D8B31] ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D8B31] ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows={12}
            {...register("message")}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D8B31] ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Honeypot field - hidden from users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Leave this empty</label>
          <input
            id="company"
            type="text"
            autoComplete="off"
            {...register("company")}
            tabIndex={-1}
          />
        </div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors duration-300 ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:opacity-90"
            }`}
            style={{
              background: "linear-gradient(to right, #4D8B31, #E0B83D)",
            }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
