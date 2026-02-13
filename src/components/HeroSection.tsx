import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sushi.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Premium sushi platter" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-primary tracking-[0.4em] uppercase text-sm mb-6 animate-fade-up font-body">
          Est. 2024
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up-delay-1 text-gold-gradient">
          SAKURA
        </h1>
        <p className="text-foreground/80 text-lg md:text-xl font-light tracking-wide mb-10 animate-fade-up-delay-2 font-body">
          Fresh Sushi. Authentic Flavor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <Link
            to="/menu"
            className="inline-block px-10 py-4 bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:opacity-90 transition-opacity"
          >
            View Menu
          </Link>
          <a
            href="#order"
            className="inline-block px-10 py-4 border border-primary text-primary font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary/10 transition-colors"
          >
            Order Online
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-primary/0 to-primary/60" />
      </div>
    </section>
  );
};

export default HeroSection;
