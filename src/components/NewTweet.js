import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { handleAddTweet } from "../actions/tweets";
import { Redirect } from "react-router-dom";

const NewTweet = ({ id }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [toHome, setToHome] = useState(false);

  const handleChange = e => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(handleAddTweet(text, id));

    setText("");
    setToHome(id ? false : true);
  };

  if (toHome === true) {
    return <Redirect to="/" />;
  }

  const tweetLeft = 280 - text.length;

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          className="textarea"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTweet;
