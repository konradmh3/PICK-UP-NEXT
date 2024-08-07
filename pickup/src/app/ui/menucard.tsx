export default function MenuItemCard({ item }: { item: {name: string; menuitem: string; customize: Array<string>; amount: number;}}) {
    const amountToDollars = item.amount / 100;

    return (
        <div className="h-48 grow bg-gray-100 rounded-md p-2 md:w-64">
            <div className="flex flex-row items-start justify-between">
                <p className="flex text-lg flex-wrap">{item.menuitem}</p>
                <p className="text-lg">${amountToDollars}</p>
            </div>
            <div className="text-sm">
                Customize: 
                {item.customize.map((custom, index) => (
                    <div key={index} className="text-xs bg-gray-500 rounded-md w-fit my-2 px-1">{custom}</div>
                ))}
            </div>
        </div>
    )
}
