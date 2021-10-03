import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavLink} from "react-router-dom";
import { loadArticles, setKeywords, setFilter, setSort } from "../store/articles";

function Navigation(){

    const keywords = useSelector(state => state.keywords);
    const category = useSelector(state => state.category);
    const filter = useSelector(state => state.filter);
    const sort = useSelector(state => state.sort);
    const dispatch = useDispatch();

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
                    <button onClick={() =>dispatch(loadArticles(category,keywords,filter,sort))}>Search</button>
                </li>
                <li>
                    Filter and display only articles on English?
                    <input type="checkbox" value={filter} onChange={() => {
                                                                            dispatch(setFilter())
                                                                            dispatch(loadArticles(category,keywords,!filter,sort))
                                                                            }
                                                                    }
                    />
                </li>
                <li>
                    Articles sort:
                    <select value={sort} onChange={e => {
                                                            dispatch(setSort(e.target.value))
                                                            dispatch(loadArticles(category,keywords,filter,e.target.value))
                                                        }
                                                    }
                    >
                        <option value='published_desc'>DESC</option>
                        <option value='published_asc'>ASC</option>
                    </select>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation