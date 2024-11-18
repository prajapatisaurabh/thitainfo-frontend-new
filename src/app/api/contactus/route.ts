import Contact from "@/models/contactModel";
import { connect } from "@/utils/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    await contactForm.save();

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_MY,
      subject: "Thank you for contacting us",
      text: `Hi ${name},\n\nThank you for reaching out! We have received your message:\n\n"${description}"\n\nWe will get back to you shortly.\n\nBest regards,\nYour Team`,
      html: `
        <p>Hi <b>${name}</b>,</p>
        <p>Thank you for reaching out! Here are the details you provided:</p>
        <ul>
          <li><b>Name:</b> ${name}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Description:</b> ${description}</li>
        </ul>
        <p>We will get back to you shortly.</p>
        <p>Best regards,<br>Your Team @ThitaInfo</p>
      `,
    };
    console.log("MAIL OPTIONS");
    console.log(mailOptions);
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Form submitted successfully and email sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to submit form or send email",
      },
      { status: 500 }
    );
  }
}
