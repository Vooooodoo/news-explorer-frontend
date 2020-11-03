import React from 'react';
import './ShowMoreBtn.css';

function ShowMoreBtn(props) {
  return (
    <button className="show-more tap-highlight" type="button" onClick={props.onShowMore}>Показать еще</button>
  );
}

export default ShowMoreBtn;
