import { PropertyProps } from "@/interfaces";


export const BUTTON_TEXT = {
  all: "All",
  topVilla: "Top Villa",
  freeReschedule: "Free Reschedule",
  bookNowPayLater: "Book Now, Pay later",
  selfCheckin: "Self CheckIn",
  instantBook: "Instant Book",
  filter: "Filter",
  sortByHighestPrice: "Sort by: Highest Price",

  submit: "Submit",
  cancel: "Cancel",
  delete: "Delete",
  edit: "Edit",
  addToCart: "Add to Cart",
  viewCart: "View Cart",
  showMore: "Show More",
  signIn: "Sign In",
  signUp: "Sign Up",
  moreInfo: "More Info",
  goBackHome:"Go Back To Home Page"
};

export const UI_TEXT={
    CARD: {
        TITLE:'Item Title',
        PRICE_PER_NIGHT: 'Price',
        CITY: 'City',
        IMAGE: 'Image',
        BEDROOMS: 'Bedrooms',
        BATHROOMS: 'Bathrooms',
        NUMBER_OF_GUESTS: 'Number of guests',
        RATING: 'Rating',
        FEATURES:["Top Villa", "Self CheckIn", "Free Reschedule"],

        
    },

    SEARCH:{
        DESTINATION: 'Destination',
        CHECK_IN: 'Check-in Date',
        CHECK_OUT: 'Check-out Date',
        GUESTS: 'Guests',
        SEARCH: 'Search',
    },

    ERROR_MESSAGES: {
        REQUIRED_FIELD: 'This field is required.',
        INVALID_EMAIL: 'Please enter a valid email address.',
    },

    SUCCESS_MESSAGES: {
        ITEM_ADDED: 'Item successfully added to cart.',
        ITEM_UPDATED: 'Item successfully updated.',
    },

    EXPLORE:{
        APARTMENTS_IN_DUBAI: 'Apartments in Dubai',
        APARTMENTS_IN_NEWYORK: 'Apartments in New York',
        APARTMENTS_IN_SPAIN: 'Apartments in Spain',
        APARTMENTS_IN_INDONESIA: 'Apartments in Indonesia',
    },

    COMPANY:{
        ABOUT_US:'About Us',
        BLOG:'Blog',
        CAREER: 'Career',
        CUSTOMERS:'Customers',
        BRAND:'Brand',
    },

    HELP:{
        SUPPORT: 'Support',
        CANCEL_BOOKING: 'Cancel Booking',
        REFUNDS_PROCESS: 'Refunds Process',
    },

    FOOTER: {
        TERMS_OF_SERVICE: 'Terms of Service',
        POLICY_SERVICE: 'Policy Service',
        COOKIES_POLICY: 'Cookies Policy',
        PARTNERS: 'Partners',
    },

   
    PROPERTY_CATEGORIES: [
        { label: 'Rooms', icon: 'rooms' },
        { label: 'Mansion', icon: 'mansion' },
        { label: 'Countryside', icon: 'countryside' },
        { label: 'Villa', icon: 'villa' },
        { label: 'Tropical', icon: 'tropical' },
        { label: 'New', icon: 'new' },
        { label: 'Amazing pool', icon: 'pool' },
        { label: 'Beach house', icon: 'beach-house' },
        { label: 'Island', icon: 'island' },
        { label: 'Camping', icon: 'camping' },
        { label: 'Apartment', icon: 'apartment' },
        { label: 'House', icon: 'house' },
        { label: 'Lakefront', icon: 'lakefront' },
        { label: 'Farm house', icon: 'farm-house' },
        { label: 'Treehouse', icon: 'treehouse' },
        { label: 'Cabins', icon: 'cabins' },
        { label: 'Castles', icon: 'castles' },
        { label: 'Lakeside', icon: 'lakeside', disabled: true },
    ]
}

export const PROPERTYLISTINGSAMPLE: PropertyProps []  =  [
  {
     id: "1",
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/image13.png",
    discount: ""
  },
  {
     id: "2",
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/image15.png",
    discount: "30"
  },
  {
     id: "3",
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/image8.png",
    discount: ""
  },
  {
     id: "4",
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/image2.png",
    discount: "15"
  },
  {
     id: "5",
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "/assets/image3.png",
    discount: "20"
  },
  {
     id: "6",
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "/assets/image4.png",
    discount: ""
  },
  { id: "7",
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image5.png",
    discount: "10"
  },
  { id: "7",
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "/assets/image6.png",
    discount: "25"
  },
  { id: "8",
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/image7.png",
    discount: ""
  },
  { id: "9",
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/image8.png",
    discount: "40"
  },
  { id: "10",
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/image9.png",
    discount: "50"
  },
  { id: "11",
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/image18.png",
    discount: ""
  },
  { id: "12",
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/image17.png",
    discount: "35"
  },
  { id: "13",
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/assets/image16.png",
    discount: ""
  },
  { id: "14",
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/image15.png",
    discount: "20"
  },
  {  id: "15",
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "/assets/image10.png",
    discount: "25"
  },
  { id: "16",
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "/assets/image13.png",
    discount: "30"
  },
  { id: "17",
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image12.png",
    discount: ""
  },
  { id: "18",
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "/assets/image11.png",
    discount: "60"
  },
  { id: "19",
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image10.png",
    discount: ""
  }
];


export const BACKGROUND_IMAGE = "/assets/bg.png";
