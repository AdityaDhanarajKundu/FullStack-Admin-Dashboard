import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "../state/api";
import Header from "../components/Header";
import { useTheme, Box } from "@mui/material";
import DataGridCustomToolbar from "../components/DataGridCustomToolbar";

function Transactions() {
  const theme = useTheme();

  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState(""); //temporary state to hold the what is the status of the search input value

  // calling the function to the backend
  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

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
      renderCell: (params) => {
        return params.value.length;
      },
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => {
        return `Rs. ${Number(params.value).toFixed(2)}`;
      },
    },
  ];

  return (
    <Box m={"1.5rem 2.5rem"}>
      <Header title="TRANSACTIONS" subtitle="Entire List of Transactions" />
      <Box
        height={"80vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.primary.light,
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}  // options for the users to choose how many rows they want
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{Toolbar: DataGridCustomToolbar}}
          componentsProps={{
            toolbar: {searchInput, setSearchInput, setSearch,}
          }}
        />
      </Box>
    </Box>
  );
}

export default Transactions;
