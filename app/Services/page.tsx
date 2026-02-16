"use client";
import ServiceGrid from "@/components/ServiceGrid";
import { Service } from "@/siteConstants";
import { useState, useEffect } from "react";

export default function Services() {
  const [services, setServices] = useState(Service);
  useEffect(() => {
    (() => {
      setServices(Service);
    })();
  });
  return (
    <div className="p-5">
      <ServiceGrid services={services} />
    </div>
  );
}
