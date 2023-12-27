import { useState } from "react";
import {Box, useMediaQuery} from "@mui/material";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useGetUserQuery } from "../state/api";

function Layout(){
    const isNonMobile = useMediaQuery("(min-width: 600px)"); 

    // state values to toggle the sidebar 
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // get the user id state value from the global state in redux store
    const userId = useSelector((state)=> state.global.userId);

    // making the api call to retrieve the user data using the useGetUserQuery hook RTKQ
    const {data} = useGetUserQuery(userId);
    
    return(
        <Box display={isNonMobile ? "flex" : "block"} width={"100%"} height={"100%"}>
            <Sidebar 
                user={data || {}} //if data is undefined, then pass an empty object
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box flexGrow={1}>
                <Navbar 
                    user={data || {}}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    );
}

export default Layout;