import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const AboutContent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold font-serif text-green-400">
          About Us
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-10 md:items-center md:justify-between">
          <Image
            src="/assets/owner.jpg"
            alt="Owner"
            width={350}
            height={350}
            loading="eager"
            className="rounded-full"
          />
          <div className="lg:w-1/2 w-full flex flex-col gap-5">
            <p className="text-lg font-serif">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              dolor iusto ad molestias sapiente aperiam dicta eveniet a? Nisi
              est pariatur adipisci tenetur quo, cupiditate doloremque hic
              tempora distinctio consequuntur?
            </p>
            <p className="text-lg font-serif hidden lg:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit saepe officia sunt inventore eius non adipisci
              repellendus ipsum velit laboriosam, harum tempore temporibus autem
              id voluptate assumenda reiciendis, natus provident.
            </p>
            <p className="text-lg font-serif hidden lg:block">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              veniam, autem in voluptates et eligendi culpa corrupti repudiandae
              animi quidem accusamus odio itaque praesentium molestias facilis
              perferendis, laborum provident natus.
            </p>
            <Button className="cursor-pointer bg-green-500">Learn More</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutContent;
