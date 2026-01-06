import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { HeroFooter } from "../Constants";

const Hero = () => {
  return (
    <div className="flex flex-col gap-10 h-screen justify-center px-10">
      <div className="flex md:gap-12 md:flex-row md:items-start lg:justify-between">
        <div className="flex flex-col gap-5 lg:w-1/3 w-full md:w-3/4">
          <Card>
            <CardHeader>
              <CardTitle>Melan Cafe</CardTitle>
              <CardDescription>We fuel your health</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-5">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laboriosam dolor placeat, ipsum in hic illum minus nostrum
                  iusto sint et aut laudantium itaque error enim harum
                  perferendis necessitatibus suscipit beatae.
                </p>
                <Button className="cursor-pointer bg-green-500">Learn More</Button>
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center gap-2 py-3 w-fit shadow-md border-4 border-green-500/50 rounded-xl mx-3">
            {HeroFooter.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 border-r-2 not-last:border-r-green-500/50 py-2 px-3 rounded-xl"
              >
                <h3 className="text-[#FD6F00]">{item.amount}</h3>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/assets/cafe.jpg"
          alt="Cafe"
          width={550}
          height={550}
          loading="eager"
          className="rounded-xl hidden sm:block md:w-[50%] md:h-72"
        />
      </div>
    </div>
  );
};

export default Hero;
