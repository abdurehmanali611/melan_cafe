import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Service } from "@/app/models/Service";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } | Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { id } = await params;
    const updatedService = await Service.findByIdAndUpdate(id, body, {
      new: true,
    });
    return NextResponse.json(updatedService);
  } catch (error) {
    return NextResponse.json({ message: "Update failed" }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } | Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    await Service.findByIdAndDelete(id);
    return NextResponse.json({ message: "Service deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Deletion failed" }, { status: 400 });
  }
}
