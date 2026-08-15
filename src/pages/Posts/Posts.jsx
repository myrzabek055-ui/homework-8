import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Posts.module.scss";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts?limit=5");
        const data = await response.json();

        setPosts(data.posts);
      } catch (error) {
        consol.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
      <p>Загрузка...</p>
    </div>
  );
}

  return (
    <section className={styles.posts}>
      <h1>Посты</h1>

      <div className={styles.List}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <Link to={`/posts/${post.id}`}>Подробнее</Link>
          </div>
        ))}
      </div>
    </section>

  );
}

export default Posts;