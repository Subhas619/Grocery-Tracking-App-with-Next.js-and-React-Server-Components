import { GroceryItem } from './types';

let groceryItems: GroceryItem[] = [
  { id: 1, name: 'Milk', quantity: 1 },
  { id: 2, name: 'Bread', quantity: 2 },
  { id: 3, name: 'Eggs', quantity: 12 },
];

export async function getGroceryItems(): Promise<GroceryItem[]> {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return groceryItems;
}

export async function addGroceryItem(item: Omit<GroceryItem, 'id'>): Promise<GroceryItem> {
  const newItem = { ...item, id: Date.now() };
  groceryItems.push(newItem);
  return newItem;
}