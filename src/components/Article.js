import React from "react";

function Article(props){
    const article = props.article;
    return(
        <article>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            {article.image?<img src={article.image} alt={`Image for ${article.title}`} />:''}
            <a href={article.url} target="_blank">{article.url}</a>
            <p className='text-right'><i>{article.author?article.author:'No authors'}, {new Date(article.published_at).toDateString()}</i></p>
        </article>
    )
}

export default Article