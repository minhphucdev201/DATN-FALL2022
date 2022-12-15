import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignContent: "center",
    maxWidth: "120px",
    height: "32px",
    fontSize: "30px",
    flexFlow: "row nowap",
    border: "1px solid #ccc",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),

    "& input": {
      textAlign: "center",
      padding: "0",
    },
    "& fieldset": {
      border: "none",
    },
    "& div": {
      width: "calc(40%)",
      borderRadius: "0",
      borderLeft: "1px solid #ccc",
      borderRight: "1px solid #ccc",
    },
  },
  main: {},
  h4: {
    fontSize: "18px",
    fontWeight: 500,
    color: "#757575",
  },
  quantity: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    // marginTop: theme.spacing(2),
    minWidth: "calc(30%)",
    padding: "0",
  },
}));
function QuantityField(props) {
  const { form, name } = props;
  const classes = useStyles();
  const { setValue } = form;

  return (
    <FormControl error={false} fullWidth variant="outlined" size="small" className={classes.main}>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value, name, ref } }) => {
          return (
            <Box className={classes.quantity}>
              <Typography component="h4" variant="body1" className={classes.h4}>
                Số Lượng:
              </Typography>

              <Box className={classes.root}>
                <Button
                  className={classes.button}
                  size="large"
                  // variant="outlined"
                  disabled={value < 2}
                  onClick={() => {
                    setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1);
                    props?.submitCall();
                  }}
                >
                  <RemoveIcon />
                </Button>
                <OutlinedInput
                  id={name}
                  type="number"
                  onChange={(e) => {
                    const x = +e.target.value < 1 ? "" : +e.target.value;
                    setValue(name, x);
                    props?.submitCall();
                  }}
                  onBlur={onBlur}
                  value={value}
                  variant="none"
                />
                <Button
                  className={classes.button}
                  // variant="outlined"
                  size="large"
                  onClick={() => {
                    setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1);
                    props?.submitCall();
                  }}
                >
                  <AddIcon />
                </Button>
              </Box>
            </Box>
          );
        }}
      />
      {/* <FormHelperText>{!!hasError && errors[name]?.message}</FormHelperText> */}
    </FormControl>
  );
}

export default QuantityField;
