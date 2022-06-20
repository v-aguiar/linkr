import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import LinkPreview from "../../components/Link";
import MainScreen from "../../components/MainScreen/";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import { PostContainer } from "./style";

export default function TimelinePage() {

  const [ posts, setPosts ] = useState([]);
  const { userInfo } =useContext(UserContext)

  useEffect(()=>{
    const config = {
      headers: {
          Authorization: `Bearer ${userInfo.token}`
      }
  }
    const promisse = api.get("timeline", config)
    promisse.then((res)=>{
      const {data} = res
      setPosts(data)
    })
    promisse.catch((error) => {
      alert(error.response.data);
    });
  },[]
  )

  return (
    <MainScreen>
      {posts.map((post)=>{
        const { username, text, imgUrl, url} = post
        return(
          <>
            <PostContainer>
              <section>
                <img className="user" src={imgUrl} alt="" />
                {/* {handleLikes()} */}
              </section>
              <div className="post-body">
                <h2>{username}</h2>
                <p>{text}</p>
                <LinkPreview metaData={post} />
              </div>
		        </PostContainer>
          </>
        )
      })}
    </MainScreen>
  );
}
