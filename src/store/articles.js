import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "articles",
    initialState: {
        articles: {
            "pagination": {},
            "data": []
        },
        keywords:'',
        loading: false,
        category:''
    },
    reducers: {
        articlesRequested: (articles, action) => {
            articles.loading = true;
        },

        articlesReceived: (articles, action) => {
            console.log(action.payload)
            articles.articles = action.payload.data;
            articles.category = action.payload.category;
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
        setKeywords: (state,action) => {
            state.keywords = action.payload;
        },
    },
});

export const { increment, decrement,setKeywords } = slice.actions;
export default slice.reducer;


const { articlesRequested, articlesReceived, articlesRequestFailed } = slice.actions;

const url = "/news";

const apiKey = "ea285b333da0243b90f789a85772e103";

export const loadArticles = (category,keywords) => (dispatch) => {
    console.log('Load articles: '+keywords)
    return dispatch(
        apiCallBegan({
            keywords,
            apiKey,
            category,
            url,
            onStart: articlesRequested.type,
            onSuccess: articlesReceived.type,
            onError: articlesRequestFailed.type,
        })
    );
};
