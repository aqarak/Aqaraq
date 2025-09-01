"use client";

import { motion } from "framer-motion";

export default function Home() {
  const sentences = [
    "أهلاً بك في عقارك",
    "عقارك هو الموقع الأول في الأردن لمساعدتك في بيع، شراء أو تأجير العقارات بسهولة وأمان.",
    "ابحث بين آلاف العقارات المتاحة وابدأ رحلتك الآن.",
    "عقارك، بوابتك إلى أفضل الفرص العقارية في الأردن.",
  ];

  return (
    <div className="min-h-screen bg-darkBlue flex flex-col text-center text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-darkBlue text-gold">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <img src="/LOGO.png" alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Middle: Title with animation */}
        <motion.h1
          className="text-4xl font-bold text-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          AQARAQ عقارك
        </motion.h1>

        {/* Right: Buttons */}
        <div className="flex space-x-4">
          <a
            href="/signup"
            className="px-4 py-2 rounded-lg bg-gold text-darkBlue font-bold hover:opacity-80"
          >
            تسجيل
          </a>
          <a
            href="/signin"
            className="px-4 py-2 rounded-lg bg-gold text-darkBlue font-bold hover:opacity-80"
          >
            دخول
          </a>
          <a
            href="/list-property"
            className="px-4 py-2 rounded-lg bg-gold text-darkBlue font-bold hover:opacity-80"
          >
            أضف عقارك
          </a>
        </div>
      </header>

      {/* Animated Sentences */}
      <motion.div
        className="mt-10 text-2xl font-bold text-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 8, repeatType: "mirror" }}
      >
        {sentences.map((sentence, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              delay: index * 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {sentence}
          </motion.p>
        ))}
      </motion.div>

      {/* Categories */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {[
          "شقق",
          "بيوت",
          "أراضي",
          "فلل",
          "مزارع وشاليهات",
          "محلات تجارية",
          "بنايات",
        ].map((category, index) => (
          <button
            key={index}
            className="px-6 py-3 rounded-lg bg-gold text-darkBlue font-bold hover:opacity-80"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-auto py-4 text-center text-gold text-sm">
        © {new Date().getFullYear()} AQARAQ عقارك. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}