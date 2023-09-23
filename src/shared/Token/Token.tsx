import React from 'react';
import { useDispatch } from 'react-redux';
import { saveToken } from '../../store/tokenSlice';

export function Token() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(saveToken() as any);
  }, []);
  return <></>;
}