import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentForm } from '../CommentForm/CommentForm';
import { selectComment, updateComment } from '../../../store/commentSlice';

export function CommentFormContainer() {
  const dispatch = useDispatch();
  const text = useSelector(selectComment);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));

  }

  return <CommentForm value={text} onChange={handleChange} />;
}
