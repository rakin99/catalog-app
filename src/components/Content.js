import { Route, Switch } from "react-router";
import React from 'react';
import Sports from './Pages/Sports'
import Technologies from "./Pages/Technologies";
import './Content.scss'
import { loadArticles, setFilter, setSort } from "../store/articles";
import { useDispatch, useSelector } from "react-redux";



function Content(){
    const keywords = useSelector(state => state.keywords);
    const category = useSelector(state => state.category);
    const filter = useSelector(state => state.filter);
    const sort = useSelector(state => state.sort);
    const dispatch = useDispatch();

    return(
        <main>
            {/* <div className='f-right'>
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
                <div>
                    Only English articles?
                    <input type="checkbox" value={filter} onChange={() => {
                                                                            dispatch(setFilter())
                                                                            dispatch(loadArticles(category,keywords,!filter,sort))
                                                                            }
                                                                    }
                    />
                </div>
            </div> */}
            <Switch>
                <Route path="/" exact component={Technologies}/>
                <Route path="/technologies" exact component={Technologies}/>
                <Route path="/sports" component={Sports}/>
            </Switch>
        </main>
    )
}

export default Content