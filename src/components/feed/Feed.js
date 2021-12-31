import "./Feed.css";
import Post from '../posts/Post';

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                feed
                {/* feed selector here */}
                <Post />           
            </div>
        </div>
    )
}
