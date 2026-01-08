import { Admin } from "@/app/models/Admin";
import { connectToDatabase } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  try {
    await connectToDatabase();
    const { newPassword, adminId } = await request.json();
    
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await Admin.findByIdAndUpdate(adminId, { password: hashedPassword });

    return NextResponse.json({ message: "Password updated successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to change password" }, { status: 400 });
  }
}