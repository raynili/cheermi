import './Post.css';
import pfp from './pfp.png';

export default function Post({ post }) {
    return (
        <div className="post">
            <div className="poster-info">
                <img className="poster-pic" src={pfp} alt="pfp"/>
                <p className = "poster-name-time"> { post.user } </p>
                <p className = "poster-name-time"> { post.post_time } </p>
            </div>
            <div className="post-content">
                { post.text }
            </div>
            <div className="buttons">
                <button>Manifest x { post.prayers }</button>
                <button>Achieved</button>
            </div>

        </div>
    )
}
