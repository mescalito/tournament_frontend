import React from "react";
import cx from "classnames";

const Game = ({ game }) => (
  <li>
    <span>
    {game.p1Name}: {game.p1Score} vs. {game.p2Name}: {game.p2Score}</span>
  </li>
);

export default Game;
