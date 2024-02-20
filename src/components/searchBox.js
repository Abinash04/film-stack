import React, { useState, useEffect } from "react";
// import Autocomplete from "@material-ui/lab/Autocomplete";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import top100Films from "../data/top100";
import axios from "./axios";
import requests from "../requests";
import Row from "./row";
import { textAlign } from "@mui/system";

const RoundedSearchBox = () => {
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        // if (query.trim() !== "") {
        if (query.length >= 3) {
          // Check if query is not empty
          const response = await axios.get(requests.searchMovies, {
            params: { query: query }, // Pass query parameter to the API
          });
          // Assuming the response data is an array of objects with a 'name' property
          console.log("data:", response.data.results);
          setOptions(response.data.results);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [query]); // Refetch data whenever the query changes

  return (
    <div>
      <Autocomplete
        freeSolo
        options={options} // Add your options here
        getOptionLabel={(option) => option.original_title}
        getOptionKey={(option) => option.id} // Compare IDs
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                borderRadius: 20,
                width: "auto",
                backgroundColor: "white",
              }, // Adjust the borderRadius as needed
            }}
            onChange={(e) => setQuery(e.target.value)} // Update query state on input change
          />
        )}
      />
      {options.length > 0 && (
        <Row
          title="Search Results"
          sx={{ "text-align": "left" }}
          fetchUrl={
            requests.searchMovies + "&query=" + encodeURIComponent(query)
          }
          isLargeRow
        />
      )}
    </div>
  );
};

export default RoundedSearchBox;
