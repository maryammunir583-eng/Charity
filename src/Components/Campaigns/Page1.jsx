// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const Campaigns = () => {
//   const { i18n } = useTranslation();
//   const currentLang = i18n.language || 'en';
//   const isRtl = currentLang === 'ar';

//   const campaigns = [
//     { 
//       name: 'Health Aid', 
//       nameAr: 'المساعدة الصحية', 
//       category: 'Medical', 
//       categoryAr: 'طبي', 
//       goal: '$50,000', 
//       raised: '$25,000', 
//       status: 'Approved', 
//       statusAr: 'موافق عليه' 
//     },
//     { 
//       name: 'Education Fund', 
//       nameAr: 'صندوق التعليم', 
//       category: 'Education', 
//       categoryAr: 'تعليم', 
//       goal: '$40,000', 
//       raised: '$18,500', 
//       status: 'Pending', 
//       statusAr: 'قيد الانتظار' 
//     },
//   ];

//   const handleCreateCampaign = (e) => {
//     e.preventDefault();
//     window.location.reload();
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

//         /* Card Container */
//         .card {
//           background: #ffffff;
//           border-radius: 14px;
//           border: 1px solid #eae6e1;
//           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
//           overflow: hidden;
//           padding: 15px;
//         }

//         .card-title {
//           font-size: 1rem;
//           font-weight: 600;
//           color: #1f2937;
//           margin-bottom: 16px;
//         }

//         /* Form Styles */
//         .campaign-form {
//           display: flex;
//           flex-direction: column;
//           gap: 14px;
//         }

//         .form-group {
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }

//         .form-label {
//           font-size: 0.85rem;
//           font-weight: 500;
//           color: #374151;
//         }

//         .form-input, .form-select {
//           width: 100%;
//           padding: 8px 12px;
//           border: 1px solid #eae6e1;
//           border-radius: 8px;
//           font-size: 0.85rem;
//           color: #374151;
//           background-color: #ffffff;
//           outline: none;
//           text-align: ${isRtl ? 'right' : 'left'};
//         }

//         .form-input:focus, .form-select:focus {
//           border-color: #7f1d1d;
//         }

//         .create-btn {
//           background-color: rgb(114, 49, 52);
//           color: #ffffff;
//           padding: 10px 18px;
//           border-radius: 8px;
//           font-size: 0.85rem;
//           font-weight: 600;
//           border: none;
//           cursor: pointer;
//           transition: background-color 0.2s ease;
//           width: fit-content;
//           margin-top: 4px;
//         }

//         .create-btn:hover {
//           background-color: #4a3525;
//         }

//         /* Table Styles */
//         .table-container {
//           width: 100%;
//           border-radius: 10px;
//           overflow-x: auto;
//           border: 1px solid #eae6e1;
//           margin-top: 6px;
//         }

//         table {
//           width: 100%;
//           border-collapse: collapse;
//           text-align: ${isRtl ? 'right' : 'left'};
//           font-size: 0.8rem;
//           min-width: 500px;
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

//         /* Alternating row background color for zebra striping */
//         tr:nth-child(odd) td {
//           background-color: rgb(242, 237, 233);
//         }

//         tr:nth-child(even) td {
//           background-color: #ffffff;
//         }

//         tr:last-child td {
//           border-bottom: none;
//         }

//         /* Status Colors */
//         .status-approved { color: #047857; font-weight: 500; }
//         .status-pending { color: #b45309; font-weight: 500; }
//         .status-rejected { color: #b91c1c; font-weight: 500; }

//         /* Media Queries for Small Screens */
//         @media (max-width: 768px) {
//           .page-body {
//             padding: 16px;
//             gap: 16px;
//           }

//           .card {
//             padding: 16px;
//           }
//         }
//       `}</style>

//       <div className="page-body">
//         <h1 className="page-header-title">
//           {isRtl ? 'إدارة الحملات' : 'Manage Campaigns'}
//         </h1>

//         {/* Create New Campaign Card */}
//         <div className="card">
//           <h3 className="card-title">
//             {isRtl ? 'إنشاء حملة جديدة' : 'Create New Campaign'}
//           </h3>
//           <form className="campaign-form" onSubmit={handleCreateCampaign}>
//             <div className="form-group">
//               <label className="form-label">
//                 {isRtl ? 'اسم الحملة' : 'Campaign Name'}
//               </label>
//               <input 
//                 type="text" 
//                 className="form-input" 
//                 placeholder={isRtl ? 'مثال: برنامج الإغاثة الغذائية' : 'e.g. Food Relief Program'} 
//               />
//             </div>

//             <div className="form-group">
//               <label className="form-label">
//                 {isRtl ? 'الفئة' : 'Category'}
//               </label>
//               <select className="form-select">
//                 <option value="Medical">{isRtl ? 'طبي' : 'Medical'}</option>
//                 <option value="Education">{isRtl ? 'تعليم' : 'Education'}</option>
//                 <option value="Emergency">{isRtl ? 'طوارئ' : 'Emergency'}</option>
//                 <option value="Food Aid">{isRtl ? 'مساعدات غذائية' : 'Food Aid'}</option>
//                 <option value="Other">{isRtl ? 'أخرى' : 'Other'}</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label className="form-label">
//                 {isRtl ? 'مبلغ الهدف' : 'Goal Amount'}
//               </label>
//               <input type="number" className="form-input" defaultValue={0} />
//             </div>

//             <button type="submit" className="create-btn">
//               {isRtl ? 'إنشاء الحملة' : 'Create Campaign'}
//             </button>
//           </form>
//         </div>

//         {/* Existing Campaigns Table Card */}
//         <div className="card">
//           <h3 className="card-title">
//             {isRtl ? 'الحملات الحالية' : 'Existing Campaigns'}
//           </h3>
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>{isRtl ? 'الحملة' : 'Campaign'}</th>
//                   <th>{isRtl ? 'الفئة' : 'Category'}</th>
//                   <th>{isRtl ? 'الهدف' : 'Goal'}</th>
//                   <th>{isRtl ? 'المبلغ المجمع' : 'Raised'}</th>
//                   <th>{isRtl ? 'الحالة' : 'Status'}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {campaigns.map((camp, idx) => (
//                   <tr key={idx}>
//                     <td style={{ fontWeight: 500 }}>{isRtl ? camp.nameAr : camp.name}</td>
//                     <td>{isRtl ? camp.categoryAr : camp.category}</td>
//                     <td>{camp.goal}</td>
//                     <td>{camp.raised}</td>
//                     <td>
//                       <span className={`status-${camp.status.toLowerCase()}`}>
//                         {isRtl ? camp.statusAr : camp.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Campaigns;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Campaigns = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isRtl = currentLang === 'ar';

  const [campaigns, setCampaigns] = useState([
    { 
      name: 'Health Aid', 
      nameAr: 'المساعدة الصحية', 
      category: 'Medical', 
      categoryAr: 'طبي', 
      goal: '$50,000', 
      raised: '$25,000', 
      status: 'Approved', 
      statusAr: 'موافق عليه' 
    },
    { 
      name: 'Education Fund', 
      nameAr: 'صندوق التعليم', 
      category: 'Education', 
      categoryAr: 'تعليم', 
      goal: '$40,000', 
      raised: '$18,500', 
      status: 'Pending', 
      statusAr: 'قيد الانتظار' 
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Medical',
    goalAmount: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateCampaign = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const goalNum = Number(formData.goalAmount) || 0;
    const formattedGoal = `$${goalNum.toLocaleString()}`;

    const categoryArMap = {
      'Medical': 'طبي',
      'Education': 'تعليم',
      'Emergency': 'طوارئ',
      'Food Aid': 'مساعدات غذائية',
      'Other': 'أخرى'
    };

    const newCampaign = {
      name: formData.name,
      nameAr: formData.name, // Fallback/direct input for custom name
      category: formData.category,
      categoryAr: categoryArMap[formData.category] || 'أخرى',
      goal: formattedGoal,
      raised: '$0',
      status: 'Pending',
      statusAr: 'قيد الانتظار'
    };

    setCampaigns([newCampaign, ...campaigns]);
    setFormData({ name: '', category: 'Medical', goalAmount: '' });
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
          font-size: 1.3rem;
          font-weight: 600;
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
          margin-bottom: 16px;
        }

        .campaign-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: #374151;
        }

        .form-input, .form-select {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #eae6e1;
          border-radius: 8px;
          font-size: 0.85rem;
          color: #374151;
          background-color: #ffffff;
          outline: none;
          text-align: ${isRtl ? 'right' : 'left'};
        }

        .form-input:focus, .form-select:focus {
          border-color: rgb(114, 49, 52);
        }

        .create-btn {
          background-color: rgb(114, 49, 52);
          color: #ffffff;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
          width: fit-content;
          margin-top: 4px;
        }

        .create-btn:hover {
          background-color: #5e272a;
        }

        .table-container {
          width: 100%;
          border-radius: 10px;
          overflow-x: auto;
          border: 1px solid #eae6e1;
          margin-top: 6px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          text-align: ${isRtl ? 'right' : 'left'};
          font-size: 0.8rem;
          min-width: 500px;
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

        tr:nth-child(odd) td {
          background-color: #f9fafb;
        }

        tr:nth-child(even) td {
          background-color: #ffffff;
        }

        tr:last-child td {
          border-bottom: none;
        }

        .status-approved { color: #047857; font-weight: 500; }
        .status-pending { color: #b45309; font-weight: 500; }
        .status-rejected { color: #b91c1c; font-weight: 500; }

        @media (max-width: 768px) {
          .page-body {
            padding: 16px;
            gap: 16px;
          }

          .card {
            padding: 16px;
          }
        }
      `}</style>

      <div className="page-body">
        <h1 className="page-header-title">
          {isRtl ? 'إدارة الحملات' : 'Manage Campaigns'}
        </h1>

        {/* Create New Campaign Card */}
        <div className="card">
          <h3 className="card-title">
            {isRtl ? 'إنشاء حملة جديدة' : 'Create New Campaign'}
          </h3>
          <form className="campaign-form" onSubmit={handleCreateCampaign}>
            <div className="form-group">
              <label className="form-label">
                {isRtl ? 'اسم الحملة' : 'Campaign Name'}
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input" 
                placeholder={isRtl ? 'مثال: برنامج الإغاثة الغذائية' : 'e.g. Food Relief Program'} 
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                {isRtl ? 'الفئة' : 'Category'}
              </label>
              <select 
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="Medical">{isRtl ? 'طبي' : 'Medical'}</option>
                <option value="Education">{isRtl ? 'تعليم' : 'Education'}</option>
                <option value="Emergency">{isRtl ? 'طوارئ' : 'Emergency'}</option>
                <option value="Food Aid">{isRtl ? 'مساعدات غذائية' : 'Food Aid'}</option>
                <option value="Other">{isRtl ? 'أخرى' : 'Other'}</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                {isRtl ? 'مبلغ الهدف' : 'Goal Amount'}
              </label>
              <input 
                type="number" 
                name="goalAmount"
                value={formData.goalAmount}
                onChange={handleInputChange}
                className="form-input" 
                placeholder="0" 
                required
              />
            </div>

            <button type="submit" className="create-btn">
              {isRtl ? 'إنشاء الحملة' : 'Create Campaign'}
            </button>
          </form>
        </div>

        {/* Existing Campaigns Table Card */}
        <div className="card">
          <h3 className="card-title">
            {isRtl ? 'الحملات الحالية' : 'Existing Campaigns'}
          </h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>{isRtl ? 'الحملة' : 'Campaign'}</th>
                  <th>{isRtl ? 'الفئة' : 'Category'}</th>
                  <th>{isRtl ? 'الهدف' : 'Goal'}</th>
                  <th>{isRtl ? 'المبلغ المجمع' : 'Raised'}</th>
                  <th>{isRtl ? 'الحالة' : 'Status'}</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((camp, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 500 }}>{isRtl ? camp.nameAr : camp.name}</td>
                    <td>{isRtl ? camp.categoryAr : camp.category}</td>
                    <td>{camp.goal}</td>
                    <td>{camp.raised}</td>
                    <td>
                      <span className={`status-${camp.status.toLowerCase()}`}>
                        {isRtl ? camp.statusAr : camp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;