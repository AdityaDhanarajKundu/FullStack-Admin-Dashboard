import {Box, useTheme} from "@mui/material";
import { useGetGeographyQuery } from "../state/api";
import Header from "../components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "../state/data";

function Geography() {
  const theme = useTheme();
  const {data} = useGetGeographyQuery();
  console.log(data);  
    
  return (
    <div>
      <h1>Geography</h1>
    </div>
  );
}

export default Geography;