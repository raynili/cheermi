import "./Feed.css";
import Post from '../posts/Post';
import FeedSelector from "./FeedSelector";
import { useContext } from 'react';
import { GlobalContext } from "../../context/GlobalState";

export default function Feed() {
    const { posts } = useContext(GlobalContext);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <FeedSelector />
                { posts.map(post =>
                    <Post key={post.id} post={post}/>
                )}
            </div>
        </div>
    )
}
