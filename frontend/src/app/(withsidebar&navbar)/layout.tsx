"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Provider } from "react-redux";
import store from "../../store";

export default function LayoutSideNav({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* <!-- Navbar start --> */}
            <Navbar />
            {/* <!-- Navbar end --> */}

            {/* <!-- Sidebar start--> */}
            <div className="flex">
                <Sidebar />
                {/* <!-- Sidebar end --> */}

                <div className="w-screen">
                    {/* <!-- your content goes here --> */}
                    <Provider store={store}>{children}</Provider>
                </div>
            </div>
        </>
    );
}
