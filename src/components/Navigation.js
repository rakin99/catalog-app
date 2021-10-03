import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavLink} from "react-router-dom";
import { loadArticles, setKeywords } from "../store/articles";

function Navigation(){

    const keywords = useSelector(state => state.keywords);
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();
    console.log('Keywords: '+keywords)
    return(
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/technologies/">
                        <b>Technologies</b>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sports/">
                        <b>Sports</b>
                    </NavLink>
                </li>
                <li>
                    <input type="text" value={keywords} onChange={e => {
                                                                    dispatch(setKeywords(e.target.value))
                                                                }}
                    />
                    <button onClick={(e) =>dispatch(loadArticles(category,keywords))}>Search</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation