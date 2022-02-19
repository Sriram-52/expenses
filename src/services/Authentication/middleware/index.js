import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { dispatcher } from '../../../utils/dispatcher';
import ACTIONS from '../actions';

const TAG = 'Auth Middleware';

export const signIn = (email, password) => dispatch => {
  dispatch(dispatcher(ACTIONS.SIGNIN_REQ));
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      return dispatch(dispatcher(ACTIONS.SIGNIN_SUCCESS, user));
    })
    .catch(err => {
      console.error(TAG, err);
      const errMsg = err.message || 'Failed to SignIn';
      return dispatch(dispatcher(ACTIONS.SIGNIN_FAILURE, errMsg));
    });
};

export const signUp = payload => dispatch => {
  dispatch(dispatcher(ACTIONS.SIGNUP_REQ));
  return auth()
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then(userCredential => {
      const data = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: userCredential.user.email,
      };
      const ref = firestore().collection('USERS').doc(userCredential.user.uid);
      return ref
        .set({
          ...data,
          id: ref.id,
          createdAt: new Date().toISOString(),
          isExist: true,
        })
        .then(() => {
          return dispatch(dispatcher(ACTIONS.SIGNUP_SUCCESS));
        })
        .catch(err => {
          console.error(TAG, err);
          const errMsg = err.message || 'Failed to signup';
          return dispatch(dispatcher(ACTIONS.SIGNUP_FAILURE, errMsg));
        });
    });
};

export const signOut = () => dispatch => {
  dispatch(dispatcher(ACTIONS.SIGNOUT_REQ));
  return auth()
    .signOut()
    .then(() => dispatch(dispatcher(ACTIONS.SIGNOUT_SUCCESS)))
    .catch(err => {
      console.error(TAG, err);
      const errMsg = err.message || 'Failed to signout';
      return dispatch(dispatcher(ACTIONS.SIGNOUT_FAILURE, errMsg));
    });
};

export const tokenListener = dispatch => {
  dispatch(dispatcher(ACTIONS.SIGNIN_REQ));
  return auth().onUserChanged(user => {
    if (user) {
      dispatch(dispatcher(ACTIONS.SIGNIN_SUCCESS, user));
    } else {
      console.log(TAG, 'No User to listen changes');
      dispatch(dispatcher(ACTIONS.SIGNIN_FAILURE, 'No User to listen changes'));
    }
  });
};
