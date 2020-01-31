import React from "react";
import Rank from "./Rank";

const RankList = ({ 
  ranks = [{
    playerId: 2,
    playerName: 'Andrew',
    win: 2,
    loss: 0,
    tie: 1,
    points: 7
    }]
  }) => {
  return (
  <div>
    <h1>Leading Board</h1>
    <ul className="game-list">
      {
        ranks && ranks.length
        ? ranks.map((rank, index) => {
            return <Rank key={`rank-${rank.playerId}`} rank={rank} />;
          })
        : "No players, yay!"
      }
    </ul>
  </div>
)};

export default RankList;
