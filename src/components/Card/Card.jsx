import React from "react";
import styles from "./card.module.css";
import PropTypes from "prop-types";

const Card = ({ img, text, action }) => {
  return (
    <div className={`card ${styles.image}`} role="button" onClick={action}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

Card.prototypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

Card.defaultProps = {
  action: () => {},
};

export default Card;
