import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({posts:getPosts()});
  }

  render() {
    return (
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Questions</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.posts.map(function (post, i) {
              return (
                <div>
                  <tr>
                    <td>{post.getScore()}</td>
                    <td><a href={"/post/" + post.getId()}>{post.getTitle()}</a></td>
                  </tr>
                  <tr>
                    <td colspan="2" style="white-space:nowrap;">
                      {
                        post.getTags().map(function (tag, j) {
                          return (
                            <div>
                              <div>{tag.getTag()}</div>
                            </div>)
                        })
                      }
                    </td >
                  </tr >
                </div >
              )
            })
          }
        </tbody >
      </table >
    );
  }
}


function getPosts() {
  return [];
}

export default App;
