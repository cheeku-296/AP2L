import React from "react";
import FAQClient from "@/src/components/resources/faq/FAQClient";

export const metadata = {
  title: "FAQ | ShieldVUE",
  description: "Frequently asked questions about our products and services.",
};

export default function FAQPage() {
  return (
    <main>
      <FAQClient />
    </main>
  );
}
