import React, { Component } from 'react'
import {connect} from 'react-redux'
import {newPost} from './../actions/postActions'
import PropTypes from 'prop-types'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: [e.target.value] });
    }
    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json'},
        //     body: JSON.stringify(post)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
        this.props.newPost(post);
    }
    render() {
        return (
            <div>
                <p>Add Posts</p>
                <form onSubmit={this.onSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                    <br />
                    <label>Body</label>
                    <input type="text" name="body" value={this.state.body} onChange={this.onChange} />
                    <br /><hr />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    newPost: PropTypes.func.isRequired
}

export default connect(null, {newPost})(PostForm);
