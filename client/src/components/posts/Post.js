import './Post.css';
import pfp from './pfp.png';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export default function Post({ post }) {
    const { deletePost, likePost } = useContext(GlobalContext);

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
                <button className={`${ post.liked_by.includes(post.user) ? "button-white" : "button-orange"}`} onClick={() => likePost(post._id, post.user, post.prayers, post.liked_by)}>Manifest x { post.prayers }</button>
                <button className="button-orange" onClick={() => deletePost(post._id)}>Achieved</button>
            </div>

        </div>
    )
}
