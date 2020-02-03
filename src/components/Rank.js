import React from "react";

const Rank = ({ rank }) => (
  <li>
    <span>
    {rank.name}: Wins {rank.won}, Losses {rank.lost}, Ties {rank.tied}, Total of Point: {rank.points}</span>
  </li>
);

export default Rank;
