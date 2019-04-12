import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postActions'

class Posts extends Component {

    // constructor(props) {
        // super(props)
        // this.state = {
        //     posts: {
        //         data: [],
        //         isLoading: true
        //     }
        // }
    // }

    componentWillMount() {
        // console.log('componentWillMount life cycle');
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({
        //             posts: {
        //                 data: data,
        //                 isLoading: false
        //             }
        //         })
        //         console.log(data)
        //     })
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <p>Posts</p>
                {postItems}
            </div>
        )
    }
}


Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);