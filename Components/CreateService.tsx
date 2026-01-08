/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Form } from "./ui/form";
import { AddService, handleUploadSuccess } from "@/lib/actions";
import { service } from "@/lib/validations";
import { serviceTitles, workout } from "@/siteConstants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import CustomFormField, { formFieldTypes } from "@/components/customFormField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

const CreateService = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const form = useForm<z.infer<typeof service>>({
    resolver: zodResolver(service) as any,
    defaultValues: {
      title: "",
      type: "",
      name: "",
      price: 0,
      image: "",
      description: "",
      popular: false,
      New: false,
      nutrient: [],
    },
  });
  return (
    <Card className="w-fit p-5">
      <CardHeader className="text-center">
        <CardTitle>Create a Service</CardTitle>
        <CardDescription>Create a new Service to Offer</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-5"
            onSubmit={form.handleSubmit((values) => {
              AddService(values);
              form.reset();
              setPreviewUrl(null);
              toast.success("Service added successfully");
            })}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
              <CustomFormField
                name="name"
                control={form.control}
                fieldType={formFieldTypes.INPUT}
                label="Service name: "
                placeholder="Enter your service/meal name"
                inputClassName="h-fit p-2 w-64"
              />
              <CustomFormField
                name="title"
                control={form.control}
                fieldType={formFieldTypes.SELECT}
                listdisplay={serviceTitles}
                label="Service title: "
                placeholder="Enter your service/meal Title"
              />
              <CustomFormField
                name="type"
                control={form.control}
                fieldType={formFieldTypes.SELECT}
                listdisplay={workout}
                label="Workout Fuel:"
                placeholder="service type"
              />
              <CustomFormField
                name="price"
                control={form.control}
                fieldType={formFieldTypes.INPUT}
                label="Service Price: "
                placeholder="Enter your service/meal price"
                type="number"
                inputClassName="h-fit p-2 w-56"
              />
              <CustomFormField
                name="popular"
                control={form.control}
                fieldType={formFieldTypes.SWITCH}
                label="popular: "
                placeholder="service/meal popular"
              />
              <CustomFormField
                name="New"
                control={form.control}
                fieldType={formFieldTypes.SWITCH}
                label="New: "
                placeholder="service/meal latest"
              />
              <CustomFormField
                name="description"
                control={form.control}
                fieldType={formFieldTypes.TEXTAREA}
                label="Description: "
                placeholder="service/meal description"
              />
              <CustomFormField
                name="nutrient"
                control={form.control}
                fieldType={formFieldTypes.INPUT}
                label="Nutrients: "
                placeholder="service/meal nutrients"
                inputClassName="h-fit p-2 w-56"
                add="nutrient"
              />
              <CustomFormField
                name="image"
                control={form.control}
                fieldType={formFieldTypes.IMAGE_UPLOADER}
                label="Image Upload: "
                previewUrl={previewUrl}
                handleCloudinary={(result) =>
                  handleUploadSuccess(result, form, setPreviewUrl, "image")
                }
              />
            </div>
            <Button
              type="submit"
              className="cursor-pointer w-fit self-center px-12"
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CreateService;
