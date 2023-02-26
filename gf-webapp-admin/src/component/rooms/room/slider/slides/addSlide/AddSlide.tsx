import React, {useState} from "react";
import styles from "./addSlide.module.scss";

interface IAddSlide {
  addSlide: (slideImageURL: string) => void
}

export const AddSlide = ({addSlide}: IAddSlide) => {
  const [slideURL, setSlideURL] = useState("");

  const addSlideHandler = () => {
    addSlide(slideURL);
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