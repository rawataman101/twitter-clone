import React from "react";
import "./Widgets.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchRoundedIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        {/* <TwitterTweetEmbed tweetId={"933354946111705097"} /> */}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="rawataman101"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
