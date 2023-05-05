import { db } from '../../firebase';
import { doc,  getDoc, setDoc } from "firebase/firestore";
import { FbUser } from './models/user';

const usersCollectionName = 'users';

export const UserFirebase = {

  create: async function (uid: string, email: string, username: string): Promise<FbUser | null> {
    try {
      const docRef = doc(db, usersCollectionName, uid);
      const user = new FbUser({uid, email, username});

      await setDoc(docRef, user.toObject());

      return user;
    } catch (e) {
      console.error("Error creating user: ", e);
    }
    return null;
  },

  getFromUid: async function (uid: string): Promise<FbUser| null> {
    try {
      const docRef = doc(db, usersCollectionName, uid);
      const document = await getDoc(docRef);

      return new FbUser({ uid: document.id, ...document.data()});
    } catch (e) {
      console.error("Error finding user by uid: ", e);
    }
    return null;
  },

  getAllFromUidList: async function (uids: string[]): Promise<FbUser[]> {
    try {
      const userPromise = uids.map(uid => getDoc(doc(db, "users", uid)));

      return (await Promise.all(userPromise)).map(doc => new FbUser({ uid: doc.id, ...doc.data()}));
    } catch (e) {
      console.error("Error finding users by uid list: ", e);
    }
    return [];
  }

};
