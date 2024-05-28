import React, { useEffect, useState } from "react";
import LeaderboardEntry from "./leaderboardentry";
import "./leaderboard.css";

const leaderboardData = [
  {
    id: 1,
    username: "Selling with re entr",
    calmarRatio: 3.96,
    overallProfit: 381845,
    avgDailyProfit: 319.54,
    winPercentDay: 0.65,
    price: null,
    actionLink: "#",
  },
  {
    id: 2,
    username: "strategy_name",
    calmarRatio: 3.62,
    overallProfit: 268872.5,
    avgDailyProfit: 216.31,
    winPercentDay: 0.64,
    price: 500,
    actionLink: "#",
  },
  {
    id: 3,
    username: "Based on premium and",
    calmarRatio: 3.42,
    overallProfit: 255425,
    avgDailyProfit: 208.51,
    winPercentDay: 0.64,
    price: null,
    actionLink: "#",
  },
  {
    id: 4,
    username: "strategy_name",
    calmarRatio: 3.22,
    overallProfit: 370845,
    avgDailyProfit: 303.47,
    winPercentDay: 0.65,
    price: null,
    actionLink: "#",
  },
  {
    id: 5,
    username: "strategy_name",
    calmarRatio: 3.22,
    overallProfit: 370845,
    avgDailyProfit: 303.47,
    winPercentDay: 0.65,
    price: null,
    actionLink: "#",
  },
  {
    id: 6,
    username: "Based on premium wit",
    calmarRatio: 3.01,
    overallProfit: 135980,
    avgDailyProfit: 185.77,
    winPercentDay: 0.49,
    price: null,
    actionLink: "#",
  },
  {
    id: 7,
    username: "strategy_name",
    calmarRatio: 2.76,
    overallProfit: 267867.5,
    avgDailyProfit: 218.49,
    winPercentDay: 0.6,
    price: null,
    actionLink: "#",
  },
  {
    id: 8,
    username: "Wait and trade_Save",
    calmarRatio: 2.62,
    overallProfit: 178252.5,
    avgDailyProfit: 161.9,
    winPercentDay: 0.63,
    price: null,
    actionLink: "#",
  },
  {
    id: 9,
    username: "iron condor",
    calmarRatio: 2.44,
    overallProfit: 176420,
    avgDailyProfit: 137.51,
    winPercentDay: 0.65,
    price: null,
    actionLink: "#",
  },
  {
    id: 10,
    username: "strategy_name",
    calmarRatio: 2.04,
    overallProfit: 244555,
    avgDailyProfit: 198.66,
    winPercentDay: 0.62,
    price: null,
    actionLink: "#",
  },
];

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(leaderboardData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="leaderboard">
      <h1>LeaderBoards</h1>
     <div className="table">
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th class="right-align">
              Calmar Ratio
              <span class="sort-icon">&#9660;</span>
            </th>
            <th class="right-align">
              Overall Profit
              <span class="sort-icon">&#9660;</span>
            </th>
            <th class="right-align">
              Avg. Daily Profit
              <span class="sort-icon">&#9660;</span>
            </th>
            <th class="right-align">
              Win % (Day)
              <span class="sort-icon">&#9660;</span>
            </th>
            <th class="right-align">
              Price (₹)
              <span class="sort-icon">&#9660;</span>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <LeaderboardEntry key={entry.id} rank={index + 1} entry={entry} />
          ))}
        </tbody>
       </table>
      </div> 
    </div>
  );
};

export default Leaderboard;
