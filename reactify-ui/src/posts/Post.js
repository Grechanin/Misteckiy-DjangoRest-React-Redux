import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './App.css';
import 'whatwg-fetch'
import cookie from 'react-cookies'
import PostInline from './PostInline'

class Post extends Component {
  constructor(props){
    super(props)
    this.togglePostsListClassButton = this.togglePostsListClassButton.bind(this)
    this.handlePostCreate = this.handlePostCreate.bind(this)
  }

  state = {
    posts:[],
    postsListClass:'card',
    next: null,
    previous:null,
    auth: null,
    count: 0,
  }
  handlePostCreate(){
    let {next} = this.state
    
    if (next !== undefined && next !== null){

      this.loadPosts(next)
    }
    
  }

  loadPosts (nextEndpoint) {
    let thisComp = this
    let endpoint = '/api/posts/'
    if (nextEndpoint){
      endpoint = nextEndpoint
    }

    let lookupOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
// console.log(endpoint)
    let csrfToken = cookie.load('csrftoken')
    if (csrfToken !== undefined) {
      lookupOptions['credentials'] = 'include'
      lookupOptions['headers']['X-CSRFToken'] = csrfToken
    }

    fetch(endpoint, lookupOptions)
      .then((responce) => {
        return responce.json()
      }).then((responceData) => {
        console.log(responceData)
        let currentPosts = thisComp.state.posts
        // console.log(currentPosts)
        // console.log(responceData.result)
        currentPosts = currentPosts.concat(responceData.result)
        // console.log(currentPosts)
        thisComp.setState({
          posts:currentPosts,
          next: responceData.next,
          previous: responceData.previous,
          auth:responceData.auth,
          count: responceData.count,
        })
      }).catch((error) => {
        console.log('error', error)
      })
  }

  togglePostsListClassButton(e){
    e.preventDefault()
    if (this.state.postsListClass === 'card'){
      this.setState({
        postsListClass:''
      })
    }else{
      this.setState({
        postsListClass:'card'
      })
    }
  }

  

  componentDidMount () {
    this.loadPosts()
  }

  render () {
    const {posts} = this.state
    const {postsListClass} = this.state
    const {auth} = this.state
    const {count} = this.state
    const {next} = this.state
    return (
      <div>
        {auth ? <button className='btn btn-secondary'><Link maintainScrollPosition={false} to={{
              pathname: '/posts/create-post',
              state: { fromDashboard: false }
            }} >Create Post</Link></button> : ""}

        <button onClick={this.togglePostsListClassButton}>Toggle class</button>
        {posts.length > 0 ? posts.map((postItem, index) => {
          return (
            <PostInline key={index} post={postItem} elClass={postsListClass} />
            )
        })
        : <p>No Posts Found</p>}
        {next !==null ? <button onClick={this.handlePostCreate} className='btn btn-secondary'>Load more {count}</button> : ""}
      </div>
    )
  }
}

export default Post
