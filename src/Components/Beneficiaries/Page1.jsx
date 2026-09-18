import React from 'react';
import { useTranslation } from 'react-i18next';

const Beneficiaries = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isRtl = currentLang === 'ar';

  const beneficiariesList = [
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
            <button className="btn-add">
              {isRtl ? 'إضافة مستفيد جديد' : 'Add New Beneficiary'}
            </button>
            <button className="btn-sync">
              {isRtl ? 'المزامنة مع سند' : 'Sync with Sandi'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficiaries;