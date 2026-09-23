// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const Beneficiaries = () => {
//   const { i18n } = useTranslation();
//   const currentLang = i18n.language || 'en';
//   const isRtl = currentLang === 'ar';

//   const beneficiariesList = [
//     { 
//       id: 'BNF-001', 
//       name: 'Ahmed Khan', 
//       nameAr: 'أحمد خان', 
//       nationalId: 'QA123456789', 
//       campaign: 'Health Aid', 
//       campaignAr: 'المساعدة الصحية', 
//       aidReceived: 'Yes', 
//       aidReceivedAr: 'نعم', 
//       status: 'Approved', 
//       statusAr: 'موافق عليه' 
//     },
//     { 
//       id: 'BNF-002', 
//       name: 'Fatima Ali', 
//       nameAr: 'فاطمة علي', 
//       nationalId: 'QA987654321', 
//       campaign: 'Education Fund', 
//       campaignAr: 'صندوق التعليم', 
//       aidReceived: 'No', 
//       aidReceivedAr: 'لا', 
//       status: 'Pending', 
//       statusAr: 'قيد الانتظار' 
//     },
//     { 
//       id: 'BNF-003', 
//       name: 'Mohammed Saad', 
//       nameAr: 'محمد سعد', 
//       nationalId: 'QA555666777', 
//       campaign: 'Relief Packages', 
//       campaignAr: 'حزم الإغاثة', 
//       aidReceived: 'Yes', 
//       aidReceivedAr: 'نعم', 
//       status: 'Duplicate Flagged', 
//       statusAr: 'تم الإبلاغ عن تكرار' 
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
//           margin-bottom: 16px;
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
//           min-width: 650px;
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

//         /* Zebra striping matching previous tables */
//         tr:nth-child(odd) td {
//           background-color: rgb(242, 237, 233);
//         }

//         tr:nth-child(even) td {
//           background-color: #ffffff;
//         }

//         tr:last-child td {
//           border-bottom: none;
//         }

//         /* Manage Beneficiaries Section Buttons Container */
//         .manage-actions {
//           display: flex;
//           gap: 16px;
//         }

//         .btn-add {
//           background-color: rgb(114, 49, 52);
//           color: #ffffff;
//           padding: 11px 24px;
//           border-radius: 8px;
//           font-size: 0.85rem;
//           font-weight: 600;
//           border: none;
//           cursor: pointer;
//           transition: background-color 0.2s ease;
//           flex: 1;
//         }

//         .btn-add:hover {
//           background-color: #4a3525;
//         }

//         .btn-sync {
//           background-color: #00a859;
//           color: #ffffff;
//           padding: 11px 24px;
//           border-radius: 8px;
//           font-size: 0.85rem;
//           font-weight: 600;
//           border: none;
//           cursor: pointer;
//           transition: background-color 0.2s ease;
//           flex: 1;
//         }

//         .btn-sync:hover {
//           background-color: #008f4c;
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

//           .manage-actions {
//             flex-direction: column;
//           }
//         }
//       `}</style>

//       <div className="page-body">
//         <h1 className="page-header-title">
//           {isRtl ? 'المستفيدون' : 'Beneficiaries'}
//         </h1>

//         {/* Sandi Synced Beneficiaries Card */}
//         <div className="card">
//           <h3 className="card-title">
//             {isRtl ? 'المستفيدون المزامنون مع نظام سند' : 'Sandi Synced Beneficiaries'}
//           </h3>
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>{isRtl ? 'المعرف' : 'ID'}</th>
//                   <th>{isRtl ? 'الاسم' : 'Name'}</th>
//                   <th>{isRtl ? 'الرقم القومي' : 'National ID'}</th>
//                   <th>{isRtl ? 'الحملة' : 'Campaign'}</th>
//                   <th>{isRtl ? 'تم استلام المساعدة' : 'Aid Received'}</th>
//                   <th>{isRtl ? 'الحالة' : 'Status'}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {beneficiariesList.map((item, idx) => (
//                   <tr key={idx}>
//                     <td style={{ fontWeight: 500 }}>{item.id}</td>
//                     <td>{isRtl ? item.nameAr : item.name}</td>
//                     <td>{item.nationalId}</td>
//                     <td>{isRtl ? item.campaignAr : item.campaign}</td>
//                     <td>{isRtl ? item.aidReceivedAr : item.aidReceived}</td>
//                     <td>{isRtl ? item.statusAr : item.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Manage Beneficiaries Card */}
//         <div className="card">
//           <h3 className="card-title">
//             {isRtl ? 'إدارة المستفيدين' : 'Manage Beneficiaries'}
//           </h3>
//           <div className="manage-actions">
//             <button className="btn-add">
//               {isRtl ? 'إضافة مستفيد جديد' : 'Add New Beneficiary'}
//             </button>
//             <button className="btn-sync">
//               {isRtl ? 'المزامنة مع سند' : 'Sync with Sandi'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Beneficiaries;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Beneficiaries = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isRtl = currentLang === 'ar';

  const [beneficiariesList, setBeneficiariesList] = useState([
    { 
      id: 'BNF-001', 
      name: 'Ahmed Khan', 
      nameAr: 'أحمد خان', 
      nationalId: 'QA123456789', 
      campaign: 'Health Aid', 
      campaignAr: 'المساعدة الصحية', 
      aidReceived: 'Yes', 
      aidReceivedAr: 'نعم', 
      status: 'Approved', 
      statusAr: 'موافق عليه' 
    },
    { 
      id: 'BNF-002', 
      name: 'Fatima Ali', 
      nameAr: 'فاطمة علي', 
      nationalId: 'QA987654321', 
      campaign: 'Education Fund', 
      campaignAr: 'صندوق التعليم', 
      aidReceived: 'No', 
      aidReceivedAr: 'لا', 
      status: 'Pending', 
      statusAr: 'قيد الانتظار' 
    },
    { 
      id: 'BNF-003', 
      name: 'Mohammed Saad', 
      nameAr: 'محمد سعد', 
      nationalId: 'QA555666777', 
      campaign: 'Relief Packages', 
      campaignAr: 'حزم الإغاثة', 
      aidReceived: 'Yes', 
      aidReceivedAr: 'نعم', 
      status: 'Duplicate Flagged', 
      statusAr: 'تم الإبلاغ عن تكرار' 
    },
  ]);

  // Modal & Sync Action States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    nameAr: '',
    nationalId: '',
    campaign: 'Health Aid',
    campaignAr: 'المساعدة الصحية',
    aidReceived: 'No',
    aidReceivedAr: 'لا',
    status: 'Pending',
    statusAr: 'قيد الانتظار'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddBeneficiary = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.nationalId) return;

    const newId = `BNF-00${beneficiariesList.length + 1}`;
    const newEntry = {
      id: newId,
      name: formData.name,
      nameAr: formData.nameAr || formData.name,
      nationalId: formData.nationalId,
      campaign: formData.campaign,
      campaignAr: formData.campaignAr,
      aidReceived: formData.aidReceived,
      aidReceivedAr: formData.aidReceived === 'Yes' ? 'نعم' : 'لا',
      status: formData.status,
      statusAr: formData.status === 'Approved' ? 'موافق عليه' : formData.status === 'Pending' ? 'قيد الانتظار' : 'تم الإبلاغ عن تكرار'
    };

    setBeneficiariesList([newEntry, ...beneficiariesList]);
    setIsModalOpen(false);
    setFormData({
      name: '',
      nameAr: '',
      nationalId: '',
      campaign: 'Health Aid',
      campaignAr: 'المساعدة الصحية',
      aidReceived: 'No',
      aidReceivedAr: 'لا',
      status: 'Pending',
      statusAr: 'قيد الانتظار'
    });

    showToast(isRtl ? 'تم إضافة المستفيد بنجاح' : 'Beneficiary added successfully');
  };

  const handleSyncWithSandi = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      showToast(isRtl ? 'تمت المزامنة مع نظام سند بنجاح' : 'Successfully synced with Sandi system');
    }, 1200);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%', position: 'relative' }}>
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
          font-size: 1.4rem;
          font-weight: 700;
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
        }

        table {
          width: 100%;
          border-collapse: collapse;
          text-align: ${isRtl ? 'right' : 'left'};
          font-size: 0.8rem;
          min-width: 650px;
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

        /* Zebra striping matching previous tables */
        tr:nth-child(odd) td {
          background-color: rgb(242, 237, 233);
        }

        tr:nth-child(even) td {
          background-color: #ffffff;
        }

        tr:last-child td {
          border-bottom: none;
        }

        /* Manage Beneficiaries Section Buttons Container */
        .manage-actions {
          display: flex;
          gap: 16px;
        }

        .btn-add {
          background-color: rgb(114, 49, 52);
          color: #ffffff;
          padding: 11px 24px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
          flex: 1;
        }

        .btn-add:hover {
          background-color: #4a3525;
        }

        .btn-sync {
          background-color: #00a859;
          color: #ffffff;
          padding: 11px 24px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
          flex: 1;
        }

        .btn-sync:hover {
          background-color: #008f4c;
        }

        .btn-sync:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Toast notification */
        .toast-notification {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #1f2937;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 0.85rem;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          animation: fadeInOut 0.3s ease;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          padding: 16px;
        }

        .modal-content {
          background: #ffffff;
          padding: 24px;
          border-radius: 14px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .modal-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1f2937;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #374151;
        }

        .form-group input, .form-group select {
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #eae6e1;
          font-size: 0.85rem;
          outline: none;
          color: #1f2937;
          background: #fcfbfa;
        }

        .form-group input:focus, .form-group select:focus {
          border-color: rgb(114, 49, 52);
        }

        .modal-actions {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .btn-cancel {
          background-color: #e5e7eb;
          color: #374151;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          flex: 1;
        }

        .btn-submit {
          background-color: rgb(114, 49, 52);
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          flex: 1;
        }

        /* Media Queries for Small Screens */
        @media (max-width: 768px) {
          .page-body {
            padding: 16px;
            gap: 16px;
          }

          .card {
            padding: 16px;
          }

          .manage-actions {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="page-body">
        <h1 className="page-header-title">
          {isRtl ? 'المستفيدون' : 'Beneficiaries'}
        </h1>

        {/* Sandi Synced Beneficiaries Card */}
        <div className="card">
          <h3 className="card-title">
            {isRtl ? 'المستفيدون المزامنون مع نظام سند' : 'Sandi Synced Beneficiaries'}
          </h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>{isRtl ? 'المعرف' : 'ID'}</th>
                  <th>{isRtl ? 'الاسم' : 'Name'}</th>
                  <th>{isRtl ? 'الرقم القومي' : 'National ID'}</th>
                  <th>{isRtl ? 'الحملة' : 'Campaign'}</th>
                  <th>{isRtl ? 'تم استلام المساعدة' : 'Aid Received'}</th>
                  <th>{isRtl ? 'الحالة' : 'Status'}</th>
                </tr>
              </thead>
              <tbody>
                {beneficiariesList.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 500 }}>{item.id}</td>
                    <td>{isRtl ? item.nameAr : item.name}</td>
                    <td>{item.nationalId}</td>
                    <td>{isRtl ? item.campaignAr : item.campaign}</td>
                    <td>{isRtl ? item.aidReceivedAr : item.aidReceived}</td>
                    <td>{isRtl ? item.statusAr : item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Manage Beneficiaries Card */}
        <div className="card">
          <h3 className="card-title">
            {isRtl ? 'إدارة المستفيدين' : 'Manage Beneficiaries'}
          </h3>
          <div className="manage-actions">
            <button className="btn-add" onClick={() => setIsModalOpen(true)}>
              {isRtl ? 'إضافة مستفيد جديد' : 'Add New Beneficiary'}
            </button>
            <button className="btn-sync" onClick={handleSyncWithSandi} disabled={isSyncing}>
              {isSyncing 
                ? (isRtl ? 'جاري المزامنة...' : 'Syncing...') 
                : (isRtl ? 'المزامنة مع سند' : 'Sync with Sandi')}
            </button>
          </div>
        </div>
      </div>

      {/* Add Beneficiary Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">
              {isRtl ? 'إضافة مستفيد جديد' : 'Add New Beneficiary'}
            </h3>
            <form onSubmit={handleAddBeneficiary} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="form-group">
                <label>{isRtl ? 'الاسم (بالإنجليزية)' : 'Name (English)'}</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="e.g. John Doe" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>{isRtl ? 'الاسم (بالعربية)' : 'Name (Arabic)'}</label>
                <input 
                  type="text" 
                  name="nameAr" 
                  value={formData.nameAr} 
                  onChange={handleInputChange} 
                  placeholder="مثال: جون دو" 
                />
              </div>
              <div className="form-group">
                <label>{isRtl ? 'الرقم القومي' : 'National ID'}</label>
                <input 
                  type="text" 
                  name="nationalId" 
                  value={formData.nationalId} 
                  onChange={handleInputChange} 
                  placeholder="QA123456789" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>{isRtl ? 'الحملة' : 'Campaign'}</label>
                <select name="campaign" value={formData.campaign} onChange={(e) => {
                  const val = e.target.value;
                  setFormData(prev => ({
                    ...prev, 
                    campaign: val,
                    campaignAr: val === 'Health Aid' ? 'المساعدة الصحية' : val === 'Education Fund' ? 'صندوق التعليم' : 'حزم الإغاثة'
                  }));
                }}>
                  <option value="Health Aid">Health Aid</option>
                  <option value="Education Fund">Education Fund</option>
                  <option value="Relief Packages">Relief Packages</option>
                </select>
              </div>
              <div className="form-group">
                <label>{isRtl ? 'الحالة' : 'Status'}</label>
                <select name="status" value={formData.status} onChange={(e) => {
                  const val = e.target.value;
                  setFormData(prev => ({
                    ...prev,
                    status: val,
                    statusAr: val === 'Approved' ? 'موافق عليه' : val === 'Pending' ? 'قيد الانتظار' : 'تم الإبلاغ عن تكرار'
                  }));
                }}>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Duplicate Flagged">Duplicate Flagged</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setIsModalOpen(false)}>
                  {isRtl ? 'إلغاء' : 'Cancel'}
                </button>
                <button type="submit" className="btn-submit">
                  {isRtl ? 'حفظ' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Popup Notification */}
      {toastMessage && (
        <div className="toast-notification">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default Beneficiaries;