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

const Services = [
  {
    title: "Lunch",
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

export const Galleries = [
  { image: "/assets/drink_1.jpg", type: "Drink", title: "Drink 1" },
  { image: "/assets/drink_2.jpg", type: "Drink", title: "Drink 2" },
  { image: "/assets/drink_3.jpg", type: "Drink", title: "Drink 3" },
];

export const selectionServices = [
  { id: 1, name: "Default" },
  { id: 2, name: "BreakFast" },
  { id: 3, name: "Lunch" },
  { id: 4, name: "Dinner" },
  { id: 5, name: "Snacks" },
  { id: 6, name: "Desert" },
  { id: 7, name: "Juices" },
  { id: 8, name: "Beverages" }
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
  {
    id: 4,
    name: "Snacks",
  },
  {
    id: 5,
    name: "Desert"
  },
  {
    id: 6,
    name: "Beverages"
  },
  {
    id: 7,
    name: "Juices"
  }
];

export const Service = Services;
