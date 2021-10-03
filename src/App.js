import {useSelector, useDispatch} from 'react-redux';
import React from 'react';
import { loadPosts,increment,decrement,setCounter } from "./store/articles";
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Redirect} from "react-router-dom";

function App() {

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  let counter = useSelector(state => state.counter);

  // useEffect(() => {
  //   dispatch(loadPosts(counter));
  // }, [dispatch]);

  return (
    <main>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </main>
  );
}

export default App;

// return (
//   <div>
//     <h1>Counter {counter}</h1>
//     <button onClick={() => {
//       dispatch(increment());
//       dispatch(loadPosts(counter));
//     }}>+</button>
//     <button onClick={() => {
//       dispatch(decrement());
//       dispatch(loadPosts(counter));
//     }}>-</button>
//     <input type='text' value={counter} onChange={(e) => {
//       dispatch(setCounter(e.target.value));
//       dispatch(loadPosts(e.target.value));
//     }}/>
//     <h1>Posts</h1>
//           <ul>
//                   <li key={posts.id}>{posts.title}</li>
//           </ul>
//   </div>
// );
