import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import infoArr from "../../infoArr"
import './bookDetails.css';
const BookDetails = () => {
    const location = useLocation()
    const detail = infoArr.find((item) => item.id === location.state.id)
    const [show, setshow] = useState(true)
    return (
        <div className='detail'>
            <img src={detail.imageUrl} alt="" />
            <h3>{detail.bookName}</h3>
            <p>{detail.author}</p>
            <p >{detail.date}</p>
            {
                show ? <p onClick={() => setshow(false)} className='show'>about the book</p> :
                    <p className='detailP'>{detail.description}
                        <p onClick={() => setshow(true)} className='showLessX'>X</p>
                    </p>
            }
            <Link to={detail.readBook} target='blank'>Read</Link>
        </div>
    )
}

export default BookDetails