import React from 'react'
import Error from '../Image/Error_404.gif'

const NewsItems = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <>
            <div className="container my-3">
                <div className="card text-bg-dark border-light my-3" style={{ minWidth: "5cm", minHeight: "5cm" }}>
                    <span className="position-absolute top-0 translate-middle badge text-bg-danger" style={{ zIndex: "1", left: "70%", minWidth: "4cm" }}>
                        {source}
                    </span>
                    <img src={imageUrl ? imageUrl : Error} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-outline-light">Read More</a>
                    </div>
                    <div className="card-footer border-light">
                        <small className="text-secondary card-text">&rarr; By {author} on {new Date(date).toGMTString()} and the name of source is {source}.</small>
                    </div>
                </div>
            </div>
            {/* Default API Key : https://newsapi.org/v2/top-headlines?apiKey=2191619e4f2d4587bbbcd19d7fdae19d&q=space */}
            {/* Image Link Of Elon Musk : https://www.hindustantimes.com/ht-img/img/2023/08/27/1600x900/elon_musk_1693127495860_1693127496200.JPG */}
            {/* Image Link Of Error 404 : https://i.pinimg.com/originals/bd/df/d6/bddfd6e4434f42662b009295c9bab86e.gif */}
        </>
    )

}

export default NewsItems