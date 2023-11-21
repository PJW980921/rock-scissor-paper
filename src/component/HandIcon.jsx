import rockIcon from "../assets/rock.svg";
import scissorIcon from "../assets/scissor.svg";
import paperIcon from "../assets/paper.svg";

const RSP_IMAGES = {
  rock: rockIcon,
  scissor: scissorIcon,
  paper: paperIcon,
};

function HandIcon({ value }) {
  const src = RSP_IMAGES[value];
  return <img src={src} alt={value} />;
}

export default HandIcon;
