let users = {
  hub: {
    id: "hub",
    name: "HUB 2019",
    avatarURL:
      "https://pbs.twimg.com/profile_images/510519212565999617/9nWCtMWs_400x400.png",
    tweets: [
      "8xf0y6ziyjabvozdd253nd",
      "hbsc73kzqi75rg7v1e0i6a",
      "2mb6re13q842wu8n106bhk",
      "6h5ims9iks66d4m7kqizmv",
      "3sklxkf9yyfowrf0o1ftbb"
    ]
  },
  bruno: {
    id: "bruno",
    name: "Bruno Russi Lautenschlager",
    avatarURL: "https://avatars1.githubusercontent.com/u/7950082?s=460&v=4",
    tweets: [
      "5c9qojr2d1738zlx09afby",
      "f4xzgapq7mu783k9t02ghx",
      "nnvkjqoevs8t02lzcc0ky",
      "4pt0px8l0l9g6y69ylivti",
      "fap8sdxppna8oabnxljzcv",
      "leqp4lzfox7cqvsgdj0e7",
      "26p5pskqi88i58qmza2gid",
      "xi3ca2jcfvpa0i3t4m7ag"
    ]
  },
  leonardo: {
    id: "leonardo",
    name: "Leonardo Elias",
    avatarURL: "https://avatars3.githubusercontent.com/u/1995213?s=400&v=4",
    tweets: [
      "5w6k1n34dkp1x29cuzn2zn",
      "czpa59mg577x1oo45cup0d",
      "omdbjl68fxact38hk7ypy6",
      "3km0v4hf1ps92ajf4z2ytg",
      "njv20mq7jsxa6bgsqc97",
      "sfljgka8pfddbcer8nuxv",
      "r0xu2v1qrxa6ygtvf2rkjw"
    ]
  }
};

let tweets = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    text:
      "Shoutout to all the speakers I know for whom English is not a first language, but can STILL explain a concept well. It's hard enough to give a good talk in your mother tongue!",
    author: "hub",
    timestamp: 1518122597860,
    likes: ["bruno"],
    replies: ["fap8sdxppna8oabnxljzcv", "3km0v4hf1ps92ajf4z2ytg"],
    replyingTo: null
  },
  "5c9qojr2d1738zlx09afby": {
    id: "5c9qojr2d1738zlx09afby",
    text:
      "I hope one day the propTypes pendulum swings back. Such a simple yet effective API. Was one of my favorite parts of React.",
    author: "bruno",
    timestamp: 1518043995650,
    likes: ["hub", "leonardo"],
    replies: ["njv20mq7jsxa6bgsqc97"],
    replyingTo: null
  },
  f4xzgapq7mu783k9t02ghx: {
    id: "f4xzgapq7mu783k9t02ghx",
    text:
      "Want to work at Facebook/Google/:BigCompany? Start contributing code long before you ever interview there.",
    author: "bruno",
    timestamp: 1517043995650,
    likes: ["leonardo"],
    replies: [],
    replyingTo: null
  },
  hbsc73kzqi75rg7v1e0i6a: {
    id: "hbsc73kzqi75rg7v1e0i6a",
    text: "Puppies 101: buy a hamper with a lid on it.",
    author: "hub",
    timestamp: 1516043995650,
    likes: ["bruno"],
    replies: ["leqp4lzfox7cqvsgdj0e7", "sfljgka8pfddbcer8nuxv"],
    replyingTo: null
  },
  "5w6k1n34dkp1x29cuzn2zn": {
    id: "5w6k1n34dkp1x29cuzn2zn",
    text:
      "Is there a metric like code coverage, but that shows lines that, if changed (in a syntactically correct way), wouldn’t cause tests to fail?",
    author: "leonardo",
    timestamp: 1515043995650,
    likes: ["hub"],
    replies: [],
    replyingTo: null
  },
  czpa59mg577x1oo45cup0d: {
    id: "czpa59mg577x1oo45cup0d",
    text:
      "React came out 'rethinking best practices'. It has since accumulated 'best practices' of its own. Let’s see if we can do better.",
    author: "leonardo",
    timestamp: 1515043995650,
    likes: ["bruno", "hub"],
    replies: ["3sklxkf9yyfowrf0o1ftbb"],
    replyingTo: null
  },
  "2mb6re13q842wu8n106bhk": {
    id: "2mb6re13q842wu8n106bhk",
    text:
      "I think I realized I like dogs so much because I can really relate to being motivated by snacks",
    author: "hub",
    timestamp: 1514043995650,
    likes: ["leonardo"],
    replies: ["26p5pskqi88i58qmza2gid"],
    replyingTo: null
  },
  nnvkjqoevs8t02lzcc0ky: {
    id: "nnvkjqoevs8t02lzcc0ky",
    text:
      "Maybe the real benefit of open source was the friendships we made along the way?",
    author: "bruno",
    timestamp: 1513043995650,
    likes: [],
    replies: [],
    replyingTo: null
  },
  omdbjl68fxact38hk7ypy6: {
    id: "omdbjl68fxact38hk7ypy6",
    text:
      "A 7-minute Paul Joseph Watson video being translated and aired by a Russian state TV channel is the most surreal thing I’ve seen in 2018 yet",
    author: "leonardo",
    timestamp: 1512043995650,
    likes: [],
    replies: [],
    replyingTo: null
  },
  "4pt0px8l0l9g6y69ylivti": {
    id: "4pt0px8l0l9g6y69ylivti",
    text:
      "Talking less about the downsides of OSS and focusing on some of the huge potential upsides for once might just help get more people into it.",
    author: "bruno",
    timestamp: 1511043995650,
    likes: ["leonardo"],
    replies: [],
    replyingTo: null
  },
  "6h5ims9iks66d4m7kqizmv": {
    id: "6h5ims9iks66d4m7kqizmv",
    text:
      "By the way, if you have a blog post sitting around and want to get some eyes on it, we take guest submissions! That's how I started.",
    author: "hub",
    timestamp: 1510043995650,
    likes: ["leonardo", "bruno"],
    replies: ["xi3ca2jcfvpa0i3t4m7ag", "r0xu2v1qrxa6ygtvf2rkjw"],
    replyingTo: null
  },
  fap8sdxppna8oabnxljzcv: {
    id: "fap8sdxppna8oabnxljzcv",
    author: "bruno",
    text:
      "I agree. I'm always really impressed when I see someone giving a talk in a language that's not their own.",
    timestamp: 1518122677860,
    likes: ["hub"],
    replyingTo: "8xf0y6ziyjabvozdd253nd",
    replies: []
  },
  "3km0v4hf1ps92ajf4z2ytg": {
    id: "3km0v4hf1ps92ajf4z2ytg",
    author: "leonardo",
    text: "It can be difficult at times.",
    timestamp: 1518122667860,
    likes: [],
    replyingTo: "8xf0y6ziyjabvozdd253nd",
    replies: []
  },
  njv20mq7jsxa6bgsqc97: {
    id: "njv20mq7jsxa6bgsqc97",
    author: "leonardo",
    text: "Sometimes you have to sacrifice simplicity for power.",
    timestamp: 1518044095650,
    likes: ["bruno"],
    replyingTo: "5c9qojr2d1738zlx09afby",
    replies: []
  },
  leqp4lzfox7cqvsgdj0e7: {
    id: "leqp4lzfox7cqvsgdj0e7",
    author: "bruno",
    text: "Also trashcans. Learned this the hard way.",
    timestamp: 1516043255650,
    likes: [],
    replyingTo: "hbsc73kzqi75rg7v1e0i6a",
    replies: []
  },
  sfljgka8pfddbcer8nuxv: {
    id: "sfljgka8pfddbcer8nuxv",
    author: "leonardo",
    text: "Puppies are the best.",
    timestamp: 1516045995650,
    likes: ["hub", "bruno"],
    replyingTo: "hbsc73kzqi75rg7v1e0i6a",
    replies: []
  },
  "3sklxkf9yyfowrf0o1ftbb": {
    id: "3sklxkf9yyfowrf0o1ftbb",
    author: "hub",
    text:
      "The idea of best practices being a negative thing is an interesting concept.",
    timestamp: 1515044095650,
    likes: ["leonardo"],
    replyingTo: "czpa59mg577x1oo45cup0d",
    replies: []
  },
  "26p5pskqi88i58qmza2gid": {
    id: "26p5pskqi88i58qmza2gid",
    author: "bruno",
    text: "Too relatable",
    timestamp: 1514044994650,
    likes: ["hub"],
    replyingTo: "2mb6re13q842wu8n106bhk",
    replies: []
  },
  xi3ca2jcfvpa0i3t4m7ag: {
    id: "xi3ca2jcfvpa0i3t4m7ag",
    author: "bruno",
    text: "Just DMd you!",
    timestamp: 1510043995650,
    likes: [],
    replyingTo: "6h5ims9iks66d4m7kqizmv",
    replies: []
  },
  r0xu2v1qrxa6ygtvf2rkjw: {
    id: "r0xu2v1qrxa6ygtvf2rkjw",
    author: "leonardo",
    text: "This is a great idea.",
    timestamp: 1510044395650,
    likes: ["bruno"],
    replyingTo: "6h5ims9iks66d4m7kqizmv",
    replies: []
  }
};

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getTweets() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...tweets }), 1000);
  });
}

export function _saveLikeToggle({ id, hasLiked, authedUser }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      tweets = {
        ...tweets,
        [id]: {
          ...tweets[id],
          likes:
            hasLiked === true
              ? tweets[id].likes.filter(uid => uid !== authedUser)
              : tweets[id].likes.concat([authedUser])
        }
      };

      res();
    }, 500);
  });
}

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

function formatTweet({ author, text, replyingTo = null }) {
  return {
    author,
    id: generateUID(),
    likes: [],
    replies: [],
    text,
    timestamp: Date.now(),
    replyingTo
  };
}

export function _saveTweet({ text, author, replyingTo }) {
  return new Promise((res, rej) => {
    const formattedTweet = formatTweet({
      text,
      author,
      replyingTo
    });

    setTimeout(() => {
      tweets = {
        ...tweets,
        [formattedTweet.id]: formattedTweet
      };

      users = {
        ...users,
        [author]: {
          ...users[author],
          tweets: users[author].tweets.concat([formattedTweet.id])
        }
      };

      res(formattedTweet);
    }, 1000);
  });
}
