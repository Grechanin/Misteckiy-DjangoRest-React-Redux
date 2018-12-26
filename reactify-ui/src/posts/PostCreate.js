import React, { Component } from 'react'
// import 'whatwg-fetch'
import cookie from 'react-cookies'
// import moment from 'moment'
import PostForm from './PostForm'

class PostCreate extends Component {
  // constructor (props) {
  //   super(props)
  // this.handleSubmit = this.handleSubmit.bind(this)

  // this.state = {
  //  draft: false,
  //  title: null,
  //  content: null,
  //  publish: null
  // }
  // }

  // handleNewPostItem(newPost){
  // console.log(newPost)
  // let currentPosts = this.state.posts
  // this.setState({
  //   posts:[newPost, ...currentPosts]
  // })
  // }

  // componentDidMount () {
  // this.setState({
  //  draft: false,
  //  title: null,
  //  content: null,
  //  publish: moment().format('YYYY-MM-DD')
  // })

  // this.postTitleInputRef.focus()
  // }

  render () {
    const csrfToken = cookie.load('csrftoken')
    return (
      <div>
        {(csrfToken !== null && csrfToken !== undefined)
          ? <div className='my-5'>
            <h1>Create new Post</h1>
            <PostForm />
          </div>
          : ''}
      </div>
    )
  }
}

export default PostCreate
