"use client";
import { Login } from "@/lib/validations";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import CustomFormField, { formFieldTypes } from "@/components/customFormField";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LoggingIn } from "@/lib/actions";

export default function Admin() {
  const form = useForm<z.infer<typeof Login>>({
    resolver: zodResolver(Login),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter()
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Login</CardTitle>
          <CardDescription>Authenticate YourSelf</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form 
            onSubmit={form.handleSubmit((values) => LoggingIn(values, router))}
            className="flex flex-col gap-3">
                <CustomFormField 
                name="username"
                control={form.control}
                fieldType={formFieldTypes.INPUT}
                label="Username:"
                placeholder="Enter your Username"
                inputClassName="h-fit p-2 w-56"
                />
                <CustomFormField 
                name="password"
                control={form.control}
                fieldType={formFieldTypes.INPUT}
                label="Password:"
                placeholder="Enter your password"
                type="password"
                inputClassName="h-fit p-2 w-56"
                />
                <Button type="submit">Login</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
