import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "James M.",
    text: "The best sushi I've ever had outside of Japan. The omakase experience is absolutely worth it.",
    stars: 5,
  },
  {
    name: "Sofia L.",
    text: "Incredible atmosphere and the freshest fish. Sakura has become our go-to for special occasions.",
    stars: 5,
  },
  {
    name: "David K.",
    text: "Every piece is a work of art. The attention to detail and quality of ingredients is unmatched.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-card" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 font-body">Reviews</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What Our Guests Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-8 bg-background border border-border rounded transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-primary font-display font-semibold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
