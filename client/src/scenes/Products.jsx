import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from "../state/api";
import Header from "../components/Header";

// Product component for each individual product rather than creating the component seperately
function Product({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat
}){
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);  // to toggle the see more button
    
    return(
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem",
            }}
        >
            <CardContent>
                <Typography sx={{fontSize : 14}} color={theme.palette.secondary[700]} gutterBottom >
                    {category}
                </Typography>
                <Typography variant="h5" component={"div"} >
                    {name}
                </Typography>
                <Typography sx={{mb : "1.5rem"}} color={theme.palette.secondary[400]} >
                    ${Number(price).toFixed(2)}
                </Typography>
                <Rating value={rating} readOnly />

                <Typography variant="body2">{description}</Typography>
            </CardContent>

            <CardActions>
                <Button
                    variant="primary"
                    size="small"
                    onClick={() => setIsExpanded(!isExpanded)}
                >See More</Button>
            </CardActions>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit sx={{color: theme.palette.neutral[300]}}>
                <CardContent>
                    <Typography>id: {_id}</Typography>
                    <Typography>Supply Left: {supply}</Typography>
                    <Typography>Yearly Sales This Year: {stat.yearlySalesTotal}</Typography>
                    <Typography>Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

Product.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    supply: PropTypes.number.isRequired,
    stat: PropTypes.object.isRequired
};

function Products() {
  const {data, isLoading} = useGetProductsQuery();  

  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  
  console.log("data", data);  // should show list of 30 products from the database
    
  return (
    <Box margin={"1.5rem 2.5rem"}>
      <Header title="PRODUCTS" subtitle="See your list of products" />
      {data || !isLoading ? (
        <Box 
            mt={"20px"}
            display={"grid"}
            gridTemplateColumns={"repeat(4, minmax(0, 1fr))"}
            justifyContent={"space-between"}
            rowGap={"20px"}
            columnGap={"1.33%"}
            sx={{
                "& > div": {gridColumn: isNonMobile ? undefined : "span 4"} // using media query to change the grid column span and making it responsive for all devices
            }}
        >
            {data.map(({_id, name, description, price, rating, category, supply, stat})=>(
                <Product 
                    key={_id}
                    _id={_id}
                    name={name}
                    description={description}
                    price={price}
                    rating={rating}
                    category={category}
                    supply={supply}
                    stat={stat}
                />
            ))}
        </Box>
      ):(
        <>Loading...</>
      )}
    </Box>
  );
}

Products.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    supply: PropTypes.number.isRequired,
    stat: PropTypes.object.isRequired
};

export default Products;
