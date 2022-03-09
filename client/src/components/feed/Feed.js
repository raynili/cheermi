import "./Feed.css";
import Post from '../posts/Post';
import FeedSelector from "./FeedSelector";
import { useContext, useEffect } from 'react';
import { GlobalContext } from "../../context/GlobalState";

export default function Feed() {
    const { posts, getPosts } = useContext(GlobalContext);

    useEffect(() => {
        getPosts(); // if want to call html request in component, use useEffect
        // loads all posts once Feed component is created
    }, []);

    console.log(posts);

    return (
        <div className="feed">
            <FeedSelector />
            <div className="feedWrapper">
                { posts.map(post =>
                    <Post key={post._id} post={post}/>
                )}
            </div>
        </div>
    )
}
