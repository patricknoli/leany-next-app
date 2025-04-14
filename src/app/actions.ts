'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createSession() {
  const cookieStore = await cookies();

  cookieStore.set('token', 'true');

  redirect('/');
}