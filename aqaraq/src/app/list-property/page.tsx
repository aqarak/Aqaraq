"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ListProperty() {
  const router = useRouter();

  // Simulated authentication (replace later with real auth)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("userLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    if (!loggedIn) {
      alert("يجب تسجيل الدخول لإضافة عقار جديد.");
      router.push("/signin");
    }
  }, [router]);

  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  // Cities and their areas
  const cities = {
    "": ["جميع المناطق"],
    "جميع المحافظات": ["جميع المناطق"],
    عمان: ["جميع المناطق", "عبدون", "الصويفية", "تلاع العلي", "الهاشمي الشمالي", "المدينة الرياضية"],
    إربد: ["جميع المناطق", "الحي الشرقي", "الحي الغربي", "الجامعة", "الصريح"],
    الزرقاء: ["جميع المناطق", "الزرقاء الجديدة", "الغويرية", "جبل طارق"],
    العقبة: ["جميع المناطق", "المدينة", "الثقافة", "الواجهة البحرية"],
  };

  const categories = ["شقق", "فلل", "مزارع وشاليهات", "محلات تجارية", "بنايات"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`✅ تم إضافة عقارك بنجاح:
    • المدينة: ${city}
    • المنطقة: ${area}
    • نوع العملية: ${type}
    • الفئة: ${category}`);
    router.push("/"); // redirect back to home after adding
  };

  const handleSkip = () => {
    router.push("/"); // skip and go back home
  };

  return (
    <div className="min-h-screen bg-[#001F3F] flex items-center justify-center p-6">
      <div className="bg-[#002B5B] rounded-2xl shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-[#FFD700] text-center mb-6">
          إضافة عقار جديد
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-right">
          {/* City */}
          <div>
            <label className="block text-[#FFD700] font-bold mb-1">المحافظة</label>
            <select
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setArea("");
              }}
              required
              className="w-full p-2 rounded-md bg-white text-black border border-[#FFD700]"
            >
              <option value="">اختر المحافظة</option>
              {Object.keys(cities).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Area */}
          <div>
            <label className="block text-[#FFD700] font-bold mb-1">المنطقة</label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
              className="w-full p-2 rounded-md bg-white text-black border border-[#FFD700]"
              disabled={!city}
            >
              <option value="">اختر المنطقة</option>
              {city &&
                cities[city]?.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block text-[#FFD700] font-bold mb-1">نوع العملية</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className="w-full p-2 rounded-md bg-white text-black border border-[#FFD700]"
            >
              <option value="">اختر</option>
              <option value="بيع">بيع</option>
              <option value="شراء">شراء</option>
              <option value="إيجار">إيجار</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-[#FFD700] font-bold mb-1">الفئة</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full p-2 rounded-md bg-white text-black border border-[#FFD700]"
            >
              <option value="">اختر الفئة</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Submit + Skip */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              type="submit"
              className="w-full bg-[#FFD700] text-[#001F3F] font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition"
            >
              إضافة العقار
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="w-full border-2 border-[#FFD700] text-[#FFD700] font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 hover:text-white transition"
            >
              تخطي ومتابعة
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
