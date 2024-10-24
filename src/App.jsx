import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }


  const handleMarkAsRead = time =>{
    console.log(time);
    console.log(readingTime)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }


  return (
    <>

      <Header></Header>
      <div className='md:flex justify-between gap-6 max-w-6xl mx-auto'>
        <Blogs 
        handleAddToBookmark={handleAddToBookmark} 
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
