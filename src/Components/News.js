import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    // articles = []

    const capital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2191619e4f2d4587bbbcd19d7fdae19d&page=${page}&pageSize=${props.pageSize}`;
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        console.log(parsedData);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `The Daily Meme | ${capital(props.category)}`;
        updateNews();
    }, [])

    const PreviousPage = async () => {
        setPage(page - 1);
        updateNews();
        console.log("Previous Page");
    }

    const NextPage = async () => {
        setPage(page + 1);
        updateNews();
        console.log("Next Page");
    }


    return (
        <>
            <div className="container"><br />
                <h1 className='text-center heading'>The Daily Meme - Top {capital(props.category)} Headlines :</h1>
                {loading && <Spinner />}<br />
                <div className="row">
                    {/* {!loading && articles.map((element) => { */}
                    {/* {articles && articles.map((element) => { */}
                    {articles?.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title ? element.title : "Title Not Available !"} newsUrl={element.url} description={element.description ? element.description : "Description Not Available !"} source={element.source.name} author={element.author ? element.author : "Unknown Author"} date={element.publishedAt} imageUrl={element.urlToImage} />
                        </div>
                    })}
                </div>
            </div>
            <div style={{ marginTop: "1cm" }} className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-outline-light" onClick={PreviousPage}> &larr; Previous Page</button>
                <button type="button" disabled={(page + 1 > Math.ceil(totalResults / props.pageSize))} className="btn btn-outline-light" onClick={NextPage}>Next Page &rarr; </button>
            </div>
            <br />
        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 20,
    category: 'general',
}

News.propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News