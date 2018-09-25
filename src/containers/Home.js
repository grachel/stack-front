import React from 'react';
import $ from 'jquery'
import '../../App.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    $.getJSON("http://localhost:8080/").done(response => {
      this.setState({ isLoaded: true, posts: response })
    });
  }

  render() {
    return (
      <div>
        <h1>Questions</h1>
        {
          this.state.posts.map(function (post, i) {
            return (
              <div className="grid-container">
                <div className="main-row">
                  <span>{post.score} </span><a href={"/post/" + post.id}>{post.title}</a>
                </div>
                <div className="sub-row">{post.tags}</div>
              </div>             
              )
          })
        }
      </div>      
    );
  }
}



export default Home;
