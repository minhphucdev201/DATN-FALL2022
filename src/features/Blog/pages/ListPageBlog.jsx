import { Box, Container, Grid, Pagination } from "@mui/material";
import queryString from "query-string";
import { React, useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import blogApi from "../../../api/blogApi";
import blogCatalogApi from "../../../api/blogCatalogApi";
import BlogBreadcrumbListPage from "../components/BlogBreadcrumbListPage";
import BlogList from "../components/BlogList";
import BlogNewest from "./../components/BlogNewest";
import "./styles.scss";
ListPage.propTypes = {};

function ListPage(props) {
  const history = useHistory();
  const location = useLocation();
  const [blogList, setBlogList] = useState([]);
  const [blogNewest, setBlogNewest] = useState([]);
  const [catalogBlog, setCatalogBlog] = useState([]);
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      page: Number.parseInt(params.page) || 1,
      limit: Number.parseInt(params.limit) || 6,
    };
  }, [location.search]);

  const [pagination, setPagination] = useState({
    limit: 6,
    page: 1,
    total: 7,
  });
  // fetch data blog list
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await blogApi.getAll(queryParams);
        setBlogList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed fetch to data:", error);
      }
    })();
  }, [queryParams]);

  // fetch data blog newest
  useEffect(() => {
    (async () => {
      try {
        const { data } = await blogApi.getBlogNewest({ page: 1, limit: 6 });
        setBlogNewest(data);
      } catch (error) {
        console.log("Failed to fetch blog newest:", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await blogCatalogApi.get();
        setCatalogBlog(data);
      } catch (error) {
        console.log("Failed to fetch catalog blog:", error);
      }
    })();
  }, []);
  const handlePageChange = (e, page) => {
    const filters = {
      ...queryParams,
      page: page,
    };
    history.push({
      // lay pathname hien tai
      pathname: history.location.pathname,
      // update filter len tren url
      search: queryString.stringify(filters),
    });
  };

  function handleClick(event) {
    event.preventDefault();
    history.push("/");
  }

  return (
    <div className="sectionBlog">
      <BlogBreadcrumbListPage />
      <div className="sectionBlog__main">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8} className="sectionBlog__content">
              <BlogList data={blogList} />
              <div className="sectionBlog__pag">
                <Box sx={{ textAlign: "center" }}>
                  <Pagination
                    padding="20px"
                    count={Math.ceil(pagination.total / pagination.limit)}
                    page={pagination.page}
                    onChange={handlePageChange}
                    color="success"
                    size="medium"
                  ></Pagination>
                </Box>
              </div>
            </Grid>

            <Grid item xs={12} lg={4} className="sectionBlog__newslatest">
              <div className="sectionBlog__newslatest--titleblog">
                <h3>Bài viết mới nhất</h3>
              </div>

              <BlogNewest dataNewest={blogNewest} />
            </Grid>
            {/* </div> */}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default ListPage;
