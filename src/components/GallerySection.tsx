import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryChef from "@/assets/gallery-chef.jpg";
import sushiRolls from "@/assets/sushi-rolls.jpg";
import sushiNigiri from "@/assets/sushi-nigiri.jpg";
import { useEffect, useRef, useState } from "react";

const images = [
  { src: sushiNigiri, alt: "Fresh salmon nigiri" },
  { src: galleryInterior, alt: "Restaurant interior" },
  { src: sushiRolls, alt: "Signature rolls" },
  { src: galleryChef, alt: "Chef at work" },
];

const GallerySection = () => {
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
    <section className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 font-body">Gallery</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            A Glimpse Inside
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded aspect-square transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
