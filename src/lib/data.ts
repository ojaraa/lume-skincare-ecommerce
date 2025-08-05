import { Product } from "@/models"

export const navLinks =[
    {
        id:1,
        label:"Home",
        href:"/"
    },
       {
        id:5,
        label:"Categories",
        href:"/categories"
    },
    // {
    //     id:2,
    //     label:"Products",
    //     href:"/products"
    // },
    // {
    //     id:3,
    //     label:"About",
    //     href:"/about"
    // },
    // {
    //     id:4,
    //     label:"Contact",
    //     href:"/contact"
    // }
]
export const categories = [
    {
        id:1,
        label:"Moisturizers",
        slug: "moisturizers",   
        image: "/assets/images/moisturizer1.jpg",
    },
    {
        id:2,
        label:"Cleansers",
        slug: "cleansers",
        image: "/assets/images/cleanser.jpg",
    },
    {
        id:3,
        label:"Serums",
        slug: "serums",
        image: "/assets/images/serum2.jpg",
    },
    {
        id:4,
        label:"Sunscreens",
        slug: "sunscreens",
        image: "/assets/images/sunscreen.jpg",
    },
    {
        id:5,
        label:"Spot Treatments",
        slug: "spot-treatments",
        image: "/assets/images/acne.jpg",
    },
    {
        id:6,
        label:"Face Masks",
        slug: "face-masks",
        image: "/assets/images/mask1.jpg",
    },
    {
        id:7,
        label:"Toners",
        slug: "toners",
        image: "/assets/images/toner.jpg",
    },
    {
        id:8,
        label:"Eye Care",
        slug: "eye-care",
        image: "/assets/images/mask2.jpg",
    },
    {
        id:9,
        label:"Lip Care",
        slug: "lip-care",
        image: "/assets/images/ordinary-serum.jpg",
    },
    {
        id:10,
        label:"Body Care",
        slug: "body-care",
        image: "/assets/images/moisturizer3.jpg",
    },
    {
        id:11,
        label:"Hair Care",
        slug: "hair-care",
        image: "/assets/images/sunscreen3.jpg",
    },

]

export const products: Product[] = [
  {
    id: 1,
    name: "Hydrating Moisturizer",
    slug: "hydrating-moisturizer",
    description: "A lightweight moisturizer that hydrates and nourishes the skin.",
    price: 29.99,
    image: "/assets/images/moisturizer1.jpg",
    categoryId: 1,
    skinType: ["dry", "normal", "combination"]
  },
  {
    id: 2,
    name: "Anti-Aging Cream",
    slug: "anti-aging-cream",
    description: "A rich cream that reduces the appearance of fine lines and wrinkles.",
    price: 49.99,
    image: "/assets/images/moisturizer2.jpg",
    categoryId: 1,
    skinType: ["mature", "dry"]
  },
  {
    id: 3,
    name: "Gentle Cleanser",
    slug: "gentle-cleanser",
    description: "A mild cleanser that removes impurities without stripping the skin.",
    price: 19.99,
    image: "/assets/images/cleanser.jpg",
    categoryId: 2,
    skinType: ["sensitive", "normal", "combination"]
  },
  {
    id: 35,
    name: "Micellar Water",
    slug: "micellar-water",
    description: "A gentle micellar water that cleanses and refreshes the skin.",
    price: 15.99,
    image: "/assets/images/micellar-water.jpg",
    categoryId: 2,
    skinType: ["All"]
  },
  {
    id: 4,
    name: "Exfoliating Scrub",
    slug: "exfoliating-scrub",
    description: "An exfoliating scrub that reveals smoother, brighter skin.",
    price: 24.99,
    image: "/assets/images/exfoliating-scrub.jpg",
    categoryId: 2,
    skinType: ["oily", "combination"]
  },
  {
    id: 5,
    name: "Vitamin C Serum",
    slug: "vitamin-c-serum",
    description: "A brightening serum that helps even skin tone and reduce dark spots.",
    price: 39.99,
    image: "/assets/images/serum1.jpg",
    categoryId: 3,
    skinType: ["all"]
  },
  {
    id: 6,
    name: "Hydralift Anti-aging Serum",
    slug: "hydralift-anti-aging-serum",
    description: "A hydrating serum that plumps the skin and reduces dryness.",
    price: 34.99,
    image: "/assets/images/serum6.jpg",
    categoryId: 3,
    skinType: ["dry", "normal"]
  },
  {
    id: 16,
    name: "Revox Serum",
    slug: "revox-serum",
    description: "A hydrating serum infused with Hyaluronic acid that plumps the skin and reduces dryness. It is suitable for all skin types and helps to improve skin texture.",
    price: 34.99,
    image: "/assets/images/serum2.jpg",
    categoryId: 3,
    skinType: ["all"]
  },
  {
    id: 156,
    name: "The Ordinary Hyaluronic Serum",
    slug: "the-ordinary-serum",
    description: "A hydrating serum that plumps the skin and reduces dryness. It is suitable for all skin types and helps to improve skin texture. ",
    price: 55.0,
    image: "/assets/images/serum3.jpg",
    categoryId: 3,
    skinType: ["dry", "normal"]
  },
  {
    id: 7,
    name: "Broad Spectrum SPF 50",
    slug: "broad-spectrum-spf-50",
    description: "A lightweight sunscreen that protects against UVA and UVB rays.",
    price: 29.99,
    image: "/assets/images/sunscreen.jpg",
    categoryId: 4,
    skinType: ["all"]
  },
  {
    id: 8,
    name: "Tinted Sunscreen SPF 30",
    slug: "tinted-sunscreen-spf-30",
    description: "A tinted sunscreen that provides coverage and sun protection.",
    price: 34.99,
    image: "/assets/images/sunscreen3.jpg",
    categoryId: 4,
    skinType: ["all"]
  },
  {
    id: 9,
    name: "Retinol Spot Treatment",
    slug: "retinol-spot-treatment",
    description: "A retinol spot treatment that revitalizes and moisturizes the skin. Suitable for all skin types. ",
    price: 19.99,
    image: "/assets/images/acne.jpg",
    categoryId: 5,
    skinType: ["dry", "normal"]
  },
  {
    id: 102,
    name: "Acne Control Gel",
    slug: "acne-control-gel",
    description: "A gel that targets acne and reduces breakouts. Suitable for oily and combination skin. It can be used as a spot treatment or all over the face. Only use a small amount and avoid the eye area.",
    price: 24.99,
    image: "/assets/images/glow-serum.jpg",
    categoryId: 5,
    skinType: ["oily", "combination"]
  },
  {
    id: 10,
    name: "Clay Detox Mask",
    slug: "clay-detox-mask",
    description: "A detoxifying clay mask that draws out impurities.",
    price: 24.99,
    image: "/assets/images/clay-detox-mask.jpg",
    categoryId: 6,
    skinType: ["oily", "combination"]
  },
  {
    id: 11,
    name: "Rose Water Toner",
    slug: "rose-water-toner",
    description: "A soothing toner that refreshes and balances the skin.",
    price: 14.99,
    image: "/assets/images/rose-water-toner.jpg",
    categoryId: 6,
    skinType: ["sensitive", "dry"]
  },
  {
    id: 12,
    name: "Aloe Vera Toner",
    slug: "aloe-vera-toner",
    description: "A calming toner that hydrates and soothes the skin.",
    price: 16.99,
    image: "/assets/images/aloe-vera-toner.jpg",
    categoryId: 6,
    skinType: ["all"]
  },
  {
    id: 13,
    name: "Under Eye Cream",
    slug: "under-eye-cream",
    description: "An eye cream that reduces puffiness and dark circles.",
    price: 29.99,
    image: "/assets/images/under-eye-cream.jpg",
    categoryId: 7,
    skinType: ["all"]
  },
  {
    id: 14,
    name: "Eye Serum",
    slug: "eye-serum",
    description: "An eye serum that firms and brightens the eye area.",
    price: 34.99,
    image: "/assets/images/eye-serum.jpg",
    categoryId: 7,
    skinType: ["all"]
  },
  {
    id: 15,
    name: "Moisturizing Lip Balm",
    slug: "moisturizing-lip-balm",
    description: "A nourishing lip balm that keeps lips soft and hydrated.",
    price: 9.99,
    image: "/assets/images/moisturizing-lip-balm.jpg",
    categoryId: 8,
    skinType: ["all"]
  },
  {
    id: 16,
    name: "Exfoliating Lip Scrub",
    slug: "exfoliating-lip-scrub",
    description: "A gentle lip scrub that removes dead skin and smooths lips.",
    price: 12.99,
    image: "/assets/images/exfoliating-lip-scrub.jpg",
    categoryId: 8,
    skinType: ["all"]
  },
];


