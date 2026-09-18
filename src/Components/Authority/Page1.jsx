// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const Authority = () => {
//   const { i18n } = useTranslation();
//   const currentLang = i18n.language || 'en';
//   const isRtl = currentLang === 'ar';

//   const campaigns = [
//     { 
//       name: 'Health Aid', 
//       nameAr: 'المساعدة الصحية', 
//       charity: 'Qatar Red Crescent', 
//       charityAr: 'الهلال الأحمر القطري', 
//       category: 'Medical', 
//       categoryAr: 'طبي', 
//       raised: '$25,000', 
//       status: 'Pending Approval', 
//       statusAr: 'قيد انتظار الموافقة' 
//     },
//     { 
//       name: 'Education Fund', 
//       nameAr: 'صندوق التعليم', 
//       charity: 'Education Qatar', 
//       charityAr: 'تعليم قطر', 
//       category: 'Education', 
//       categoryAr: 'تعليم', 
//       raised: '$18,500', 
//       status: 'Approved', 
//       statusAr: 'موافق عليه' 
//     },
//     { 
//       name: 'Relief Packages', 
//       nameAr: 'حزم الإغاثة', 
//       charity: 'Relief Qatar', 
//       charityAr: 'إغاثة قطر', 
//       category: 'Emergency', 
//       categoryAr: 'طوارئ', 
//       raised: '$12,000', 
//       status: 'Rejected', 
//       statusAr: 'مرفوض' 
//     },
//   ];

//   return (
//     <div dir={isRtl ? 'rtl' : 'ltr'} style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');

//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//           font-family: ${isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
//         }

//         /* Page Main Container */
//         .page-body {
//           flex: 1;
//           overflow-y: auto;
//           padding: 24px 32px;
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//           background-color: #f7f6f4;
//         }

//         .page-header-title {
//           font-size: 1.3rem;
//           font-weight: 600;
//           color: #1f2937;
//         }

//         /* Stats Grid */
//         .stats-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 16px;
//         }

//         .stat-card {
//           background: #ffffff;
//           border-radius: 14px;
//           border: 1px solid #eae6e1;
//           padding: 20px;
//           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }

//         .stat-label {
//           font-size: 0.82rem;
//           font-weight: 200;
//           color: #6b7280;
//         }

//         .stat-value {
//           font-size: 1.3rem;
//           font-weight: 600;
//           color: #1f2937;
//         }

//         /* Card Container */
//         .card {
//           background: #ffffff;
//           border-radius: 14px;
//           border: 1px solid #eae6e1;
//           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
//           overflow: hidden;
//           padding: 20px;
//         }

//         .card-title {
//           font-size: 1rem;
//           font-weight: 600;
//           color: #1f2937;
//           margin-bottom: 16px;
//         }

//         /* Table Styles */
//         .table-container {
//           width: 100%;
//           border-radius: 10px;
//           overflow-x: auto;
//           border: 1px solid #eae6e1;
//           margin-bottom: 16px;
//         }

//         table {
//           width: 100%;
//           border-collapse: collapse;
//           text-align: ${isRtl ? 'right' : 'left'};
//           font-size: 0.8rem;
//           min-width: 600px;
//         }

//         th {
//           background-color: rgb(114, 49, 52);
//           color: #ffffff;
//           font-weight: 600;
//           padding: 10px 14px;
//           text-align: ${isRtl ? 'right' : 'left'};
//           white-space: nowrap;
//         }

//         td {
//           padding: 10px 14px;
//           color: #374151;
//           border-bottom: 1px solid #eae6e1;
//           white-space: nowrap;
//         }

//         /* First row light shading */
//         tr:nth-child(odd) td {
//           background-color: rgb(242, 237, 233);
//         }

//         tr:nth-child(even) td {
//           background-color: #ffffff;
//         }

//         tr:last-child td {
//           border-bottom: none;
//         }

//         /* Action Buttons aligned to the right */
//         .action-buttons-wrapper {
//           display: flex;
//           gap: 12px;
//           justify-content: ${isRtl ? 'flex-start' : 'flex-end'};
//         }

//         .btn-approve {
//           background-color: #047857;
//           color: #ffffff;
//           padding: 10px 20px;
//           border-radius: 8px;
//           font-size: 0.85rem;
//           font-weight: 600;
//           border: none;
//           cursor: pointer;
//           transition: background-color 0.2s ease;
//         }

//         .btn-approve:hover {
//           background-color: #065f46;
//         }

//         .btn-reject {
//           background-color: #dc2626;
//           color: #ffffff;
//           padding: 10px 20px;
//           border-radius: 8px;
//           font-size: 0.85rem;
//           font-weight: 600;
//           border: none;
//           cursor: pointer;
//           transition: background-color 0.2s ease;
//         }

//         .btn-reject:hover {
//           background-color: #b91c1c;
//         }

//         /* Alerts Section */
//         .alerts-wrapper {
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }

//         .alert-box-red {
//           background-color: #fef2f2;
//           border: 1px solid #fecaca;
//           color: #991b1b;
//           padding: 14px 16px;
//           border-radius: 8px;
//           font-size: 0.85rem;
//           font-weight: 500;
//         }

//         .alert-box-yellow {
//           background-color: #fefce8;
//           border: 1px solid #fef08a;
//           color: #854d0e;
//           padding: 14px 16px;
//           border-radius: 8px;
//           font-size: 0.85rem;
//           font-weight: 500;
//         }

//         /* Media Queries for Small Screens */
//         @media (max-width: 768px) {
//           .page-body {
//             padding: 16px;
//             gap: 16px;
//           }

//           .stats-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 12px;
//           }

//           .card {
//             padding: 16px;
//           }

//           .action-buttons-wrapper {
//             flex-direction: column;
//           }

//           .btn-approve, .btn-reject {
//             width: 100%;
//           }
//         }
//       `}</style>

//       <div className="page-body">
//         <h1 className="page-header-title">
//           {isRtl ? 'لوحة تحكم الهيئة' : 'Authority Dashboard'}
//         </h1>

//         {/* Stats Overview Grid */}
//         <div className="stats-grid">
//           <div className="stat-card">
//             <span className="stat-label">{isRtl ? 'إجمالي التبرعات' : 'Total Donations'}</span>
//             <span className="stat-value">$1.2M</span>
//           </div>
//           <div className="stat-card">
//             <span className="stat-label">{isRtl ? 'الحملات النشطة' : 'Active Campaigns'}</span>
//             <span className="stat-value">45</span>
//           </div>
//           <div className="stat-card">
//             <span className="stat-label">{isRtl ? 'الجمعيات المسجلة' : 'Registered Charities'}</span>
//             <span className="stat-value">120</span>
//           </div>
//           <div className="stat-card">
//             <span className="stat-label">{isRtl ? 'التنبيهات' : 'Alerts'}</span>
//             <span className="stat-value">3</span>
//           </div>
//         </div>

//         {/* Campaign Approvals Card */}
//         <div className="card">
//           <h3 className="card-title">
//             {isRtl ? 'موافقات الحملات' : 'Campaign Approvals'}
//           </h3>
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>{isRtl ? 'الحملة' : 'Campaign'}</th>
//                   <th>{isRtl ? 'الجمعية' : 'Charity'}</th>
//                   <th>{isRtl ? 'الفئة' : 'Category'}</th>
//                   <th>{isRtl ? 'المبلغ المجمع' : 'Raised'}</th>
//                   <th>{isRtl ? 'الحالة' : 'Status'}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {campaigns.map((camp, idx) => (
//                   <tr key={idx}>
//                     <td style={{ fontWeight: 500 }}>{isRtl ? camp.nameAr : camp.name}</td>
//                     <td>{isRtl ? camp.charityAr : camp.charity}</td>
//                     <td>{isRtl ? camp.categoryAr : camp.category}</td>
//                     <td>{camp.raised}</td>
//                     <td>{isRtl ? camp.statusAr : camp.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="action-buttons-wrapper">
//             <button className="btn-approve">
//               {isRtl ? 'الموافقة على المحدد' : 'Approve Selected'}
//             </button>
//             <button className="btn-reject">
//               {isRtl ? 'رفض المحدد' : 'Reject Selected'}
//             </button>
//           </div>
//         </div>

//         {/* Suspicious Activity Alerts Card */}
//         <div className="card">
//           <h3 className="card-title">
//             {isRtl ? 'تنبيهات النشاط المشبوه' : 'Suspicious Activity Alerts'}
//           </h3>
//           <div className="alerts-wrapper">
//             <div className="alert-box-red">
//               {isRtl 
//                 ? 'تم اكتشاف ارتفاع غير عادي في التبرعات لحملة حزم الإغاثة.' 
//                 : 'Unusual spike in donations detected for Relief Packages.'}
//             </div>
//             <div className="alert-box-yellow">
//               {isRtl 
//                 ? 'تأخر في تقديم التقارير من قبل حملة صندوق التعليم.' 
//                 : 'Delayed reporting by Education Fund campaign.'}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Authority;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Authority = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isRtl = currentLang === 'ar';

  const [campaigns, setCampaigns] = useState([
    { 
      id: 1,
      name: 'Health Aid', 
      nameAr: 'المساعدة الصحية', 
      charity: 'Qatar Red Crescent', 
      charityAr: 'الهلال الأحمر القطري', 
      category: 'Medical', 
      categoryAr: 'طبي', 
      raised: '$25,000', 
      status: 'Pending Approval', 
      statusAr: 'قيد انتظار الموافقة' 
    },
    { 
      id: 2,
      name: 'Education Fund', 
      nameAr: 'صندوق التعليم', 
      charity: 'Education Qatar', 
      charityAr: 'تعليم قطر', 
      category: 'Education', 
      categoryAr: 'تعليم', 
      raised: '$18,500', 
      status: 'Approved', 
      statusAr: 'موافق عليه' 
    },
    { 
      id: 3,
      name: 'Relief Packages', 
      nameAr: 'حزم الإغاثة', 
      charity: 'Relief Qatar', 
      charityAr: 'إغاثة قطر', 
      category: 'Emergency', 
      categoryAr: 'طوارئ', 
      raised: '$12,000', 
      status: 'Rejected', 
      statusAr: 'مرفوض' 
    },
  ]);

  const [selectedId, setSelectedId] = useState(campaigns[0]?.id || null);

  const handleApproveSelected = () => {
    if (selectedId === null) return;
    setCampaigns(prev => prev.map(camp => {
      if (camp.id === selectedId) {
        return {
          ...camp,
          status: 'Approved',
          statusAr: 'موافق عليه'
        };
      }
      return camp;
    }));
  };

  const handleRejectSelected = () => {
    if (selectedId === null) return;
    setCampaigns(prev => prev.map(camp => {
      if (camp.id === selectedId) {
        return {
          ...camp,
          status: 'Rejected',
          statusAr: 'مرفوض'
        };
      }
      return camp;
    }));
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: ${isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
        }

        /* Page Main Container */
        .page-body {
          flex: 1;
          overflow-y: auto;
          padding: 24px 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          background-color: #f7f6f4;
        }

        .page-header-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .stat-card {
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #eae6e1;
          padding: 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .stat-label {
          font-size: 0.82rem;
          font-weight: 200;
          color: #6b7280;
        }

        .stat-value {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
        }

        /* Card Container */
        .card {
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #eae6e1;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          padding: 20px;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 16px;
        }

        /* Table Styles */
        .table-container {
          width: 100%;
          border-radius: 10px;
          overflow-x: auto;
          border: 1px solid #eae6e1;
          margin-bottom: 16px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          text-align: ${isRtl ? 'right' : 'left'};
          font-size: 0.8rem;
          min-width: 600px;
        }

        th {
          background-color: rgb(114, 49, 52);
          color: #ffffff;
          font-weight: 600;
          padding: 10px 14px;
          text-align: ${isRtl ? 'right' : 'left'};
          white-space: nowrap;
        }

        td {
          padding: 10px 14px;
          color: #374151;
          border-bottom: 1px solid #eae6e1;
          white-space: nowrap;
        }

        /* Row selection styling */
        tr {
          cursor: pointer;
        }

        tr.selected td {
          background-color: rgb(235, 220, 215) !important;
        }

        /* First row light shading */
        tr:nth-child(odd):not(.selected) td {
          background-color: rgb(242, 237, 233);
        }

        tr:nth-child(even):not(.selected) td {
          background-color: #ffffff;
        }

        tr:last-child td {
          border-bottom: none;
        }

        /* Action Buttons aligned to the right */
        .action-buttons-wrapper {
          display: flex;
          gap: 12px;
          justify-content: ${isRtl ? 'flex-start' : 'flex-end'};
        }

        .btn-approve {
          background-color: #047857;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .btn-approve:hover {
          background-color: #065f46;
        }

        .btn-reject {
          background-color: #dc2626;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .btn-reject:hover {
          background-color: #b91c1c;
        }

        /* Alerts Section */
        .alerts-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .alert-box-red {
          background-color: #fef2f2;
          border: 1px solid #fecaca;
          color: #991b1b;
          padding: 14px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .alert-box-yellow {
          background-color: #fefce8;
          border: 1px solid #fef08a;
          color: #854d0e;
          padding: 14px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        /* Media Queries for Small Screens */
        @media (max-width: 768px) {
          .page-body {
            padding: 16px;
            gap: 16px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .card {
            padding: 16px;
          }

          .action-buttons-wrapper {
            flex-direction: column;
          }

          .btn-approve, .btn-reject {
            width: 100%;
          }
        }
      `}</style>

      <div className="page-body">
        <h1 className="page-header-title">
          {isRtl ? 'لوحة تحكم الهيئة' : 'Authority Dashboard'}
        </h1>

        {/* Stats Overview Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">{isRtl ? 'إجمالي التبرعات' : 'Total Donations'}</span>
            <span className="stat-value">$1.2M</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">{isRtl ? 'الحملات النشطة' : 'Active Campaigns'}</span>
            <span className="stat-value">45</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">{isRtl ? 'الجمعيات المسجلة' : 'Registered Charities'}</span>
            <span className="stat-value">120</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">{isRtl ? 'التنبيهات' : 'Alerts'}</span>
            <span className="stat-value">3</span>
          </div>
        </div>

        {/* Campaign Approvals Card */}
        <div className="card">
          <h3 className="card-title">
            {isRtl ? 'موافقات الحملات' : 'Campaign Approvals'}
          </h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>{isRtl ? 'الحملة' : 'Campaign'}</th>
                  <th>{isRtl ? 'الجمعية' : 'Charity'}</th>
                  <th>{isRtl ? 'الفئة' : 'Category'}</th>
                  <th>{isRtl ? 'المبلغ المجمع' : 'Raised'}</th>
                  <th>{isRtl ? 'الحالة' : 'Status'}</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((camp) => {
                  const isSelected = selectedId === camp.id;
                  return (
                    <tr 
                      key={camp.id} 
                      onClick={() => setSelectedId(camp.id)}
                      className={isSelected ? 'selected' : ''}
                    >
                      <td style={{ fontWeight: 500 }}>{isRtl ? camp.nameAr : camp.name}</td>
                      <td>{isRtl ? camp.charityAr : camp.charity}</td>
                      <td>{isRtl ? camp.categoryAr : camp.category}</td>
                      <td>{camp.raised}</td>
                      <td>{isRtl ? camp.statusAr : camp.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="action-buttons-wrapper">
            <button className="btn-approve" onClick={handleApproveSelected}>
              {isRtl ? 'الموافقة على المحدد' : 'Approve Selected'}
            </button>
            <button className="btn-reject" onClick={handleRejectSelected}>
              {isRtl ? 'رفض المحدد' : 'Reject Selected'}
            </button>
          </div>
        </div>

        {/* Suspicious Activity Alerts Card */}
        <div className="card">
          <h3 className="card-title">
            {isRtl ? 'تنبيهات النشاط المشبوه' : 'Suspicious Activity Alerts'}
          </h3>
          <div className="alerts-wrapper">
            <div className="alert-box-red">
              {isRtl 
                ? 'تم اكتشاف ارتفاع غير عادي في التبرعات لحملة حزم الإغاثة.' 
                : 'Unusual spike in donations detected for Relief Packages.'}
            </div>
            <div className="alert-box-yellow">
              {isRtl 
                ? 'تأخر في تقديم التقارير من قبل حملة صندوق التعليم.' 
                : 'Delayed reporting by Education Fund campaign.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authority;