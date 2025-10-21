import pinkCap from "../assets/pinkCap.png";
import abstract from "../assets/abstract.png";
import blackCap from "../assets/blackCap.png";
import standingLight from "../assets/standingLight.png";
import denimCap from "../assets/denimCap.png";
import redCap from "../assets/redCap.png";
import oceanPef from "../assets/oceanPef.png";
import citrusPef from "../assets/citrusPef.png";
import nightoudPef from "../assets/nightoudPef.png";
import bleuPerfume from "../assets/bleuPerfume.png";
import woodenClock from "../assets/woodenClock.png";
import wineCap from "../assets/wineCap.png";
import pillow from "../assets/pillow.png";
import blackleatherCap from "../assets/blackleatherCap.png";
import rosePef from "../assets/rosePef.png";
import jar from "../assets/jar.png";
import armyCap from "../assets/armyCap.png";
import spiceoudPef from "../assets/spiceoudPef.png";
import marbleTable from "../assets/marbleTable.png";
import vanillaPef from "../assets/vanillapef.png";
import lavendaPef from "../assets/lavendaPef.png";
import sandalwoodPef from "../assets/sandalwoodPef.png";
import brownCap from "../assets/brownCap.png";
import curvedStandingLight from "../assets/curvedStandingLight.png";
import yellowCap from "../assets/yellowCap.png";
import wallMirror from "../assets/wallMirror.png";
import centreRug from "../assets/centreRug.png";

const products = [
  {
    id: "1",
    name: "Floor Lamp Led Sculpture",
    measurement: "Height: 5ft, Base Diameter: 10in",
    image: standingLight,
    price: 15,
    category: "interiors",
    bestseller: true,
    description:
      "A modern LED floor lamp designed as a sculptural piece. Its slim structure and soft light make it a perfect addition to any living room or bedroom. Built with energy-efficient LED bulbs, it creates ambiance while saving power.",
  },
  {
    id: "2",
    name: "Ocean Breeze Perfume",
    measurement: "quantity: 100ml",
    image: oceanPef,
    price: 50,
    category: "perfumes",
    bestseller: false,
    description:
      "An invigorating aquatic fragrance with notes of sea salt and citrus. Long-lasting and refreshing, it’s ideal for daily wear in warm seasons.",
  },

  {
    id: "3",
    name: "Black Leather Cap",
    image: blackleatherCap,
    price: 45,
    category: "caps",
    bestseller: true,
    description:
      "A premium black leather cap with a sleek finish. Its bold style makes it a bestseller, perfect for both casual wear and standout street fashion.",
  },

  {
    id: "4",
    name: "Wine Denim Cap",
    measurement: "One size fits all (adjustable)",
    image: wineCap,
    price: 55,
    category: "caps",
    bestseller: true,
    description:
      "A unique wine-colored denim cap combining casual charm with premium stitching. A bestseller known for its durability and standout style.",
  },
  {
    id: "5",
    name: "Luxury Area Rug",
    measurement: "5ft x 7ft",
    image: centreRug,
    price: 80,
    category: "interiors",
    bestseller: false,
    description:
      "A plush abstract-pattern rug made of soft, durable fibers. Adds comfort and a chic look to your living space.",
  },
  {
    id: "6",
    name: "Bleu De Chanel",
    measurement: "quantity: 100ml",
    image: bleuPerfume,
    price: 25,
    category: "perfumes",
    bestseller: true,
    description:
      "A luxury fragrance that blends fresh citrus with woody accords. Sophisticated and versatile, it’s a timeless bestseller for any occasion.",
  },
  {
    id: "7",
    name: "Citrus Fresh Perfume",
    measurement: "quantity: 100ml",
    image: citrusPef,
    price: 40,
    category: "perfumes",
    bestseller: false,
    description:
      "A vibrant perfume that blends zesty lemon and bergamot with soft floral hints. Energetic and uplifting, it’s perfect for daytime activities.",
  },
  {
    id: "8",
    name: "Night Oud Perfume",
    image: nightoudPef,
    price: 60,
    category: "perfumes",
    bestseller: false,
    description:
      "A luxurious oud-based fragrance enriched with smoky undertones. Strong, bold, and long-lasting, it’s best suited for evenings and formal events.",
  },
  {
    id: "9",
    name: "Wooden Wall Clock",
    measurement: "Diameter: 12in, Depth: 2in",
    image: woodenClock,
    price: 35,
    category: "interiors",
    bestseller: false,
    description:
      "Handcrafted wooden wall clock with a minimalist design. Silent mechanism ensures no ticking noise while adding rustic charm to your home.",
  },
  {
    id: "10",
    name: "Home Decor Abstract",
    measurement: "12in x 12in",
    image: abstract,
    price: 15,
    category: "interiors",
    bestseller: true,
    description:
      "Abstract decorative piece designed to uplift any room. Lightweight and durable, it’s easy to display and perfect for modern homes.",
  },
  {
    id: "11",
    name: "Grey Throw Pillow",
    measurement: "18in x 18in",
    image: pillow,
    price: 20,
    category: "interiors",
    bestseller: false,
    description:
      "Soft throw pillow made of premium cotton with a plush filling. Adds comfort and elegance to sofas, chairs, and beds.",
  },
  {
    id: "12",
    name: "Red Street Cap",
    image: redCap,
    price: 14,
    category: "caps",
    bestseller: false,
    description:
      "A bold red street cap built for everyday fashion. Made with quality cotton fabric and reinforced seams, it combines style with long-lasting wear.",
  },
  {
    id: "13",
    name: "Blue Denim Cap",
    measurement: "One size fits all (adjustable)",
    image: denimCap,
    price: 18,
    category: "caps",
    bestseller: false,
    description:
      "Trendy denim cap crafted from durable blue jean fabric. Perfect for casual outings, it offers both comfort and durability with a fashionable touch.",
  },
  {
    id: "14",
    name: "Classic Black Cap",
    measurement: "One size fits all (adjustable)",
    image: blackCap,
    price: 20,
    category: "caps",
    bestseller: false,
    description:
      "Minimalist black cotton cap with reinforced stitching. Lightweight, durable, and suitable for sports, travel, or everyday wear.",
  },
  {
    id: "15",
    name: "Rose Essence Perfume",
    measurement: "quantity: 100ml",
    image: rosePef,
    price: 55,
    category: "perfumes",
    bestseller: false,
    description:
      "A romantic perfume with the timeless scent of roses. Enhanced with subtle vanilla and musk, it’s elegant and long-lasting.",
  },
  {
    id: "16",
    name: "Ceramic Vase Set",
    measurement: "Height: 5ft, Base Diameter: 10in",
    image: jar,
    price: 30,
    category: "interiors",
    bestseller: false,
    description:
      "A set of handcrafted ceramic vases in neutral tones. Ideal for flowers or as minimalist stand-alone decor.",
  },
  {
    id: "17",
    name: "Camo Military Cap",
    measurement: "One size fits all (adjustable)",
    image: armyCap,
    price: 22,
    category: "caps",
    bestseller: false,
    description:
      "Camouflage-patterned cap crafted for durability. Perfect for hiking, camping, and outdoor adventures.",
  },
  {
    id: "18",
    name: "Spice Oud Perfume",
    measurement: "quantity: 100ml",
    image: spiceoudPef,
    price: 70,
    category: "perfumes",
    bestseller: false,
    description:
      "An exotic fragrance that blends smoky oud with warm spices. Bold and powerful, ideal for evening wear and special events.",
  },
  {
    id: "19",
    name: "Marble Coffee Table",
    measurement: "Length: 48in, Width: 24in, Height: 18in",
    image: marbleTable,
    price: 120,
    category: "interiors",
    bestseller: false,
    description:
      "Luxury coffee table with a marble top and metallic base. Sturdy, stylish, and perfect for living room spaces.",
  },
  {
    id: "20",
    name: "Mesh Back Trucker Cap",
    measurement: "One size fits all (adjustable)",
    image: brownCap,
    price: 16,
    category: "caps",
    bestseller: false,
    description:
      "A trucker-style cap with a breathable mesh back. Lightweight and comfortable for casual wear in warm weather.",
  },
  {
    id: "21",
    name: "Vanilla Musk Perfume",
    measurement: "quantity: 100ml",
    image: vanillaPef,
    price: 48,
    category: "perfumes",
    bestseller: false,
    description:
      "Sweet vanilla fragrance combined with musky undertones. Cozy and versatile, perfect for both work and casual use.",
  },
  {
    id: "22",
    name: "Wall Hanging Mirror",
    measurement: "Diameter: 24in",
    image: wallMirror,
    price: 45,
    category: "interiors",
    bestseller: false,
    description:
      "Round decorative mirror with a natural wooden frame. Adds depth and brightness to any room.",
  },
  {
    id: "23",
    name: "Yellow Summer Cap",
    measurement: "One size fits all (adjustable)",
    image: yellowCap,
    price: 15,
    category: "caps",
    bestseller: false,
    description:
      "Bright yellow cotton cap that adds a pop of personality. Designed for sunny days, beach trips, and casual outings.",
  },
  {
    id: "24",
    name: "Sandalwood Classic Perfume",
    measurement: "quantity: 100ml",
    image: sandalwoodPef,
    price: 65,
    category: "perfumes",
    bestseller: false,
    description:
      "Woody fragrance highlighting cedarwood and amber. Elegant, earthy, and long-lasting, suited for mature tastes.",
  },
  {
    id: "25",
    name: "Pink Sports Cap",
    measurement: "One size fits all (adjustable)",
    image: pinkCap,
    price: 12,
    category: "caps",
    bestseller: false,
    description:
      "A breathable white cotton sports cap with a comfortable adjustable strap. Lightweight and stylish, it protects from sunlight while adding a sporty look to your outfit.",
  },
  {
    id: "26",
    name: "Curved Standing Light ",
    measurement: "Height: 4in, Diameter: 3in",
    image: curvedStandingLight,
    price: 25,
    category: "interiors",
    bestseller: false,
    description:
      "Elegant curved standing light made of high-quality materials. Provides a warm and inviting glow, perfect for any room.",
  },
  {
    id: "27",
    name: "Lavender Mist Perfume",
    measurement: "quantity: 100ml",
    image: lavendaPef,
    price: 45,
    category: "perfumes",
    bestseller: false,
    description:
      "A calming perfume with dominant lavender notes. Clean and fresh, it’s perfect for relaxation and evening wear.",
  },
];

export default products;
