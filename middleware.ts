import { NextResponse } from "next/server";
import { get } from "@vercel/edge-config";

export const config = {
  matcher: "/welcome",
};

export async function middleware() {
  const greeting = await get("greeting");
  const theme = await get("theme");
  const storeEnabled = await get("storeEnabled");

  // Absicherung: Nur serialisierbare Werte zurückgeben
  return NextResponse.json({
    greeting: typeof greeting === "string" ? greeting : "Kein Gruß gefunden",
    theme: typeof theme === "string" ? theme : "light",
    storeEnabled: typeof storeEnabled === "boolean" ? storeEnabled : false,
  });
}
