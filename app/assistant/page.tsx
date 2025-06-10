"use client";

import { SchemeAssistant } from "@/components/scheme-assistant";

export default function AssistantPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Government Scheme Assistant</h1>
        <p className="text-center text-gray-600 max-w-2xl mb-8">
          Get instant answers about government schemes, eligibility criteria, and application processes. Our AI assistant is here to help you 24/7.
        </p>
      </div>
      <SchemeAssistant />
    </div>
  );
}