export default function MenuItemCard({ item }: { item: { name: string; plate: string; customize: Array<string>}}) {
    return (
        <div className="w-64 h-48 bg-gray-100 rounded-md p-2">
            <div className="flex flex-row items-center justify-between">
                <p className="text-lg">{item.name}</p>
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