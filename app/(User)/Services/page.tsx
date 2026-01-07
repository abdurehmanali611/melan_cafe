"use client";
import ServiceGrid from "@/components/ServiceGrid";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectionServices, Service } from "@/Constants";
import { useState, useEffect } from "react";

export default function Services() {
  const [services, setServices] = useState(Service);
  const [serviceSelected, setServiceSelected] = useState<string>("Default");
  useEffect(() => {
    (async () => {
      await setServices(Service);
    })();
  }, []);
  const popularServices = services.filter((service) => service.popular == true);
  const newServices = services.filter((service) => service.New == true);
  const filteredServices = services.filter(
    (service) =>
      service.title === serviceSelected || service.type === serviceSelected
  );
  return (
    <div className="flex flex-col gap-5 py-10">
      <div className="flex justify-end items-center gap-5">
        <h5 className="text-lg font-serif font-semibold text-green-500">
          Select a service:
        </h5>
        <Select
          value={serviceSelected || "Default"}
          onValueChange={(value) => setServiceSelected(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Service you want to see" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Services:</SelectLabel>
              {selectionServices.map((item) => (
                <SelectItem key={item.id} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-5">
        {serviceSelected === "Default" ? (
          <div>
            <section>
              <h2 className="text-xl text-green-500 font-semibold font-serif">
                Popular Services
              </h2>
              <ServiceGrid services={popularServices} />
            </section>
            <section>
              <h2 className="text-xl text-green-500 font-semibold font-serif">
                Latest Services
              </h2>
              <ServiceGrid services={newServices} />
            </section>
          </div>
        ) : (
          <div>
            <section>
              <h2 className="text-xl text-green-500 font-semibold font-serif">
                Filtered Services: {serviceSelected}
              </h2>
              {filteredServices.length > 0 ? (
                <ServiceGrid services={filteredServices} />
              ) : (
                <p className="text-gray-500 py-4">
                  No services found matching &rdquo;{serviceSelected}&rdquo;
                </p>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
