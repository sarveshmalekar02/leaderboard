import React from 'react';
import './leaderboardentry.css';

const LeaderboardEntry = ({ rank, entry }) => {
  return (
    <tr className="leaderboard-entry">
      <td>{rank}</td>
      <td>{entry.username}</td>
      <td class="right-align">{entry.calmarRatio}</td>
      <td class="right-align">{entry.overallProfit}</td>
      <td class="right-align">{entry.avgDailyProfit}</td>
      <td class="right-align">{entry.winPercentDay}</td>
      <td class="right-align">{entry.price ? `₹${entry.price}` : '-'}</td>
      <td><a href={entry.actionLink} className="action-link">{entry.price ? 'Buy' : 'View'}</a></td>
    </tr>
  );
};

export default LeaderboardEntry;
