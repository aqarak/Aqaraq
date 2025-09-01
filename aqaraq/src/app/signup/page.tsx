"use client";

import { useState } from "react";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert("يجب الموافقة على الشروط والأحكام وسياسة الخصوصية وأن يكون عمرك 18 عامًا أو أكثر.");
      return;
    }
    // Simulate sending OTP via SMS
    setOtpSent(true);
    alert("تم إرسال رمز التحقق (OTP) إلى رقم هاتفك.");
  };

  return (
    <div className="min-h-screen bg-[#001F3F] flex items-center justify-center p-6">
      <div className="bg-[#002B5B] rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-[#FFD700] mb-6">إنشاء حساب جديد</h1>

        <form onSubmit={handleSendOtp} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-[#FFD700] font-bold mb-1">الاسم الأول</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value.replace(/[^a-zA-Z\u0621-\u064A]/g, ""))
              }
              required
              minLength={3}
              className="w-full p-2 rounded-md bg-white text-black border border-[#FFD700]"
              placeholder="الاسم الأول"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-[#FFD700] font-bold mb-1">اسم العائلة</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value.replace(/[^a-zA-Z\u0621-\u064A]/g, ""))
              }
              required
              minLength={3}
              className="w-full p-2 rounded-md bg-white text-black border border-[#FFD700]"
              placeholder="اسم العائلة"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#FFD700] font-bold mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern=".+@.+\..+"
              className="w-full p-2 rounded-md bg-white text-black border border-[#FFD700]"
              placeholder="example@email.com"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-[#FFD700] font-bold mb-1">رقم الهاتف</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ""))}
              required
              minLength={9}
              maxLength={15}
              className="w-full p-2 rounded-md bg-white text-black border border-[#FFD700]"
              placeholder="07XXXXXXXX"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start text-right text-white">
            <input
              type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
              className="mr-2 mt-1"
              required
            />
            <p className="text-sm">
              أوافق على <span className="text-[#FFD700]">الشروط والأحكام</span> و{" "}
              <span className="text-[#FFD700]">سياسة الخصوصية</span> وأقر بأن عمري 18 عامًا أو أكثر.
            </p>
          </div>

          {/* Send OTP Button */}
          <button
            type="submit"
            className="w-full bg-[#FFD700] text-[#001F3F] font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition"
          >
            إرسال رمز التحقق
          </button>
        </form>

        {/* OTP Input (appears after sending OTP) */}
        {otpSent && (
          <div className="mt-6">
            <label className="block text-[#FFD700] font-bold mb-1">رمز التحقق (OTP)</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
              required
              minLength={4}
              maxLength={6}
              className="w-full p-2 rounded-md bg-white text-black border border-[#FFD700]"
              placeholder="أدخل رمز التحقق هنا"
            />

            <button
              onClick={() => alert("تم التحقق من الرقم بنجاح ✅")}
              className="w-full mt-4 bg-[#FFD700] text-[#001F3F] font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition"
            >
              تأكيد التسجيل
            </button>
          </div>
        )}
      </div>
    </div>
  );
}