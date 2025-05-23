import { db } from '../src/lib/db';
import { products } from '../src/lib/db/schema';

const sampleProducts = [
  {
    name: 'Playmais Castle Adventure Set',
    description: 'Build your own medieval castle with this Playmais set. Includes castle walls, towers, and decorative elements.',
    price: '29.99',
    image: 'https://images.unsplash.com/photo-1581091226825-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1581091226825-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Castle',
    rating: '4.8',
    reviews: 124,
    inStock: true,
    pieces: 200,
    ageRange: '4-8 years',
    relatedProducts: [2, 3]
  },
  {
    name: 'Playmais Space Station Explorer',
    description: 'Create an amazing space station with this Playmais set. Perfect for young astronauts.',
    price: '34.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Space',
    rating: '4.7',
    reviews: 98,
    inStock: true,
    pieces: 250,
    ageRange: '5-10 years',
    relatedProducts: [1, 3]
  },
  {
    name: 'Playmais Dinosaur World',
    description: 'Build a prehistoric landscape with dinosaurs and volcanoes. Educational and fun!',
    price: '39.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Dinosaur',
    rating: '4.9',
    reviews: 156,
    inStock: true,
    pieces: 300,
    ageRange: '4-9 years',
    relatedProducts: [1, 2]
  },
  {
    name: 'Playmais City Center',
    description: 'Create a bustling city with buildings, roads, and vehicles. Perfect for imaginative play.',
    price: '44.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'City',
    rating: '4.6',
    reviews: 112,
    inStock: true,
    pieces: 350,
    ageRange: '5-12 years',
    relatedProducts: [1, 2]
  },
  {
    name: 'Playmais Pirate Ship',
    description: 'Set sail on a pirate adventure with this detailed ship set. Includes ship, crew, and treasure.',
    price: '49.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Pirate',
    rating: '4.8',
    reviews: 89,
    inStock: true,
    pieces: 400,
    ageRange: '6-12 years',
    relatedProducts: [1, 3]
  },
  {
    name: 'Playmais Coral Reef',
    description: 'Create a vibrant underwater world with colorful coral formations and sea creatures.',
    price: '32.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Ocean',
    rating: '4.7',
    reviews: 76,
    inStock: true,
    pieces: 280,
    ageRange: '5-10 years',
    relatedProducts: [7, 8]
  },
  {
    name: 'Playmais Deep Sea Explorer',
    description: 'Build a submarine and explore the mysterious depths of the ocean.',
    price: '37.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Ocean',
    rating: '4.6',
    reviews: 92,
    inStock: true,
    pieces: 320,
    ageRange: '6-11 years',
    relatedProducts: [6, 8]
  },
  {
    name: 'Playmais Safari Adventure',
    description: 'Create an African savanna with lions, elephants, and other wild animals.',
    price: '42.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Animals',
    rating: '4.9',
    reviews: 118,
    inStock: true,
    pieces: 360,
    ageRange: '5-12 years',
    relatedProducts: [9, 10]
  },
  {
    name: 'Playmais Farm Friends',
    description: 'Build a farm with barns, animals, and tractors. Perfect for learning about farm life.',
    price: '29.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Animals',
    rating: '4.8',
    reviews: 85,
    inStock: true,
    pieces: 240,
    ageRange: '4-8 years',
    relatedProducts: [8, 10]
  },
  {
    name: 'Playmais Mars Colony',
    description: 'Build a futuristic colony on Mars with habitats and exploration vehicles.',
    price: '45.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Space',
    rating: '4.7',
    reviews: 103,
    inStock: true,
    pieces: 380,
    ageRange: '6-12 years',
    relatedProducts: [11, 12]
  },
  {
    name: 'Playmais Solar System',
    description: 'Create a model of our solar system with planets and spacecraft.',
    price: '39.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Space',
    rating: '4.8',
    reviews: 94,
    inStock: true,
    pieces: 300,
    ageRange: '5-10 years',
    relatedProducts: [10, 12]
  },
  {
    name: 'Playmais Dragon Kingdom',
    description: 'Build a magical kingdom with dragons, castles, and mythical creatures.',
    price: '47.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Fantasy',
    rating: '4.9',
    reviews: 127,
    inStock: true,
    pieces: 420,
    ageRange: '6-12 years',
    relatedProducts: [13, 14]
  },
  {
    name: 'Playmais Fairy Garden',
    description: 'Create an enchanting fairy garden with magical elements and tiny houses.',
    price: '34.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Fantasy',
    rating: '4.7',
    reviews: 88,
    inStock: true,
    pieces: 260,
    ageRange: '4-9 years',
    relatedProducts: [12, 14]
  },
  {
    name: 'Playmais Airport',
    description: 'Build a complete airport with planes, control tower, and terminal buildings.',
    price: '52.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Transportation',
    rating: '4.8',
    reviews: 112,
    inStock: true,
    pieces: 450,
    ageRange: '6-12 years',
    relatedProducts: [15, 16]
  },
  {
    name: 'Playmais Train Station',
    description: 'Create a busy train station with tracks, trains, and station buildings.',
    price: '44.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Transportation',
    rating: '4.7',
    reviews: 95,
    inStock: true,
    pieces: 380,
    ageRange: '5-11 years',
    relatedProducts: [14, 16]
  },
  {
    name: 'Playmais Forest Adventure',
    description: 'Build a forest ecosystem with trees, animals, and a camping site.',
    price: '37.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Nature',
    rating: '4.8',
    reviews: 87,
    inStock: true,
    pieces: 320,
    ageRange: '5-10 years',
    relatedProducts: [17, 18]
  },
  {
    name: 'Playmais Mountain Lodge',
    description: 'Create a cozy mountain lodge with surrounding nature and wildlife.',
    price: '41.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Nature',
    rating: '4.6',
    reviews: 78,
    inStock: true,
    pieces: 340,
    ageRange: '5-11 years',
    relatedProducts: [16, 18]
  },
  {
    name: 'Playmais Ancient Egypt',
    description: 'Build pyramids, temples, and recreate ancient Egyptian civilization.',
    price: '46.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Historical',
    rating: '4.9',
    reviews: 105,
    inStock: true,
    pieces: 400,
    ageRange: '6-12 years',
    relatedProducts: [19, 20]
  },
  {
    name: 'Playmais Roman Empire',
    description: 'Create a Roman city with colosseum, temples, and Roman architecture.',
    price: '49.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Historical',
    rating: '4.8',
    reviews: 92,
    inStock: true,
    pieces: 420,
    ageRange: '6-12 years',
    relatedProducts: [18, 20]
  },
  {
    name: 'Playmais Sports Stadium',
    description: 'Build a complete sports stadium with field, stands, and facilities.',
    price: '54.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Sports',
    rating: '4.7',
    reviews: 98,
    inStock: true,
    pieces: 480,
    ageRange: '6-12 years',
    relatedProducts: [19, 20]
  },
  {
    name: 'Playmais Olympic Village',
    description: 'Create an Olympic village with various sports venues and athlete housing.',
    price: '59.99',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600'
    ],
    category: 'Sports',
    rating: '4.8',
    reviews: 86,
    inStock: true,
    pieces: 520,
    ageRange: '7-12 years',
    relatedProducts: [19, 20]
  }
];

async function main() {
  console.log('🌱 Seeding database...');

  if (!db) {
    console.error('❌ Database connection is not available');
    process.exit(1);
  }

  try {
    for (const product of sampleProducts) {
      await db.insert(products).values(product);
    }
    console.log('✅ Database seeded successfully');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

main(); 