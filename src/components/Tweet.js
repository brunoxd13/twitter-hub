import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline
} from "react-icons/ti/index";

import { formatTweet, formatDate } from "../utils/helpers";
import { handleToggleTweet } from "../actions/tweets";

const Tweet = ({ id, history }) => {
  const dispatch = useDispatch();

  const authedUser = useSelector(state => state.authedUser);
  const tweets = useSelector(state => state.tweets);
  const users = useSelector(state => state.users);

  const parentTweet = tweets[id] ? tweets[tweets[id].replyingTo] : null;

  const tweet = tweets[id]
    ? formatTweet(tweets[id], users[tweets[id].author], authedUser, parentTweet)
    : null;

  const handleLike = e => {
    e.preventDefault();

    dispatch(
      handleToggleTweet({
        id: tweet.id,
        hasLiked: tweet.hasLiked,
        authedUser
      })
    );
  };

  const toParent = (e, id) => {
    e.preventDefault();
    history.push(`/tweet/${id}`);
  };

  if (tweet === null) {
    return <p>This Tweet doesn't existd</p>;
  }

  const {
    name,
    avatar,
    timestamp,
    text,
    hasLiked,
    likes,
    replies,
    parent
  } = tweet;

  return (
    <Link to={`/tweet/${id}`} className="tweet">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="tweet-info">
        <div>
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button
              className="replying-to"
              onClick={e => toParent(e, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
        </div>
        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{replies !== 0 && replies}</span>
          <button className="heart-button" onClick={handleLike}>
            {hasLiked === true ? (
              <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{likes !== 0 && likes}</span>
        </div>
      </div>
    </Link>
  );
};

export default withRouter(Tweet);
