import './Post.css';
import pfp from './pfp.png';

export default function Post() {
    return (
        <div className="post">
            <div className="poster-info">
                <img className="poster-pic" src={pfp} alt="pfp"/>
                <p className = "poster-name">
                    Rayni Li
                </p>
            </div>
            <div className="post-content">
                Text from post
            </div>
            <div className="buttons">
                <button className="btn btn--stripe">Manifest</button>
                <button className="btn btn--stripe">Achieved</button>
            </div>

        </div>
    )
}
