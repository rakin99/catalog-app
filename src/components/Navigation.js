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
                <li className='underline'>
                    <NavLink exact to="/technologies/" activeClassName="link-active">
                        <b>Technologies</b>
                    </NavLink>
                </li>
                <li className='underline'>
                    <NavLink to="/sports/" activeClassName="link-active">
                        <b>Sports</b>
                    </NavLink>
                </li>
                <li className='line-length underline'>
                    <input type="search" value={keywords} onChange={e => {
                                                                    dispatch(setKeywords(e.target.value))
                                                                }}
                    />
                    <button onClick={() =>dispatch(loadArticles(category,keywords,filter,sort))}><b>Search</b></button>
                </li>
                <li className='position'>
                    <div>
                        Only English articles?
                        <input type="checkbox" value={filter} onChange={() => {
                                                                                dispatch(setFilter())
                                                                                dispatch(loadArticles(category,keywords,!filter,sort))
                                                                                }
                                                                        }
                        />
                    </div>
                    <div>
                        Sort articles:
                        <select value={sort} onChange={e => {
                                                                dispatch(setSort(e.target.value))
                                                                dispatch(loadArticles(category,keywords,filter,e.target.value))
                                                            }
                                                        }
                        >
                            <option value='published_desc'>DESC</option>
                            <option value='published_asc'>ASC</option>
                        </select>
                    </div>
                </li>
                {/* <li className='f-right'>
                    
                </li> */}
            </ul>
        </nav>
    )
}

export default Navigation