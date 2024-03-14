import PropTypes from 'prop-types';

const MarkAsRead = ({readingTime}) => {
    return (
        <div className='bg-[rgba(96,71,236,0.1)] p-5 rounded-xl mb-5'>
            <h2 className='text-[rgb(96,71,236)] font-bold'>Spent time on read : {readingTime}min</h2>
        </div>
    );
};

MarkAsRead.propTypes = {
    readingTime : PropTypes.number.isRequired
};

export default MarkAsRead;