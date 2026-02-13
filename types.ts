
export interface ItineraryItem {
  id: string;
  time: string;
  activity: string;
  description?: string;
  location?: string;
}

export interface DayPlan {
  dayNumber: number;
  date: string;
  city: string;
  items: ItineraryItem[];
}

export interface FlightDetails {
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  depTime: string;
  arrTime: string;
  flightNo?: string;
  passengers?: string;
  baggage?: string;
}

export interface VisaDetails {
  visaNumber: string;
  validFrom: string;
  validTo: string;
  passportNo: string;
  type: string;
}

export interface Expense {
  id: string;
  name: string;
  vnd: number;
  inr: number;
  paidInr: number;
  isPaid: boolean;
  date: number;
  category?: string;
  type: 'fixed' | 'personal';
  fixedType?: 'trip' | 'flights' | 'visa';
  details?: string[]; // For package inclusions
  flightDetails?: FlightDetails; // For boarding pass view
  visaDetails?: VisaDetails; // For visa document view
}

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  category: string;
}

export enum Tab {
  HOME = 'home',
  ITINERARY = 'itinerary',
  EXPENSES = 'expenses',
  CHECKLIST = 'checklist'
}
