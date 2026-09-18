import React from 'react';
import { useTranslation } from 'react-i18next';

const Charities = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isRtl = currentLang === 'ar';

  const campaigns = [
    { 
      name: 'Health Aid', 
      nameAr: 'المساعدة الصحية', 
      category: 'Medical', 
      categoryAr: 'طبي', 
      raised: '$25,000', 
      goal: '$50,000', 
      status: 'Approved', 
      statusAr: 'موافق عليه' 
    },
    { 
      name: 'Education Fund', 
      nameAr: 'صندوق التعليم', 
      category: 'Education', 
      categoryAr: 'تعليم', 
      raised: '$18,500', 
      goal: '$40,000', 
      status: 'Pending', 
      statusAr: 'قيد الانتظار' 
    },
    { 
      name: 'Relief Packages', 
      nameAr: 'حزم الإغاثة', 
      category: 'Emergency', 
      categoryAr: 'طوارئ', 
      raised: '$12,000', 
      goal: '$20,000', 
      status: 'Rejected', 
      statusAr: 'مرفوض' 
    },
  ];

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
          font-size: 1.2rem;
          font-weight: 600;
          color: #1f2937;
        }

        /* Metrics Row Container */
        .metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* Metric Card */
        .metric-card {
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #eae6e1;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .metric-label {
          font-size: 0.825rem;
          font-weight: 400;
          color: #6b7280; 
        }

        .metric-value {
          font-size: 1.3rem;
          font-weight: 600;
          color: #581c1c;
        }

        /* Standard Card Container */
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
          margin-bottom: 6px;
        }

        .card-subtitle {
          font-size: 0.825rem;
          color: #4b5563;
          margin-bottom: 16px;
        }

        /* Table Styles */
        .table-container {
          width: 100%;
          border-radius: 10px;
          overflow-x: auto;
          border: 1px solid #eae6e1;
          margin-top: 14px;
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
          padding: 7px 12px;
          text-align: ${isRtl ? 'right' : 'left'};
          white-space: nowrap;
        }

        td {
          padding: 7px 12px;
          color: #374151;
          border-bottom: 1px solid #eae6e1;
          white-space: nowrap;
        }

        /* Alternating row background color for zebra striping */
        tr:nth-child(odd) td {
          background-color: #f9f9f8;
        }

        tr:nth-child(even) td {
          background-color: #ffffff;
        }

        tr:last-child td {
          border-bottom: none;
        }

        /* Status Colors */
        .status-approved { color: #047857; font-weight: 500; }
        .status-pending { color: #b45309; font-weight: 500; }
        .status-rejected { color: #b91c1c; font-weight: 500; }

        /* Upload Section Styles */
        .upload-section {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .file-input-wrapper {
          display: flex;
          align-items: center;
          border: 1px solid #eae6e1;
          border-radius: 8px;
          padding: 8px 12px;
          background-color: #f9f9f8;
          width: 100%;
        }

        .file-input {
          font-size: 0.85rem;
          color: #374151;
          width: 100%;
        }

        .upload-btn {
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
        }

        .upload-btn:hover {
          background-color: #4a3525;
        }

        /* Media Queries for Small Screens */
        @media (max-width: 768px) {
          .page-body {
            padding: 16px;
            gap: 16px;
          }

          .metrics-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .card {
            padding: 16px;
          }
        }
      `}</style>

      <div className="page-body">
        <h1 className="page-header-title">
          {isRtl ? 'إدارة الجمعيات الخيرية' : 'Charity Management'}
        </h1>

        {/* Top Summary Metrics Row */}
        <div className="metrics-row">
          <div className="metric-card">
            <span className="metric-label">{isRtl ? 'إجمالي الحملات' : 'Total Campaigns'}</span>
            <span className="metric-value">12</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">{isRtl ? 'الأموال المجمعة' : 'Funds Raised'}</span>
            <span className="metric-value">$150,000</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">{isRtl ? 'المستندات المُتحقق منها' : 'Documents Verified'}</span>
            <span className="metric-value">{isRtl ? 'نعم' : 'Yes'}</span>
          </div>
        </div>

        {/* Registered Campaigns Table Card */}
        <div className="card">
          <h3 className="card-title">{isRtl ? 'الحملات المسجلة' : 'Registered Campaigns'}</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>{isRtl ? 'الحملة' : 'Campaign'}</th>
                  <th>{isRtl ? 'الفئة' : 'Category'}</th>
                  <th>{isRtl ? 'المبلغ المجمع' : 'Raised'}</th>
                  <th>{isRtl ? 'الهدف' : 'Goal'}</th>
                  <th>{isRtl ? 'الحالة' : 'Status'}</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((camp, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 600 }}>{isRtl ? camp.nameAr : camp.name}</td>
                    <td>{isRtl ? camp.categoryAr : camp.category}</td>
                    <td>{camp.raised}</td>
                    <td>{camp.goal}</td>
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

        {/* Legal Documents & Licenses Card */}
        <div className="card upload-section">
          <h3 className="card-title">{isRtl ? 'المستندات القانونية والتراخيص' : 'Legal Documents & Licenses'}</h3>
          <p className="card-subtitle">
            {isRtl 
              ? 'قم بتحميل مستندات تسجيل مؤسستك، والتراخيص، وتقارير الامتثال لمراجعة الهيئة.' 
              : "Upload your organization's registration documents, licenses, and compliance reports for Authority review."}
          </p>
          
          <div className="file-input-wrapper">
            <input type="file" className="file-input" />
          </div>

          <button className="upload-btn">
            {isRtl ? 'رفع المستند' : 'Upload Document'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Charities;