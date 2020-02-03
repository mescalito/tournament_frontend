import React from "react";
import { connect } from 'react-redux';
import { fetchRanks } from "../redux/actions";
import Rank from "./Rank";


class RankList extends React.Component {
  componentWillMount() {
    const { fetchRanks } = this.props;
    fetchRanks();
  }
  render() {
    const { ranks } = this.props;
    console.log(ranks)
    return (
      <div>
        <h1>Leading Board</h1>
        <ul className="game-list">
          {
            ranks && ranks.length
            ? ranks.map((rank, index) => {
                return <Rank key={`rank-${rank.name}`} rank={rank} />;
              })
            : "No players, yay!"
          }
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { ranks:state.ranks.ranks[0] };
};

const mapDispatchToProps = { fetchRanks };

export default connect(mapStateToProps, mapDispatchToProps)(RankList);
