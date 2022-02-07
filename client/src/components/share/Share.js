import "./Share.css";
import pfp from '../posts/pfp.png';

export default function Share() {

    const profile = 'Rayni Li'

    return (
        <div className='share'>
            <div className="poster-info">
                <img className="poster-pic" src={pfp} alt="pfp"/>
                <p className = "poster-name">
                    { profile }
                </p>
            </div>

            <div className='share-holder'>
            <form onSubmit={console.log('submit')}>
                <label>
                <textarea rows="5" cols="46" onChange={console.log('change')} />
                {/* value={'What dream will become a reality today?'} */}
                </label>
                <input type="submit" value="Submit" />
            </form>

            </div>
        </div>
    )
}
