import PropTypes from 'prop-types';
import { PiBookmarkSimple } from "react-icons/pi";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

  const { title, cover_img, author_img, author, posted_date, reading_time, hashtags } = blog;

  return (
    <div className='mt-20'>
      <img className='w-full h-96 mb-4' src={cover_img} alt="" />
      <div className='flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
          <img className='w-10 h-10 rounded-full' src={author_img} alt="" />
          <div>
            <h4>{author}</h4>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <p>{reading_time} min read</p>
          <button
            onClick={() => handleAddToBookmark(blog)}
          ><PiBookmarkSimple />
          </button>
        </div>
      </div>
      <h3 className='text-3xl'>{title}</h3>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
        }
      </p>
      <button
      onClick={() => handleMarkAsRead(reading_time)} 
      className='mt-4 text-purple-400 underline'>Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}

export default Blog;