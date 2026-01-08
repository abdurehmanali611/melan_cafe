import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Service } from "@/app/models/Service";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const updatedService = await Service.findByIdAndUpdate(params.id, body, { new: true });
    return NextResponse.json(updatedService);
  } catch (error) {
    return NextResponse.json({ message: "Update failed" }, { status: 400 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    await Service.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Service deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Deletion failed" }, { status: 400 });
  }
}