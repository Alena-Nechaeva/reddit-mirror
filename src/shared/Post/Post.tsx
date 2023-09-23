import React from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useCommentsData, IComments } from '../../hooks/useCommentsData';
import { Text } from '../Text';
import { Comment } from './Comment';
import { CommentFormContainer } from './CommentFormContainer';
import { Icon } from '../Icon';
import { EIcons } from '../Icon/EIcons';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPostsData } from '../../store/postsReducer';

export function Post() {
  const container = document.querySelector('#modal_root');
  let { postId } = useParams();
  const [commentsArr] = postId ? useCommentsData(postId) : [];
  const navigate = useNavigate();
  const data = useSelector(selectPostsData);
  const postInfo = data.find((item: any) => item.id === postId);
  const isImg = postInfo.image.endsWith('jpg');

  let scrollPos = false;
  if (window.scrollY > 100) scrollPos = true;

  const modalParent = React.useRef(null);
  if (!container) return null;

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  useOutsideClick(modalParent, () => {
    navigate('/');
  });

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.content} style={{ marginTop: scrollPos ? '30px' : '100px' }} ref={modalParent}>
        <button
          className={styles.closeBtn}
          onClick={() => {
            navigate('/');
          }}
        >
          <Icon name={EIcons.close}></Icon>
        </button>
        <Text As="h2" size={20}>
          {postInfo.title}
        </Text>
        <Text As="p" size={14}>
          Lorem ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt maxime quaerat natus
          sunt dicta quis perferendis, enim esse? Fuga ut vitae quidem quibusdam ab magni nobis omnis?
          Aspernatur, voluptate! Beatae?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam sunt
          dignissimos officiis nemo tenetur deserunt? Autem, aut non enim asperiores saepe iusto at, pariatur
          alias libero explicabo est, consequuntur nostrum?Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Dicta natus, accusamus eos illo sed nostrum voluptatem rerum delectus minus cupiditate magnam
          totam soluta earum facilis, fugiat, exercitationem laudantium eius tenetur. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Sed, dolores. Natus sapiente alias delectus fugit perspiciatis
          eum officiis quia, labore accusamus nesciunt. Vel nesciunt suscipit non, modi totam autem aperiam?
        </Text>
        <div className={styles.postImage}>
          {isImg ? (
            <img src={postInfo.image} alt="post image" />
          ) : (
            <a className={styles.link} target='_blank' href={postInfo.image}>go and see an article</a>
          )}
        </div>
        <CommentFormContainer />
        <ul>
          {commentsArr.map((comment: IComments) => (
            <Comment key={comment.id} value={comment} />
          ))}
        </ul>
      </div>
    </div>,
    container
  );
}
