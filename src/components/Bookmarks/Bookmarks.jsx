import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-slate-300 mt-4
     rounded">
      <div className="bg-gray-200 rounded">
        <h2 className="text-center text-2xl font-bold">Reading Time : {readingTime} mins</h2>
      </div>
      <h3 className="text-3xl  text-center mt-4 rounded">Bookmarked Blogs :{bookmarks.length}</h3>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}

export default Bookmarks;