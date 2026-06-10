// app/layout.tsx

import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Root layout wraps every page in the app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        {/* Main app wrapper */}
        <div className="min-h-screen bg-slate-950 text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
