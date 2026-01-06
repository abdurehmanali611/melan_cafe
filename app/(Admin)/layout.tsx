import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melan Cafe - Admin",
  description: "Admin Side Melan Cafe Portfolio",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
