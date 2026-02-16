"use client";
import AboutContent from "@/components/AboutContent";
import GalleryGrid from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { Galleries, Service, Testimonials } from "@/siteConstants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [testimonials, setTestimonials] = useState(Testimonials);
  const [services, setServices] = useState(Service);
  const [gallery, setGallery] = useState(Galleries);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      await setTestimonials(Testimonials);
      await setServices(Service);
      await setGallery(Galleries);
    })();
  }, []);
  const sampleServices = services.slice(0, 3);
  const sampleTestimonials = testimonials.slice(0, 3);
  const sampleGallery = gallery.slice(0, 3);
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <AboutContent />
      </section>
      <section>
        <GalleryGrid gallery={sampleGallery} />
        {gallery.length > 3 && (
          <Button onClick={() => router.push("/Gallery")}>View More</Button>
        )}
      </section>
      <section>
        <h2 className="text-xl uppercase text-green-500 font-semibold text-center">
          Services
        </h2>
        <h3 className="text-lg font-bold font-sans my-5 text-center">
          Our Food and Drink Deliverables
        </h3>
        <ServiceGrid services={sampleServices} />
        {services.length > 3 && (
          <Button onClick={() => router.push("/Services")}>View More</Button>
        )}
      </section>
      <section>
        <TestimonialCarousel testimonials={sampleTestimonials} />
        {testimonials.length > 3 && (
          <Button onClick={() => router.push("/About")}>View More</Button>
        )}
      </section>
    </div>
  );
}
