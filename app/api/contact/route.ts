import { NextResponse } from "next/server";

const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

export const POST = async (request: Request) => {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, E-Mail und Nachricht sind erforderlich" },
        { status: 400 }
      );
    }

    const text = [
      "📩 *Neue Kontaktanfrage*",
      `*Name:* ${name}`,
      `*E-Mail:* ${email}`,
      `*Telefon:* ${phone || "nicht angegeben"}`,
      ``,
      `*Nachricht:*`,
      message,
    ].join("\n");

    const res = await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Telegram error:", err);
      return NextResponse.json(
        { error: "Fehler beim Senden" },
        { status: 500 }
      );
    }

    return NextResponse.json({ status: "Nachricht gesendet" });
  } catch {
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
};
