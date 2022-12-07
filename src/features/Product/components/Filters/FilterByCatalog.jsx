import PropTypes from "prop-types";
import "../../pages/styles.scss";
import { Collapse, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import { Add } from "@mui/icons-material";
import catalogApi from "./../../../../api/catalogApi";
import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
FilterByCatalog.propTypes = {
  onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {},
  link: {
    color: "inherit",
    textDecoration: "none",
    "&.active > div": {
      // backgroundColor: theme.palette.action.selected,
      color: "black",
    },
  },
}));
function FilterByCatalog({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    (async () => {
      try {
        const list = await catalogApi.getAll();

        setCategoryList(list.data);
      } catch (error) {
        console.log("failed to fetch category list", error);
      }
    })();
  }, []);
  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category);
    }
  };
  return (
    <div className="main__viewcat">
      <h2 className="main__viewcat--title">Danh Mục</h2>
      <h3 className="main__viewcat--title">Trang chủ</h3>
      <List sx={{ width: "90%" }} className="main__viewcat--list">
        <ListItemButton onClick={handleClick} autoFocus={true} disableGutters>
          <ListItemText primary="Sản phẩm" className="main__viewcat--txt" />
          {open ? <RemoveIcon /> : <Add />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {categoryList.map((category) => (
              <ListItemButton
                key={category._id}
                onClick={() => handleCategoryClick(category)}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={category.name} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <h3 className="main__viewcat--title">Giảm giá</h3>
    </div>
  );
}

export default FilterByCatalog;
