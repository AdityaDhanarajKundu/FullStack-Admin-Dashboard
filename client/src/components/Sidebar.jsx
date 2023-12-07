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

// creating a list/array of navItems
const navItems = [
    {
        text : "Dashboard",
        icon : <HomeOutlined />,
    },
    {
        text: "Client Facing",
        icon: null,
      },
      {
        text: "Products",
        icon: <ShoppingCartOutlined />,
      },
      {
        text: "Customers",
        icon: <Groups2Outlined />,
      },
      {
        text: "Transactions",
        icon: <ReceiptLongOutlined />,
      },
      {
        text: "Geography",
        icon: <PublicOutlined />,
      },
      {
        text: "Sales",
        icon: null,
      },
      {
        text: "Overview",
        icon: <PointOfSaleOutlined />,
      },
      {
        text: "Daily",
        icon: <TodayOutlined />,
      },
      {
        text: "Monthly",
        icon: <CalendarMonthOutlined />,
      },
      {
        text: "Breakdown",
        icon: <PieChartOutlined />,
      },
      {
        text: "Management",
        icon: null,
      },
      {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />,
      },
      {
        text: "Performance",
        icon: <TrendingUpOutlined />,
      },
];

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
                        color : theme.palette.secondary[200],
                        backgroundColor: theme.palette.background.alt,
                        boxSizing: "border-box",
                        borderWidth: isNonMobile ? 0 : "2px",
                        width: drawerWidth,
                    },
                }}
            >
                <Box width={"100%"}>
                    <Box margin={"1.5rem 2rem 2rem 3rem"}>
                        <FlexBetween color={theme.palette.secondary.main}>
                            <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
                                <Typography variant="h4" fontWeight="bold">
                                    InsightFusion
                                </Typography>
                            </Box>
                            {!isNonMobile && (
                                <IconButton onClick={()=> setIsSidebarOpen(!isSidebarOpen)} >
                                    <ChevronLeft />
                                </IconButton>
                            )}
                        </FlexBetween>
                    </Box>
                    <List>
                        {navItems.map(({text,icon})=>{
                            if(!icon){
                                return(
                                    <Typography key={text} sx={{margin: "2.25rem 0 1rem 3rem"}}>
                                        {text}
                                    </Typography>
                                )
                            }
                            const lctext = text.toLowerCase();
                            return(
                                <ListItem key={text} disablePadding>
                                    <ListItemButton
                                        onClick={()=>{
                                            navigate(`/${lctext}`); // navigate to the url path
                                            setActive(lctext); // add the active class to highlight the css styling and color from mui
                                        }}
                                        sx={{
                                            backgroundColor: active === lctext ? theme.palette.secondary[300] : "transparent",
                                            color: active === lctext ? theme.palette.primary[600] : theme.palette.secondary[200],
                                        }}
                                    >
                                        <ListItemIcon sx={{
                                            ml: "2rem",
                                            color: active === lctext ? theme.palette.primary[600] : theme.palette.secondary[200],
                                        }}>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                        {active === lctext && (
                                            <ChevronRightOutlined sx={{ml: "auto"}} />
                                        )}
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Drawer>
        )}
    </Box>
  );
}

export default Sidebar;
