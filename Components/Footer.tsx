"use client";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { NavbarContents } from "@/siteConstants";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-75 h-75 bg-gray-200 rounded-lg animate-pulse" />
  ),
});

const Footer = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-serif font-semibold">HeadQuarter</h2>
              <Map />
              <p className="text-lg font-serif font-semibold">
                Bole, Wollo Sefer
              </p>
            </div>
            <div className="lg:flex flex-col gap-5 w-1/3 text-center hidden">
              <h2 className="text-lg font-serif font-semibold text-green-500">
                About Us
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, maiores incidunt. Nesciunt nostrum dolorum ipsam dolore
                incidunt nihil cupiditate ipsum tempore iste, earum quos soluta
                minus, omnis blanditiis inventore amet?
              </p>
            </div>
            <div className="md:flex flex-col gap-5 hidden">
              <h2 className="text-lg font-serif font-semibold text-green-500">
                Quick Links
              </h2>
              <ul className="flex flex-col gap-2 list-disc text-lg font-semibold font-serif text-muted-foreground">
                {NavbarContents.map((item) => (
                  <li key={item.id} className="w-full lg:w-auto">
                    <Link
                      href={item.link}
                      className="block w-full p-3 lg:p-2 text-lg font-semibold font-serif transition-all duration-200
                                       text-muted-foreground hover:text-primary hover:bg-accent lg:hover:bg-transparent
                                       rounded-lg lg:text-foreground/80 hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="self-end">&copy; 2026 All Rights Reserved</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;
