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
        category:'',
        filter:false,
        sort:'published_desc',
        offset:0
    },
    reducers: {
        articlesRequested: (articles, action) => {
            articles.loading = true;
        },

        articlesReceived: (articles, action) => {
            console.log(action.payload.data)
            if(action.payload.scroll==='scroll'){
                action.payload.data.data.map(article=>{
                    articles.articles.data.push(article);
                })
                articles.articles.pagination = action.payload.data.pagination;
            }else{
                articles.articles = action.payload.data;
            }
            articles.category = action.payload.category;
            articles.sort = action.payload.sort;
            articles.loading = false;
            if((articles.offset+25)>action.payload.data.pagination.total){
                console.log("Razlika: "+action.payload.data.pagination.total-articles.offset)
                articles.offset = articles.offset + (action.payload.data.pagination.total-articles.offset);
            }else{
                articles.offset = articles.offset + 25;
            }
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
        setFilter: state => {
            state.filter=!state.filter;
        },
        setSort: (state,action) => {
            state.sort = action.payload
        }
    },
});

export const { increment, decrement, setKeywords, setFilter, setSort } = slice.actions;
export default slice.reducer;


const { articlesRequested, articlesReceived, articlesRequestFailed } = slice.actions;

const url = "/news";

const apiKey = "ef48b4be0bc0b5805f013699bb6b9e67";

export const loadArticles = (category,keywords,filter,sort,offset,scroll) => (dispatch) => {
    console.log('\n\tLoad articles!\n')
        return dispatch(
            apiCallBegan({
                offset,
                scroll,
                sort,
                filter,
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
