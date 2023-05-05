import { auth } from '../../../firebase';
import { TweetFirebase } from '../tweet';
import { FbUser } from './user';

export interface FbTweetModel {
  // General tweet data
  uid?: string;
  text: string;
  likes: string[];

  // Localisation
  localisation: string;

  // Creation data
  created_at: number;
  created_by: string;
  created_by_data?: FbUser;

  // Update data
  updated_at: number;
  updated_by: string;
}

export class FbTweet implements FbTweetModel {

  // General tweet data
  public uid: string;
  public text: string;
  public likes: string[];

  // Localisation
  public localisation: string;

  // Creation data
  public created_at: number;
  public created_by: string;
  public created_by_data?: FbUser;

  // Update data
  public updated_at: number;
  public updated_by: string;

  constructor(tweet: any) {
    this.uid = tweet.uid || null;
    this.text = tweet.text || '';
    this.likes = tweet.likes || [];

    this.localisation = tweet.localisation || '';

    this.created_at = tweet.created_at || Date.now();
    this.created_by = tweet.created_by || auth.currentUser?.uid;

    this.updated_at = tweet.updated_at || Date.now();
    this.updated_by = tweet.updated_by || auth.currentUser?.uid;
  }

  public toObject(): any {
    return {
      text: this.text,
      likes: this.likes,

      localisation: this.localisation,

      created_at: this.created_at,
      created_by: this.created_by,

      updated_at: this.updated_at,
      updated_by: this.updated_by,
    };
  }

  public async toggleLike(): Promise<boolean> {
    const user = auth.currentUser;

    if (user) {
      try {
        // check if user already like the tweet
        if (this.likes.includes(user.uid)) {
          // remove the like
          this.likes = this.likes.filter((uid) => uid !== user.uid);
        } else {
          // like the tweet
          this.likes.push(user.uid);
        }

        this.updated_by = user.uid;
        this.updated_at = Date.now();

        await TweetFirebase.update(this);

        return true;
      } catch (e) {
        console.error("Error updating document: ", e);
      }
    }
    return false;
  }
}