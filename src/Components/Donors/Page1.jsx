// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const Donors = () => {
//   const { i18n } = useTranslation();
//   const currentLang = i18n.language || 'en';
//   const isRtl = currentLang === 'ar';

//   const donors = [
//     { 
//       id: 'DNR-001', 
//       name: 'Qatar Airways', 
//       nameAr: 'الخطوط الجوية القطرية', 
//       type: 'Corporate', 
//       typeAr: 'شركات', 
//       donations: '1,200,000 QAR', 
//       lastDonation: '15-Aug-2025', 
//       engagement: 'High', 
//       engagementAr: 'عالي' 
//     },
//     { 
//       id: 'DNR-002', 
//       name: 'Mohammed Abdullah', 
//       nameAr: 'محمد عبدالله', 
//       type: 'Individual', 
//       typeAr: 'فردي', 
//       donations: '25,000 QAR', 
//       lastDonation: '28-Jul-2025', 
//       engagement: 'Medium', 
//       engagementAr: 'متوسط' 
//     },
//     { 
//       id: 'DNR-003', 
//       name: 'Vodafone Qatar', 
//       nameAr: 'فودافون قطر', 
//       type: 'Corporate', 
//       typeAr: 'شركات', 
//       donations: '3,500,000 QAR', 
//       lastDonation: '10-Aug-2025', 
//       engagement: 'Very High', 
//       engagementAr: 'عالي جداً' 
//     },
//     { 
//       id: 'DNR-004', 
//       name: 'Fatima Zahra', 
//       nameAr: 'فاطمة الزهراء', 
//       type: 'Individual', 
//       typeAr: 'فردي', 
//       donations: '5,000 QAR', 
//       lastDonation: '01-Sep-2025', 
//       engagement: 'Low', 
//       engagementAr: 'منخفض' 
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
//           font-size: 1.4rem;
//           font-weight: 700;
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
//           margin-bottom: 14px;
//         }

//         /* Table Styles */
//         .table-container {
//           width: 100%;
//           border-radius: 10px;
//           overflow-x: auto;
//           border: 1px solid #eae6e1;
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
//           padding: 7px 12px;
//           text-align: ${isRtl ? 'right' : 'left'};
//           white-space: nowrap;
//         }

//         td {
//           padding: 7px 12px;
//           color: #374151;
//           border-bottom: 1px solid #eae6e1;
//           white-space: nowrap;
//         }

//         tr:last-child td {
//           border-bottom: none;
//         }

//         /* Management Section Styles */
//         .management-section {
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }

//         .management-title {
//           font-size: 1rem;
//           font-weight: 600;
//           color: #1f2937;
//         }

//         .management-buttons {
//           display: flex;
//           gap: 16px;
//         }

//         .action-btn {
//           flex: 1;
//           padding: 12px 20px;
//           border-radius: 8px;
//           font-size: 0.875rem;
//           font-weight: 600;
//           border: none;
//           cursor: pointer;
//           color: #ffffff;
//           transition: background-color 0.2s ease;
//         }

//         .btn-add { 
//           background-color: rgb(114, 49, 52); 
//         }
//         .btn-add:hover { 
//           background-color: #4a3525;
//         }

//         .btn-export { 
//           background-color: rgb(15, 196, 87); 
//         }
//         .btn-export:hover { 
//           background-color: rgb(0, 130, 54); 
//         }

//         /* Media Queries for Small Screens */
//         @media (max-width: 768px) {
//           .page-body {
//             padding: 16px;
//             gap: 16px;
//           }

//           .card {
//             padding: 16px;
//           }

//           .management-buttons {
//             flex-direction: column;
//             gap: 10px;
//           }
//         }
//       `}</style>

//       <div className="page-body">
//         <h1 className="page-header-title">
//           {isRtl ? 'المتبرعون' : 'Donors'}
//         </h1>

//         {/* Registered Donors Table Card */}
//         <div className="card">
//           <h3 className="card-title">
//             {isRtl ? 'المتبرعون المسجلون' : 'Registered Donors'}
//           </h3>
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>{isRtl ? 'المعرف' : 'ID'}</th>
//                   <th>{isRtl ? 'اسم المتبرع' : 'Donor Name'}</th>
//                   <th>{isRtl ? 'النوع' : 'Type'}</th>
//                   <th>{isRtl ? 'إجمالي التبرعات' : 'Total Donations'}</th>
//                   <th>{isRtl ? 'آخر تبرع' : 'Last Donation'}</th>
//                   <th>{isRtl ? 'مستوى المشاركة' : 'Engagement Level'}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {donors.map((donor, idx) => (
//                   <tr key={idx}>
//                     <td style={{ fontWeight: 500 }}>{donor.id}</td>
//                     <td>{isRtl ? donor.nameAr : donor.name}</td>
//                     <td>{isRtl ? donor.typeAr : donor.type}</td>
//                     <td>{donor.donations}</td>
//                     <td>{donor.lastDonation}</td>
//                     <td>{isRtl ? donor.engagementAr : donor.engagement}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Donor Management Card */}
//         <div className="card management-section">
//           <h3 className="management-title">
//             {isRtl ? 'إدارة المتبرعين' : 'Donor Management'}
//           </h3>
//           <div className="management-buttons">
//             <button className="action-btn btn-add">
//               {isRtl ? 'إضافة متبرع جديد' : 'Add New Donor'}
//             </button>
//             <button className="action-btn btn-export">
//               {isRtl ? 'تصدير تقرير المتبرعين' : 'Export Donor Report'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Donors;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Donors = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isRtl = currentLang === 'ar';

  const [donors, setDonors] = useState([
    { 
      id: 'DNR-1001', 
      name: 'Tariq Al-Thani', 
      nameAr: 'طارق آل ثاني', 
      type: 'Corporate', 
      typeAr: 'شركات', 
      donations: '150,000 QAR', 
      lastDonation: '15-Aug-2025', 
      engagement: 'High', 
      engagementAr: 'عالي' 
    },
    { 
      id: 'DNR-1002', 
      name: 'Aisha Al-Kuwari', 
      nameAr: 'عائششة الكواري', 
      type: 'Individual', 
      typeAr: 'فردي', 
      donations: '25,000 QAR', 
      lastDonation: '28-Jul-2025', 
      engagement: 'Medium', 
      engagementAr: 'متوسط' 
    },
    { 
      id: 'DNR-1003', 
      name: 'Hamad Al-Mansoori', 
      nameAr: 'حمد المنصوري', 
      type: 'Corporate', 
      typeAr: 'شركات', 
      donations: '1,200,000 QAR', 
      lastDonation: '10-Aug-2025', 
      engagement: 'Very High', 
      engagementAr: 'عالي جداً' 
    },
    { 
      id: 'DNR-1004', 
      name: 'Noor Al-Ali', 
      nameAr: 'نور العلي', 
      type: 'Individual', 
      typeAr: 'فردي', 
      donations: '8,500 QAR', 
      lastDonation: '01-Sep-2025', 
      engagement: 'Low', 
      engagementAr: 'منخفض' 
    },
  ]);

  const handleAddDonor = () => {
    const firstNamesEn = ['Rashid', 'Zainab', 'Khalid', 'Mariam', 'Sultan', 'Reem', 'Ibrahim', 'Fatima'];
    const lastNamesEn = ['Al-Sulaiti', 'Al-Kaabi', 'Al-Mannai', 'Al-Hashmi', 'Al-Binali'];
    const firstNamesAr = ['راشد', 'زينب', 'خالد', 'مريم', 'سلطان', 'ريم', 'إبراهيم', 'فاطمة'];
    const lastNamesAr = ['السليطي', 'الكعبي', 'المناعي', 'الهاشمي', 'البناحي'];

    const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const fNameEn = rand(firstNamesEn);
    const lNameEn = rand(lastNamesEn);
    const fNameAr = rand(firstNamesAr);
    const lNameAr = rand(lastNamesAr);

    const randomAmountVal = Math.floor(Math.random() * 80 + 5) * 1000;
    const formattedAmount = randomAmountVal.toLocaleString() + ' QAR';

    const newId = `DNR-${Math.floor(1000 + Math.random() * 9000)}`;

    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}-${today.toLocaleString('en', { month: 'short' })}-${today.getFullYear()}`;

    const newDonor = {
      id: newId,
      name: `${fNameEn} ${lNameEn}`,
      nameAr: `${fNameAr} ${lNameAr}`,
      type: Math.random() > 0.5 ? 'Corporate' : 'Individual',
      typeAr: Math.random() > 0.5 ? 'شركات' : 'فردي',
      donations: formattedAmount,
      lastDonation: formattedDate,
      engagement: 'High',
      engagementAr: 'عالي'
    };

    setDonors([newDonor, ...donors]);
  };

  const handleExportReport = () => {
    alert(isRtl ? 'تم تصدير تقرير المتبرعين بنجاح!' : 'Donor report exported successfully!');
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
          font-size: 1.4rem;
          font-weight: 700;
          color: #1f2937;
        }

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
          margin-bottom: 14px;
        }

        .table-container {
          width: 100%;
          border-radius: 10px;
          overflow-x: auto;
          border: 1px solid #eae6e1;
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

        tbody tr:nth-child(odd) {
          background-color: #f9fafb;
        }

        tbody tr:nth-child(even) {
          background-color: #ffffff;
        }

        tr:last-child td {
          border-bottom: none;
        }

        .management-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .management-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
        }

        .management-buttons {
          display: flex;
          gap: 16px;
        }

        .action-btn {
          flex: 1;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          color: #ffffff;
          transition: background-color 0.2s ease, opacity 0.2s ease;
          outline: none !important;
          box-shadow: none !important;
        }

        .action-btn:focus,
        .action-btn:active {
          outline: none !important;
          box-shadow: none !important;
          border: none !important;
        }

        .btn-add { 
          background-color: rgb(114, 49, 52); 
        }
        .btn-add:hover { 
          background-color: #5e272a; 
        }

        .btn-export { 
          background-color: rgb(15, 196, 87); 
        }
        .btn-export:hover { 
          background-color: rgb(12, 160, 71); 
        }

        @media (max-width: 768px) {
          .page-body {
            padding: 16px;
            gap: 16px;
          }

          .card {
            padding: 16px;
          }

          .management-buttons {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      <div className="page-body">
        <h1 className="page-header-title">
          {isRtl ? 'المتبرعون' : 'Donors'}
        </h1>

        {/* Registered Donors Table Card */}
        <div className="card">
          <h3 className="card-title">
            {isRtl ? 'المتبرعون المسجلون' : 'Registered Donors'}
          </h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>{isRtl ? 'المعرف' : 'ID'}</th>
                  <th>{isRtl ? 'اسم المتبرع' : 'Donor Name'}</th>
                  <th>{isRtl ? 'النوع' : 'Type'}</th>
                  <th>{isRtl ? 'إجمالي التبرعات' : 'Total Donations'}</th>
                  <th>{isRtl ? 'آخر تبرع' : 'Last Donation'}</th>
                  <th>{isRtl ? 'مستوى المشاركة' : 'Engagement Level'}</th>
                </tr>
              </thead>
              <tbody>
                {donors.map((donor, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 500 }}>{donor.id}</td>
                    <td>{isRtl ? donor.nameAr : donor.name}</td>
                    <td>{isRtl ? donor.typeAr : donor.type}</td>
                    <td>{donor.donations}</td>
                    <td>{donor.lastDonation}</td>
                    <td>{isRtl ? donor.engagementAr : donor.engagement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Donor Management Card */}
        <div className="card management-section">
          <h3 className="management-title">
            {isRtl ? 'إدارة المتبرعين' : 'Donor Management'}
          </h3>
          <div className="management-buttons">
            <button className="action-btn btn-add" onClick={handleAddDonor}>
              {isRtl ? 'إضافة متبرع جديد' : 'Add New Donor'}
            </button>
            <button className="action-btn btn-export" onClick={handleExportReport}>
              {isRtl ? 'تصدير تقرير المتبرعين' : 'Export Donor Report'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donors;
