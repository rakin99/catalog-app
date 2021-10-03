import React from "react";

function Article(props){
    const article = props.article;
    return(
        <article>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <p><i>{article.author?article.author:'No authors'}, {new Date(article.published_at).toDateString()}</i></p>
            {article.image?<img src={article.image} width="300" height="300"/>:''}
            <p><a href={article.url} target="_blank">{article.url}</a></p>
            <p>{article.language}</p>
            <hr />
        </article>
    )
}

export default Article