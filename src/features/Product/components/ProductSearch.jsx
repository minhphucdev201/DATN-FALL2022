import { Box, FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import { Search } from "@mui/icons-material";
import { React, useRef, useState } from "react";

ProductSearch.propTypes = {
  onSubmit: null,
};

function ProductSearch({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: e.target.value,
      };
      onSubmit(formValues);
    }, 500);
  };
  return (
    <Box>
      <FormControl variant="outlined" size="small">
        <InputLabel htmlFor="searchByName">Tìm kiếm sản phẩm</InputLabel>
        <OutlinedInput
          id="searchByName"
          label="Search By Name"
          // onChange={handleSearchChange}
          // inputRef={searchRef}
          endAdornment={<Search />}
        />
      </FormControl>
    </Box>
  );
}

export default ProductSearch;
