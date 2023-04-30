// import analytics from '@react-native-firebase/analytics';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React, {createContext, useContext, useEffect, useState} from 'react';
// import { requestUserPermission } from '../notification';
// import crashlytics from '@react-native-firebase/crashlytics';
export const USERS_HOME = 'users';
export const GOOGLE_MAPS_API_KEY = 'AIzaSyC_OtyjQz34hydjoYgRdM7PaVMvisnRceQ';

export const AuthContext = createContext<{
  user?: FirebaseAuthTypes.User;
  token?: FirebaseAuthTypes.IdTokenResult;
  confirmCode: (code) => void;
  signInWithPhoneNumber: (phoneNumber) => void;
  signOut: () => void;
  verifyPhoneNumber: (phoneNumber) => void;
}>({
  user: null,
  confirmCode: code => {},
  signInWithPhoneNumber: phoneNumber => {},
  signOut: () => {},
  verifyPhoneNumber: phoneNumber => {},
});

export const useUserUID = () => {
  const {user} = useContext(AuthContext);
  const {uid} = user || {};
  return uid;
};
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User>(null);
  const [confirm, setConfirm] = useState(null);
  const [token, setToken] = useState<FirebaseAuthTypes.IdTokenResult>(null);

  useEffect(() => {
    auth().onAuthStateChanged(async user => {
      if (!user) {
        return;
      }
      let token = await user.getIdTokenResult(true);
      setToken(token);
      const {uid} = user;
      setUser(user);
      // requestUserPermission();
    });
  }, []);

  const signInWithPhoneNumber = async phoneNumber => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      throw error;
    }
  };

  const verifyPhoneNumber = async phoneNumber => {
    try {
      const result = await auth().verifyPhoneNumber(phoneNumber, true);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const confirmCode = async code => {
    let credential;
    try {
      credential = await auth.PhoneAuthProvider.credential(
        confirm.verificationId,
        code,
      );
      try {
        const result = await auth().signInWithCredential(credential);
        return result;
      } catch (error) {}
      let result = await auth().currentUser.linkWithCredential(credential);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await auth().signOut();
      setUser(null);
    } catch (error) {
      throw error;
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        confirmCode,
        signInWithPhoneNumber,
        signOut,
        verifyPhoneNumber,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
