import { NextResponse } from "next/server";
import { toast } from "react-toastify";

export async function POST(req) {
  const { fullName, age, phone, city, mail } = await req.json();

  const response = await fetch(process.env.GUEST_TABLE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName, age, phone, city, mail }),
  });

  const result = await response.json();
  console.log("Ответ от Google Sheets:", result);
  console.log("Тип result.type:", typeof result.type); // Логируем тип
  console.log("Значение result.type:", JSON.stringify(result.type)); // Логируем точное значение

  if (result.type === "success") {
    return NextResponse.json({ status: "success" });
    console.log("Успешная обработка данных");
  } else {
    console.log("Ошибка при обработке данных:", result);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
