import AboutContent from "@/Components/AboutContent";
import TestimonialsCarousel from "@/Components/TestimonialCarousel";
import { Testimonials } from "@/Constants";

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
