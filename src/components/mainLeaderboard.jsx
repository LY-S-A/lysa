import React, { useState } from 'react';

// Sample data for the leaderboard with rewards
const leaderboardData = [
  { email: 'alice@example.com', walletAddress: '0x123...abc1', rewards: 1500 },
  { email: 'bob@example.com', walletAddress: '0x123...abc2', rewards: 2300 },
  { email: 'charlie@example.com', walletAddress: '0x123...abc3', rewards: 800 },
  { email: 'dave@example.com', walletAddress: '0x123...abc4', rewards: 3200 },
  { email: 'eve@example.com', walletAddress: '0x123...abc5', rewards: 1100 },
  { email: 'frank@example.com', walletAddress: '0x123...abc6', rewards: 2700 },
  { email: 'grace@example.com', walletAddress: '0x123...abc7', rewards: 1900 },
  { email: 'heidi@example.com', walletAddress: '0x123...abc8', rewards: 400 },
  { email: 'ivan@example.com', walletAddress: '0x123...abc9', rewards: 3000 },
  { email: 'judy@example.com', walletAddress: '0x123...ab10', rewards: 2500 },
  { email: 'kyle@example.com', walletAddress: '0x123...ab11', rewards: 600 },
  { email: 'laura@example.com', walletAddress: '0x123...ab12', rewards: 1800 },
  { email: 'mike@example.com', walletAddress: '0x123...ab13', rewards: 2200 },
  { email: 'nina@example.com', walletAddress: '0x123...ab14', rewards: 1300 },
  { email: 'oscar@example.com', walletAddress: '0x123...ab15', rewards: 2900 },
  { email: 'pam@example.com', walletAddress: '0x123...ab16', rewards: 1700 },
  { email: 'quinn@example.com', walletAddress: '0x123...ab17', rewards: 2000 },
];

const Leaderboard = () => {
  const [data, setData] = useState(leaderboardData);
  const [sortConfig, setSortConfig] = useState({ key: 'rewards', direction: 'desc' });

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    const sortedData = [...data].sort((a, b) => {
      if (key === 'email') {
        return direction === 'asc' ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email);
      } else if (key === 'rewards') {
        return direction === 'asc' ? a.rewards - b.rewards : b.rewards - a.rewards;
      }
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div className="leaderboard-container">
      <h2>Contributors Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('email')} style={{ cursor: 'pointer' }}>
              Email {sortConfig.key === 'email' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th>Wallet Address</th>
            <th onClick={() => handleSort('rewards')} style={{ cursor: 'pointer' }}>
              Rewards {sortConfig.key === 'rewards' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.walletAddress}</td>
              <td>{user.rewards} points</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
