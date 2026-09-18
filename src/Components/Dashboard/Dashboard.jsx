// import React, { useState } from 'react';
import Sidebar from './Components/Common/Sidebar';
import Navbar from './Components/Common/Navbar';
import Overview from './Components/pages/Overview';
import Donations from './Components/pages/Donations';
import Donors from './Components/pages/Donors';
import Charities from './Components/pages/Charities';
import Campaigns from './Components/pages/Campaigns';
import Authority from './Components/pages/Authority';
import Beneficiaries from './Components/pages/Beneficiaries'; // Import your Beneficiaries page component

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('Overview');

  return (
    <div style={styles.dashboardRoot}>
      {/* Sidebar Component */}
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Main Content Area */}
      <div style={styles.mainWrapper}>
        {/* Top Navbar */}
        <Navbar />

        {/* Page Container */}
        <div style={styles.pageContainer}>
          {activeNav === 'Overview' && <Overview />}
          {activeNav === 'Donations' && <Donations />}
          {activeNav === 'Donors' && <Donors />}
          {activeNav === 'Charities' && <Charities />}
          {activeNav === 'Campaigns' && <Campaigns />}
          {activeNav === 'Authority' && <Authority />}
          {activeNav === 'Beneficiaries' && <Beneficiaries />}
          {activeNav !== 'Overview' && 
           activeNav !== 'Donations' && 
           activeNav !== 'Donors' && 
           activeNav !== 'Charities' && 
           activeNav !== 'Campaigns' &&
           activeNav !== 'Authority' &&
           activeNav !== 'Beneficiaries' && (
            <div style={{ padding: '36px', fontSize: '1.2rem', color: '#4b5563' }}>
              {activeNav} Page Content
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Layout styling
const styles = {
  dashboardRoot: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f7f6f4',
    overflow: 'hidden',
    fontFamily: "'Inter', sans-serif",
  },
  mainWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#f7f6f4',
  },
  pageContainer: {
    flex: 1,
    overflowY: 'auto',
  },
};