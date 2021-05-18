import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed"
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input type="text" placeholder="Search Twitter"/>
            </div>

             <div className="widgets__widgetContainer">
                 <h2>Whats up</h2>
                 <TwitterTweetEmbed tweetId={"858551177860055040"} />
                 <TwitterTimelineEmbed 
                     sourceType="profile"
                     screenName="cleverqazi"
                     options={{height: 400}}
                 />
                 <TwitterShareButton 
                     url={"https://facebook.com/cleverprogramer"}
                     options={{text: "#well, ok", via: "someone"}}
                 />
             </div>

        </div>
    )
}

export default Widgets
