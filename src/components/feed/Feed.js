import "./Feed.css";
import Post from '../posts/Post';
import FeedSelector from "./FeedSelector";

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                {/* feed selector here */}
                <FeedSelector />
                {/* loop through posts here */}
                    <Post />           
            </div>
        </div>
    )
}
