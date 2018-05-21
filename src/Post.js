import React from 'react';
import $ from 'jquery';
import './App.css';

class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            post: null
        };

    }

    componentWillMount() {
        const id = this.props.match.params.id;
        var response;
        $.ajax({
            url: "http://localhost:8080/post/" + id, async: false, success: function (result) {
                response = result;
            }
        })
        this.setState({ post: response });
    }

    render() {
        return (
            <div>
                <a>{this.state.post.tags}</a>
                <span class="title">{this.state.post.title}</span>

                <MainPost obj={this.state.post} />
                <CommentSection obj={this.state.post} act="/comment/post" name="postid" />

                <div id="answers">
                    {
                        this.state.post.answers.map(function (answer, i) {
                            return (
                                <div>
                                    <Answer obj={answer} />
                                    <CommentSection obj={answer} act="/comment/answer" name="answerid" />
                                </div>
                            )
                        })
                    }
                </div>

                <SumbitAnswer obj={this.state.post} />
            </div >
        );
    }
}

function SumbitAnswer(params) {
    return (
        <div id="subAnswer">
            <h4>Sumbit an answer:</h4>
            <form role="form" action="/answer" method="post">
                <div class="form-group">
                    <input type="hidden" name="postid" value={params.obj.id} />
                    <textarea class="form-control" rows="3" required="required" name="body"></textarea>
                </div>
                <button type="submit" class="postBtn btn btn-success">Submit</button>
            </form>
        </div>
    );
}

function MainPost(params) {
    return (
        <div class="post">
            <a class="vote postUp glyphicon glyphicon-chevron-up" data-type="post" id={params.obj.id} onClick={voteClicked}>{params.obj.score}</a>
            <textarea class="post" readonly="readonly">{params.obj.body}</textarea>
            <span class="datetime">Posted by {params.obj.user}, {formatDate(params.obj.creationDate)}.</span>
        </div>
    );
}

function Answer(params) {
    return (
        <div class="post">
            <a id={params.obj.id} data-type="answer" onClick={voteClicked} class="vote answUp glyphicon glyphicon-chevron-up">{params.obj.score}</a>
            <textarea class="post" readonly="readonly">{params.obj.body}</textarea>
            <span class="datetime">Posted by {params.obj.user}, {formatDate(params.obj.creationDate)}.</span>
        </div>
    );
}

function CommentSection(params) {
    return (
        <div class="comments">
            <table>
                <tbody class="tcomm">
                    {
                        params.obj.comments &&
                        params.obj.comments.map(function (comment, i) {
                            return (
                                <tr>
                                    <td>
                                        <a id={comment.id} data-type="comment" onClick={voteClicked} class="vote commUp glyphicon glyphicon-chevron-up">{comment.score}</a>
                                    </td>
                                    <td >{comment.body} - {comment.user}, on {formatDate(params.obj.creationDate)}</td>
                                </tr>

                            )
                        })
                    }
                </tbody >
            </table >

            <h4>Leave a Comment:</h4>
            <form role="form" action={params.act} method="post">
                <div class="form-group">
                    <input type="hidden" name={params.name} value={params.obj.id} />
                    <textarea class="form-control" rows="3" required="required" name="body"></textarea>
                </div>
                <button type="submit" class="commBtn btn btn-success">Submit</button>
            </form>
        </div >
    );
}


function formatDate(timestamp){
    return new Date(timestamp).toLocaleString();
}

function voteClicked(e){
    var element = e.target;
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/" + element.attributes['data-type'].nodeValue + "/vote",
        dataType: "json",
        data: {id: element.attributes['id'].nodeValue },
        success: function (response) {
           element.innerHTML = response;
        }
    });
}

export default Post;
