import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookmarks,handleReadingTime}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="mt-8">
      {/* <h2>{blogs.length}</h2> */}
      {blogs.map((blog) => {
        return <Blog key={blog.id} handleBookmarks={()=>{handleBookmarks(blog)}} handleReadingTime={handleReadingTime} blog={blog}></Blog>
      })}
    </div>
  );
}
Blogs.propTypes = {
    handleBookmarks : PropTypes.func.isRequired,
    handleReadingTime : PropTypes.func.isRequired
};
export default Blogs;
