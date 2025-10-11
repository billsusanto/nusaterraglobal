import type { Metadata } from "next";
import ClientContactPage from "./ClientContactPage";

// Metadata is exported from the server component
export const metadata: Metadata = {
  title: "Contact Us | Nusaterra Global Resources",
  description:
    "Get in touch with Nusaterra Global Resources for inquiries about our sustainable products including Charcoal, Zeolite, and more.",
};

// This server component just renders the client component
export default function ContactPage() {
  return <ClientContactPage />;
}
