import React from "react";
import PropTypes from "prop-types";
import { Box, Chip } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useMemo } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    margin: theme.spacing(2, 0),
    padding: 0,
    listStyleType: "none",

    "& > li ": {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));
FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};
const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => "Miễn phí vận chuyển ",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => "Đang giảm giá",
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: () => {},
  },
  // {
  //   id: 3,
  //   getLabel: (filters) => `${filters.salePrice["$gte"]} `,
  //   isActive: () => true,
  //   isVisible: (filters) => Object.keys(filters).includes("salePrice[$gte]"),
  //   isRemovable: true,
  //   onRemove: (filters) => {
  //     const newFilters = { ...filters };
  //     delete newFilters.salePrice[$gte];
  //     return newFilters;
  //   },
  //   onToggle: () => {},
  // },
  {
    id: 4,
    getLabel: (filters) => `Danh mục: ${filters["idCatalog"]}`,
    isActive: () => true,
    isVisible: (filters) => filters["idCatalog"],
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters["idCatalog"];
      return newFilters;
    },
    onToggle: (filters) => {},
  },
];
function FilterViewer({ filters = {}, onChange = null }) {
  const classes = useStyles();
  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);
  return (
    <Box component="ul" sx={{ marginBottom: "24px" }} className={classes.root}>
      {visibleFilters.map((x) => (
        <li component="li" key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? "success" : "default"}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;
                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;
                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
