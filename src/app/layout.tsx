import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The ’67 | PsychAtelier",
  description: "The ’67 — a full-grain vegetable-tanned buffalo leather car coat by PsychAtelier.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
