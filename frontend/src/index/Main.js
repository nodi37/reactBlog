import React from 'react';
import {
  Route,
  Switch
} from 'react-router';
import './style.css';
import Header from './Header';
import MainElement from './MainElement';
import Footer from './Footer'
import PostView from './PostView';
import SearchEngine from './SearchEngine';
import NotFound from '../NotFound';

function Main() {
  const [allPosts, updatePosts] = React.useState([]);
  const [currentcount, updateCurrentCount] = React.useState(0);
  const [loadable, isLoadable] = React.useState(true);
  const [alreadyloaded, isAlrLoaded] = React.useState(false);
  const [searchKw, searchHandler] = React.useState("");
  const [sPosts, sPostsUpd] = React.useState([]);

  return (
    <div>
    <Header sPostsUpd={sPostsUpd} searchHandler={searchHandler} searchKw={searchKw} />
    <Switch>
    <Route exact path="/">
      <MainElement allPosts={allPosts} updatePosts={updatePosts} currentcount={currentcount} updateCurrentCount={updateCurrentCount} loadable={loadable} isLoadable={isLoadable} alreadyloaded={alreadyloaded} isAlrLoaded={isAlrLoaded}/>
    </Route>
    <Route path="/search/">
      <SearchEngine sPosts={sPosts} searchHandler={searchHandler} sPostsUpd={sPostsUpd}/>
    </Route>
    <Route exact path="/404">
            <NotFound />
    </Route>
    <Route path="*">
      <PostView useProps={false}/>
    </Route>
    </Switch>
    <Footer />
    </div>
  );

}

export default Main;