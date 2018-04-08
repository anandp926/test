import React, { Component } from 'react';
import './App.css';
import { fetchAllPosts, fetchCategories } from "./actions"
import * as api from "./utils/api"
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount () {
    const { fetchCategories, fetchAllPosts} = this.props;
    fetchCategories();
    fetchAllPosts();
  }
  
  render() {
    const { categories } = this.props;
    var posts = this.props.posts;
    console.log(posts);
    return (
      <div className="App">

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    categories: state.categories,
    posts: state.posts
  }
};

export const mapDispatchToProps = (dispatch) =>({
  fetchCategories: () => api.getCategory().then(categories => dispatch(fetchCategories(categories))),
  fetchAllPosts: () => api.getAllPosts().then(posts => dispatch(fetchAllPosts(posts)))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
