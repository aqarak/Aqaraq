"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// ✅ Use a RELATIVE path so it works regardless of tsconfig alias state
import { auth } from "../../firebase/config";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-2xl shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">تسجيل جديد</h1>

        {error && <p className="text-red-600 mb-2 text-sm">{error}</p>}
        {success && (
          <p className="text-green-600 mb-2 text-sm">تم إنشاء الحساب بنجاح!</p>
        )}

        <label className="block text-sm mb-1">البريد الإلكتروني</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <label className="block text-sm mb-1">كلمة المرور</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          إنشاء حساب
        </button>
      </form>
    </div>
  );
}
