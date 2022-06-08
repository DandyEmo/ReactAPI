import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CharacterItem = ({ item }) => {
  return (
    <Link to={`/characters/${item.nickname}`}>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={item.img} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterItem;
