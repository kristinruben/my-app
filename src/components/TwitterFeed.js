import React from 'react';
import Tweet from './Tweet';
import data from '../constants/data'

const TwitterFeed = props => {
  let tweets = props.data.map(tweet => {
    return (
      <Tweet
        key={tweet.id_str}
        name={tweet.user.name}
        sn={tweet.user.screen_name}
        image={tweet.user.profile_image_url}
        text={tweet.text}
        retweets={tweet.retweet_count}
        favorites={tweet.favorite_count}
        favorited={tweet.favorited}
        retweeted={tweet.retweeted}
        timestamp={Date(tweet.timestamp_ms)}
        entities={tweet.entities}
        handleButtonClick={props.handleButtonClick}
      />
    );
  });

  return (
    <ul>
      {tweets}
    </ul>
  );
};


export default TwitterFeed;
