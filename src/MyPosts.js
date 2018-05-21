import React from 'react';
import $ from 'jquery'
import './App.css';

class MyPosts extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        $.getJSON("http://localhost:8080/post/my").done(response => {
            this.setState({ posts: response })
        });
    }

    render() {
        return (
            <table class="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.posts.map(function (post, i) {
                            return (
                                <tr>
                                    <td><a href={"/post/" + post.id}>{post.title}</a></td>
                                    <td>{post.body}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        );
    }
}



export default MyPosts;
