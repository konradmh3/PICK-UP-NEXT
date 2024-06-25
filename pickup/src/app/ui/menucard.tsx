export default function MenuItemCard({ item }: { item: { name: string; menuitem: string; customize: Array<string>}}) {
    return (
        <div className="h-48 bg-gray-100 rounded-md p-2 md:w-64">
            <div className="flex flex-row items-center justify-between flex-wrap">
                <p className="text-lg">{item.menuitem}</p>
                <p className="text-lg">$10</p>
            </div>
            <p className="text-sm">
                Customize: 
                {item.customize.map((custom) => (
                    <div key={custom} className="text-xs bg-gray-500 rounded-md w-fit my-2 px-1">{custom}</div>
                ))}
            </p>
        </div>
    )
}
