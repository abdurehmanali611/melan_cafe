import { GetServices } from "./lib/actions";

export const NavbarContents = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/About" },
  { id: 3, name: "Gallery", link: "/Gallery" },
  { id: 4, name: "Services", link: "/Services" },
];

export const HeroFooter = [
  { id: 1, name: "Services", amount: "10+" },
  { id: 2, name: "Experiences", amount: "10+" },
  { id: 3, name: "Happy Clients", amount: "10+" },
];

export const Testimonials = [
  {
    name: "Community Member",
    profession: "Local Resident",
    image: "/assets/testimonial-1.jpg",
    content:
      "This community has been a blessing to me and my family. The support and fellowship we've found here is truly remarkable.",
    rating: 5,
  },
  {
    name: "Community Member",
    profession: "Local Resident",
    image: "/assets/testimonial-2.jpg",
    content:
      "This community has been a blessing to me and my family. The support and fellowship we've found here is truly remarkable.",
    rating: 5,
  },
];

const dummyservice = [
  {
    title: "Lunch",
    type: "Food",
    name: "Protein",
    price: 440,
    image: "/assets/food_1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dolor iusto ad molestias",
    nutrient: ["Protein", "Carbohydrate"],
    popular: true,
    New: false,
  },
  {
    title: "BreakFast",
    type: "Food",
    name: "Protein",
    price: 440,
    image: "/assets/food_2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dolor iusto ad molestias",
    nutrient: ["Protein", "Carbohydrate"],
    popular: false,
    New: true,
  },
  {
    title: "Workout Fuel",
    type: "Food",
    name: "Protein",
    price: 440,
    image: "/assets/food_3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dolor iusto ad molestias",
    nutrient: ["Protein", "Carbohydrate"],
    popular: true,
    New: true,
  },
];

const fetchedServices = await GetServices();

export const Galleries = [
  { image: "/assets/drink_1.jpg", type: "Drink", title: "Drink 1" },
  { image: "/assets/drink_2.jpg", type: "Drink", title: "Drink 2" },
  { image: "/assets/drink_3.jpg", type: "Drink", title: "Drink 3" },
];

export const SocialMedia = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/",
    icon: "logos:facebook",
  },
  {
    id: 2,
    name: "Telegram",
    link: "https://www.telegram.com/",
    icon: "logos:telegram",
  },
  {
    id: 3,
    name: "Tiktok",
    link: "https://www.tiktok.com/",
    icon: "logos:tiktok-icon",
  },
];

export const selectionServices = [
  { id: 1, name: "Default" },
  { id: 2, name: "Food" },
  { id: 3, name: "Drink" },
  { id: 4, name: "Workout Fuel" },
  { id: 5, name: "BreakFast" },
  { id: 6, name: "Lunch" },
  { id: 7, name: "Dinner" },
  { id: 8, name: "Snacks" },
];

export const serviceTitles = [
  {
    id: 1,
    name: "BreakFast",
  },
  {
    id: 2,
    name: "Lunch",
  },
  {
    id: 3,
    name: "Dinner",
  },
];

export const workout = [
  {
    id: 1,
    name: "Workout Fuel"
  },
  {
    id: 2,
    name: "Non-Workout Fuel"
  }
]

export const Service = fetchedServices ? fetchedServices : dummyservice;
