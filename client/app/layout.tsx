import { ReactNode } from "react";
import { Metadata } from "next";

import "./globals.scss"

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Lightning",
  description: "API Testing and Management",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
