import React, { useState } from 'react';

// Sample data for the leaderboard with rewards
const leaderboardData = [
  { email: 'coinflipper07@gmail.com', walletAddress: 'DgvAN...K7cC', rewards:  },
  { email: 'mihzeleganzy451@gmail.com', walletAddress: 'CSswE...Drz4', rewards: 1200 },
  { email: 'edebak42@gmail.com', walletAddress: 'Dmtw4...bc3m', rewards: 1100 },
  { email: 'fetugayusuf@gmail.com', walletAddress: 'AvSQX...fPdm', rewards: 1000 },
  { email: 'adekunle@gmail.com', walletAddress: '4V8EH...i9go', rewards: 1000 },
  { email: 'maleekolatunji@gmail.com', walletAddress: 'HUaSK...zzkQ', rewards: 1000 },
  { email: 'davidonobo59@gmail.com', walletAddress: '3F96C...EsxA', rewards: 1000 },
  { email: 'imanuelsam725@gmail.com ', walletAddress: '4pQM4...B1S7', rewards: 900 },
  { email: 'solomonjohnson948@gmail.com', walletAddress: 'FYrcH...x6My', rewards: 900 },
  { email: 'kirinducreatives@gmail.com', walletAddress: '5fnve...J6hE', rewards: 900 },
  { email: 'jollayemi19@gmail.com', walletAddress: '6G31f...EQzv', rewards: 900 },
  { email: 'dustyllanos27@gmail.com', walletAddress: '49z9Q...awTS', rewards: 900 },
  { email: 'olayiwolaisrael19@gmail.com', walletAddress: 'FAaD...Tseh', rewards: 900 },
  { email: 'serseithecook@gmail.com', walletAddress: '8uWiG...RkiV', rewards: 800 },
  { email: 'justusogheneyolefavour@gmail.com', walletAddress: 'BEL81...tWWN', rewards: 800 },
  { email: 'zaeeynaab@gmail.com', walletAddress: '4EQrB...2ZJ2', rewards: 800 },
  { email: 'bredbeee1@gmail.com', walletAddress: '6CCU6...XgAt', rewards: 700 },
  { email: 'crushzani@gmail.com', walletAddress: '4LuHH...5TaM', rewards: 700 },
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
