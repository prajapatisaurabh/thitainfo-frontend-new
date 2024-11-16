import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);

    return NextResponse.json(
      { message: "Form, siubmitted sucessfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to submit form",
      },
      { status: 500 }
    );
  }
}
