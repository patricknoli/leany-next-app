'use client';

import { createSession } from "../actions";

export default function Login() {

  async function handleLogin() {
    createSession();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <button className="cursor-pointer bg-white text-black p-2 rounded" onClick={() => handleLogin()}>Login</button>
      </main>
    </div>
  )
}