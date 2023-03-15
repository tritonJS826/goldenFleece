import {useState} from "react";
import styles from "./AddSlide.module.scss";

interface AddSlideProps {
  addSlide: (slideImageURL: string) => void
}

export const AddSlide = (props: AddSlideProps) => {
  const [slideURL, setSlideURL] = useState("");

  const addSlideHandler = () => {
    props.addSlide(slideURL);
    setSlideURL("");
  };

  return (
    <li className={styles.addSlide}>
      Add image
      <input type="text"
        placeholder="Enter image URL"
        value={slideURL}
        onChange={(e) => setSlideURL(e.target.value)}
      />
      <button onClick={addSlideHandler}>
        Add
      </button>
    </li>
  );
};