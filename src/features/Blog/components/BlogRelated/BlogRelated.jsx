import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import "./styles.scss";
BlogRelated.propTypes = {};

function BlogRelated(props) {
  let { imgSrc, titleblog } = props.data;
  return (
    <div className="post">
      <Card sx={{ boxShadow: "none", outline: "none" }}>
        <CardActionArea sx={{ width: "100%" }}>
          <div className="post__image">
            <CardMedia component="img" height="140" image={imgSrc} alt="green iguana" />
          </div>
          <CardContent>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                textAlign: "center",
                paddingBottom: "0px",
              }}
            >
              {titleblog}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default BlogRelated;
