'use client';

import { useState, useEffect } from 'react';
import { GroceryItem } from '@/lib/types';

interface GroceryListProps {
  initialItems: GroceryItem[];
}

export default function GroceryList({ initialItems }: GroceryListProps) {
  const [items, setItems] = useState<GroceryItem[]>(initialItems);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/groceries');
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
          <span>{item.name}</span>
          <span className="text-gray-600">{item.quantity}</span>
        </li>
      ))}
    </ul>
  );
}