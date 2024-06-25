import Nav from "@/app/ui/nav";

export default function Layout({ children }: { children: React.ReactNode }){
    return (
    <div className="flex flex-col overflow-y-auto h-screen md:flex-row md:overflow-hidden">
        <div className="flex-none  md:w-64">
            <Nav/>
        </div>
        <div className="flex-grow p-6 md:p-12 md:overflow-y-auto">
            {children}
        </div>
    </div>
    );
    }
    