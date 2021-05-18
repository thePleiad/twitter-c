import { Avatar, Button } from '@material-ui/core'
import React, { useState }from 'react'
import './TweetBox.css';
import db from './firebase';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('')
    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'name',
            userName: 'name',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" ,
        })

        setTweetImage('');
        setTweetMessage('');
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
                <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} type="text" placeholder="Hi there..."/>
                
                </div>
                <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} type="text" placeholder="image here" className="tweetBox__inputImage"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
