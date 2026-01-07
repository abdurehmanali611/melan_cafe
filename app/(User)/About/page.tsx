import AboutContent from "@/components/AboutContent";
import TestimonialsCarousel from "@/components/TestimonialCarousel";
import { Testimonials } from "@/siteConstants";

export default function About() {
  return (
    <div className="flex flex-col gap-10 p-10">
      <section>
        <AboutContent />
      </section>
      <section>
        <TestimonialsCarousel testimonials={Testimonials} />
      </section>
    </div>
  );
}
