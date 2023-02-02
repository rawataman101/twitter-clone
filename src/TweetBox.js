import React, { useState } from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import db from "./firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Aman",
      username: "rawataman101",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://nationaltoday.com/wp-content/uploads/2022/06/3-Tom-Cruise.jpg",
    });

    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            alt=""
            src="https://nationaltoday.com/wp-content/uploads/2022/06/3-Tom-Cruise.jpg"
          />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          type="text"
          placeholder="Enter image url"
        />
        <Button onClick={sendTweet} className="tweetBox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
