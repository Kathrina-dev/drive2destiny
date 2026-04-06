import { Hotel } from "@/pages/hotel";

// Hotels
export const mockHotels: Hotel[] = [
  {
    name: "Summit Retreat",
    location: "Manali, Himachal Pradesh",
    price: 3200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
  {
    name: "Coastal Breeze Inn",
    location: "Calangute, Goa",
    price: 2800,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
  },
  {
    name: "Heritage Palace",
    location: "Jaipur, Rajasthan",
    price: 5500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
  },
  {
    name: "Forest Nook Resort",
    location: "Coorg, Karnataka",
    price: 4100,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
  },
];

// Carpool rides 
export const mockRides = [
  {
    from: "Bengaluru",
    to: "Mysuru",
    date: "Today, Apr 6",
    time: "8:00 AM",
    price: 350,
    seats: 3,
    vehicleType: "AC Sedan",
  },
  {
    from: "Pune",
    to: "Mumbai",
    date: "Today, Apr 6",
    time: "10:30 AM",
    price: 480,
    seats: 2,
    vehicleType: "SUV",
  },
  {
    from: "Delhi",
    to: "Agra",
    date: "Tomorrow, Apr 7",
    time: "6:00 AM",
    price: 620,
    seats: 4,
    vehicleType: "Innova",
  },
];

// Chat rooms

export const mockChats = [
  {
    roomName: "Bengaluru → Mysuru",
    roomSubtitle: "3 travellers · Online",
    avatarInitials: "BM",
    initialMessages: [
      { text: "Hey everyone! See you at Silk Board at 8?", sender: "other" as const, senderName: "Rohan" },
      { text: "Yes, I'll be there. Bringing snacks 🙂", sender: "me" as const },
      { text: "Same! Can we stop at the coffee place on the way?", sender: "other" as const, senderName: "Priya" },
    ],
  },
  {
    roomName: "Pune → Mumbai",
    roomSubtitle: "2 travellers · Online",
    avatarInitials: "PM",
    initialMessages: [
      { text: "Pickup from Hinjewadi okay?", sender: "other" as const, senderName: "Karan" },
      { text: "Works for me, thanks!", sender: "me" as const },
    ],
  },
];

// Photo posts

export const mockPosts = [
  {
    user: "Arjun Kumar",
    caption: "Sunrise above the clouds in Manali — absolutely speechless. Worth every kilometre of that drive!",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    location: "Manali, HP",
    likes: 142,
    comments: 18,
  },
  {
    user: "Priya Sharma",
    caption: "Golden hour at the beach. The waves, the breeze, the vibes — 10/10 would return every year.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    location: "Goa",
    likes: 98,
    comments: 11,
  },
  {
    user: "Riya Verma",
    caption: "Taj at dawn. No words. Just go.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
    location: "Agra, UP",
    likes: 301,
    comments: 34,
  },
];

// Reviews

export const mockReviews = [
  {
    user: "Aarav Mehta",
    rating: 5,
    comment:
      "Found an amazing local guide in Coorg through this app. She took us to secret waterfalls no tourist ever sees. Absolutely recommend!",
    location: "Coorg, Karnataka",
    tripCount: 3,
  },
  {
    user: "Sneha Rao",
    rating: 5,
    comment:
      "The carpool feature is genius. Split the cost with two strangers who are now my travel buddies. Safe, affordable, and fun!",
    location: "Bengaluru → Mysuru",
    tripCount: 7,
  },
  {
    user: "Karan Patel",
    rating: 4,
    comment:
      "Hotel prices were really competitive — booked Heritage Palace for 40% less than other platforms. Clean UI, very easy to use.",
    location: "Jaipur, Rajasthan",
    tripCount: 2,
  },
];