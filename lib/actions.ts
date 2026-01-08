/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import axios from "axios";
import { UseFormReturn } from "react-hook-form";

interface Login {
  username: string;
  password: string;
}

interface cloudinarySuccessResult {
  event: "success";
  info: {
    secure_url: string;
  };
}

export const handleUploadSuccess = (
  result: unknown,
  form: UseFormReturn<any>,
  setPreviewUrl: (url: string | null) => void,
  formField: string
) => {
  if (
    typeof result == "object" &&
    result !== null &&
    "event" in result &&
    result.event == "success" &&
    "info" in result &&
    typeof result.info == "object" &&
    result.info !== null &&
    "secure_url" in result.info
  ) {
    const typedResult = result as cloudinarySuccessResult;
    const secured_url = typedResult.info.secure_url;

    form.setValue(formField, secured_url, { shouldValidate: true });
    setPreviewUrl(secured_url);
  } else {
    console.error(
      "Cloudinary Upload Failed or returned an unexpected structure."
    );

    form.setValue(formField, "");
    setPreviewUrl(null);
  }
};

export async function LoggingIn(values: Login, router: AppRouterInstance) {
  try {
    const response = await axios.post("/api/admin/login", values);
    const data = response.data;
    console.log(data);
    router.push(`/Dashboard?password=${values.password}`);
  } catch (error: unknown) {
    let errorMessage = "Unknown Error Occured";
    if (axios.isAxiosError(error)) {
      errorMessage = error?.response?.data.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
}

export async function ChangeAdminPassword(values: any) {
  try {
    const response = await axios.patch("/api/admin/password", values);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error: unknown) {
    let errorMessage = "Unknown Error Occured";
    if (axios.isAxiosError(error)) {
      errorMessage = error?.response?.data.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
}

export async function AddService(values: any) {
  try {
    const response = await axios.post("/api/services", values);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error: unknown) {
    let errorMessage = "Unknown Error Occured";
    if (axios.isAxiosError(error)) {
      errorMessage = error?.response?.data.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
}

export async function EditService(values: any, id: string) {
  try {
    const response = await axios.patch(`/api/services/${id}`, values);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error: unknown) {
    let errorMessage = "Unknown Error Occured";
    if (axios.isAxiosError(error)) {
      errorMessage = error?.response?.data.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
}

export async function DeleteService(id: string) {
  try {
    const response = await axios.delete(`/api/services/${id}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error: unknown) {
    let errorMessage = "Unknown Error Occured";
    if (axios.isAxiosError(error)) {
      errorMessage = error?.response?.data.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
}

export async function GetServices() {
  try {
    const response = await axios.get("/api/services");
    const data = response.data;
    console.log(data);
    return data;
  } catch (error: unknown) {
    let errorMessage = "Unknown Error Occured";
    if (axios.isAxiosError(error)) {
      errorMessage = error?.response?.data.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
}
