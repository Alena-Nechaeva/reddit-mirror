import React from 'react';
import styles from './comment.css';
import { IComments } from '../../../hooks/useCommentsData';
import { AuthorBlock } from './AuthorBlock';
import { CommentControls } from './CommentControls';
import { ReplyFormContainer } from './ReplyFormContainer';

interface ICommentProps {
  value: IComments;
}

export function Comment({ value }: ICommentProps) {
  const [isReplyFormOpen, setIsReplyFormOpen] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const toggleAnswerForm = () => setIsReplyFormOpen(!isReplyFormOpen);

  return (
    <li className={styles.item}>
      <div className={styles.content}>
      <AuthorBlock
          author={value.author}
          created={value.created}
          subreddit={value.subreddit}
          hideElem={() => setIsHidden(true)}
          showElem={() => setIsHidden(false)}
        />
        <div className={isHidden ? styles.hidden : ''}>
          <p>{value.body}</p>
          <CommentControls switchReplyForm={toggleAnswerForm}/>
        </div>
        <ul>
          {isReplyFormOpen && <ReplyFormContainer author={value.author} />}
          {value.replies?.map((reply: IComments) => (
            <Comment key={reply.id} value={reply} />
          ))}
        </ul>
      </div>
    </li>
  );
}
