import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavLink} from "react-router-dom";
import { loadArticles, setKeywords, setFilter } from "../store/articles";

function Navigation(){

    const keywords = useSelector(state => state.keywords);
    const category = useSelector(state => state.category);
    const filter = useSelector(state => state.filter);
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
                    <button onClick={() =>dispatch(loadArticles(category,keywords))}>Search</button>
                </li>
                <li>
                    Filter and display only articles on English?
                    {/* {filter?<input type="checkbox" checked onChange={() => dispatch(setFilter())}/>:<input type="checkbox" onChange={() => {
                                                                                                                                            dispatch(setFilter())
                                                                                                                                            dispatch(loadArticles(category,keywords,filter))
                                                                                                                                            }
                                                                                                                                    }
                                                                                                    />
                    } */}
                    <input type="checkbox" value={filter} onChange={() => {
                                                                            dispatch(setFilter())
                                                                            dispatch(loadArticles(category,keywords,!filter))
                                                                            }
                                                                    }
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Navigation