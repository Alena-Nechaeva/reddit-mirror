import React, { useContext } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IPostData {
  id: string;
  authorName: string;
  created: number;
  link: string;
  previewSrc: string;
  score: number;
  title: string;
  authorAvatarSrc: string;
}

export function usePostsData() {
  const [postsData, setPostsData] = React.useState<Array<IPostData>>([]);
  const token = useContext(tokenContext);

  React.useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
    axios
      .get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const posts = resp.data.data.children.map((post: any) => {
          return <IPostData>{
            id: post.data.id,
            authorName: post.data.author,
            title: post.data.title,
            created: post.data.created_utc,
            link: post.data.permalink,
            previewSrc: post.data.preview
            ? post.data.preview.images?.[0].source.url.replace(/(\&amp\;)/g, '&') : null, 
            score: post.data.ups,
            authorAvatarSrc: post.data.sr_detail.icon_img,
          };
        });
        setPostsData(posts);
      })
      .catch(console.log);
    }
  }, [token]);

  return [postsData];
}
