import { Clock, Phone, Mail } from "lucide-react";

const hours = [
  { day: "Monday – Thursday", time: "11:30 AM – 10:00 PM" },
  { day: "Friday – Saturday", time: "11:30 AM – 11:00 PM" },
  { day: "Sunday", time: "12:00 PM – 9:00 PM" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 font-body">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Get in Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Hours */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-display font-semibold text-foreground text-lg">Opening Hours</h3>
            </div>
            <div className="space-y-3">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground/80 font-body text-sm">{h.day}</span>
                  <span className="text-primary font-body text-sm font-medium">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:hello@sakurasushi.com" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                  hello@sakurasushi.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
