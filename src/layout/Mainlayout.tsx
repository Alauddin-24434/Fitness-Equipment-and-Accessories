
import { Outlet } from "react-router-dom";
import HeaderSection from "../components/Header/HeaderSection";

const Mainlayout = () => {
    return (
        <div className="mx-auto max-w-full">
          

            <HeaderSection />
            <Outlet />
        </div>
    );
};

export default Mainlayout;
