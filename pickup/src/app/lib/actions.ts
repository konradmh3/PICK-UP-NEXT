"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";


// Validation schema for creating a restaurant
const CreateRestaurantSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
});

const CreatRestaurant = CreateRestaurantSchema.omit({ id: true });

export async function createRestaurant(formData: FormData) {
  const { name, phone, address } = CreatRestaurant.parse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    address: formData.get("address"),
  });

  await sql`
        INSERT INTO restaurants (name, phone, address)
        VALUES (${name}, ${phone}, ${address})
    `;

    // after adding lets remove duplicate restaurants
    await sql`
        DELETE FROM restaurants
        WHERE id IN (
            SELECT id
            FROM (
                SELECT id, ROW_NUMBER() OVER (partition BY name, phone, address ORDER BY id) AS rnum
                FROM restaurants
            ) t
            WHERE t.rnum > 1
        )
    `;

    revalidatePath(`/dashboard/restaurants`);
    revalidatePath(`/dashboard/manage/menu`);
    redirect(`/dashboard/manage/menu`);
}

// Validation schema for creating a menu item
const CreateMenuItemSchema = z.object({
  id: z.string(),
  restaurantid: z.coerce.number(),
  menuitem: z.string(),
  customize: z.string(),
  amount: z.coerce.number(),
});

const CreateMenuItem = CreateMenuItemSchema.omit({ id: true });

export async function createMenuItem(formData: FormData) {
  const {restaurantid, menuitem, customize, amount} = CreateMenuItem.parse({
    restaurantid: formData.get("restaurantId"),
    menuitem: formData.get("menuitem"),
    customize: formData.get("customize"),
    amount: formData.get("amount"),
  });
  const amountInCents = amount * 100;
    const customizeJson = JSON.stringify(customize.split(",").map((c) => c.trim()));


    await sql`
            INSERT INTO menus (restaurantid, menuitem, customize, amount)
            VALUES (${restaurantid}, ${menuitem}, ${customizeJson}, ${amountInCents})
        `;

            // after adding lets remove duplicate menu items
    await sql`
            DELETE FROM menus
            WHERE id IN (
                SELECT id
                FROM (
                    SELECT id, ROW_NUMBER() OVER (partition BY restaurantid, menuitem, customize) AS rnum
                    FROM menus
                ) t
                WHERE t.rnum > 1
            )
        `;

        revalidatePath(`/dashboard/menu?restaurantID=${restaurantid}`);
        // lets refresh the page so all the form entries are cleared
        redirect(`/dashboard/manage`);

}
