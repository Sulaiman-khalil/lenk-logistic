import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  await fetch(process.env.UPSTASH_REST_URL!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key: `contact:${Date.now()}`,
      value: { name, email, phone, message },
    }),
  });

  return NextResponse.json({ status: "Kontakt gespeichert" });
}
