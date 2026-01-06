import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const AboutContent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold font-serif">About Us</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Image
            src="/assets/owner.jpg"
            alt="Owner"
            width={400}
            height={400}
            loading="eager"
            className="rounded-full"
          />
          <div className="w-1/2 flex flex-col gap-5">
            <p className="text-lg font-serif">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              dolor iusto ad molestias sapiente aperiam dicta eveniet a? Nisi
              est pariatur adipisci tenetur quo, cupiditate doloremque hic
              tempora distinctio consequuntur?
            </p>
            <p className="text-lg font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit saepe officia sunt inventore eius non adipisci
              repellendus ipsum velit laboriosam, harum tempore temporibus autem
              id voluptate assumenda reiciendis, natus provident.
            </p>
            <p className="text-lg font-serif">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              veniam, autem in voluptates et eligendi culpa corrupti repudiandae
              animi quidem accusamus odio itaque praesentium molestias facilis
              perferendis, laborum provident natus.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutContent;
