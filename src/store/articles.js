import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "articles",
    initialState: {
        articles: {
            "pagination": {
                "limit": 100,
                "offset": 0,
                "count": 100,
                "total": 293
            },
            "data": [
                {
                    "author": "CNN Staff",
                    "title": "This may be the big winner of the market crash",
                    "description": "This may be the big winner of the market crash",
                    "url": "http://rss.cnn.com/~r/rss/cnn_topstories/~3/KwE80_jkKo8/a-sa-dd-3",
                    "source": "CNN",
                    "image": "https://cdn.cnn.com/cnnnext/dam/assets/150325082152-social-gfx-cnn-logo-super-169.jpg",
                    "category": "general",
                    "language": "en",
                    "country": "us",
                    "published_at": "2020-07-17T23:35:06+00:00"
                },
                {
                    "author": "CNN Staff",
                    "title": "This may be the big winner of the market crash",
                    "description": "This may be the big winner of the market crash",
                    "url": "http://rss.cnn.com/~r/rss/cnn_topstories/~3/KwE80_jkKo8/a-sa-dd-3",
                    "source": "CNN",
                    "image": "https://cdn.cnn.com/cnnnext/dam/assets/150325082152-social-gfx-cnn-logo-super-169.jpg",
                    "category": "general",
                    "language": "en",
                    "country": "us",
                    "published_at": "2020-07-17T23:35:06+00:00"
                }
            ]
        },
        loading: false,
        counter:1
    },
    reducers: {
        articlesRequested: (articles, action) => {
            articles.loading = true;
        },

        articlesReceived: (articles, action) => {
            articles.list = action.payload;
            articles.loading = false;
        },

        articlesRequestFailed: (articles, action) => {
            articles.loading = false;
        },
        increment: state => {
            state.counter = state.counter + 1;
        },
        decrement: state => {
            state.counter = state.counter - 1;
        },
        setCounter: (state,action) => {
            state.counter = action.payload;
        },
    },
});

export const { increment, decrement,setCounter } = slice.actions;
export default slice.reducer;


const { postsRequested, postsReceived, postsRequestFailed } = slice.actions;

const url = "/news";

export const loadPosts = id => (dispatch) => {
    return dispatch(
        apiCallBegan({
            id,
            url,
            onStart: postsRequested.type,
            onSuccess: postsReceived.type,
            onError: postsRequestFailed.type,
        })
    );
};
