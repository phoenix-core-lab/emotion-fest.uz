import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullName, companyName, phone, city, mail } = await req.json();

  const response = await fetch(process.env.PARTNERS_TABLE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName, companyName, phone, city, mail }),
  });

  const result = await response.json();

  if (result.type === "success") {
    return NextResponse.json({ status: "success" });
    // toast.success('Ваша заявка принята!')
  } else {
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
