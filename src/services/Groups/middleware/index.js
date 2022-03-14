import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { dispatcher } from '../../../utils/dispatcher';
import ACTIONS from '../actions';

export const createGroup = payload => dispatch => {
  dispatch(dispatcher(ACTIONS.CREATE_GROUP_REQ));
  const ref = firestore().collection('GROUPS').doc();
  return ref
    .set(payload)
    .then(() => dispatch(dispatcher(ACTIONS.CREATE_GROUP_SUCCESS)))
    .catch(err => {
      console.error(err);
      const errMsg = err.message || 'Failed to create the group';
      return dispatch(dispatcher(ACTIONS.CREATE_GROUP_FAILURE, errMsg));
    });
};

export const groupList = () => dispatch => {
  dispatch(dispatcher(ACTIONS.GROUP_LIST_REQ));
  const currentUser = auth().currentUser;
  const unsubscribe = firestore()
    .collection('GROUPS')
    .where('users', 'array-contains', currentUser)
    .onSnapshot(
      querySnapshot => {
        const groupListData = querySnapshot.docs.map(doc => doc.data());
        return dispatch(dispatcher(ACTIONS.GROUP_LIST_SUCCESS, groupListData));
      },
      err => {
        console.error(err);
        const errMsg = 'Failed to list the groups';
        return dispatch(dispatcher(ACTIONS.GROUP_LIST_FAILURE, errMsg));
      },
    );
};

export const getAllUsers = () => dispatch => {
  dispatch(dispatcher(ACTIONS.GET_ALL_USERS_REQ));
  const unsubscribe = firestore()
    .collection('USERS')
    .where('isExist', '==', true)
    .onSnapshot(
      querySnapshot => {
        const users = querySnapshot.docs.map(doc => doc.data());
        return dispatch(dispatcher(ACTIONS.GET_ALL_USERS_SUCCESS, users));
      },
      err => {
        console.error(err);
        const errMsg = err.message || 'Failed to get the users';
        return dispatch(dispatcher(ACTIONS.GET_ALL_USERS_FAILIURE, errMsg));
      },
    );
};
