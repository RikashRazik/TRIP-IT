import { DayPlan, ChecklistItem } from './types';

export const TRIP_START_DATE = new Date('2026-08-01T00:00:00');
export const TRIP_END_DATE = new Date('2026-08-05T23:59:59');
export const TOTAL_BUDGET_INR = 160000;
export const VND_TO_INR_RATE = 0.0033;

export const EXPENSE_CATEGORIES = [
  { name: 'Dining & Cafes', budget: 11500 },
  { name: 'Shopping', budget: 15000 },
  { name: 'Local Transport', budget: 3000 },
  { name: 'Connectivity', budget: 2000 },
  { name: 'Contingency', budget: 2000 },
];

export const PERSONAL_SPENDING_TARGET = 33500;

export const FIXED_EXPENSES_DATA = [
  { 
    name: 'Alkawn Tours: Luxury Vietnam Package', 
    inr: 59980, 
    type: 'trip',
    details: [
      'Fivitel (Da Nang)',
      'Bonne Nuit (Hanoi)',
      'Ba Na Hills',
      'Golden Bridge',
      'Cruise (Full Board)',
      'All Transfers',
      'Daily Breakfast',
      'Lunch (Day 2 & 4)',
      'Dinner (Day 1)'
    ]
  },
  { 
    name: 'Flight: Kochi -> Da Nang', 
    inr: 23000, 
    type: 'flights',
    flightDetails: {
      from: 'Kochi',
      fromCode: 'COK',
      to: 'Da Nang',
      toCode: 'DAD',
      depTime: '04:20 AM',
      arrTime: '10:50 AM',
      flightNo: 'VN-261',
      passengers: '2 Passengers',
      baggage: '40kg Total'
    }
  },
  { 
    name: 'Flight: Da Nang -> Hanoi', 
    inr: 12000, 
    type: 'flights',
    flightDetails: {
      from: 'Da Nang',
      fromCode: 'DAD',
      to: 'Hanoi',
      toCode: 'HAN',
      depTime: '07:30 AM',
      arrTime: '08:55 AM',
      flightNo: 'VN-152',
      passengers: '2 Passengers',
      baggage: '40kg Total'
    }
  },
  { 
    name: 'Flight: Hanoi -> Kochi', 
    inr: 24000, 
    type: 'flights',
    flightDetails: {
      from: 'Hanoi',
      fromCode: 'HAN',
      to: 'Kochi',
      toCode: 'COK',
      depTime: '11:45 PM',
      arrTime: '04:15 AM (+1)',
      flightNo: 'VN-398',
      passengers: '2 Passengers',
      baggage: '40kg Total'
    }
  },
  { 
    name: 'E-Visa: Vietnam Approved', 
    inr: 4200, 
    type: 'visa',
    visaDetails: {
      visaNumber: 'EV2026-NAM-1102',
      validFrom: '01 AUG 2026',
      validTo: '31 AUG 2026',
      passportNo: 'L261XXXX8',
      type: 'TOURIST / SINGLE'
    }
  },
  { 
    name: 'Dining & Cafes Budget', 
    inr: 11500, 
    type: 'personal',
    category: 'Dining & Cafes',
    details: ['Premium Rooftop Dinner', 'Coffee Stops', 'Lunches not in package']
  },
  { 
    name: 'Shopping Budget', 
    inr: 15000, 
    type: 'personal',
    category: 'Shopping',
    details: ['Coffee beans', 'Silk clothes', 'Souvenirs in Hoi An']
  },
  { 
    name: 'Local Transport (Grab)', 
    inr: 3000, 
    type: 'personal',
    category: 'Local Transport',
    details: ['Hotel <-> Old Quarter', 'Hotel <-> Restaurants']
  },
  { 
    name: 'Connectivity (SIMs)', 
    inr: 2000, 
    type: 'personal',
    category: 'Connectivity',
    details: ['2x Unlimited 4G SIM Cards']
  },
  { 
    name: 'Emergency Contingency', 
    inr: 2000, 
    type: 'personal',
    category: 'Contingency',
    details: ['Tips', 'Emergency cash']
  }
];

export const ITINERARY_DATA: DayPlan[] = [
  {
    dayNumber: 1,
    date: 'Aug 1',
    city: 'Arrival: Da Nang',
    items: [
      { 
        id: 'i1-1', 
        time: '10:50 AM', 
        activity: '🛬 Touchdown & Meet', 
        description: 'Meet Alkawn driver with name card. Pickup 2 SIM Cards (Self Pay). (Transfer Included)', 
        location: 'Danang Airport (DAD)' 
      },
      { 
        id: 'i1-2', 
        time: '12:30 PM', 
        activity: '🏨 Fivitel Check-in', 
        description: 'River View Room with balcony. Lunch at Nan n Kabab or Grab Food (Self Pay). (Stay Included)', 
        location: 'Fivitel Danang Hotel' 
      },
      { 
        id: 'i1-3', 
        time: '03:30 PM', 
        activity: '🛕 Marble Mountains', 
        description: 'Explore limestone caves, pagodas & Non Nuoc Stone Village. (Entry & Transfer Included)', 
        location: 'Marble Mountains' 
      },
      { 
        id: 'i1-4', 
        time: '06:00 PM', 
        activity: '🏮 Hoi An Ancient Town', 
        description: 'Walk Japanese Bridge, take a boat on Thu Bon River & release lanterns. (Entry & Transfer Included)', 
        location: 'Hoi An' 
      },
      { 
        id: 'i1-5', 
        time: '08:00 PM', 
        activity: '🍽️ Welcome Dinner', 
        description: 'Halal-friendly seafood or vegetarian specialties. (Dinner Included)', 
        location: 'Hoi An Local Restaurant' 
      },
      { 
        id: 'i1-6', 
        time: '09:30 PM', 
        activity: '🚗 Return to Hotel', 
        description: 'Transfer back to hotel for rest. (Transfer Included)', 
        location: 'Fivitel Danang' 
      },
    ]
  },
  {
    dayNumber: 2,
    date: 'Aug 2',
    city: 'Vibe: Ba Na Hills',
    items: [
      { 
        id: 'i2-1', 
        time: '07:30 AM', 
        activity: '☕ Breakfast Buffet', 
        description: 'Enjoy a lavish spread at Fivitel to power up for the mountains. (Breakfast Included)', 
        location: 'Fivitel Hotel' 
      },
      { 
        id: 'i2-2', 
        time: '08:30 AM', 
        activity: '🚌 Mountain Pickup', 
        description: 'Driver arrives for the journey to the cable car station. (Transfer Included)', 
        location: 'Hotel Lobby' 
      },
      { 
        id: 'i2-3', 
        time: '09:30 AM', 
        activity: '🚡 Record Cable Car', 
        description: 'Soar over the jungle on one of the world\'s longest cable car systems. (Ticket Included)', 
        location: 'Cable Car Station' 
      },
      { 
        id: 'i2-4', 
        time: '10:30 AM', 
        activity: '📸 The Golden Bridge', 
        description: 'Walk on the icon held by giant stone hands. Use Funicular for gardens. (Entry Included)', 
        location: 'Golden Bridge' 
      },
      { 
        id: 'i2-5', 
        time: '12:30 PM', 
        activity: '🍽️ Buffet Lunch', 
        description: 'International Buffet at Mercure Danang. Focus on Seafood & Salad sections. (Lunch Included)', 
        location: 'French Village' 
      },
      { 
        id: 'i2-6', 
        time: '02:00 PM', 
        activity: '🏰 French Village & Park', 
        description: 'European-style castles, Cathedral, and free time for indoor games & 4D movies. (Entry Included)', 
        location: 'Fantasy Park' 
      },
      { 
        id: 'i2-7', 
        time: '04:00 PM', 
        activity: '🚠 Descent & Return', 
        description: 'Take the cable car down and drive back to the city. (Transfer Included)', 
        location: 'Sun World Base' 
      },
      { 
        id: 'i2-8', 
        time: '05:00 PM', 
        activity: '💆‍♂️ Relax & Refresh', 
        description: 'Shower, nap, and use hotel foot massage chairs to recover. (Stay Included)', 
        location: 'Fivitel Hotel' 
      },
      { 
        id: 'i2-9', 
        time: '08:00 PM', 
        activity: '☕ Skyline Coffee', 
        description: 'Romantic views & Dragon Bridge Fire Show (9 PM) from 17th floor. (Transfer & Drinks: Self Pay)', 
        location: 'Brilliant Hotel Rooftop' 
      },
    ]
  },
  {
    dayNumber: 3,
    date: 'Aug 3',
    city: 'Hanoi: Old Quarter',
    items: [
      { 
        id: 'i3-1', 
        time: '05:00 AM', 
        activity: '⏰ Checkout & Box', 
        description: 'Hand over keys and collect your Packed Breakfast Box. (Stay & Breakfast Included)', 
        location: 'Fivitel Da Nang' 
      },
      { 
        id: 'i3-2', 
        time: '07:30 AM', 
        activity: '✈️ Flight to Hanoi', 
        description: 'Short 1h 20m flight. Arrive in Hanoi (HAN) at 09:00 AM. (Flight: Self Pay)', 
        location: 'Danang Airport (DAD)' 
      },
      { 
        id: 'i3-3', 
        time: '10:00 AM', 
        activity: '👋 Welcome to Hanoi', 
        description: 'Meet Alkawn driver and drop bags at Bonne Nuit. Check-in starts at 2 PM. (Transfer Included)', 
        location: 'Bonne Nuit Hotel' 
      },
      { 
        id: 'i3-4', 
        time: '11:00 AM', 
        activity: '🚂 Train Street', 
        description: 'Visit the famous narrow street. Coffee/drink purchase required to sit. (Drinks: Self Pay)', 
        location: 'Hanoi Train Street' 
      },
      { 
        id: 'i3-5', 
        time: '12:30 PM', 
        activity: '🍽️ Lunch Break', 
        description: 'Try "Batavia Restaurant" (Halal Indonesian) or "Little India" nearby. (Lunch: Self Pay)', 
        location: 'Old Quarter' 
      },
      { 
        id: 'i3-6', 
        time: '02:00 PM', 
        activity: '🏨 Hotel Check-in', 
        description: 'Settle into your Deluxe Window Room and freshen up. (Stay Included)', 
        location: 'Bonne Nuit Hotel' 
      },
      { 
        id: 'i3-7', 
        time: '03:30 PM', 
        activity: '🏛️ City Discovery', 
        description: 'Guide visit to Temple of Literature and Tran Quoc Pagoda. (Entry & Transfer Included)', 
        location: 'Hanoi City' 
      },
      { 
        id: 'i3-8', 
        time: '07:00 PM', 
        activity: '🚶 Lake Walk & Market', 
        description: 'Stroll Hoan Kiem Lake, see Huc Bridge, and shop the Night Market. (Dinner: Self Pay)', 
        location: 'Hoan Kiem Lake' 
      },
    ]
  },
  {
    dayNumber: 4,
    date: 'Aug 4',
    city: "The Dragon's Pearl",
    items: [
      { 
        id: 'i4-1', 
        time: '08:00 AM', 
        activity: '🚌 Pickup & Drive', 
        description: 'Shuttle Limousine picks you up. Scenic 2.5-hour drive to the harbor. (Transfer Included)', 
        location: 'Bonne Nuit Hotel' 
      },
      { 
        id: 'i4-2', 
        time: '12:00 PM', 
        activity: '🚢 Welcome Onboard', 
        description: 'Board boat at Tuan Chau Harbor. Enjoy a welcome drink & safety briefing. (Cruise Included)', 
        location: 'Tuan Chau Harbor' 
      },
      { 
        id: 'i4-3', 
        time: '12:30 PM', 
        activity: '🍽️ Lunch on Deck', 
        description: 'Sailing lunch. Request: "No Pork / Seafood & Veg Only" immediately. (Lunch Included)', 
        location: 'Halong Bay' 
      },
      { 
        id: 'i4-4', 
        time: '02:00 PM', 
        activity: '🕳️ Surprise Cave', 
        description: 'Explore Sung Sot Cave. Wear comfortable shoes for the limestone hike. (Entry Included)', 
        location: 'Sung Sot Cave' 
      },
      { 
        id: 'i4-5', 
        time: '04:00 PM', 
        activity: '🏝️ Titop Island', 
        description: 'Beach swim or hike 400 steps for a panoramic 360° bay view. (Entry Included)', 
        location: 'Titop Island' 
      },
      { 
        id: 'i4-6', 
        time: '05:30 PM', 
        activity: '🍷 Sunset Soirée', 
        description: 'Tea, wine, and fruits on the sundeck as the sun dips below the bay. (Party Included)', 
        location: 'Cruise Deck' 
      },
      { 
        id: 'i4-7', 
        time: '08:30 PM', 
        activity: '🚌 Hanoi Return', 
        description: 'Bus drops you back at the hotel. Grab a quick Banh Mi for dinner. (Transfer Included)', 
        location: 'Bonne Nuit Hotel' 
      },
    ]
  },
  {
    dayNumber: 5,
    date: 'Aug 5',
    city: 'Farewell Vietnam',
    items: [
      { 
        id: 'i5-1', 
        time: '09:00 AM', 
        activity: '🥐 Lazy Morning', 
        description: 'Relaxed breakfast at Bonne Nuit Hotel before final exploration. (Breakfast Included)', 
        location: 'Bonne Nuit Hotel' 
      },
      { 
        id: 'i5-2', 
        time: '10:00 AM', 
        activity: '🛍️ Final Souvenirs', 
        description: 'Old Quarter shopping: Trung Nguyen coffee, Silk scarves, and Cathedral photo op. (Self Pay)', 
        location: 'Hanoi Old Quarter' 
      },
      { 
        id: 'i5-3', 
        time: '11:00 AM', 
        activity: '☕ Egg Coffee Break', 
        description: 'Must-try legendary Egg Coffee at "Cafe Giang" for a final Hanoi taste. (Self Pay)', 
        location: 'Cafe Giang' 
      },
      { 
        id: 'i5-4', 
        time: '12:00 PM', 
        activity: '🏨 Checkout', 
        description: 'Pack bags, check the safe/under beds, and hand over keys. (Stay Included)', 
        location: 'Bonne Nuit Hotel' 
      },
      { 
        id: 'i5-5', 
        time: '07:45 PM', 
        activity: '🚗 Airport Transfer', 
        description: 'Private car picks you up for HAN Airport (4h before departure). (Transfer Included)', 
        location: 'Noi Bai Airport (HAN)' 
      },
      { 
        id: 'i5-6', 
        time: '11:45 PM', 
        activity: '✈️ Homebound', 
        description: 'Board your flight back to Kochi. Safe travels and end of journey! (Flight: Self Pay)', 
        location: 'Terminal 2' 
      },
    ]
  }
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  { id: 'd1', text: 'Passport (Original + 2 Photocopies)', completed: false, category: 'Documents' },
  { id: 'd2', text: 'Vietnam E-Visa (2 Printed Copies)', completed: false, category: 'Documents' },
  { id: 'd3', text: 'Flight Tickets (COK-DAD-HAN-COK)', completed: false, category: 'Documents' },
  { id: 'd4', text: 'Hotel Confirmation Vouchers', completed: false, category: 'Documents' },
  { id: 'd5', text: 'Alkawn Tours Confirmation & Itinerary', completed: false, category: 'Documents' },
  { id: 'd6', text: 'Passport Size Photos (4 copies)', completed: false, category: 'Documents' },
  { id: 'd7', text: 'Travel Insurance Policy', completed: false, category: 'Documents' },
  { id: 'd8', text: 'Marriage Certificate Copy (Honeymoon Perks)', completed: false, category: 'Documents' },
  { id: 'm1', text: 'Paracetamol / Panadol (Pain Relief)', completed: false, category: 'Emergency & Medicine' },
  { id: 'm2', text: 'Imodium / Lopamide (Stomach)', completed: false, category: 'Emergency & Medicine' },
  { id: 'm3', text: 'Eno / Digene (Acidity/Digestive)', completed: false, category: 'Emergency & Medicine' },
  { id: 'm4', text: 'Avomine / Vomistop (Motion Sickness)', completed: false, category: 'Emergency & Medicine' },
  { id: 'm5', text: 'Band-Aids & Antiseptic Cream', completed: false, category: 'Emergency & Medicine' },
  { id: 'm6', text: 'Odomos / Insect Repellent Cream', completed: false, category: 'Emergency & Medicine' },
  { id: 'm7', text: 'ORS / Electral Powder', completed: false, category: 'Emergency & Medicine' },
  { id: 'm8', text: 'Pain Relief Spray (Moov/Volini)', completed: false, category: 'Emergency & Medicine' },
  { id: 'm9', text: 'Multi-vitamins / Probiotics', completed: false, category: 'Emergency & Medicine' },
  { id: 'm10', text: 'Cold & Flu Relief (Sinarest/D\'Cold)', completed: false, category: 'Emergency & Medicine' },
  { id: 't1', text: 'Sunscreen (SPF 50+ PA+++)', completed: false, category: 'Toiletries' },
  { id: 't2', text: 'Deodorant / Roll-on / Perfume', completed: false, category: 'Toiletries' },
  { id: 't3', text: 'Face Wipes / Wet Tissues', completed: false, category: 'Toiletries' },
  { id: 't4', text: 'Hand Sanitizer (Pocket size)', completed: false, category: 'Toiletries' },
  { id: 't5', text: 'Shampoo, Conditioner & Wash', completed: false, category: 'Toiletries' },
  { id: 't7', text: 'Lip Balm with SPF', completed: false, category: 'Toiletries' },
  { id: 't8', text: 'Trimmer & Razor', completed: false, category: 'Toiletries' },
  { id: 't9', text: 'Toothbrush & Paste', completed: false, category: 'Toiletries' },
  { id: 't10', text: 'Feminine Hygiene Products', completed: false, category: 'Toiletries' },
  { id: 't11', text: 'Hair Brush / Comb', completed: false, category: 'Toiletries' },
  { id: 'a1', text: 'Walking Shoes / Sneakers (Comfort)', completed: false, category: 'Apparels' },
  { id: 'a2', text: 'Flip Flops / Sandals', completed: false, category: 'Apparels' },
  { id: 'a3', text: 'Linen Shirts & Cotton T-shirts', completed: false, category: 'Apparels' },
  { id: 'a4', text: 'Shorts & Cotton Trousers', completed: false, category: 'Apparels' },
  { id: 'a5', text: 'Semi-formal Outfit (Surprise Dinner)', completed: false, category: 'Apparels' },
  { id: 'a6', text: 'Swimwear (Hotel/Halong Bay)', completed: false, category: 'Apparels' },
  { id: 'a7', text: 'Light Hoodie / Scarf (Flight/AC)', completed: false, category: 'Apparels' },
  { id: 'a8', text: 'Undergarments (Extra sets)', completed: false, category: 'Apparels' },
  { id: 'a9', text: 'Disposable Rain Ponchos', completed: false, category: 'Apparels' },
  { id: 'a10', text: 'Socks (3-4 pairs)', completed: false, category: 'Apparels' },
  { id: 'e1', text: 'USD Cash ($400 - $500 in small bills)', completed: false, category: 'Essentials' },
  { id: 'e2', text: 'Universal Travel Adapter', completed: false, category: 'Essentials' },
  { id: 'e3', text: 'Power Bank (10,000mAh+)', completed: false, category: 'Essentials' },
  { id: 'e4', text: 'Halal Cup Noodles & Biscuits', completed: false, category: 'Essentials' },
  { id: 'e5', text: 'Waterproof Phone Pouch', completed: false, category: 'Essentials' },
  { id: 'e6', text: 'Sunglasses & Cap/Hat', completed: false, category: 'Essentials' },
  { id: 'e7', text: 'Grab App installed (Card linked)', completed: false, category: 'Essentials' },
  { id: 'e8', text: 'Pen (Blue/Black for forms)', completed: false, category: 'Essentials' },
  { id: 'e9', text: 'Offline Maps (Google Maps downloaded)', completed: false, category: 'Essentials' },
  { id: 'e10', text: 'Multi-plug / Extension Board', completed: false, category: 'Essentials' },
  { id: 'e11', text: 'Small Umbrella / Rain Gear', completed: false, category: 'Essentials' },
];