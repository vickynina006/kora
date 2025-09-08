import image from "../assets/cap2-removebg.png";
import image2 from "../assets/1-removebg.png";
import image3 from "../assets/statue1-removebg.png";
import { m } from "framer-motion";

const products = [
  {
    id: "1",
    name: "Floor Lamp Led Sculpture",
    measurement: "Height: 5ft, Base Diameter: 10in",
    image: image2,
    price: 15,
    category: "interiors",
    bestseller: true,
    description:
      "A modern LED floor lamp designed as a sculptural piece. Its slim structure and soft light make it a perfect addition to any living room or bedroom. Built with energy-efficient LED bulbs, it creates ambiance while saving power.",
  },
  {
    id: "2",
    name: "White Sports Cap",
    measurement: "One size fits all (adjustable)",
    image: image3,
    price: 12,
    category: "caps",
    bestseller: false,
    description:
      "A breathable white cotton sports cap with a comfortable adjustable strap. Lightweight and stylish, it protects from sunlight while adding a sporty look to your outfit.",
  },
  {
    id: "3",
    name: "Blue Denim Cap",
    measurement: "One size fits all (adjustable)",
    image: image,
    price: 18,
    category: "caps",
    bestseller: false,
    description:
      "Trendy denim cap crafted from durable blue jean fabric. Perfect for casual outings, it offers both comfort and durability with a fashionable touch.",
  },
  {
    id: "4",
    name: "Red Street Cap",
    image: image,
    price: 14,
    category: "caps",
    bestseller: false,
    description:
      "A bold red street cap built for everyday fashion. Made with quality cotton fabric and reinforced seams, it combines style with long-lasting wear.",
  },
  {
    id: "5",
    name: "Black Leather Cap",
    image: image3,
    price: 45,
    category: "caps",
    bestseller: true,
    description:
      "A premium black leather cap with a sleek finish. Its bold style makes it a bestseller, perfect for both casual wear and standout street fashion.",
  },
  {
    id: "6",
    name: "Ocean Breeze Perfume",
    measurement: "quantity: 100ml",
    image: image2,
    price: 50,
    category: "perfumes",
    bestseller: false,
    description:
      "An invigorating aquatic fragrance with notes of sea salt and citrus. Long-lasting and refreshing, it’s ideal for daily wear in warm seasons.",
  },
  {
    id: "7",
    name: "Citrus Fresh Perfume",
    measurement: "quantity: 100ml",
    image: image2,
    price: 40,
    category: "perfumes",
    bestseller: false,
    description:
      "A vibrant perfume that blends zesty lemon and bergamot with soft floral hints. Energetic and uplifting, it’s perfect for daytime activities.",
  },
  {
    id: "8",
    name: "Night Oud Perfume",
    image: image,
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
    image: image,
    price: 35,
    category: "interiors",
    bestseller: false,
    description:
      "Handcrafted wooden wall clock with a minimalist design. Silent mechanism ensures no ticking noise while adding rustic charm to your home.",
  },
  {
    id: "10",
    name: "Wine Denim Cap",
    measurement: "One size fits all (adjustable)",
    image: image2,
    price: 55,
    category: "caps",
    bestseller: true,
    description:
      "A unique wine-colored denim cap combining casual charm with premium stitching. A bestseller known for its durability and standout style.",
  },
  {
    id: "11",
    name: "Grey Throw Pillow",
    measurement: "18in x 18in",
    image: image,
    price: 20,
    category: "interiors",
    bestseller: false,
    description:
      "Soft throw pillow made of premium cotton with a plush filling. Adds comfort and elegance to sofas, chairs, and beds.",
  },
  {
    id: "12",
    name: "Bleu De Chanel",
    measurement: "quantity: 100ml",
    image: image3,
    price: 25,
    category: "perfumes",
    bestseller: true,
    description:
      "A luxury fragrance that blends fresh citrus with woody accords. Sophisticated and versatile, it’s a timeless bestseller for any occasion.",
  },
  {
    id: "13",
    name: "Home Decor Abstract",
    measurement: "12in x 12in",
    image: image2,
    price: 15,
    category: "interiors",
    bestseller: true,
    description:
      "Abstract decorative piece designed to uplift any room. Lightweight and durable, it’s easy to display and perfect for modern homes.",
  },
  {
    id: "14",
    name: "Classic Black Cap",
    measurement: "One size fits all (adjustable)",
    image: image3,
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
    image: image2,
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
    image: image3,
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
    image: image,
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
    image: image3,
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
    image: image,
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
    image: image2,
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
    image: image,
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
    image: image2,
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
    image: image3,
    price: 15,
    category: "caps",
    bestseller: false,
    description:
      "Bright yellow cotton cap that adds a pop of personality. Designed for sunny days, beach trips, and casual outings.",
  },
  {
    id: "24",
    name: "Cedarwood Classic Perfume",
    measurement: "quantity: 100ml",
    image: image2,
    price: 65,
    category: "perfumes",
    bestseller: false,
    description:
      "Woody fragrance highlighting cedarwood and amber. Elegant, earthy, and long-lasting, suited for mature tastes.",
  },
  {
    id: "25",
    name: "Luxury Area Rug",
    measurement: "5ft x 7ft",
    image: image3,
    price: 80,
    category: "interiors",
    bestseller: false,
    description:
      "A plush abstract-pattern rug made of soft, durable fibers. Adds comfort and a chic look to your living space.",
  },
  {
    id: "26",
    name: "Glass Candle Holder Set",
    measurement: "Height: 4in, Diameter: 3in",
    image: image,
    price: 25,
    category: "interiors",
    bestseller: false,
    description:
      "Elegant glass candle holders suitable for tea lights or pillar candles. Adds a warm glow to dining and living areas.",
  },
  {
    id: "27",
    name: "Lavender Mist Perfume",
    measurement: "quantity: 100ml",
    image: image3,
    price: 45,
    category: "perfumes",
    bestseller: false,
    description:
      "A calming perfume with dominant lavender notes. Clean and fresh, it’s perfect for relaxation and evening wear.",
  },
];

export default products;
