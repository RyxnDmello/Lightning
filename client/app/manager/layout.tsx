import { ReactNode } from "react";
import { Metadata } from "next";

import Navbar from "@components/Manager/Navbar";

import "./globals.scss";

interface ManagerLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Lightning | Manager",
  description: "Testing and Management",
};

export default function RootLayout({ children }: ManagerLayoutProps) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
