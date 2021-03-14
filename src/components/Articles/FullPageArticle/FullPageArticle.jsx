import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./FullPageArticle.module.css";
import { selectArticle, removearticle } from "../../../features/articleSlice";
import Button from "../../../UI/Button/Button";

const FullPageArticle = () => {
  const article = useSelector(selectArticle);
  const dispatch = useDispatch();
  return (
    <div className={styles.fullpagearticle}>
      <div className={styles.username}>
        <p className={styles.bolder}>By:</p>
        <p>username</p>
      </div>
      <div className={styles.timestamp}>
        <p className={styles.bolder}>Date:</p>
        <p>Timestamp</p>
      </div>
      <div className={styles.title}>
        <p className={styles.bolder}>Title:</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          laborum inventore ab, quis possimus molestias dignissimos itaque omnis
          iusto atque.
        </p>
      </div>
      <div className={styles.content}>
        <p className={styles.bolder}>Story:</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          laborum eius veniam? Itaque doloribus re prehenderit perferendis
          cumque totam? Eum porro quo nobis, tempore perspiciatis eveniet eius
          voluptatem fugiat beatae officia cumque vitae hic in suscipit
          eligendi. Quasi explicabo reprehenderit quae! Animi quod, accusamus ex
          dicta qui voluptatum quas culpa ab!
        </p>
      </div>
      <Button title="Done!" onclick={() => dispatch(removearticle())} />
    </div>
  );
};

export default FullPageArticle;
