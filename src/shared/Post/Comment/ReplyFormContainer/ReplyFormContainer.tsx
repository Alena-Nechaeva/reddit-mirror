import React, { ChangeEvent, FormEvent } from 'react';
import { CommentForm } from '../../CommentForm';

interface ICommentFormProps {
  author?: string;
}

export function ReplyFormContainer({ author }: ICommentFormProps) {
  const [value, setValue] = React.useState(author);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  return <CommentForm value={value} onChange={handleChange} />;
}
