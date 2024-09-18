import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
