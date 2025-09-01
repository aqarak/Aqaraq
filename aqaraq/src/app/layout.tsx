import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "AQARAQ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-blue-950 text-white">
        {/* ✅ Header appears once for all pages */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
