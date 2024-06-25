import { lusitana } from "@/app/ui/fonts";
import { fetchRestrauntMenu } from '@/app/lib/data';
import MenuItemCard from '@/app/ui/menucard';

export default async function Tempcards({
    searchParams,
  }: {
    searchParams?: {
      restaurantID?: string;
    };
  }) {

    const restaurantID = Number(searchParams?.restaurantID || '');
    const restarauntMenuItems =  await fetchRestrauntMenu(restaurantID);
    var restaurantName = 'Select A Restaurant Menu in the Restaurant Page';
    
    if(restarauntMenuItems[0] !== undefined){
        restaurantName = restarauntMenuItems[0].name + " Menu:";
    }

  return(
  <div className="w-full">
    <div className="flex w-full items-center justify-between">
      <h1 className={`${lusitana.className} text-2xl`}>{restaurantName}</h1>
    </div>
    <div className="mt-4 flex flex-col gap-2 md:mt-8 md:justify-flex-start md:flex-row text-black">
      {restarauntMenuItems.map((item) => (
        <MenuItemCard key={item.id} item={item}/>
        ))}
    </div>
  </div>
  );

}
