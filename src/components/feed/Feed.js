import "./Feed.css"
import TaskPost from "../posts/TaskPost"
import Share from "../share/Share"

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                feed
                <TaskPost />
                <Share />
            </div>
        </div>
    )
}
