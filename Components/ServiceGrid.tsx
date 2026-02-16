import ServiceItem from "./ServiceItem";

interface Service {
  name: string;
  title: string;
  description: string;
  image: string;
  nutrient: Array<string>
  price: number;
  popular: boolean
  New: boolean
}

interface ServiceProps {
  services: Service[];
}

export default function ServiceGrid({ services }: ServiceProps) {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-5 flex flex-col gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 items-center">
          {services &&
            services.length > 0 &&
            services.map((service: Service, idx: number) => (
              <ServiceItem
                key={idx}
                name={service.name}
                image={service.image}
                nutrient={service.nutrient}
                price={service.price}
                title={service.title}
                description={service.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
