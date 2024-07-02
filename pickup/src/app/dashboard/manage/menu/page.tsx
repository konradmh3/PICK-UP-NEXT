import FormMenu from "@/app/ui/create-form-menu";
import { fetchRestaurants } from "@/app/lib/data";

export default async function MenuManager(){
    const restaurants = await fetchRestaurants();

    return(
    <>
        <FormMenu restaurants={restaurants} />
    </>
);
}