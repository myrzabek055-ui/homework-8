import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./PostDetail.module.scss";

function PostDetail() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
    if (Number(id) < 1 || Number(id) > 5) {
      setPost(null);
      setLoading(false);
      return;
    }
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await response.json();

        if (!response.ok) {
          setPost(null);
          return;
        }

        setPost(data);
      } catch (error) {
        console.log(error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [id]);

  if (loading) {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
      <p>Загрузка...</p>
    </div>
  );
}

  if (!post) {
    return <h2>Пост не найден</h2>;
  }

  return (
    <section className={styles.postDetail}>
      <Link to="/posts" className={styles.back}>
        ← Назад к постам
      </Link>

      <div className={styles.card}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </section>
  );
}

export default PostDetail;