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
                <p className = "poster-name-time"> { post.name } </p>
                <p className = "poster-name-time"> { post.post_time.split('T')[0] } </p>
            </div>
            <div className="post-content">
                { post.text }
            </div>
            <div className="buttons">
                <button className={`${ post.liked_by.includes(post.name) ? "button-white" : "button-orange"}`} 
                    onClick={() => likePost(
                            post._id, 
                            post.name, 
                            post.prayers, 
                            post.liked_by
                        )}>
                            Manifest x { post.prayers }
                </button>
                <button className="button-orange" onClick={() => deletePost(post._id)}>Achieved</button>
            </div>

        </div>
    )
}
