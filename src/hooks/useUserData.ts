import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../store/tokenSlice';
import { fetchUserData, selectUserData, selectUserLoading } from '../store/userReducer';

interface IUserData {
  name: string;
  userImg: string;
  loading: boolean;
}

export function useUserData() {
  const data = useSelector(selectUserData);
  const loading = useSelector(selectUserLoading);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      dispatch(fetchUserData() as any);
    }
  }, [token]);

  return <IUserData>{
    name: data.name,
    userImg: data.userImg,
    loading,
  };
}
