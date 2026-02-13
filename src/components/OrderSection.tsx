import { ExternalLink } from "lucide-react";

const OrderSection = () => {
  return (
    <section id="order" className="py-20 px-4">
      <div className="container mx-auto text-center max-w-2xl">
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 font-body">Delivery</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Order Online
        </h2>
        <p className="text-muted-foreground mb-10 font-body">
          Enjoy our premium sushi delivered straight to your door.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-10 py-5 bg-card border border-border rounded hover:border-primary transition-colors"
          >
            <span className="font-body font-semibold text-foreground tracking-wide text-lg">Uber Eats</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-10 py-5 bg-card border border-border rounded hover:border-primary transition-colors"
          >
            <span className="font-body font-semibold text-foreground tracking-wide text-lg">Bolt Food</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
