"use client"
import AboutContent from "@/components/AboutContent";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Testimonials } from "@/siteConstants";

export default function About() {
  return (
    <div className="flex flex-col gap-10 lg:p-10">
      <section>
        <AboutContent />
      </section>
      <section>
        <TestimonialCarousel testimonials={Testimonials} />
      </section>
    </div>
  );
}
