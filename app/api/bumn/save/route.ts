import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    // URL Web App Google Apps Script
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzKNCiRmE55pReVEGG9MQ7RK3MYYxOFoKKf9yOF9hvky5qot8wL7lQjSf1pvqS1WIh-AA/exec";
    // Forward request ke Google Apps Script
    const res = await fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      redirect: "follow",
    });

    const data = await res.json(); 

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(
      { status: "error", message: err.message },
      { status: 500 }
    );
  }
}
