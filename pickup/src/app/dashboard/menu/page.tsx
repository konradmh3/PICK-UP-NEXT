import { lusitana } from "@/app/ui/fonts";
import { fetchRestrauntMenu } from '@/app/lib/data';
import MenuItemCard from '@/app/ui/menucard';

export default async function Menu({
    searchParams,
  }: {
    searchParams?: {
      restaurantID?: string;
    };
  }) {

    const restaurantID = Number(searchParams?.restaurantID || '');
    const restarauntMenuItems =  await fetchRestrauntMenu(restaurantID);
    // for each item in the menu, edit the customize string to an array of strings
    // restarauntMenuItems.forEach((item) => {
    //     item.customize = item.customize.split(',').map((custom) => custom.trim());
    //   });

    var restaurantName = 'There is no items to display. Please select A Restaurant Menu on the Restaurant Page';
    
    if(restarauntMenuItems[0] !== undefined){
        restaurantName = restarauntMenuItems[0].name + " Menu:";
    }

  return(
  <div className="w-full max-w-7xl">
    <div className="flex w-full items-center justify-between">
      <h1 className={`${lusitana.className} text-2xl`}>{restaurantName}</h1>
    </div>
    <div className="mt-4 flex flex-col gap-2 md:mt-8 md:justify-flex-start md:flex-row md:flex-wrap text-black">
      {restarauntMenuItems.map((item) => (
        <MenuItemCard key={Number(item.id)} item={item}/>
        ))}
    </div>
  </div>
  );

}
