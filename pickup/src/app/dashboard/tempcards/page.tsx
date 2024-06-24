import { lusitana } from "@/app/ui/fonts";
import { fetchRestrauntMenu } from '@/app/lib/data';

export default async function Tempcards({
    searchParams,
  }: {
    searchParams?: {
      restaurantID?: string;
    };
  }) {

    const restaurantID = Number(searchParams?.restaurantID || '');

    const restarauntMenuItems =  await fetchRestrauntMenu(restaurantID);
    console.log(restarauntMenuItems);
    // above calls the function to fetch the data from the database and the param is the restaraunt id. We need to get
    // the id from which restaraunt the user clicked on add it to the url and then get it from the url and pass it to the function

  return(
  <div className="w-full">
    <div className="flex w-full items-center justify-between">
      <h1 className={`${lusitana.className} text-2xl`}>Restaurants</h1>
    </div>
  </div>
  );

}
