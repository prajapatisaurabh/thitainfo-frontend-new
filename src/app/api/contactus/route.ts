import Contact from "@/models/contactModel";
import { connect } from "@/utils/dbconfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, description } = reqBody;

    const contact = await Contact.findOne({ email });

    if (contact) {
      return NextResponse.json(
        { message: "Email already exits" },
        { status: 400 }
      );
    }

    const contactForm = new Contact({
      name,
      email,
      description,
    });
    const savedForm = await contactForm.save();

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Failed to submit form",
      },
      { status: 500 }
    );
  }
}
