import { useState } from 'react';
import s from './LikesCounter.module.scss';

function LikesCounter({ counts }) {
  const [{ likes, liked }, setState] = useState({
    likes: counts,
    liked: false,
  });

  const toggleLiked = () => {
    if (!liked)
      return setState(prevState => ({
        ...prevState,
        likes: prevState.likes + 1,
        liked: !prevState.liked,
      }));

    setState(prevState => ({
      ...prevState,
      likes: prevState.likes - 1,
      liked: !prevState.liked,
    }));
  };

  return (
    <span className={s.likesCounter} onClick={toggleLiked}>
      {likes}
    </span>
  );
}

export default LikesCounter;
