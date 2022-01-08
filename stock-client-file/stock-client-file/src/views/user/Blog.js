import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { getAllBlogs } from "../../api/blog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    getAllBlogs()
      .then((res) => {
        setBlogs(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Container>
        <h3>Blogs</h3>
        <Row>
          <Col md={12}>
            {blogs.map((blog) => {
              return (
                <div>
                  {blog.country === "IN" ? (
                    <Card className="my-4">
                      <Card.Body>
                        <h4>{blog.blog_title}</h4>
                        <p>{blog.blog_content}</p>
                      </Card.Body>
                    </Card>
                  ) : null}
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
