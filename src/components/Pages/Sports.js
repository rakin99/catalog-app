import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { loadArticles } from "../../store/articles";
import Article from "../Article";

function Sports(){

    const articles = useSelector((state) => state.articles.data);
    const keywords = useSelector((state) => state.keywords);
    const filter = useSelector((state) => state.filter);
    const sort = useSelector((state) => state.sort);
    const offset = useSelector((state) => state.offset);
    const total = useSelector((state) => state.articles.pagination.total);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadArticles('sports',keywords,filter,sort));
    }, [dispatch]);
    console.log('Keywords: '+keywords)
    return(
        <section>
            <InfiniteScroll
                dataLength={articles.length}
                next={() => dispatch(loadArticles('sports',keywords,filter,sort,offset,'scroll'))}
                hasMore={offset==total?false:true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {articles.map((article,i) => {
                    return <Article key={i} article={article} />
                })}
            </InfiniteScroll>
        </section>
    )
}

export default Sports