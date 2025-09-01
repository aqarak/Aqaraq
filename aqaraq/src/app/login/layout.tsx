"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/firebaseConfig";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // go to home after login
    } catch (err: any) {
      setError("خطأ في تسجيل الدخول. تأكد من البيانات.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950 text-white">
      <form onSubmit={handleLogin} className="bg-blue-900 p-6 rounded-lg shadow-md w-80 space-y-4">
        <h2 className="text-2xl font-bold text-yellow-500 text-center">تسجيل الدخول</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-white text-black"
          required
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-white text-black"
          required
        />

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
