import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  const url = process.env.KV_REST_API_URL!;
  const token = process.env.KV_REST_API_TOKEN!;
  const key = `contact:${Date.now()}`;
  const value = JSON.stringify({ name, email, phone, message });

  const response = await fetch(
    `${url}/set/${encodeURIComponent(key)}/${encodeURIComponent(value)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const result = await response.json();

  return NextResponse.json({ status: "Kontakt gespeichert", result });
}
