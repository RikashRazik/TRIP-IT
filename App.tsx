
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Itinerary } from './components/Itinerary';
import { ExpenseTracker } from './components/ExpenseTracker';
import { Checklist } from './components/Checklist';
import { Tab, Expense, ChecklistItem, DayPlan, ItineraryItem } from './types';
import { INITIAL_CHECKLIST, FIXED_EXPENSES_DATA, VND_TO_INR_RATE, ITINERARY_DATA, TOTAL_BUDGET_INR, TRIP_START_DATE, TRIP_END_DATE } from './constants';

// Capacitor Imports
import { App as CapApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);
  
  // Initialize Native Features
  useEffect(() => {
    // Hide Splash Screen once app is ready
    SplashScreen.hide();

    // Style Status Bar for Android
    const initNativeUI = async () => {
      try {
        await StatusBar.setStyle({ style: Style.Light });
        await StatusBar.setBackgroundColor({ color: '#ffffff' });
      } catch (e) {
        console.warn('Native UI not available');
      }
    };
    initNativeUI();

    // Handle Android Hardware Back Button
    const backListener = CapApp.addListener('backButton', ({ canGoBack }) => {
      if (activeTab !== Tab.HOME) {
        setActiveTab(Tab.HOME);
      } else {
        CapApp.exitApp();
      }
    });

    return () => {
      backListener.then(l => l.remove());
    };
  }, [activeTab]);

  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem('vietnam_expenses');
    if (saved) return JSON.parse(saved);
    
    return FIXED_EXPENSES_DATA.map(item => ({
      id: crypto.randomUUID(),
      name: item.name,
      inr: item.inr,
      paidInr: 0,
      isPaid: false,
      vnd: item.inr / VND_TO_INR_RATE,
      date: Date.now(),
      category: (item as any).category,
      type: (item.type === 'personal' ? 'personal' : 'fixed') as 'fixed' | 'personal',
      fixedType: (item.type !== 'personal' ? item.type : undefined) as any,
      details: item.details,
      flightDetails: (item as any).flightDetails,
      visaDetails: (item as any).visaDetails
    }));
  });

  const [checklist, setChecklist] = useState<ChecklistItem[]>(() => {
    const saved = localStorage.getItem('vietnam_checklist');
    return saved ? JSON.parse(saved) : INITIAL_CHECKLIST;
  });

  const [itinerary, setItinerary] = useState<DayPlan[]>(() => {
    const saved = localStorage.getItem('vietnam_itinerary');
    return saved ? JSON.parse(saved) : ITINERARY_DATA;
  });

  const totalSpent = expenses.filter(e => e.isPaid).reduce((sum, e) => sum + e.inr, 0);
  const budgetPercentage = Math.min(Math.round((totalSpent / TOTAL_BUDGET_INR) * 100), 100);

  const now = new Date();
  const isFutureTrip = now < TRIP_START_DATE;
  const totalDays = Math.ceil((TRIP_END_DATE.getTime() - TRIP_START_DATE.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const currentDay = isFutureTrip ? 0 : Math.ceil((now.getTime() - TRIP_START_DATE.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const tripProgress = isFutureTrip ? 0 : Math.min(Math.round((currentDay / totalDays) * 100), 100);

  useEffect(() => {
    localStorage.setItem('vietnam_expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('vietnam_checklist', JSON.stringify(checklist));
  }, [checklist]);

  useEffect(() => {
    localStorage.setItem('vietnam_itinerary', JSON.stringify(itinerary));
  }, [itinerary]);

  const addExpense = (name: string, vnd: number, category?: string) => {
    const inr = vnd * VND_TO_INR_RATE;
    const newExpense: Expense = {
      id: crypto.randomUUID(),
      name,
      vnd,
      inr,
      paidInr: inr,
      isPaid: true,
      date: Date.now(),
      category,
      type: 'personal'
    };
    setExpenses([newExpense, ...expenses]);
  };

  const updateExpense = (id: string, updates: Partial<Expense>) => {
    setExpenses(prev => prev.map(e => e.id === id ? { ...e, ...updates } : e));
  };

  const removeExpense = (id: string) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const toggleChecklistItem = (id: string) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const addChecklistItem = (text: string, category: string) => {
    const newItem: ChecklistItem = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      category
    };
    setChecklist([...checklist, newItem]);
  };

  const updateChecklistItem = (id: string, updates: Partial<ChecklistItem>) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const removeChecklistItem = (id: string) => {
    setChecklist(checklist.filter(item => item.id !== id));
  };

  const addItineraryItem = (dayNumber: number, item: Omit<ItineraryItem, 'id'>) => {
    const newItem = { ...item, id: crypto.randomUUID() };
    setItinerary(prev => prev.map(day => 
      day.dayNumber === dayNumber 
        ? { ...day, items: [...day.items, newItem] } 
        : day
    ));
  };

  const updateItineraryItem = (dayNumber: number, itemId: string, updates: Partial<ItineraryItem>) => {
    setItinerary(prev => prev.map(day => 
      day.dayNumber === dayNumber 
        ? { ...day, items: day.items.map(item => item.id === itemId ? { ...item, ...updates } : item) } 
        : day
    ));
  };

  const removeItineraryItem = (dayNumber: number, itemId: string) => {
    setItinerary(prev => prev.map(day => 
      day.dayNumber === dayNumber 
        ? { ...day, items: day.items.filter(item => item.id !== itemId) } 
        : day
    ));
  };

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HOME:
        return (
          <Dashboard 
            expenses={expenses} 
            checklist={checklist} 
            budgetPercentage={budgetPercentage}
            tripProgress={tripProgress}
          />
        );
      case Tab.ITINERARY:
        return (
          <Itinerary 
            data={itinerary} 
            onAddItem={addItineraryItem}
            onUpdateItem={updateItineraryItem}
            onRemoveItem={removeItineraryItem}
          />
        );
      case Tab.EXPENSES:
        return (
          <ExpenseTracker 
            expenses={expenses} 
            onAddExpense={addExpense} 
            onRemoveExpense={removeExpense}
            onUpdateExpense={updateExpense}
          />
        );
      case Tab.CHECKLIST:
        return (
          <Checklist 
            items={checklist} 
            onToggle={toggleChecklistItem}
            onAddItem={addChecklistItem}
            onUpdateItem={updateChecklistItem}
            onRemoveItem={removeChecklistItem}
          />
        );
      default:
        return <Dashboard expenses={expenses} checklist={checklist} budgetPercentage={budgetPercentage} tripProgress={tripProgress} />;
    }
  };

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
    >
      {renderContent()}
    </Layout>
  );
}
