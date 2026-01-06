import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { ThemeProvider } from "@/Components/theme-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melan Cafe - User",
  description: "User Side Melan Cafe Portfolio",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-5">
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
}
