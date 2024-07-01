import type { Metadata } from "next";
import "/styles/globals.css";

export const metadata: Metadata = {
  title: "OpenAI GPT Chatbot",
  description: "Testing Environment for OpenAI GPT-3.5 Turbo Chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
