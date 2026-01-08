import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Service } from "@/app/models/Service";

export async function GET() {
  try {
    await connectToDatabase();
    const services = await Service.find({}).sort({ createdAt: -1 });
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch services" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const newService = await Service.create(body);
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating service" }, { status: 400 });
  }
}