// import React from 'react';
import PropTypes from 'prop-types'
const Bookmarks = ({bookMarks}) => {
    return (
        <div className="bg-[rgba(17,17,17,0.05)] h-fit py-2 rounded-xl">
            <h2 className="mt-7 font-bold text-xl ">Bookmarked Blogs : {bookMarks.length}</h2>
            <div className="m-5 flex flex-col gap-5">
                {
                    bookMarks.map((bms,idx)=>{
                        return <h3 className='bg-[rgb(255,255,255)] p-5 rounded-xl font-semibold text-start' key={idx}>{bms.title}</h3>
                    })
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookMarks : PropTypes.array.isRequired
}
export default Bookmarks;