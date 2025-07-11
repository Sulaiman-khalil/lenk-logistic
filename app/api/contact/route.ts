import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

export const POST = async (request: Request) => {
  const { name, email, phone, message } = await request.json();
  const key = `contact:${Date.now()}`;
  const value = { name, email, phone, message };

  await redis.set(key, value);

  return NextResponse.json({ status: "Kontakt gespeichert" });
};
