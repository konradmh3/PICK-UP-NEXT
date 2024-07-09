import { sql } from '@vercel/postgres';
import {
  RestaurantsTable,
  MenuTable,
  RestaurantField,
} from './definitions';
// import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';


export async function fetchRestaurants() {
  noStore();

  try {
    const restaurants = await sql<RestaurantField>`SELECT * FROM restaurants`;
    return restaurants.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch restaurants.');
  }
}


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

export async function fetchRestaurantPages(query: string) {
  noStore();

  try {
    const count = await sql`SELECT COUNT(*)
    FROM restaurants
    WHERE
        restaurants.id::text ILIKE ${`%${query}%`} OR
        restaurants.name::text ILIKE ${`%${query}%`} OR
        restaurants.phone ILIKE ${`%${query}%`} OR
        restaurants.address ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchRestrauntMenu(id: number) {
  noStore();

  try {
    const menu = await sql<MenuTable>`SELECT restaurants.name, menus.menuitem, menus.customize, menus.amount FROM 
    menus INNER JOIN restaurants ON menus.restaurantid = restaurants.id WHERE restaurants.id = ${id}`;
    console.log('menu:', menu);
    console.log('menu.rows:', menu.rows);
    return menu.rows;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch menu.');
  }
}
