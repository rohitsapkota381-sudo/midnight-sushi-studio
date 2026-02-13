import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 font-body">Location</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Find Us
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded overflow-hidden aspect-video md:aspect-auto md:min-h-[350px] border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant location"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground font-body text-sm">
                  123 Sushi Street, Downtown<br />New York, NY 10001
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=40.7484,-73.9857"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:opacity-90 transition-opacity w-fit"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
