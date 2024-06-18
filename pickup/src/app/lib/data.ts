import { sql } from '@vercel/postgres';
import {
  RestaurantsTable,
} from './definitions';
// import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';


const ITEMS_PER_PAGE = 8;
export async function fetchFilteredRestaurants(
  query: string,
  currentPage: number,
) {
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const restaurants = await sql<RestaurantsTable>`
      SELECT
        *
      FROM restaurants
      WHERE
        restaurants.id::text ILIKE ${`%${query}%`} OR
        restaurants.name::text ILIKE ${`%${query}%`} OR
        restaurants.phone ILIKE ${`%${query}%`} OR
        restaurants.address ILIKE ${`%${query}%`}
      ORDER BY restaurants.name DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return restaurants.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch restaurants.');
  }
}
