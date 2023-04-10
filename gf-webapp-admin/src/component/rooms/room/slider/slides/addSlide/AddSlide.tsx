import {useState} from "react";
import {Button} from "gf-ui-lib/src/components/Button/Button";
import styles from "src/component/rooms/room/slider/slides/addSlide/AddSlide.module.scss";

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
      <Button
        onClick={addSlideHandler}
        value="Add"
        size="innerContent"
      />
    </li>
  );
};