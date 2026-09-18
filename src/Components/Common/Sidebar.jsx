// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { 
//   FiHome, 
//   FiHeart, 
//   FiUsers, 
//   FiShield, 
//   FiFileText, 
//   FiBarChart2, 
//   FiDatabase, 
//   FiSettings 
// } from 'react-icons/fi';

// const Sidebar = () => {
//   const { t } = useTranslation();

//   const menuItems = [
//     { path: "/", name: t("sidebar.overview", "Overview"), icon: <FiHome size={20} /> },
//     { path: "/donations", name: t("sidebar.donations", "Donations"), icon: <FiHeart size={20} /> },
//     { path: "/donors", name: t("sidebar.donors", "Donors"), icon: <FiUsers size={20} /> },
//     { path: "/charities", name: t("sidebar.charities", "Charities"), icon: <FiShield size={20} /> },
//     { path: "/campaigns", name: t("sidebar.campaigns", "Campaigns"), icon: <FiFileText size={20} /> },
//     { path: "/authority", name: t("sidebar.authority", "Authority"), icon: <FiBarChart2 size={20} /> },
//     { path: "/beneficiaries", name: t("sidebar.beneficiaries", "Beneficiaries"), icon: <FiDatabase size={20} /> },
//     { path: "/reports", name: t("sidebar.reports", "Reports"), icon: <FiFileText size={20} /> },
//     { path: "/settings", name: t("sidebar.settings", "Settings"), icon: <FiSettings size={20} /> },
//   ];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

//         .sidebar {
//           width: 260px;
//           height: 100vh;
//           background-color: rgb(114, 49, 52);
//           display: flex;
//           flex-direction: column;
//           padding: 24px 16px;
//           gap: 24px;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//         }

//         .sidebar-brand {
//           font-size: 1.25rem;
//           font-weight: 300;
//           color: #ffffff;
//           padding: 0 12px;
//         }

//         .sidebar-menu {
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           overflow-y: auto;
//         }

//         .sidebar-link {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 12px 16px;
//           border-radius: 12px;
//           color: #ffffff;
//           text-decoration: none;
//           font-size: 0.95rem;
//           font-weight: 500;
//           transition: all 0.2s ease;
//         }

//         .sidebar-link:hover {
//           background-color: rgb(242, 237, 233);
//           color: #7f1d1d;
//         }

//         .sidebar-link.active {
//           background-color: #ffffff;
//           color: #7f1d1d;
//           font-weight: 600;
//         }

//         /* Media Query for Mobile and Small Screens */
//         @media (max-width: 768px) {
//           .sidebar {
//             width: 72px;
//             padding: 16px 8px;
//             gap: 16px;
//           }

//           .sidebar-brand {
//             font-size: 0.9rem;
//             padding: 0 4px;
//             text-align: center;
//             overflow: hidden;
//             text-overflow: ellipsis;
//             white-space: nowrap;
//           }

//           .sidebar-link {
//             justify-content: center;
//             padding: 12px 8px;
//             gap: 0;
//           }

//           .sidebar-link span {
//             display: none;
//           }
//         }
//       `}</style>

//       <div className="sidebar">
//         <div className="sidebar-brand">
//           {t("sidebar.brand", "Dashboard")}
//         </div>

//         <ul className="sidebar-menu">
//           {menuItems.map((item, idx) => (
//             <li key={idx}>
//               <NavLink 
//                 to={item.path} 
//                 className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
//               >
//                 {item.icon}
//                 <span>{item.name}</span>
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FiHome, 
  FiHeart, 
  FiUsers, 
  FiShield, 
  FiFileText, 
  FiBarChart2, 
  FiDatabase, 
  FiSettings 
} from 'react-icons/fi';

const Sidebar = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isRtl = currentLang === 'ar';

  const menuItems = [
    { path: "/", name: t("sidebar.overview", "Overview"), icon: <FiHome size={20} /> },
    { path: "/donations", name: t("sidebar.donations", "Donations"), icon: <FiHeart size={20} /> },
    { path: "/donors", name: t("sidebar.donors", "Donors"), icon: <FiUsers size={20} /> },
    { path: "/charities", name: t("sidebar.charities", "Charities"), icon: <FiShield size={20} /> },
    { path: "/campaigns", name: t("sidebar.campaigns", "Campaigns"), icon: <FiFileText size={20} /> },
    { path: "/authority", name: t("sidebar.authority", "Authority"), icon: <FiBarChart2 size={20} /> },
    { path: "/beneficiaries", name: t("sidebar.beneficiaries", "Beneficiaries"), icon: <FiDatabase size={20} /> },
    { path: "/reports", name: t("sidebar.reports", "Reports"), icon: <FiFileText size={20} /> },
    { path: "/settings", name: t("sidebar.settings", "Settings"), icon: <FiSettings size={20} /> },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');

        .sidebar {
          width: 260px;
          height: 100vh;
          background-color: rgb(114, 49, 52);
          display: flex;
          flex-direction: column;
          padding: 24px 16px;
          gap: 24px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
          font-family: ${isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
          z-index: 1000;
        }

        .sidebar-brand {
          font-size: 1.25rem;
          font-weight: 300;
          color: #ffffff;
          padding: 0 12px;
        }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 6px;
          list-style: none;
          padding: 0;
          margin: 0;
          overflow-y: auto;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .sidebar-link:hover {
          background-color: rgb(242, 237, 233);
          color: #7f1d1d;
        }

        .sidebar-link.active {
          background-color: #ffffff;
          color: #7f1d1d;
          font-weight: 600;
        }

        /* Mobile Overlay Backdrop */
        .sidebar-overlay {
          display: none;
        }

        /* Media Query for Mobile and Small Screens */
        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            transform: ${isOpen ? 'translateX(0)' : 'translateX(-100%)'};
            width: 260px;
            height: 100vh;
            box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
          }

          .sidebar-overlay {
            display: ${isOpen ? 'block' : 'none'};
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
          }

          .sidebar-link span {
            display: inline !important;
          }
        }
      `}</style>

      {/* Backdrop overlay */}
      <div className="sidebar-overlay" onClick={onClose} />

      <div className="sidebar">
        <div className="sidebar-brand">
          {t("sidebar.brand", "Dashboard")}
        </div>

        <ul className="sidebar-menu">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                onClick={() => {
                  if (window.innerWidth <= 768 && onClose) {
                    onClose();
                  }
                }}
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;