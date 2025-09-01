"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const sentences = [
    "أهلاً بك في عقارك",
    "عقارك هو الموقع الأول في الأردن لمساعدتك في بيع، شراء أو تأجير العقارات بسهولة وأمان.",
    "ابحث بين آلاف العقارات المتاحة وابدأ رحلتك الآن.",
    "عقارك، بوابتك إلى أفضل الفرص العقارية في الأردن.",
  ];

  const [currentSentence, setCurrentSentence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  // Cities with areas
  const cities: { [key: string]: string[] } = {
    عمان: ["العبدلي", "الصويفية", "تلاع العلي", "ماركا", "الجاردنز", "خلدا", "عبدون", "طبربور"],
    إربد: ["الجامعة", "الحصن", "الصريح", "بيت راس", "الرمثا", "الطيبة", "أيدون"],
    الزرقاء: ["الزرقاء الجديدة", "الغويرية", "جبل طارق", "حي رمزي", "الهاشمية", "الرصيفة"],
    العقبة: ["الشاطئ الجنوبي", "المدينة", "القويرة", "النخيل"],
  };

  const categories = ["شقق", "فلل", "أراضي", "مزارع وشاليهات", "محلات تجارية", "بنايات"];

  // Random properties dataset
  const allProperties = {
    sell: [
      { price: "80,000 JOD", city: "عمان", area: "تلاع العلي" },
      { price: "65,000 JOD", city: "إربد", area: "الجامعة" },
      { price: "120,000 JOD", city: "عمان", area: "عبدون" },
      { price: "95,000 JOD", city: "الزرقاء", area: "الزرقاء الجديدة" },
      { price: "70,000 JOD", city: "العقبة", area: "النخيل" },
      { price: "150,000 JOD", city: "عمان", area: "خلدا" },
    ],
    buy: [
      { price: "45,000 JOD", city: "إربد", area: "الحصن" },
      { price: "60,000 JOD", city: "عمان", area: "طبربور" },
      { price: "50,000 JOD", city: "الزرقاء", area: "حي رمزي" },
      { price: "55,000 JOD", city: "العقبة", area: "القويرة" },
      { price: "65,000 JOD", city: "إربد", area: "الصريح" },
      { price: "75,000 JOD", city: "عمان", area: "ماركا" },
    ],
    rent: [
      { price: "300 JOD", city: "عمان", area: "الصويفية" },
      { price: "250 JOD", city: "إربد", area: "أيدون" },
      { price: "400 JOD", city: "عمان", area: "العبدلي" },
      { price: "200 JOD", city: "الزرقاء", area: "الهاشمية" },
      { price: "350 JOD", city: "العقبة", area: "الشاطئ الجنوبي" },
      { price: "280 JOD", city: "إربد", area: "الرمثا" },
    ],
  };

  // State for rotating random properties
  const [displayedSell, setDisplayedSell] = useState(allProperties.sell.slice(0, 4));
  const [displayedBuy, setDisplayedBuy] = useState(allProperties.buy.slice(0, 4));
  const [displayedRent, setDisplayedRent] = useState(allProperties.rent.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedSell(shuffleAndPick(allProperties.sell, 4));
      setDisplayedBuy(shuffleAndPick(allProperties.buy, 4));
      setDisplayedRent(shuffleAndPick(allProperties.rent, 4));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  function shuffleAndPick(arr: any[], count: number) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  return (
    <div className="min-h-screen bg-blue-950 text-white flex flex-col">
      {/* Animated Sentences */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-6 relative -mt-[40px]">
        <p className="text-2xl font-semibold text-yellow-500 mb-6">
          {sentences[currentSentence]}
        </p>

        {/* Drop Lists (Left, smaller, golden) */}
        <div className="absolute left-6 top-40 flex flex-col space-y-2 w-44">
          <div>
            <label className="block text-yellow-500 mb-1 text-sm font-bold">المحافظة</label>
            <select
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setSelectedArea("");
              }}
              className="w-full p-1 rounded-md bg-yellow-500 text-black text-sm font-bold"
            >
              <option value="">اختر المحافظة</option>
              {Object.keys(cities).map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-yellow-500 mb-1 text-sm font-bold">المنطقة</label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              disabled={!selectedCity}
              className="w-full p-1 rounded-md bg-yellow-500 text-black text-sm font-bold"
            >
              <option value="">اختر المنطقة</option>
              {selectedCity &&
                cities[selectedCity]?.map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="block text-yellow-500 mb-1 text-sm font-bold">نوع العملية</label>
            <select className="w-full p-1 rounded-md bg-yellow-500 text-black text-sm font-bold">
              <option>بيع</option>
              <option>شراء</option>
              <option>إيجار</option>
            </select>
          </div>

          <div>
            <label className="block text-yellow-500 mb-1 text-sm font-bold">التصنيف</label>
            <select className="w-full p-1 rounded-md bg-yellow-500 text-black text-sm font-bold">
              {categories.map((cat, i) => (
                <option key={i}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </main>

      {/* Properties Section */}
      <section className="h-[40vh] flex flex-col justify-start items-center space-y-6 transform -translate-y-[100px] transition-transform duration-700 ease-in-out">
        {/* SELL ROW */}
        <div className="w-full max-w-4xl">
          <h2 className="text-lg font-bold text-yellow-500 mb-2 text-center">عقارات للبيع</h2>
          <div className="flex space-x-4 justify-center border-b border-yellow-500 border-opacity-40 pb-2">
            {displayedSell.map((prop, idx) => (
              <div
                key={prop.city + idx}
                className="border border-yellow-500 rounded-lg w-40 p-2 text-sm text-center"
              >
                <p className="text-yellow-500 font-bold">{prop.price}</p>
                <p>{prop.city}</p>
                <p>{prop.area}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BUY ROW */}
        <div className="w-full max-w-4xl">
          <h2 className="text-lg font-bold text-yellow-500 mb-2 text-center">عقارات للشراء</h2>
          <div className="flex space-x-4 justify-center border-b border-yellow-500 border-opacity-40 pb-2">
            {displayedBuy.map((prop, idx) => (
              <div
                key={prop.city + idx}
                className="border border-yellow-500 rounded-lg w-40 p-2 text-sm text-center"
              >
                <p className="text-yellow-500 font-bold">{prop.price}</p>
                <p>{prop.city}</p>
                <p>{prop.area}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RENT ROW */}
        <div className="w-full max-w-4xl">
          <h2 className="text-lg font-bold text-yellow-500 mb-2 text-center">عقارات للإيجار</h2>
          <div className="flex space-x-4 justify-center border-b border-yellow-500 border-opacity-40 pb-2">
            {displayedRent.map((prop, idx) => (
              <div
                key={prop.city + idx}
                className="border border-yellow-500 rounded-lg w-40 p-2 text-sm text-center"
              >
                <p className="text-yellow-500 font-bold">{prop.price}</p>
                <p>{prop.city}</p>
                <p>{prop.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 border-t border-yellow-500 mt-6">
        <p className="text-yellow-500">© 2025 AQARAQ. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
