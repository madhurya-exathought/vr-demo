import axios from 'axios';
import { Dispatch } from 'redux';
import { setUsers } from '../../store/slices/userSlice';

export const fetchUsers = async (dispatch: Dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(setUsers(response.data));
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
