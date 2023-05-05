import React, { useEffect, useState } from 'react';
import { TopBar } from "../../components/topBar/topBar";
import "./notifiedTweet.css";
import { Tweet } from '../../components/tweet/tweet';
import { useParams } from 'react-router-dom'
import { FbTweet } from '../../data/firebase/models/tweet';
import { TweetFirebase } from '../../data/firebase/tweet';


export const NotifiedTweet: React.FC = () => {

  const [tweet, setTweet] = useState<FbTweet | null>(null);

  const { id } = useParams<{id: string}>();

  useEffect(() => {
    if (id) {
      getTweetFromId(id);
    }
  }, [id]);

  async function getTweetFromId(id: string) {
    const matchingTweet = await TweetFirebase.get(id);

    if (matchingTweet) {
      setTweet(matchingTweet);
    }
  }

  return (
    <div className='page-wrapper'>
      <TopBar name="Notified Tweet" />
      <div className='notified-tweet'>

        {tweet &&
          <Tweet tweet={tweet!} />
        }
      </div>
    </div>
  );
};
