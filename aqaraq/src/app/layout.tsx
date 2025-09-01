import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "AQARAQ",
  description: "عقارك - الموقع الأول في الأردن للعقارات",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-blue-950 text-white min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
