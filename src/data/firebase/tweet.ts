import { auth, db } from '../../firebase';
import { collection, getDocs, addDoc, updateDoc, query, where, getDoc, doc, orderBy } from "firebase/firestore";
import { FbTweet } from './models/tweet';
import { FbUser } from './models/user';
import { UserFirebase } from './user';

const collectionName = 'tweets';

export const TweetFirebase = {

  get: async function (uid: string): Promise<FbTweet | null> {
    try {
      const docRef = doc(db, collectionName, uid);
      const document = await getDoc(docRef);
      const tweet = new FbTweet({ uid: document.id, ...document.data()});
      const user = await UserFirebase.getFromUid(tweet.created_by);

      if (user) {
        tweet.created_by_data = user;
      }

      return tweet;
    } catch (e) {
      console.error("Error retrieving tweet by uid: ", e);
    }
    return null;
  },

  /**
   * Get all documents from the tweets collection
   * @returns list of all tweets
   */
  getAll: async function (): Promise<any[]> {
    // get snapshot of the tweets collection
    const ref = collection(db, collectionName);
    const q = query(ref, orderBy("created_at", "desc"));
    const querySnapshot = await getDocs(q);

    let tweets: any[] =[];
    let usersUid: string[] = [];

    querySnapshot.forEach(document => {
      const tweet: any = new FbTweet({ uid: document.id, ...document.data()});

      tweets.push(tweet);
      usersUid.push(tweet.created_by);
    });

    const users = await UserFirebase.getAllFromUidList(usersUid);

    users.forEach((user, index) => {
      tweets[index].created_by_data = user;
    });

    return tweets;
  },

  /**
   * Get all documents from the tweets collection that match current user uid
   * @returns list of all current user tweets
   */
  getAllFromCurrentUser: async function () {
    const user = auth.currentUser;
    const tweets: any[] = [];

    if (user) {
      try {
        const ref = collection(db, collectionName);
        // build query that filter tweet where user match current user uid
        const q = query(ref, where("created_by", "==", user.uid), orderBy("created_at", "desc"));
        // get snapshot of the matching tweets docs
        const querySnapshot = await getDocs(q);

        let usersUid: string[] = [];

        // fill tweets array with tweet document data and id
        querySnapshot.forEach((document) => {
          const tweet: any = new FbTweet({ uid: document.id, ...document.data()});

          tweets.push(tweet);
          usersUid.push(tweet.created_by);
        });

        const users = await UserFirebase.getAllFromUidList(usersUid);

        users.forEach((user, index) => {
          tweets[index].created_by_data = user;
        });

        return tweets;
      } catch (e) {
        console.error("Error retrieving current user tweets: ", e);
      }
    }
    return null;
  },

  /**
   * Get all documents from the tweets collection liked by current user
   * @returns list of all tweets liked by current user
   */
  getAllLikedByCurrentUser: async function () {
    const user = auth.currentUser;
    const tweets: any[] = [];

    if (user) {
      try {
        const ref = collection(db, collectionName);
        // build query that filter tweet where user match current user uid
        const q = query(ref,
          where("likes", "array-contains", user.uid),
          orderBy("created_at", "desc"),

        );
        // get snapshot of the matching tweets docs
        const querySnapshot = await getDocs(q);

        // fill tweets array with tweet document data and id
        querySnapshot.forEach((document) => {
          const tweet: any = new FbTweet({ uid: document.id, ...document.data()});
          tweets.push(tweet);
        });
        return tweets;
      } catch (e) {
        console.error("Error retrieving current user tweets: ", e);
      }
    }
    return null;
  },

  post: async function (text: string, localisation: string) {
    const currentUserJson = localStorage.getItem('currentUser');
    const currentUser = new FbUser(JSON.parse(currentUserJson!));

    try {
      const tweet = new FbTweet({ text, localisation });
      const docRef = await addDoc(collection(db, collectionName), tweet.toObject());

      tweet.uid = docRef.id; // get uid from creation
      tweet.created_by_data = currentUser;

      return tweet;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    return null;
  },

  update: async function (tweet: FbTweet) {
    try {
      // get doc ref in collection based on tweet id
      const docRef = doc(db, collectionName, tweet.uid);

      // update tweet with new likes list
      await updateDoc(docRef, tweet.toObject());

      return true;
    } catch (e) {
      console.error("Error updating document: ", e);
    }
    return false;
  }

};