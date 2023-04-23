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

};
