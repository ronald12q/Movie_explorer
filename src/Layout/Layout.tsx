import { Outlet } from "react-router-dom";
import {Sidebar} from "../components/Sidebar";





export const Layout = () => {

    return (
        <div className="flex min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <Sidebar  />
            <main className="flex-1 overflow-auto">
                <Outlet/>
            </main>
        </div>
    );
};