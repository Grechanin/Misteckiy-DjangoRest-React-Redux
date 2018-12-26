import React, { Component } from 'react'
import MetaTags from 'react-meta-tags'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  PinterestShareButton
} from 'react-share'

class SocialShare extends Component {
  render () {
    const { main_image_url, project_name } = this.props
    const absolute_url = window.location.href
    return (

      <div className='container'>

        <MetaTags>
          <meta property='og:type' content='article' />
          <meta property='og:image' content={main_image_url} />
          <meta property='og:url' content={absolute_url} />
        </MetaTags>

        <div className='social-likes-title'>Поділитися проектом</div>

        <div className='row row-social-likes'>
          <div className='col-md-3'>
            <FacebookShareButton url={absolute_url} quote={project_name} ><a href='# '> Share on Facebook </a></FacebookShareButton>

          </div>

          <div className='col-md-3'>
            <TwitterShareButton url={absolute_url} title={project_name} >
              <a href={'https://twitter.com/home?status=' + absolute_url} target='_blank' rel='noopener noreferrer'>
          Share on Twitter
              </a></TwitterShareButton>

          </div>

          <div className='col-md-3'>
            <GooglePlusShareButton url={absolute_url} >
              <a href='# '>Share on Google+</a></GooglePlusShareButton>

          </div>
          <div className='col-md-3'>
            <PinterestShareButton url={absolute_url} media={main_image_url} description={project_name} >
              <a href='# '>Share on Pinterest</a></PinterestShareButton>
          </div>
          <script
            type='text/javascript'
            async defer
            src='//assets.pinterest.com/js/pinit.js'
          />
        </div>
      </div>

    )
  }
}

export default SocialShare
// <a href={'https://www.facebook.com/sharer/sharer.php?u=' + absolute_url} target='_blank' rel='noopener noreferrer'>
//           Share on Facebook
//             </a>
