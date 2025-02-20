import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    console.log("Webhook received:", payload);

    const id = payload.id;
    const name = payload.first_name || "Unknown";
    const lastname = payload.last_name || "User";
    const imageurl = payload.image_url || "";
    // const email = payload.email_addresses?.[0]?.email_address || "no-email@example.com"; 

    const user = await db.user.create({
      data: {
        email: "sheer@example.com", // Replace this with `email` when available
        firstname: name,
        lastname: lastname,
        imageURL: imageurl,
      },
    });

    return NextResponse.json({ message: "User created successfully", user }, { status: 200 });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Error processing webhook" }, { status: 500 });
  }
}
