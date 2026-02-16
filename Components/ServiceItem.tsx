import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Service {
  name: string;
  title: string;
  description: string;
  image: string;
  nutrient: Array<string>;
  price: number;
}

export default function ServiceItem({
  name,
  image,
  nutrient,
  price,
  title,
  description
}: Service) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-serif font-semibold">{name}</h2>
            <h2 className="text-lg font-serif font-semibold">{title}</h2>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-5">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            loading="eager"
            className="rounded-xl"
          />
          <div className="flex gap-8 items-start w-fit">
            <p className="text-lg font-serif">{description}</p>
            <div className="flex flex-col gap-2 p-3">
              <h3 className="text-lg font-serif font-semibold text-green-500">
                Nutrients:
              </h3>
              <ul className="flex flex-col gap-2 list-disc">
                {nutrient.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <span className="font-semibold font-serif text-lg text-green-500 px-2">
          Price:
        </span>{" "}
        {price}
      </CardFooter>
    </Card>
  );
}
