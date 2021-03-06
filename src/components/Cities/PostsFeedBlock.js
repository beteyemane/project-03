import React from 'react'
import { Feed, Button, Icon } from 'semantic-ui-react'
import ViewPostModal from './ViewPostModal'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

import moment from 'moment'


const PostsFeedBlock = ({ text, city, post, index, addLike,
  handleChangePost, handleChangeComment,
  handleSubmitComment ,commentError, deletePost }) => {
  return(
    <Feed.Event>
      <Feed.Label image={post.image} />
      <Feed.Content>
        <Feed.Date>{moment(post.createdAt).format('dddd HH:mm')}</Feed.Date>
        <Feed.Summary>
          <Link to={`/users/${post.user._id}`}> {post.user.username}</Link> created a post about {city.name}.
        </Feed.Summary>


        <ViewPostModal
          addLike={addLike}
          post={post}
          text={text}
          commentError={commentError}
          handleChangeComment={handleChangeComment}
          handleSubmitComment={handleSubmitComment}
        />

      </Feed.Content>

      {Auth.isAuthenticated() && (post.user._id === Auth.getUserID()) &&

        <Button size='small' onClick={(e) => deletePost(e, post._id)} negative icon >
          <Icon name='trash' />
        </Button>
      }
      <hr />
    </Feed.Event>
  )
}


export default PostsFeedBlock
