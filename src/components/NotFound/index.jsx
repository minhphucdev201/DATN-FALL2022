import React from "react";
import PropTypes from "prop-types";
import { Container, Typography } from "@mui/material";

NotFound.propTypes = {};

function NotFound(props) {
  return (
    <div>
      <Container sx={{ marginTop: "24px" }}>
        <div>
          <img
            style={{ maxHeight: "600px", width: "100%" }}
            src="https://res.cloudinary.com/phucdev/image/upload/v1666628073/undraw_Page_not_found_re_e9o6_toye49.png"
          />
        </div>
        <Typography variant="h2" align="center" sx={{ color: "#3F3D56" }}>
          Not Found
        </Typography>
      </Container>
    </div>
  );
}

export default NotFound;
