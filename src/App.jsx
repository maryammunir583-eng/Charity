// import React, { useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import './i18n'; 

// import Sidebar from './Components/Common/Sidebar';
// import Navbar from './Components/Common/Navbar';
// import Overview from './Components/Pages/Overview';
// import Donations from './Components/Pages/Donations'; 
// import Donors from './Components/Pages/Donors'; 
// import Charities from './Components/Pages/Charities'; 
// import Campaigns from './Components/Pages/Campaigns';
// import Authority from './Components/Pages/Authority';
// import Beneficiaries from './Components/Pages/Beneficiaries'; 
// import Reports from './Components/Pages/Reports';
// import Settings from './Components/Pages/Settings';

// const DashboardLayout = () => {
//   const { i18n } = useTranslation();
  
//   // Normalize current language (e.g., 'ar' or 'en')
//   const currentLang = i18n.language ? i18n.language.toLowerCase() : 'en';
//   const isRtl = currentLang === 'ar' || currentLang === 'ar-sa';

//   // Update HTML document direction attribute globally when language changes
//   useEffect(() => {
//     document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
//     document.documentElement.lang = currentLang;
//   }, [isRtl, currentLang]);

//   return (
//     <div 
//       dir={isRtl ? 'rtl' : 'ltr'} 
//       style={{
//         ...styles.dashboardRoot, 
//         flexDirection: isRtl ? 'row-reverse' : 'row'
//       }}
//     >
//       <Sidebar />

//       <div style={styles.mainWrapper}>
//         <Navbar />

//         <div style={styles.contentArea}>
//           <Routes>
//             <Route path="/" element={<Overview />} />
//             <Route path="/donations" element={<Donations />} />
//             <Route path="/donors" element={<Donors />} />
//             <Route path="/charities" element={<Charities />} />
//             <Route path="/campaigns" element={<Campaigns />} />
//             <Route path="/authority" element={<Authority />} />
//             <Route path="/beneficiaries" element={<Beneficiaries />} />
//             <Route path="/reports" element={<Reports />} />
//             <Route path="/settings" element={<Settings />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <BrowserRouter>
//       <DashboardLayout />
//     </BrowserRouter>
//   );
// };

// const styles = {
//   dashboardRoot: {
//     display: 'flex',
//     height: '100dvh', // Changed from 100vh to 100dvh for smooth mobile browser scaling
//     width: '100vw',
//     backgroundColor: '#f7f6f4',
//     overflow: 'hidden',
//     fontFamily: "'Inter', sans-serif",
//   },
//   mainWrapper: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     height: '100dvh',
//     overflow: 'hidden',
//     backgroundColor: '#f7f6f4',
//   },
//   contentArea: {
//     flex: 1,
//     overflowY: 'auto',
//   },
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n'; 

import Sidebar from './Components/Common/Sidebar';
import Navbar from './Components/Common/Navbar';
import Overview from './Components/Pages/Overview';
import Donations from './Components/Pages/Donations'; 
import Donors from './Components/Pages/Donors'; 
import Charities from './Components/Pages/Charities'; 
import Campaigns from './Components/Pages/Campaigns';
import Authority from './Components/Pages/Authority';
import Beneficiaries from './Components/Pages/Beneficiaries'; 
import Reports from './Components/Pages/Reports';
import Settings from './Components/Pages/Settings';

const DashboardLayout = () => {
  const { i18n } = useTranslation();
  
  // Mobile sidebar open/close state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Normalize current language (e.g., 'ar' or 'en')
  const currentLang = i18n.language ? i18n.language.toLowerCase() : 'en';
  const isRtl = currentLang === 'ar' || currentLang === 'ar-sa';

  // Update HTML document direction attribute globally when language changes
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [isRtl, currentLang]);

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'} 
      style={{
        ...styles.dashboardRoot, 
        flexDirection: isRtl ? 'row-reverse' : 'row'
      }}
    >
      {/* Pass open state and close handler to Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <div style={styles.mainWrapper}>
        {/* Pass toggle handler to Navbar so the hamburger button can open/close it */}
        <Navbar 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />

        <div style={styles.contentArea}>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/charities" element={<Charities />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/authority" element={<Authority />} />
            <Route path="/beneficiaries" element={<Beneficiaries />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <DashboardLayout />
    </BrowserRouter>
  );
};

const styles = {
  dashboardRoot: {
    display: 'flex',
    height: '100dvh', // Changed from 100vh to 100dvh for smooth mobile browser scaling
    width: '100vw',
    backgroundColor: '#f7f6f4',
    overflow: 'hidden',
    fontFamily: "'Inter', sans-serif",
  },
  mainWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100dvh',
    overflow: 'hidden',
    backgroundColor: '#f7f6f4',
  },
  contentArea: {
    flex: 1,
    overflowY: 'auto',
  },
};

export default App;