"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Getting started with LinkPost",
    answer:
      "To get started with LinkPost, simply sign up for an account, connect your social media platforms, and explore the dashboard to begin scheduling or managing your content.",
  },
  {
    question: "Which social media platforms do you support?",
    answer:
      "LinkPost supports popular social media platforms including Facebook, Instagram, Twitter, LinkedIn, and YouTube.",
  },
  {
    question: "Can I manage multiple workspaces?",
    answer:
      "Yes, LinkPost allows you to manage multiple workspaces, making it ideal for agencies or teams handling several brands.",
  },
  {
    question: "How to change my subscription plan",
    answer:
      "You can change your subscription plan from your account settings under the 'Billing' section. Choose the plan that best fits your needs and confirm the update.",
  },
  {
    question: "How to cancel my subscription",
    answer:
      "To cancel your subscription, go to your account settings, select 'Billing', and click on 'Cancel Subscription'. Follow the prompts to complete the process.",
  },
  {
    question: "How to reach customer support",
    answer:
      "You can reach our customer support team via the 'Help' section on your dashboard or by emailing support@postsbridge.com.",
  },
  {
    question: "How to update billing information",
    answer:
      "To update billing details, navigate to 'Account Settings' > 'Billing', and update your payment method or billing address as needed.",
  },
  {
    question: "How to connect social media accounts",
    answer:
      "Go to the 'Social Accounts' tab in your dashboard and select the platform you'd like to connect. Follow the authorization steps to complete the connection.",
  },
  {
    question: "Are social media connections secure with LinkPost?",
    answer:
      "Yes, all social media connections are secured using industry-standard encryption protocols and OAuth authentication to protect your data.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md cursor-pointer transition hover:shadow-lg"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </div>
            {openIndex === index && (
              <p className="text-gray-600 mt-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
