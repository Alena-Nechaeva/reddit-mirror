import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../store/tokenSlice';

export interface IComments {
  id: string;
  author: string;
  created: number;
  body: string;
  subreddit: string;
  replies: IComments[];
}

function processComments(commentData: any): IComments {
  return {
    id: commentData.data.id,
    author: commentData.data.author,
    created: commentData.data.created_utc,
    body: commentData.data.body,
    subreddit: commentData.data.subreddit,
    replies:
      commentData.data.replies?.data?.children?.map((reply: any) => {
        return processComments(reply);
      }) || [],
  };
}

export function useCommentsData(id: string) {
  const [comments, setComments] = React.useState<Array<IComments>>([]);
  const token = useSelector(selectToken);

  React.useEffect(() => {
    axios
      .get(`https://oauth.reddit.com/comments/${id}?sr_detail=true`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const topLevelComments = resp.data[1]?.data.children || [];
        const processedComments = topLevelComments.map((commentData: any) =>
          processComments(commentData)
        );
        setComments(processedComments);
      })
      .catch(console.log);
  }, [token]);

  return [comments];
}
