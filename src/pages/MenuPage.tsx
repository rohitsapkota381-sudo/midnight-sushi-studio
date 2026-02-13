import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import sushiNigiri from "@/assets/sushi-nigiri.jpg";
import sushiSashimi from "@/assets/sushi-sashimi.jpg";
import sushiRolls from "@/assets/sushi-rolls.jpg";
import sushiDrinks from "@/assets/sushi-drinks.jpg";
import sushiSpecials from "@/assets/sushi-specials.jpg";

type Category = "Sushi" | "Sashimi" | "Rolls" | "Drinks" | "Specials";

const categories: { name: Category; image: string }[] = [
  { name: "Sushi", image: sushiNigiri },
  { name: "Sashimi", image: sushiSashimi },
  { name: "Rolls", image: sushiRolls },
  { name: "Drinks", image: sushiDrinks },
  { name: "Specials", image: sushiSpecials },
];

const menuItems: Record<Category, { name: string; desc: string; price: string; image: string }[]> = {
  Sushi: [
    { name: "Salmon Nigiri", desc: "Fresh Atlantic salmon over seasoned rice", price: "$6", image: sushiNigiri },
    { name: "Tuna Nigiri", desc: "Premium bluefin tuna, hand-pressed", price: "$8", image: sushiNigiri },
    { name: "Ebi Nigiri", desc: "Butterfly shrimp with citrus zest", price: "$5", image: sushiNigiri },
    { name: "Unagi Nigiri", desc: "Grilled freshwater eel with sweet glaze", price: "$7", image: sushiNigiri },
  ],
  Sashimi: [
    { name: "Salmon Sashimi", desc: "5 pieces of silky fresh salmon", price: "$14", image: sushiSashimi },
    { name: "Tuna Sashimi", desc: "5 pieces of premium tuna", price: "$16", image: sushiSashimi },
    { name: "Mixed Sashimi", desc: "Chef's selection of 12 pieces", price: "$28", image: sushiSashimi },
  ],
  Rolls: [
    { name: "Dragon Roll", desc: "Eel, avocado, cucumber, unagi sauce", price: "$16", image: sushiRolls },
    { name: "Rainbow Roll", desc: "California roll topped with assorted fish", price: "$18", image: sushiRolls },
    { name: "Spicy Tuna Roll", desc: "Spicy tuna, cucumber, sesame", price: "$14", image: sushiRolls },
    { name: "Sakura Special Roll", desc: "Chef's signature creation", price: "$22", image: sushiRolls },
  ],
  Drinks: [
    { name: "Junmai Daiginjo", desc: "Premium sake, floral and fruity", price: "$18", image: sushiDrinks },
    { name: "Yuzu Highball", desc: "Japanese whisky, yuzu, soda", price: "$14", image: sushiDrinks },
    { name: "Matcha Latte", desc: "Ceremonial grade matcha", price: "$6", image: sushiDrinks },
  ],
  Specials: [
    { name: "Omakase Experience", desc: "12-course chef's tasting menu", price: "$95", image: sushiSpecials },
    { name: "Chirashi Bowl", desc: "Assorted sashimi over sushi rice", price: "$32", image: sushiSpecials },
    { name: "Wagyu Tataki", desc: "Seared A5 wagyu with ponzu", price: "$38", image: sushiSpecials },
  ],
};

const MenuPage = () => {
  const [active, setActive] = useState<Category>("Sushi");

  return (
    <main className="min-h-screen bg-background pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 font-body">Our Menu</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gold-gradient mb-4">
            Crafted with Passion
          </h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Each dish is prepared with the finest ingredients, honoring centuries of Japanese culinary tradition.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`px-6 py-2.5 rounded text-sm font-body font-medium tracking-wide transition-all ${
                active === cat.name
                  ? "bg-gold-gradient text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid sm:grid-cols-2 gap-4">
          {menuItems[active].map((item, i) => (
            <div
              key={item.name}
              className="flex gap-4 p-4 bg-card border border-border rounded hover:border-primary/30 transition-colors"
              style={{ animation: `fadeIn 0.4s ease-out ${i * 0.1}s both` }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-display font-semibold text-foreground">{item.name}</h3>
                  <span className="text-primary font-display font-bold text-lg flex-shrink-0">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm font-body mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MenuPage;
