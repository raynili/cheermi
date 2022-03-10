import "./Share.css";
import pfp from '../posts/pfp.png';
import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useSelector } from 'react-redux';

export default function Share() {
    var { user } = useSelector((state) => state.auth); // when user is not logged in to be able to render <Share /> comp
    const username = user? user.name : "";

    const [ text, setText ] = useState('');

    const { addPost } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newPost = {
            id: Math.floor(Math.random() * 100000000), // later change to uuid
            user,
            post_time: new Date().toLocaleDateString(),
            text,
            prayers: 0,
            liked_by: []
        }

        addPost(newPost);

        setText('');
    }

    return (
        <div className='share'>
            <div className="poster-info">
                <img className="poster-pic" src={pfp} alt="pfp"/>
                <p className = "poster-name">
                    { username }
                </p>
            </div>

            <div className='share-holder'>
            <form onSubmit={onSubmit}>
                <label>
                <textarea rows="5" cols="46" value={text} placeholder={'What dream will become a reality today?'}
                    onChange={e => setText(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            </div>
        </div>
    )
}
