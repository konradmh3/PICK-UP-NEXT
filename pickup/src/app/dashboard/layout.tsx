import Nav from "@/app/ui/nav";

export default function Layout({ children }: { children: React.ReactNode }){
    return (
    <div className="flex  flex-col md:h-screen md:flex-row md:overflow-hidden">
        <div className="flex-none  md:w-64">
            <Nav/>
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
        </div>
    </div>
    );
    }
    