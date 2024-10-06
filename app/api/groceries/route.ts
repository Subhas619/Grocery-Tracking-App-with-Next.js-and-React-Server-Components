import { NextResponse } from 'next/server';
import { getGroceryItems, addGroceryItem } from '@/lib/groceryData';

export async function GET() {
  const items = await getGroceryItems();
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newItem = await addGroceryItem(body);
  return NextResponse.json(newItem, { status: 201 });
}