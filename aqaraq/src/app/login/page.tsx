"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("تم تسجيل الدخول بنجاح ✅");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setError("خطأ في تسجيل الدخول: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-blue-900 p-6 rounded-xl shadow-lg w-96 space-y-4"
      >
        <h1 className="text-2xl font-bold text-yellow-500 text-center">
          تسجيل الدخول
        </h1>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-gray-100 text-black"
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-gray-100 text-black"
          required
        />
        {error && <p className="text-red-400">{error}</p>}
        {success && <p className="text-green-400">{success}</p>}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-600"
        >
          دخول
        </button>
      </form>
    </div>
  );
}
