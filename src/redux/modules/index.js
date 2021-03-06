import api from './api'
import auth from './auth'
import cometchat from './cometchat';
import comments from './comments'
import posts from './posts'
import profiles from './profiles'
import alert from './alert'
import follow from './follow'

export default () =>
  ({
    api,
    auth,
    posts,
    profiles,
    comments,
    cometchat,
    alert,
    follow,
  })
