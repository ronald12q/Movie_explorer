import { Outlet } from "react-router-dom";
import {Sidebar} from "../components/Sidebar";





export const Layout = () => {

    return (
        <div className="cinema-shell flex min-h-screen text-[#ebdbb2]">
            <Sidebar  />
            <main className="min-w-0 flex-1 overflow-auto">
                <Outlet/>
            </main>
        </div>
    );
};
