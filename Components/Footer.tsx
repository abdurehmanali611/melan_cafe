"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { NavbarContents, SocialMedia } from "@/Constants";
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-serif font-semibold">HeadQuarter</h2>
              <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "10px",
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
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
          <div className="flex flex-row-reverse justify-between items-center">
            <ul className="flex items-center gap-8 sm:gap-16">
              {SocialMedia.map((item) => (
                  <Link key={item.id} href={item.link}>
                    <Icon icon={item.icon} className="w-7 h-7"/>
                  </Link>
                ))}
            </ul>
            <p className="self-end">&copy; 2026 All Rights Reserved</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;
