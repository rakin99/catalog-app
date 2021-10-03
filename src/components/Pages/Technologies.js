import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { loadArticles } from "../../store/articles";
import Article from "../Article";

function Technologies(){

    const articles = useSelector((state) => state.articles.data);
    const keywords = useSelector((state) => state.keywords);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadArticles('technology',keywords,filter));
    }, [dispatch]);
    console.log('Keywords: '+keywords)
    return(
        <section>
            {articles.map((article,i) => {
               return <Article key={i} article={article} />
            })}
        </section>
    )
}

export default Technologies