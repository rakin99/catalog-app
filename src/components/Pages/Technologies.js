import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { loadArticles } from "../../store/articles";
import Article from "../Article";
import InfiniteScroll from "react-infinite-scroll-component";

function Technologies(){

    const articles = useSelector((state) => state.articles.data);
    const total = useSelector((state) => state.articles.pagination.total);
    const keywords = useSelector((state) => state.keywords);
    const filter = useSelector((state) => state.filter);
    const sort = useSelector((state) => state.sort);
    const offset = useSelector((state) => state.offset);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadArticles('technology',keywords,filter,sort,offset));
    }, [dispatch]);
    
    return(
        <section>
            <InfiniteScroll
                dataLength={articles.length}
                next={() => dispatch(loadArticles('technology',keywords,filter,sort,offset,'scroll'))}
                hasMore={offset==total?false:true}
                loader={<h4 className='text-center'>Loading...</h4>}
                endMessage={
                    <p className='text-center'>
                        <b>Yay! You have seen it all.</b>
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

export default Technologies