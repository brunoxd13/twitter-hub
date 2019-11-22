import React from "react";
import { useSelector } from "react-redux";
import Tweet from "./Tweet";
import { orderTweetsByDate } from "../utils/helpers";

const Dashboard = () => {
  const tweets = useSelector(state => state.tweets);
  const tweetIds = orderTweetsByDate(tweets);

  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {tweetIds.map(id => (
          <li key={id}>
            <Tweet id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
