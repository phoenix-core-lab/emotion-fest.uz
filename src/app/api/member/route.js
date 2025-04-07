import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  console.log("Полученные данные от клиента:", body);
  const { fullName, companyName, phone, city, mail } = body;

  const response = await fetch(process.env.MEMBER_TABLE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName, companyName, phone, city, mail }),
  });

  const result = await response.json();
  console.log("Ответ от Google Sheets:", result);
  console.log("Тип result.type:", typeof result.type); // Логируем тип
  console.log("Значение result.type:", JSON.stringify(result.type)); // Логируем точное значение

  if (result.type === "success") {
    console.log("Успешная обработка данных");
    return NextResponse.json({ status: "success" });
  } else {
    console.log("Ошибка при обработке данных:", result);
    return NextResponse.json(
      { status: "error", errors: result.errors || result.message },
      { status: 400 }
    );
  }
}
