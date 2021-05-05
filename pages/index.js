import { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Loading from '../components/Loading'
import AppLayout from '../components/AppLayout'
import PostRegisterBar from '../components/home/postRegister/PostRegisterBar'
import PostCard from '../components/home/postCard/PostCard'
import Signin from './user/signin'
import { firstLoadPost, moreLoadPost } from '../reducers/post'
import { signinSuccessAction, getAccessTokenAction, signoutAction } from '../reducers/user'

const Home = () => {
  const dispatch = useDispatch()
  const { Posts, firstLoadPostDone, filterWeather, totalPosts } = useSelector(state => state.post)
  const { googleLoading, loginLoading, isLoggedIn, accessToken, accessTokenError, me } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getAccessTokenAction())
  }, [googleLoading, loginLoading])

  useEffect(() => {
    if (accessToken) {
      dispatch(signinSuccessAction(accessToken))
    }
  }, [accessToken])

  let filterPosts = []

  if (filterWeather.length > 0) {
    filterPosts = Posts.filter((ele) => (filterWeather.includes(ele.mood)))
  }

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(firstLoadPost(accessToken))
    }
  }, [isLoggedIn])

  const [page, setPage] = useState(2)

  const onClickMore = useCallback(() => {
    dispatch(moreLoadPost(page, accessToken))
    setPage((prev) => prev + 1)
  })

  return (
    <>
      {!isLoggedIn
        ? (
          <>
            {accessToken ? <Loading /> : <Signin />}
          </>
        )
        : (
          <AppLayout filter>
            <PostRegisterBar />
            <PostCardList>
              {firstLoadPostDone &&
                (
                  filterWeather.length > 0
                    ? (
                      filterPosts.map(post => <PostCard key={post._id} post={post} />)
                    )
                    : (
                      Posts.map(post => <PostCard key={post._id} post={post} />)
                    )
                )}
              {totalPosts > Posts.length && <button onClick={onClickMore}>더보기</button>}
            </PostCardList>
          </AppLayout>
        )}
    </>
  )
}

const PostCardList = styled.div`
  width : 100%;
  height: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  overflow: auto;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{ 
    display:none;
  }
`

export default Home
