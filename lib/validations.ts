import { z } from "zod";

export const Login = z.object({
 username: z.string().min(2, "Please Enter Your UserName"),
 password: z.string().min(2, "Please Enter Your Password")
})

export const service = z.object({
    title: z.string().min(2, "Please select Item Title"),
    type: z.string().min(2, "Please select Item Type"),
    name: z.string().min(2, "Please Enter Item Name"),
    price: z.coerce.number().min(2, "Please Enter Item Price"),
    image: z.string().min(2, "Please Enter Item Image"),
    description: z.string().min(2, "Please Enter Item Description"),
    popular: z.boolean(),
    New: z.boolean(),
    nutrient: z.array(z.string().min(2, "Please Enter Item Nutrient")).optional().or(z.literal(""))
})

export const changePassword = z.object({
    oldPassword: z.string().min(2, "Please Enter Your Old Password"),
    newPassword: z.string().min(2, "Please Enter Your New Password"),
    confirmPassword: z.string().min(2, "Please Confirm Your New Password")
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})