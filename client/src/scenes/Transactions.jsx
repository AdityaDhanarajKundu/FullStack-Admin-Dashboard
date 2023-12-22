import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "../state/api";
import Header from "../components/Header";
import {
    useTheme, Box, 
} from "@mui/material";
import { render } from "react-dom";


function Transactions(){

    const theme = useTheme();
    
    // values to be sent to the backend
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");

    // calling the function to the backend
    const {data, isLoading} = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search,
    });
    console.log("data", data);

    //creating the columns for the datagrid
    const columns = [
        {
            field: "_id", // this refers to the field in the data base
            headerName: "ID", // this is the column name
            flex: 1,
        },
        {
            field: "userId",
            headerName: "User ID",
            flex: 1,
        },
        {
            field: "createdAt",
            headerName: "CreatedAt",
            flex: 1,
        },
        {
            field: "products",
            headerName: "# of products",
            flex: 0.5,
            sortable: false,
            renderCell: (params)=> {
                return params.value.length
            }
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params)=> {
                return `$${Number(params.value).toFixed(2)}`
            }
        },
    ];
    
    return(
        <Box m={"1.5rem 2.5rem"}>
            <Header title="TRANSACTIONS" subtitle="Entire List of Transactions" />
        </Box>
    );
}

export default Transactions;