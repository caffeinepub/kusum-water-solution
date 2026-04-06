import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Facebook,
  Headphones,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Tag,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Solar Heater", href: "#solar-heater" },
  { label: "Water Purifier", href: "#water-purifier" },
  { label: "Kitchen Chimney", href: "#kitchen-chimney" },
  { label: "Vessel Purifier", href: "#vessel-purifier" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const CATEGORIES = [
  {
    title: "Solar Water Heater",
    description:
      "Energy-saving solar heating solutions for every household and commercial need.",
    image: "/assets/cg_30_tube-019d3e1c-c09a-767a-9460-cff46ef3f94f.jpg",
    href: "#solar-heater",
  },
  {
    title: "Water Purifier",
    description:
      "Pure, safe drinking water for your family with advanced RO+UV+UF technology.",
    image:
      "/assets/livpure-removebg-preview-019d42dc-6b9b-7067-a687-6fcdea85dd8e.png",
    href: "#water-purifier",
  },
  {
    title: "Kitchen Chimney",
    description:
      "Keep your kitchen fresh and smoke-free with our high-performance chimneys.",
    image:
      "/assets/livpurechimney-removebg-preview-019d42ee-f48f-75b8-bc2d-58b7732c8984.png",
    href: "#kitchen-chimney",
  },
  {
    title: "Vessel Water Purifier",
    description:
      "Industrial-grade FRP pressure vessel purifiers for commercial and large-scale water treatment.",
    image:
      "/assets/vessels-removebg-preview-019d430f-fcd5-7340-a51d-2dc78fddc544.png",
    href: "#vessel-purifier",
  },
];

type Product = {
  name: string;
  price: string;
  mrp: string;
  image: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
};

const SOLAR_HEATERS: Product[] = [
  {
    name: "Osmo Solar 20T Water Heater",
    price: "₹18,500",
    mrp: "₹22,000",
    image:
      "/assets/osmo-removebg-preview-019d3e1c-bce0-75cc-9056-ebeaa947ed39.png",
    description:
      "Osmo Solar 20T is a compact and efficient evacuated tube solar water heater suitable for families of 3–4 members. It delivers hot water reliably even on cloudy days, cutting electricity bills by up to 80%.",
    features: [
      "20 high-efficiency evacuated glass tubes",
      "Stainless steel SS 304 inner tank",
      "Suitable for 3–4 member families",
      "Works efficiently in low sunlight conditions",
      "5-year manufacturer warranty included",
    ],
    specs: {
      Capacity: "200L",
      Tubes: "20 ETC",
      "Tank Material": "SS 304",
      Warranty: "5 Years",
      "Suitable For": "3–4 Members",
      Type: "Non-Pressurized",
    },
  },
  {
    name: "Royal Sun 24T Solar Water Heater",
    price: "₹22,500",
    mrp: "₹27,000",
    image:
      "/assets/royal_sun_24_t-removebg-preview-019d3e1c-bd77-7768-8da5-cadf2b02f214.png",
    description:
      "Royal Sun 24T is a premium solar water heater with 24 evacuated tubes, ideal for medium-to-large families of 4–6 members. Its advanced insulation ensures hot water availability for up to 72 hours.",
    features: [
      "24 high-performance evacuated glass tubes",
      "Superior 72-hour heat retention technology",
      "Powder-coated galvanized steel frame",
      "Anti-freeze protection for cold climates",
      "BEE 5-star energy efficiency rated",
    ],
    specs: {
      Capacity: "250L",
      Tubes: "24 ETC",
      "Tank Material": "SS 316L",
      Warranty: "7 Years",
      "Suitable For": "4–6 Members",
      Type: "Non-Pressurized",
    },
  },
  {
    name: "Blaze Sun 24T Solar Water Heater",
    price: "₹24,000",
    mrp: "₹29,500",
    image:
      "/assets/blaze_sun_24_t-removebg-preview-019d3e1c-bdd9-70c9-a2ac-4ca7efc40c0d.png",
    description:
      "Blaze Sun 24T combines cutting-edge selective coating technology with a robust double-tank design. Perfect for households needing consistent hot water supply throughout the day and night.",
    features: [
      "24 selective-coated evacuated tubes",
      "Double walled polyurethane foam insulation",
      "Smart thermosiphon circulation system",
      "High-pressure resistant tank design",
      "Compatible with electric backup booster",
    ],
    specs: {
      Capacity: "250L",
      Tubes: "24 ETC",
      "Tank Material": "SS 304",
      Warranty: "6 Years",
      "Suitable For": "4–6 Members",
      Type: "Pressurized",
    },
  },
  {
    name: "CG Solar 30T Water Heater",
    price: "₹32,000",
    mrp: "₹39,000",
    image: "/assets/cg_30_tube-019d3e1c-c09a-767a-9460-cff46ef3f94f.jpg",
    description:
      "CG Solar 30T is a heavy-duty solar water heating system designed for large families and commercial use. With 30 tubes and a 300L capacity, it handles high hot-water demands with exceptional efficiency.",
    features: [
      "30 industrial-grade evacuated glass tubes",
      "300L large-capacity stainless steel tank",
      "Ideal for hotels, hostels and large homes",
      "Hard water resistant titanium coating",
      "10-year structural warranty on tank",
    ],
    specs: {
      Capacity: "300L",
      Tubes: "30 ETC",
      "Tank Material": "SS 316L Titanium",
      Warranty: "10 Years",
      "Suitable For": "6–8+ Members",
      Type: "Non-Pressurized",
    },
  },
];

const WATER_PURIFIERS: Product[] = [
  {
    name: "Livpure Allura Premia RO+UV+UF+Copper",
    price: "₹8,500",
    mrp: "₹12,000",
    image:
      "/assets/livpure-removebg-preview-019d42dc-6b9b-7067-a687-6fcdea85dd8e.png",
    description:
      "Livpure Allura Premia features advanced RO+UV+UF+Copper purification technology. The copper cartridge adds natural antimicrobial properties to your drinking water. Compact design with 8L storage, ideal for a family of 4.",
    features: [
      "7-stage purification with RO+UV+UF",
      "8L food-grade storage tank",
      "Removes TDS up to 2000 ppm",
      "Auto shut-off when tank is full",
      "1-year comprehensive warranty",
    ],
    specs: {
      Capacity: "8L",
      Stages: "7",
      Technology: "RO + UV + UF",
      "TDS Reduction": "Up to 2000 ppm",
      Warranty: "1 Year",
      Power: "60W",
    },
  },
  {
    name: "Aqua Grand Natural RO+UV+UF 12L",
    price: "₹11,500",
    mrp: "₹16,000",
    image:
      "/assets/aquaro-removebg-preview-019d42dc-6ca0-7648-8b57-018060dee4a7.png",
    description:
      "Aqua Grand Natural RO uses advanced Reverse Osmosis technology with UV and UF stages to deliver pure, safe drinking water. Features a transparent body to view filter stages clearly with a 12L storage tank.",
    features: [
      "9-stage purification including alkaline filter",
      "12L large-capacity storage tank",
      "pH balancing mineral cartridge",
      "Digital display with filter life indicator",
      "2-year comprehensive warranty",
    ],
    specs: {
      Capacity: "12L",
      Stages: "9",
      Technology: "RO + UV + Alkaline",
      "TDS Reduction": "Up to 2500 ppm",
      Warranty: "2 Years",
      Power: "75W",
    },
  },
  {
    name: "Kent Grand Plus Mineral RO+UV+UF",
    price: "₹18,500",
    mrp: "₹24,000",
    image:
      "/assets/kentgrand_-removebg-preview-019d42dc-6ccf-7306-a73f-18ecf9de7a46.png",
    description:
      "Kent Grand Plus uses patented Mineral RO Technology that retains essential natural minerals in purified water. Features a 5-stage RO+UV+UF+TDS controller with a see-through body and 8L storage tank.",
    features: [
      "Patented Mineral RO Technology",
      "5-stage RO+UV+UF purification",
      "TDS controller retains essential minerals",
      "8L storage with see-through body",
      "5-year warranty with free installation",
    ],
    specs: {
      Capacity: "8L",
      Stages: "5",
      Technology: "RO + UV + UF + TDS",
      "TDS Reduction": "Up to 3000 ppm",
      Warranty: "5 Years",
      Power: "60W",
    },
  },
  {
    name: "Commercial RO Plant 500 LPH",
    price: "₹1,75,000",
    mrp: "₹2,10,000",
    image:
      "/assets/aquaro-removebg-preview-019d42dc-6ca0-7648-8b57-018060dee4a7.png",
    description:
      "The 500 LPH commercial RO plant is ideal for large hotels, hospitals and manufacturing units. Features a multi-membrane configuration with automated backwash and SCADA-ready controls.",
    features: [
      "500 liters per hour continuous output",
      "Multi-membrane parallel configuration",
      "Automated backwash and cleaning cycle",
      "SCADA-compatible control panel option",
      "2-year AMC and priority service support",
    ],
    specs: {
      Output: "500 LPH",
      Stages: "6",
      Technology: "Commercial RO",
      Frame: "MS Powder Coated",
      Warranty: "2 Year + AMC",
      Power: "950W",
    },
  },
];

const VESSEL_PURIFIERS: Product[] = [
  {
    name: "Neo Vessel Water Purifier",
    price: "",
    mrp: "",
    image:
      "/assets/screenshot_2026-03-31_152801-removebg-preview-019d4349-0a43-7107-af07-a68acc0c4d16.png",
    description:
      "Neo Vessel Water Purifier is a reliable FRP pressure vessel system designed for efficient water filtration. Compact yet powerful, it is ideal for homes and small commercial setups requiring clean, safe water.",
    features: [
      "High-quality FRP pressure vessel",
      "Compact and space-saving design",
      "Suitable for home and small commercial use",
      "Easy to install and maintain",
      "Long-lasting and corrosion-resistant",
    ],
    specs: {
      Material: "FRP (Fiber Reinforced Plastic)",
      Application: "Home / Small Commercial",
      "Working Pressure": "150 PSI",
      Warranty: "2 Years",
    },
  },
  {
    name: "Osmo Vessel Water Purifier",
    price: "",
    mrp: "",
    image:
      "/assets/osmo_vessel-removebg-preview-019d4349-091c-713f-9a53-1ced27c393e5.png",
    description:
      "Osmo Vessel Water Purifier features a dual-tank FRP system built for heavy-duty industrial and commercial water treatment. Engineered for high-flow performance and long-term durability in demanding environments.",
    features: [
      "Dual-tank high-capacity FRP vessels",
      "Built for industrial and commercial use",
      "High-flow rate filtration system",
      "Corrosion-resistant and durable construction",
      "Reliable performance under high pressure",
    ],
    specs: {
      Material: "FRP (Fiber Reinforced Plastic)",
      Configuration: "Dual Tank",
      Application: "Industrial / Commercial",
      "Working Pressure": "150 PSI",
      Warranty: "3 Years",
    },
  },
];

const CHIMNEYS: Product[] = [
  {
    name: "Livpure Auto-Clean Chimney 60cm",
    price: "₹7,500",
    mrp: "₹10,500",
    image:
      "/assets/livpurechimney-removebg-preview-019d42ee-f48f-75b8-bc2d-58b7732c8984.png",
    description:
      "This 60cm slim auto-clean chimney features a powerful 1200 m³/hr suction motor and baffle filters that self-clean at the touch of a button, making kitchen maintenance effortless.",
    features: [
      "1200 m³/hr suction power",
      "Auto-clean with oil collector",
      "Touch and gesture control panel",
      "LED lights for bright illumination",
      "3-year motor warranty",
    ],
    specs: {
      Size: "60 cm",
      Suction: "1200 m³/hr",
      Filter: "Baffle Filter",
      Control: "Touch + Gesture",
      Warranty: "3 Years",
      Noise: "58 dB",
    },
  },
  {
    name: "CG Premium Chimney 90cm",
    price: "₹12,500",
    mrp: "₹16,000",
    image:
      "/assets/cg_chimney-removebg-preview-019d42ee-f4b5-768d-b1f4-128196518270.png",
    description:
      "Engineered for heavy Indian cooking, this 90cm premium chimney delivers 1500 m³/hr suction with 3-layer baffle filters that trap grease efficiently and are dishwasher safe.",
    features: [
      "1500 m³/hr high suction motor",
      "3-layer dishwasher-safe baffle filters",
      "Motion sensor activation",
      "Oil collection drawer with indicator",
      "5-year motor warranty",
    ],
    specs: {
      Size: "90 cm",
      Suction: "1500 m³/hr",
      Filter: "3-Layer Baffle",
      Control: "Touch + Motion",
      Warranty: "5 Years",
      Noise: "55 dB",
    },
  },
  {
    name: "Osmo Island Chimney 90cm",
    price: "₹24,000",
    mrp: "₹32,000",
    image:
      "/assets/osmochimney-removebg-preview-019d42ee-f6ec-775c-878b-dbc1099fa382.png",
    description:
      "This statement island chimney is designed for open and modular kitchens. Suspended from the ceiling above a kitchen island, it combines 360° suction with sleek stainless-steel aesthetics.",
    features: [
      "360° suction for island kitchens",
      "1800 m³/hr dual motor suction",
      "Remote + smartphone app control",
      "Filterless cyclone technology",
      "7-year comprehensive warranty",
    ],
    specs: {
      Size: "90 cm",
      Suction: "1800 m³/hr",
      Filter: "Filterless Cyclone",
      Control: "Remote + App",
      Warranty: "7 Years",
      Noise: "52 dB",
    },
  },
];

const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "Quality Products",
    desc: "We source and supply only the best, ISI-certified and BEE-rated products for lasting performance.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    desc: "Our trained technicians ensure safe, precise installation with zero hassle for you.",
  },
  {
    icon: Headphones,
    title: "After-Sales Service",
    desc: "Dedicated support team available for maintenance, repairs, and spare parts assistance.",
  },
  {
    icon: Tag,
    title: "Affordable Prices",
    desc: "Competitive pricing with regular offers, EMI options, and transparent no-hidden-cost quotes.",
  },
];

function calcDiscount(price: string, mrp: string): number {
  const p = Number(price.replace(/[^0-9]/g, ""));
  const m = Number(mrp.replace(/[^0-9]/g, ""));
  if (!m || !p) return 0;
  return Math.round(((m - p) / m) * 100);
}

function ProductCard({
  product,
  index,
  onClick,
}: {
  product: Product;
  index: number;
  onClick: () => void;
}) {
  const { name, price, mrp, image } = product;
  const discount = calcDiscount(price, mrp);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="bg-white rounded-[12px] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col cursor-pointer"
      onClick={onClick}
    >
      <div className="h-52 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        {discount > 0 && (
          <span
            className="inline-block self-start text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
            style={{ background: "oklch(0.55 0.18 145)" }}
          >
            {discount}% OFF
          </span>
        )}
        <h4 className="font-semibold text-[15px] text-gray-800 leading-snug">
          {name}
        </h4>
        <div className="mt-auto pt-2 flex items-center gap-2">
          {price && (
            <span
              className="font-bold text-base"
              style={{ color: "oklch(0.46 0.095 222)" }}
            >
              {price}
            </span>
          )}
          {mrp && (
            <span className="text-sm text-gray-400 line-through">{mrp}</span>
          )}
        </div>
        <Button
          size="sm"
          className="w-full mt-2 font-semibold"
          style={{ background: "oklch(0.46 0.095 222)", color: "white" }}
          data-ocid="product.view_button"
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
}

function ProductDetail({
  product,
  onBack,
}: {
  product: Product;
  onBack: () => void;
}) {
  const discount = calcDiscount(product.price, product.mrp);
  const specEntries = Object.entries(product.specs);

  const handleEnquire = () => {
    onBack();
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="max-w-5xl mx-auto px-4 py-10"
    >
      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-medium mb-8 hover:underline"
        style={{ color: "oklch(0.46 0.095 222)" }}
        data-ocid="product_detail.back.button"
      >
        <ArrowLeft size={18} />
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-8 min-h-[320px]">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-72 w-full object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          {discount > 0 && (
            <span
              className="self-start text-xs font-bold px-3 py-1 rounded-full text-white"
              style={{ background: "oklch(0.55 0.18 145)" }}
            >
              {discount}% OFF
            </span>
          )}
          <h1
            className="text-2xl sm:text-3xl font-bold leading-tight"
            style={{ color: "oklch(0.14 0.025 250)" }}
          >
            {product.name}
          </h1>
          {(product.price || product.mrp) && (
            <div className="flex items-center gap-3">
              {product.price && (
                <span
                  className="text-2xl font-bold"
                  style={{ color: "oklch(0.46 0.095 222)" }}
                >
                  {product.price}
                </span>
              )}
              {product.mrp && (
                <span className="text-lg text-gray-400 line-through">
                  {product.mrp}
                </span>
              )}
            </div>
          )}
          <p className="text-gray-600 leading-relaxed text-sm">
            {product.description}
          </p>

          {/* Key Features */}
          <div>
            <h3
              className="font-bold text-base mb-3"
              style={{ color: "oklch(0.22 0.065 230)" }}
            >
              Key Features
            </h3>
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "oklch(0.55 0.18 145)" }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <Button
            size="lg"
            className="mt-2 font-bold"
            style={{ background: "oklch(0.46 0.095 222)", color: "white" }}
            onClick={handleEnquire}
            data-ocid="product_detail.enquire.button"
          >
            Enquire Now
          </Button>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-12">
        <h2
          className="text-xl font-bold mb-5"
          style={{ color: "oklch(0.14 0.025 250)" }}
        >
          Specifications
        </h2>
        <div className="rounded-xl overflow-hidden border border-gray-200">
          <table className="w-full text-sm">
            <tbody>
              {specEntries.map(([key, val], i) => (
                <tr
                  key={key}
                  className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td
                    className="px-5 py-3 font-semibold w-1/2 border-b border-gray-100"
                    style={{ color: "oklch(0.22 0.065 230)" }}
                  >
                    {key}
                  </td>
                  <td className="px-5 py-3 text-gray-600 border-b border-gray-100">
                    {val}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setSelectedProduct(null);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", phone: "", email: "", message: "" });
    setSubmitting(false);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromProduct = () => {
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" />

      {/* Top Info Bar */}
      <div
        className="hidden md:flex items-center justify-between px-6 py-2 text-xs text-white"
        style={{ background: "oklch(0.17 0.058 232)" }}
      >
        <div className="flex items-center gap-5">
          <a
            href="tel:9843502183"
            className="flex items-center gap-1.5 hover:text-blue-200 transition-colors"
          >
            <Phone size={12} /> 9843502183/9851174115
          </a>
          <a
            href="mailto:kusumwatersolution77@gmail.com"
            className="flex items-center gap-1.5 hover:text-blue-200 transition-colors"
          >
            <Mail size={12} /> kusumwatersolution77@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=100067564736198"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-300 transition-colors"
            data-ocid="social.facebook.link"
          >
            <Facebook size={14} />
          </a>
          <a
            href="https://www.instagram.com/kusumwatersolution/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-300 transition-colors"
            data-ocid="social.instagram.link"
          >
            <Instagram size={14} />
          </a>
          <a
            href="https://www.tiktok.com/@kusumwatersolutionpvtltd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-red-300 transition-colors"
            data-ocid="social.youtube.link"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="img"
              aria-label="TikTok"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.99a8.17 8.17 0 0 0 4.78 1.52V7.07a4.85 4.85 0 0 1-1.01-.38z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-lg" : "border-b border-gray-100"}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.home.link"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "oklch(0.46 0.095 222)" }}
            >
              <Droplets size={20} className="text-white" />
            </div>
            <div className="leading-tight">
              <span
                className="font-bold text-sm block"
                style={{ color: "oklch(0.17 0.058 232)" }}
              >
                Kusum Water Solution
              </span>
              <span className="text-[10px] text-gray-500 block">Pvt. Ltd.</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                  data-ocid={`nav.${link.label.toLowerCase().replace(/ /g, "_")}.link`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:block"
              data-ocid="nav.quote.button"
            >
              <Button
                className="font-semibold text-sm"
                style={{ background: "oklch(0.46 0.095 222)", color: "white" }}
              >
                Get a Free Quote
              </Button>
            </a>
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.hamburger.toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
              data-ocid="nav.mobile_menu.panel"
            >
              <ul className="flex flex-col px-4 py-3 gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setSelectedProduct(null);
                      }}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      <ChevronRight size={14} className="text-blue-500" />
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <Button
                    className="w-full font-semibold"
                    style={{
                      background: "oklch(0.46 0.095 222)",
                      color: "white",
                    }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setSelectedProduct(null);
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    data-ocid="nav.mobile_quote.button"
                  >
                    Get a Free Quote
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <AnimatePresence mode="wait">
          {selectedProduct ? (
            <motion.div
              key="product-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-6"
              style={{ background: "oklch(0.97 0.006 235)" }}
              data-ocid="product_detail.panel"
            >
              <ProductDetail
                product={selectedProduct}
                onBack={handleBackFromProduct}
              />
            </motion.div>
          ) : (
            <motion.div
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <section
                id="home"
                className="relative min-h-[92vh] flex items-center justify-center text-white"
                style={{ background: "oklch(0.17 0.058 232)" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/assets/generated/hero-banner.dim_1600x900.jpg')",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.14 0.06 232 / 0.82) 0%, oklch(0.2 0.05 210 / 0.72) 100%)",
                  }}
                />
                <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium border border-white/30 bg-white/10 backdrop-blur-sm">
                      Serving across Nepal
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                      Your Trusted Home
                      <br />
                      Solutions Partner
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-100 mb-8 font-medium">
                      Premium Solar Heaters • Water Purifiers • Kitchen Chimneys
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a href="#solar-heater" data-ocid="hero.explore_button">
                        <Button
                          size="lg"
                          className="font-bold px-8"
                          style={{
                            background: "oklch(0.46 0.095 222)",
                            color: "white",
                          }}
                        >
                          Explore Products
                        </Button>
                      </a>
                      <a href="#contact" data-ocid="hero.contact_button">
                        <Button
                          size="lg"
                          variant="outline"
                          className="font-bold px-8 border-white text-white hover:bg-white hover:text-blue-900"
                        >
                          Contact Us
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                </div>
                {/* Scroll hint */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                  <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
                    <div className="w-1.5 h-2 rounded-full bg-white/70" />
                  </div>
                </div>
              </section>

              {/* Shop by Category */}
              <section
                className="py-20 px-4"
                style={{ background: "oklch(0.97 0.006 235)" }}
              >
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2
                      className="text-3xl sm:text-4xl font-bold mb-3"
                      style={{ color: "oklch(0.14 0.025 250)" }}
                    >
                      Our Product Categories
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                      Explore our range of premium home appliances designed for
                      Nepali households and businesses.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CATEGORIES.map((cat, i) => (
                      <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-white rounded-[12px] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                        data-ocid={`category.card.${i + 1}`}
                      >
                        <div className="h-52 overflow-hidden bg-gray-50 flex items-center justify-center">
                          <img
                            src={cat.image}
                            alt={cat.title}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                          />
                        </div>
                        <div className="p-5">
                          <h3
                            className="text-lg font-bold mb-2"
                            style={{ color: "oklch(0.22 0.065 230)" }}
                          >
                            {cat.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            {cat.description}
                          </p>
                          <a
                            href={cat.href}
                            data-ocid={`category.view_button.${i + 1}`}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="font-semibold border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                            >
                              View Products{" "}
                              <ChevronRight size={14} className="ml-1" />
                            </Button>
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Solar Heater Section */}
              <section id="solar-heater" className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2
                      className="text-3xl sm:text-4xl font-bold mb-3"
                      style={{ color: "oklch(0.14 0.025 250)" }}
                    >
                      Solar Water Heaters
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                      Harness the power of the sun — reduce electricity bills
                      with our BEE 5-star rated solar water heating systems.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SOLAR_HEATERS.map((p, i) => (
                      <ProductCard
                        key={p.name}
                        product={p}
                        index={i}
                        onClick={() => handleSelectProduct(p)}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* Water Purifier Section */}
              <section
                id="water-purifier"
                className="py-20 px-4"
                style={{ background: "oklch(0.97 0.006 235)" }}
              >
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2
                      className="text-3xl sm:text-4xl font-bold mb-3"
                      style={{ color: "oklch(0.14 0.025 250)" }}
                    >
                      Water Purifiers
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                      Advanced multi-stage purification with RO, UV and alkaline
                      technology for 100% safe drinking water.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {WATER_PURIFIERS.map((p, i) => (
                      <ProductCard
                        key={p.name}
                        product={p}
                        index={i}
                        onClick={() => handleSelectProduct(p)}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* Kitchen Chimney Section */}
              <section id="kitchen-chimney" className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2
                      className="text-3xl sm:text-4xl font-bold mb-3"
                      style={{ color: "oklch(0.14 0.025 250)" }}
                    >
                      Kitchen Chimneys
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                      High-suction, auto-clean kitchen chimneys that keep your
                      kitchen fresh, odour-free and stylish.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CHIMNEYS.map((p, i) => (
                      <ProductCard
                        key={p.name}
                        product={p}
                        index={i}
                        onClick={() => handleSelectProduct(p)}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* Vessel Water Purifier Section */}
              <section
                id="vessel-purifier"
                className="py-20 px-4"
                style={{ background: "oklch(0.97 0.006 235)" }}
              >
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2
                      className="text-3xl sm:text-4xl font-bold mb-3"
                      style={{ color: "oklch(0.14 0.025 250)" }}
                    >
                      Vessel Water Purifiers
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                      Industrial-grade FRP pressure vessel purifiers built for
                      commercial and large-scale water treatment.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {VESSEL_PURIFIERS.map((p, i) => (
                      <ProductCard
                        key={p.name}
                        product={p}
                        index={i}
                        onClick={() => handleSelectProduct(p)}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* About Us Section */}
              <section
                id="about"
                className="py-20 px-4"
                style={{ background: "oklch(0.97 0.006 235)" }}
              >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-[12px] overflow-hidden shadow-lg"
                  >
                    <img
                      src="/assets/generated/about-img.dim_600x500.jpg"
                      alt="About Kusum Water Solution"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
                      style={{ background: "oklch(0.46 0.095 222)" }}
                    >
                      About Us
                    </span>
                    <h2
                      className="text-3xl sm:text-4xl font-bold mb-5"
                      style={{ color: "oklch(0.14 0.025 250)" }}
                    >
                      About Kusum Water Solution Pvt. Ltd.
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Founded in 2014, Kusum Water Solution Pvt. Ltd. is a
                      leading supplier and installer of solar water heaters,
                      advanced water purification systems, and kitchen chimneys
                      across Nepal. We are committed to bringing
                      energy-efficient, eco-friendly home solutions that improve
                      everyday quality of life.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Our team of certified technicians provides end-to-end
                      service — from product selection and installation to
                      annual maintenance contracts (AMC). We work with top
                      brands and deliver only IS0-certified, BEE-rated products
                      backed by manufacturer warranties and our own after-sales
                      support.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { stat: "500+", label: "Happy Customers" },
                        { stat: "7+", label: "Years Experience" },
                        { stat: "3", label: "Product Categories" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="text-center py-4 px-3 rounded-xl bg-white shadow-sm border border-gray-100"
                        >
                          <div
                            className="text-2xl font-bold mb-1"
                            style={{ color: "oklch(0.46 0.095 222)" }}
                          >
                            {item.stat}
                          </div>
                          <div className="text-xs text-gray-500 font-medium">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Why Choose Us */}
              <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2
                      className="text-3xl sm:text-4xl font-bold mb-3"
                      style={{ color: "oklch(0.14 0.025 250)" }}
                    >
                      Why Choose Us?
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                      We don't just sell products — we deliver complete home
                      solutions with a commitment to quality and service.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {WHY_CHOOSE.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="text-center p-6 rounded-[12px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                          style={{ background: "oklch(0.92 0.04 222)" }}
                        >
                          <item.icon
                            size={26}
                            style={{ color: "oklch(0.46 0.095 222)" }}
                          />
                        </div>
                        <h3
                          className="font-bold text-base mb-2"
                          style={{ color: "oklch(0.22 0.065 230)" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section
                id="contact"
                className="py-20 px-4"
                style={{ background: "oklch(0.17 0.058 232)" }}
              >
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
                      Get In Touch
                    </h2>
                    <p className="text-blue-200 max-w-xl mx-auto">
                      Have a question or need a custom quote? Our team is ready
                      to help you find the right solution.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Company Info */}
                    <div className="text-blue-100">
                      <div className="flex items-center gap-2 mb-6">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ background: "oklch(0.46 0.095 222)" }}
                        >
                          <Droplets size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">
                            Kusum Water Solution
                          </div>
                          <div className="text-xs text-blue-300">Pvt. Ltd.</div>
                        </div>
                      </div>
                      <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                          <MapPin
                            size={16}
                            className="mt-0.5 text-blue-400 shrink-0"
                          />
                          <span>
                            Tarkeshwor-10, Manamaiju,
                            <br />
                            Kathmandu
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone size={16} className="text-blue-400 shrink-0" />
                          <a
                            href="tel:9843502183"
                            className="hover:text-white transition-colors"
                          >
                            9843502183
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone size={16} className="text-blue-400 shrink-0" />
                          <a
                            href="tel:9851174115"
                            className="hover:text-white transition-colors"
                          >
                            9851174115
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail size={16} className="text-blue-400 shrink-0" />
                          <a
                            href="mailto:kusumwatersolution77@gmail.com"
                            className="hover:text-white transition-colors"
                          >
                            kusumwatersolution77@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-8">
                        <a
                          href="https://www.facebook.com/profile.php?id=100067564736198"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                          className="w-9 h-9 rounded-full flex items-center justify-center border border-blue-700 hover:bg-blue-700 transition-colors"
                          data-ocid="contact.facebook.link"
                        >
                          <Facebook size={15} className="text-blue-200" />
                        </a>
                        <a
                          href="https://www.instagram.com/kusumwatersolution/?hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                          className="w-9 h-9 rounded-full flex items-center justify-center border border-blue-700 hover:bg-blue-700 transition-colors"
                          data-ocid="contact.instagram.link"
                        >
                          <Instagram size={15} className="text-blue-200" />
                        </a>
                        <a
                          href="https://www.tiktok.com/@kusumwatersolutionpvtltd"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="TikTok"
                          className="w-9 h-9 rounded-full flex items-center justify-center border border-blue-700 hover:bg-blue-700 transition-colors"
                          data-ocid="contact.youtube.link"
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-blue-200"
                            role="img"
                            aria-label="TikTok"
                          >
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.99a8.17 8.17 0 0 0 4.78 1.52V7.07a4.85 4.85 0 0 1-1.01-.38z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-[12px] p-6 shadow-xl">
                      <h3
                        className="font-bold text-lg mb-5"
                        style={{ color: "oklch(0.22 0.065 230)" }}
                      >
                        Send Us a Message
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Input
                            placeholder="Your Name *"
                            required
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            data-ocid="contact.name.input"
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="Phone Number *"
                            required
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                            data-ocid="contact.phone.input"
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            data-ocid="contact.email.input"
                          />
                        </div>
                        <div>
                          <Textarea
                            placeholder="Your Message *"
                            required
                            rows={4}
                            value={form.message}
                            onChange={(e) =>
                              setForm({ ...form, message: e.target.value })
                            }
                            data-ocid="contact.message.textarea"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full font-bold"
                          disabled={submitting}
                          style={{
                            background: "oklch(0.46 0.095 222)",
                            color: "white",
                          }}
                          data-ocid="contact.submit.button"
                        >
                          {submitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer
        className="py-5 px-4 text-center text-sm text-gray-400"
        style={{ background: "oklch(0.12 0.04 232)" }}
      >
        <p className="mb-1 text-gray-300">
          © {new Date().getFullYear()} Kusum Water Solution Pvt. Ltd. All Rights
          Reserved.
        </p>
        <p className="text-xs">
          Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors underline underline-offset-2"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
