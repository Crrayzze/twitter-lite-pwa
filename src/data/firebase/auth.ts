import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { UserFirebase } from './user';
import { FbUser } from './models/user';

export const AuthFirebase = {

  register: async function(username: string, email: string, password: string): Promise<FbUser | null> {
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      const user = await UserFirebase.create(credential.user.uid, email, username);

      return user;
    } catch (e: any) {
      console.error(e.code, e.message);
    }
    return null;
  },

  logout: async function(): Promise<boolean> {
    try {
      await signOut(auth);

      return true;
    } catch (e: any) {
      console.error(e.code, e.message);
    }
    return false;
  },

};
