import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import "./styles.scss";
import { useHistory } from "react-router-dom";
NewsPage.propTypes = {
  data: PropTypes.array,
};

function NewsPage({ data = [] }) {
  const history = useHistory();
  return (
    <div className="sectionNews">
      <Container>
        <div className="sectionNews__head">
          <h3 className="sectionNews__head--title">
            TIN TỨC &nbsp;
            <a href="#" className="sectionNews__head--link">
              HERBAL OIL
            </a>
          </h3>
        </div>
        <Grid container spacing={2} className="sectionNews__blog" pt={2}>
          {data.map((blog) => (
            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              lg={3}
              className=""
              onClick={() => {
                history.push(`/blogs/${blog._id}`);
              }}
            >
              <div className="sectionNews__item">
                <div className="sectionNews__item--thumbnailUrl">
                  <img src={blog.thumbnail} alt="" />
                </div>
                <div className="sectionNews__item--titleBlog">
                  <a href=""> {blog.title}</a>
                </div>
                <div className="sectionNews__item--descBlog">
                  <p>{blog.content}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default NewsPage;
