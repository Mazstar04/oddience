import SideBar from "../containers/SideBar";
import TopNav from "../containers/TopNav";

const Nav = ({children}) => {
    return ( 
        <div className="flex h-[100vh] p-[30px] md:p-[20px] lg:gap-[30px]">
            <div>
                <SideBar/>
            </div>
            <div className="flex flex-col w-full lg:gap-[20px]">
                <div >
                    <TopNav/>
                </div>
                <div className="h-full overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
     );
}
 
export default Nav;