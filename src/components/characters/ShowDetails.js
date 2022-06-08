import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ShowDetails = ({ items }) => {
  const param = useParams().character;

  if (items) {
    var filter = items.filter(item => {
      return param === item.nickname;
    });
    return (
      <div>
        <ul>
          <li className="actorsDetails">
            <strong>Actor Name: </strong> {filter[0].portrayed}
          </li>
          <li className="actorsDetails">
            <strong>Character Name: </strong> {filter[0].name}
          </li>
          <li className="actorsDetails">
            <strong>Nickname: </strong> {filter[0].nickname}
          </li>
          <li className="actorsDetails">
            <strong>Birthday: </strong> {filter[0].birthday}
          </li>
          <li className="actorsDetails">
            <strong>Status: </strong> {filter[0].status}
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default ShowDetails;
