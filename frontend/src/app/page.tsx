import ChatInterface from "@/components/PortfolioChat";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Portfolio Chat</h1>
      <ChatInterface />
    </main>
  );
}
