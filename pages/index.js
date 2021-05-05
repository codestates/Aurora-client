import { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Loading from '../components/Loading'
import AppLayout from '../components/AppLayout'
import PostRegisterBar from '../components/home/postRegister/PostRegisterBar'
import PostCard from '../components/home/postCard/PostCard'
import Signin from './user/signin'
import { firstLoadPost, firstLoadAllPost, moreLoadPost, moreLoadAllPost } from '../reducers/post'
import { signinSuccessAction, getAccessTokenAction } from '../reducers/user'

const Home = () => {
  const dispatch = useDispatch()
  const { Posts, firstLoadPostDone, firstLoadAllPostDone, filterWeather, totalPosts } = useSelector(state => state.post)
  const { googleLoading, loginLoading, isLoggedIn, accessToken } = useSelector((state) => state.user)

  const [time, setTime] = useState('')
  useEffect(() => {
    const time = new Date()
    setTime(time.toISOString())
  }, [])

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
      dispatch(firstLoadAllPost(time, accessToken))
    }
  }, [isLoggedIn])

  const [page, setPage] = useState(2)

  const onClickMore = useCallback(() => {
    // dispatch(moreLoadPost(page, accessToken))
    dispatch(moreLoadAllPost(page, time, accessToken))
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
              {firstLoadAllPostDone &&
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
