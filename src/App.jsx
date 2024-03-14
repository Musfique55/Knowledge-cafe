import './App.css'
import Header from './Header/Header'
import './index.css'
import Blogs from './Blogs/Blogs.jsx'
import Bookmarks from './Bookmarks.jsx/Bookmarks.jsx'
import { useState } from 'react'
import MarkAsRead from './Markasread/MarkAsRead.jsx'


function App() {
  const [bookMarks,setBookMarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleBookmarks = (title)=>{
    const bms = [...bookMarks,title];
    setBookMarks(bms);
  }

  const handleReadingTime = (blogs,id) => {
    const time = (readingTime + blogs);
    setReadingTime(time);
    // remove read items from bm
    const remainingBm = bookMarks.filter((bookMark)=>bookMark.id !== id);
    setBookMarks(remainingBm);
  }

  return (
    <>
      <div>
      <Header></Header>
      <div className="flex gap-6">
      <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
      <div className='w-1/3 mt-8'>
        <MarkAsRead  readingTime={readingTime}></MarkAsRead>
        <Bookmarks bookMarks={bookMarks} ></Bookmarks>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
