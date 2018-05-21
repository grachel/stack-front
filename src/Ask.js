import React from 'react';
import './App.css';
import $ from 'jquery';

class Ask extends React.Component {
    render() {
        return (
            <div>
                <form class="form-narrow form-horizontal">
                    <fieldset>
                        <legend>Enter new question</legend>
                        <div class="form-group">
                            <label for="title" class="col-lg-2 control-label">Title</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="title" placeholder="Title" name="title" />
                            </div>
                        </div>
                        <TextArea desc="Description" name="body" />
                        <TextArea desc="Tags (space separated)" name="tags" />
                        <div class="form-group">
                            <div class="col-lg-offset-2 col-lg-10">
                                <button type="submit" class="btn btn-default" onClick={askClicked}>Submit!</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div >
        );
    }
}

function TextArea(props) {
    return (
        <div class="form-group">
            <label for="body" class="col-lg-2 control-label">{props.desc}</label>
            <div class="col-lg-10">
                <textarea class="form-control" rows="10" id={props.name} name={props.name} required="required"></textarea>
            </div>
        </div>
    );
}

function askClicked(e) {
    e.preventDefault();

    $.post('http://localhost:8080/post/ask', { title: $('#title').val(), body: $('#body').val(), tags: $('#tags').val() },
        function (returnedData) {
            console.log(returnedData);
        });
}

export default Ask;
