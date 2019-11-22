import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { orderTweetsByDate } from "../utils/helpers";

import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

const TweetPage = () => {
  const { id } = useParams();

  const tweets = useSelector(state => state.tweets);

  const replies = !tweets[id]
    ? []
    : orderTweetsByDate(tweets[id].replies, tweets);

  return (
    <div>
      <Tweet id={id} />
      <NewTweet id={id} />
      {replies.length !== 0 && <h3 className="center">Replies</h3>}
      <ul>
        {replies.map(replyId => {
          console.log("replies.map", replyId);
          console.log("replies", replies);

          return (
            <li key={replyId}>
              <Tweet id={replyId} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TweetPage;
