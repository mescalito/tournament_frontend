import React from "react";
import cx from "classnames";
/*
ranks = [{
    playerId: 2,
    playerName: 'Andrew',
    win: 2,
    loss: 0,
    tie: 1,
    points: 7
    }] 
    */
const Rank = ({ rank }) => (
  <li>
    <span>
    {rank.playerName}: Wins {rank.win}, Losses {rank.loss}, Ties {rank.tie}, Total of Point: {rank.points}</span>
  </li>
);

export default Rank;
