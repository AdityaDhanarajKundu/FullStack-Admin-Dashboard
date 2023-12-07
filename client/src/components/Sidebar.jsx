// importing the required function and components from the package of mui
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  useTheme,
} from "@mui/material";

// importing the required icons from the mui package
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "../assets/unsplash.jpg";

function Sidebar({drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile}) {
  const {pathname} = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme(); 
  
  useEffect(()=>{
    setActive(pathname.substring(1));
  },[pathname]);

  return (
    <Box component={"nav"}>
        {isSidebarOpen && (
            <Drawer 
                open={isSidebarOpen}
                onClose={()=>setIsSidebarOpen(false)}
                variant="persistent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    "& .MuiDrawer-paper": {
                        color : theme.palette.secondary,
                    },
                }}
                }}
            />
        )}
    </Box>
  );
}

export default Sidebar;
