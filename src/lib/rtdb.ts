import { ref, set, serverTimestamp } from 'firebase/database';
import { db } from './firebase';
import type { User } from 'firebase/auth';

export const createUserInDB = (user: User) => {
  const userRef = ref(db, `users/${user.uid}`);
  return set(userRef, {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    createdAt: serverTimestamp(),
  });
};
