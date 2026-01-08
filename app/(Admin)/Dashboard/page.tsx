"use client";
import ChangePassword from "@/components/ChangePassword";
import CreateService from "@/components/CreateService";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [password, setPassword] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPassword(localStorage.getItem("password"));
    }
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center h-screen justify-center">
      <Tabs defaultValue="service">
        <TabsList>
          <TabsTrigger value="service">Service</TabsTrigger>
          <TabsTrigger value="change">Change Password</TabsTrigger>
        </TabsList>
        <TabsContent value="service">
          <CreateService />
        </TabsContent>
        <TabsContent value="change">
          <ChangePassword password={password} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
