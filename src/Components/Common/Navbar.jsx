// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { FiBell } from 'react-icons/fi';

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
  
//   // Determine current language abbreviation for display
//   const currentLang = i18n.language ? i18n.language.toUpperCase() : 'EN';
//   const isAr = currentLang.includes('AR');

//   const handleLanguageToggle = () => {
//     const nextLang = isAr ? 'en' : 'ar';
//     i18n.changeLanguage(nextLang);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//           font-family: 'Inter', sans-serif;
//         }

//         /* Top Navbar Container */
//         .top-navbar {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 20px 36px;
//           background-color: #ffffff;
//           border-bottom: 1px solid #eae6e1;
//           width: 100%;
//         }

//         /* Header Title */
//         .header-title {
//           font-size: 1.25rem;
//           font-weight: 600;
//           color: #1f2937;
//           margin: 0;
//         }

//         /* Actions Section (Lang, Bell, Avatar) */
//         .header-actions {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//         }

//         /* Language Toggle Button */
//         .lang-badge {
//           border: 1px solid #d1d5db;
//           padding: 6px 14px;
//           border-radius: 8px;
//           font-size: 0.85rem;
//           font-weight: 600;
//           background: white;
//           color: #374151;
//           cursor: pointer;
//           transition: background-color 0.2s;
//         }

//         .lang-badge:hover {
//           background-color: #f3f4f6;
//         }

//         /* Notification Bell with Badge */
//         .notification-bell {
//           position: relative;
//           background: white;
//           border: 1px solid #d1d5db;
//           padding: 8px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: background-color 0.2s;
//         }

//         .notification-bell:hover {
//           background-color: #f3f4f6;
//         }

//         .badge-dot {
//           position: absolute;
//           top: 6px;
//           right: 6px;
//           width: 7px;
//           height: 7px;
//           background-color: #dc2626;
//           border-radius: 50%;
//         }

//         /* User Avatar */
//         .user-avatar {
//           width: 38px;
//           height: 38px;
//           background-color: #7f1d1d;
//           color: white;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: 600;
//           font-size: 0.95rem;
//         }

//         /* Media Query for Mobile and Small Screens */
//         @media (max-width: 768px) {
//           .top-navbar {
//             padding: 14px 16px;
//           }
//           .header-title {
//             font-size: 1.05rem;
//           }
//           .header-actions {
//             gap: 10px;
//           }
//         }
//       `}</style>

//       {/* Navbar Markup */}
//       <header className="top-navbar">
//         <h1 className="header-title">
//           {t("navbar.title", "Dashboard")}
//         </h1>
        
//         <div className="header-actions">
//           {/* Language Switch Button */}
//           <button className="lang-badge" onClick={handleLanguageToggle}>
//             {isAr ? 'EN' : 'AR'}
//           </button>

//           {/* Notification Bell */}
//           <div className="notification-bell">
//             <FiBell size={18} color="#7f1d1d" />
//             <span className="badge-dot"></span>
//           </div>

//           {/* User Profile Avatar */}
//           <div className="user-avatar">A</div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiBell, FiMenu } from 'react-icons/fi'; // Imported FiMenu for the 3 lines

const Navbar = ({ onToggleSidebar }) => {
  const { t, i18n } = useTranslation();
  
  // Determine current language abbreviation for display
  const currentLang = i18n.language ? i18n.language.toUpperCase() : 'EN';
  const isAr = currentLang.includes('AR');

  const handleLanguageToggle = () => {
    const nextLang = isAr ? 'en' : 'ar';
    i18n.changeLanguage(nextLang);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }

        /* Top Navbar Container */
        .top-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 36px;
          background-color: #ffffff;
          border-bottom: 1px solid #eae6e1;
          width: 100%;
        }

        /* Left Section (Hamburger + Title) */
        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* Hamburger Button (Hidden by default on desktop) */
        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #1f2937;
          padding: 4px;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .hamburger-btn:hover {
          background-color: #f3f4f6;
        }

        /* Header Title */
        .header-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        /* Actions Section (Lang, Bell, Avatar) */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        /* Language Toggle Button */
        .lang-badge {
          border: 1px solid #d1d5db;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          background: white;
          color: #374151;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .lang-badge:hover {
          background-color: #f3f4f6;
        }

        /* Notification Bell with Badge */
        .notification-bell {
          position: relative;
          background: white;
          border: 1px solid #d1d5db;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .notification-bell:hover {
          background-color: #f3f4f6;
        }

        .badge-dot {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 7px;
          height: 7px;
          background-color: #dc2626;
          border-radius: 50%;
        }

        /* User Avatar */
        .user-avatar {
          width: 38px;
          height: 38px;
          background-color: #7f1d1d;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.95rem;
        }

        /* Media Query for Mobile and Small Screens */
        @media (max-width: 768px) {
          .top-navbar {
            padding: 14px 16px;
          }
          .header-title {
            font-size: 1.05rem;
          }
          .header-actions {
            gap: 10px;
          }
          /* Show hamburger button on mobile */
          .hamburger-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>

      {/* Navbar Markup */}
      <header className="top-navbar">
        
        <div className="header-left">
          {/* Hamburger Menu Button */}
          <button className="hamburger-btn" onClick={onToggleSidebar}>
            <FiMenu size={24} />
          </button>
          
          <h1 className="header-title">
            {t("navbar.title", "Dashboard")}
          </h1>
        </div>
        
        <div className="header-actions">
          {/* Language Switch Button */}
          <button className="lang-badge" onClick={handleLanguageToggle}>
            {isAr ? 'EN' : 'AR'}
          </button>

          {/* Notification Bell */}
          <div className="notification-bell">
            <FiBell size={18} color="#7f1d1d" />
            <span className="badge-dot"></span>
          </div>

          {/* User Profile Avatar */}
          <div className="user-avatar">A</div>
        </div>
      </header>
    </>
  );
};

export default Navbar;