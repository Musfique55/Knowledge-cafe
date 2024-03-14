import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";


const Blog = ({blog , handleBookmarks,handleReadingTime})=> {
    // console.log(blog);
    const  {cover,author_img,author,id,reading_time,title,posted_date,hashtags} = blog;
    return (
        <div>
            <div key={id} className="w-full space-y-5">
            <img src={cover} alt="" className="w-full"/>
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <img src={author_img} alt="" className="w-16" />
                <div className="text-start">
                  <h4>{author}</h4>
                  <p>{posted_date}</p>
                </div>
              </div>
              <div className="flex gap-5">
                <p>{reading_time}min read</p>
                <button onClick={()=>{handleBookmarks()}}><FaBookmark></FaBookmark></button>
              </div>
            </div>
              <h3 className="text-3xl font-semibold text-left">{title}</h3>
              <div className="flex gap-2">
                {
                    hashtags.map((tags,idx)=>{
                      return (<p key={idx}>#<span>{tags}</span></p>)
                    })
                }
              </div>
              <div className="flex justify-start">
              <button onClick={()=>{handleReadingTime(reading_time,id)}} className="text-xl text-[rgb(96,71,236)] mb-5" href="">Mark As Read</button>
              </div>
          </div>
        </div>
    );
}

Blog.propTypes = {
  blog : PropTypes.object.isRequired,
  handleBookmarks : PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func
};
export default Blog;