import { Suspense } from 'react';
import GroceryList from '@/components/GroceryList';
import AddGroceryItem from '@/components/AddGroceryItem';
import { getGroceryItems } from '@/lib/groceryData';

export default async function Home() {
  const initialGroceryItems = await getGroceryItems();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Grocery Tracking App</h1>
      <Suspense fallback={<div>Loading grocery list...</div>}>
        <GroceryList initialItems={initialGroceryItems} />
      </Suspense>
      <AddGroceryItem />
    </div>
  );
}