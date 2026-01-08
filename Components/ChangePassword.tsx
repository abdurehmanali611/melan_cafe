/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import z from "zod";
import { changePassword } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import CustomFormField, { formFieldTypes } from "./customFormField";
import { Button } from "./ui/button";
import { ChangeAdminPassword } from "@/lib/actions";
import { toast } from "sonner";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const ChangePassword = ({ password }: any) => {
  const form = useForm<z.infer<typeof changePassword>>({
    resolver: zodResolver(changePassword),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const [pass, setPass] = useState(password);
  const [error, setError] = useState<string | null>(null);
  if (error) {
    return (
      <Alert>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription>Change your password</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-5"
            onSubmit={form.handleSubmit((values) => {
              if (values.oldPassword != pass) {
                setError("Old Password don't match the exact password");
                setTimeout(() => {
                  setError(null);
                }, 4000);
                return;
              } else {
                ChangeAdminPassword(values);
                form.reset();
                setPass("");
                toast.success("Password changed successfully");
              }
            })}
          >
            <CustomFormField
              name="oldPassword"
              control={form.control}
              fieldType={formFieldTypes.INPUT}
              label="Old Password"
              placeholder="Enter your Old Password"
              type="password"
              inputClassName="h-fit p-2 w-56"
            />
            <CustomFormField
              name="newPassword"
              control={form.control}
              fieldType={formFieldTypes.INPUT}
              label="New Password"
              placeholder="Enter your new Password"
              type="password"
              inputClassName="h-fit p-2 w-56"
            />
            <CustomFormField
              name="confirmPassword"
              control={form.control}
              fieldType={formFieldTypes.INPUT}
              label="Confirm Password"
              placeholder="confirm Password"
              type="password"
              inputClassName="h-fit p-2 w-56"
            />
            <Button type="submit" className="cursor-pointer w-fit self-center px-12">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ChangePassword;
