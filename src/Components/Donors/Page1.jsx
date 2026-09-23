// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// const Donors = () => {
//   const { i18n } = useTranslation();
//   const currentLang = i18n.language || 'en';
//   const isRtl = currentLang === 'ar';

//   const [donors, setDonors] = useState([
//     { 
//       id: 'DNR-1001', 
//       name: 'Tariq Al-Thani', 
//       nameAr: 'طارق آل ثاني', 
//       type: 'Corporate', 
//       typeAr: 'شركات', 
//       donations: '150,000 QAR', 
//       lastDonation: '15-Aug-2025', 
//       engagement: 'High', 
//       engagementAr: 'عالي' 
//     },
//     { 
//       id: 'DNR-1002', 
//       name: 'Aisha Al-Kuwari', 
//       nameAr: 'عائششة الكواري', 
//       type: 'Individual', 
//       typeAr: 'فردي', 
//       donations: '25,000 QAR', 
//       lastDonation: '28-Jul-2025', 
//       engagement: 'Medium', 
//       engagementAr: 'متوسط' 
//     },
//     { 
//       id: 'DNR-1003', 
//       name: 'Hamad Al-Mansoori', 
//       nameAr: 'حمد المنصوري', 
//       type: 'Corporate', 
//       typeAr: 'شركات', 
//       donations: '1,200,000 QAR', 
//       lastDonation: '10-Aug-2025', 
//       engagement: 'Very High', 
//       engagementAr: 'عالي جداً' 
//     },
//     { 
//       id: 'DNR-1004', 
//       name: 'Noor Al-Ali', 
//       nameAr: 'نور العلي', 
//       type: 'Individual', 
//       typeAr: 'فردي', 
//       donations: '8,500 QAR', 
//       lastDonation: '01-Sep-2025', 
//       engagement: 'Low', 
//       engagementAr: 'منخفض' 
//     },
//   ]);

//   const handleAddDonor = () => {
//     const firstNamesEn = ['Rashid', 'Zainab', 'Khalid', 'Mariam', 'Sultan', 'Reem', 'Ibrahim', 'Fatima'];
//     const lastNamesEn = ['Al-Sulaiti', 'Al-Kaabi', 'Al-Mannai', 'Al-Hashmi', 'Al-Binali'];
//     const firstNamesAr = ['راشد', 'زينب', 'خالد', 'مريم', 'سلطان', 'ريم', 'إبراهيم', 'فاطمة'];
//     const lastNamesAr = ['السليطي', 'الكعبي', 'المناعي', 'الهاشمي', 'البناحي'];

//     const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

//     const fNameEn = rand(firstNamesEn);
//     const lNameEn = rand(lastNamesEn);
//     const fNameAr = rand(firstNamesAr);
//     const lNameAr = rand(lastNamesAr);

//     const randomAmountVal = Math.floor(Math.random() * 80 + 5) * 1000;
//     const formattedAmount = randomAmountVal.toLocaleString() + ' QAR';

//     const newId = `DNR-${Math.floor(1000 + Math.random() * 9000)}`;

//     const today = new Date();
//     const formattedDate = `${String(today.getDate()).padStart(2, '0')}-${today.toLocaleString('en', { month: 'short' })}-${today.getFullYear()}`;

//     const newDonor = {
//       id: newId,
//       name: `${fNameEn} ${lNameEn}`,
//       nameAr: `${fNameAr} ${lNameAr}`,
//       type: Math.random() > 0.5 ? 'Corporate' : 'Individual',
//       typeAr: Math.random() > 0.5 ? 'شركات' : 'فردي',
//       donations: formattedAmount,
//       lastDonation: formattedDate,
//       engagement: 'High',
//       engagementAr: 'عالي'
//     };

//     setDonors([newDonor, ...donors]);
//   };

//   const handleExportReport = () => {
//     alert(isRtl ? 'تم تصدير تقرير المتبرعين بنجاح!' : 'Donor report exported successfully!');
//   };

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

//         tbody tr:nth-child(odd) {
//           background-color: #f9fafb;
//         }

//         tbody tr:nth-child(even) {
//           background-color: #ffffff;
//         }

//         tr:last-child td {
//           border-bottom: none;
//         }

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
//           transition: background-color 0.2s ease, opacity 0.2s ease;
//           outline: none !important;
//           box-shadow: none !important;
//         }

//         .action-btn:focus,
//         .action-btn:active {
//           outline: none !important;
//           box-shadow: none !important;
//           border: none !important;
//         }

//         .btn-add { 
//           background-color: rgb(114, 49, 52); 
//         }
//         .btn-add:hover { 
//           background-color: #5e272a; 
//         }

//         .btn-export { 
//           background-color: rgb(15, 196, 87); 
//         }
//         .btn-export:hover { 
//           background-color: rgb(12, 160, 71); 
//         }

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
//             <button className="action-btn btn-add" onClick={handleAddDonor}>
//               {isRtl ? 'إضافة متبرع جديد' : 'Add New Donor'}
//             </button>
//             <button className="action-btn btn-export" onClick={handleExportReport}>
//               {isRtl ? 'تصدير تقرير المتبرعين' : 'Export Donor Report'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Donors;
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Donors = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isRtl = currentLang === 'ar';

  // State for donors list
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
      nameAr: 'عائشة الكواري', 
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

  // View state: 'list' or 'form'
  const [viewMode, setViewMode] = useState('list');

  // Form input states
  const [formData, setFormData] = useState({
    name: '',
    nameAr: '',
    type: 'Corporate',
    typeAr: 'شركات',
    donations: '',
    engagement: 'High',
    engagementAr: 'عالي',
  });

  // Example use of useEffect: Triggered whenever the donors list updates
  useEffect(() => {
    console.log('Donors list updated. Total active donors:', donors.length);
  }, [donors]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({
      ...prev,
      type: val,
      typeAr: val === 'Corporate' ? 'شركات' : 'فردي'
    }));
  };

  const handleEngagementChange = (e) => {
    const val = e.target.value;
    const arabicMap = { High: 'عالي', Medium: 'متوسط', Low: 'منخفض', 'Very High': 'عالي جداً' };
    setFormData((prev) => ({
      ...prev,
      engagement: val,
      engagementAr: arabicMap[val] || 'عالي'
    }));
  };

  const handleSubmitNewDonor = (e) => {
    e.preventDefault();

    const newId = `DNR-${Math.floor(1000 + Math.random() * 9000)}`;
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}-${today.toLocaleString('en', { month: 'short' })}-${today.getFullYear()}`;

    const formattedAmount = formData.donations.includes('QAR') 
      ? formData.donations 
      : `${Number(formData.donations).toLocaleString()} QAR`;

    const newDonorItem = {
      id: newId,
      name: formData.name,
      nameAr: formData.nameAr || formData.name,
      type: formData.type,
      typeAr: formData.typeAr,
      donations: formattedAmount,
      lastDonation: formattedDate,
      engagement: formData.engagement,
      engagementAr: formData.engagementAr,
    };

    // Update donors state, which will automatically trigger the useEffect hook
    setDonors([newDonorItem, ...donors]);

    // Reset form and switch back to the main table view
    setFormData({
      name: '',
      nameAr: '',
      type: 'Corporate',
      typeAr: 'شركات',
      donations: '',
      engagement: 'High',
      engagementAr: 'عالي',
    });
    setViewMode('list');
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
          transition: background-color 0.2s ease;
          outline: none !important;
          box-shadow: none !important;
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

        /* Form Styles */
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #374151;
        }

        .form-input, .form-select {
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          font-size: 0.9rem;
          outline: none;
          background: #fff;
        }

        .form-input:focus, .form-select:focus {
          border-color: rgb(114, 49, 52);
        }

        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .btn-cancel {
          background-color: #6b7280;
        }
        .btn-cancel:hover {
          background-color: #4b5563;
        }

        @media (max-width: 768px) {
          .page-body {
            padding: 16px;
            gap: 16px;
          }
          .card {
            padding: 16px;
          }
          .management-buttons, .form-actions {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      <div className="page-body">
        <h1 className="page-header-title">
          {isRtl ? 'المتبرعون' : 'Donors'}
        </h1>

        {viewMode === 'list' ? (
          <>
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
                <button className="action-btn btn-add" onClick={() => setViewMode('form')}>
                  {isRtl ? 'إضافة متبرع جديد' : 'Add New Donor'}
                </button>
                <button className="action-btn btn-export" onClick={handleExportReport}>
                  {isRtl ? 'تصدير تقرير المتبرعين' : 'Export Donor Report'}
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Add New Donor Form View */
          <div className="card">
            <h3 className="card-title">
              {isRtl ? 'إضافة متبرع جديد' : 'Add New Donor Form'}
            </h3>
            <form onSubmit={handleSubmitNewDonor}>
              <div className="form-group">
                <label className="form-label">{isRtl ? 'اسم المتبرع (بالإنجليزية)' : 'Donor Name (English)'}</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="form-input" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="form-group">
                <label className="form-label">{isRtl ? 'اسم المتبرع (بالعربية)' : 'Donor Name (Arabic)'}</label>
                <input 
                  type="text" 
                  name="nameAr" 
                  className="form-input" 
                  value={formData.nameAr} 
                  onChange={handleInputChange} 
                  placeholder="مثال: أحمد محمد"
                />
              </div>

              <div className="form-group">
                <label className="form-label">{isRtl ? 'نوع المتبرع' : 'Donor Type'}</label>
                <select className="form-select" value={formData.type} onChange={handleTypeChange}>
                  <option value="Corporate">{isRtl ? 'شركات' : 'Corporate'}</option>
                  <option value="Individual">{isRtl ? 'فردي' : 'Individual'}</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">{isRtl ? 'مبلغ التبرع (QAR)' : 'Donation Amount (QAR)'}</label>
                <input 
                  type="text" 
                  name="donations" 
                  required 
                  className="form-input" 
                  value={formData.donations} 
                  onChange={handleInputChange} 
                  placeholder="e.g. 50000"
                />
              </div>

              <div className="form-group">
                <label className="form-label">{isRtl ? 'مستوى المشاركة' : 'Engagement Level'}</label>
                <select className="form-select" value={formData.engagement} onChange={handleEngagementChange}>
                  <option value="Very High">{isRtl ? 'عالي جداً' : 'Very High'}</option>
                  <option value="High">{isRtl ? 'عالي' : 'High'}</option>
                  <option value="Medium">{isRtl ? 'متوسط' : 'Medium'}</option>
                  <option value="Low">{isRtl ? 'منخفض' : 'Low'}</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="submit" className="action-btn btn-add">
                  {isRtl ? 'حفظ المتبرع' : 'Save Donor'}
                </button>
                <button type="button" className="action-btn btn-cancel" onClick={() => setViewMode('list')}>
                  {isRtl ? 'إلغاء' : 'Cancel'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donors;