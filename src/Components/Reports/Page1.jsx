import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Reports = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isRtl = currentLang === 'ar';

  const [campaign, setCampaign] = useState('Health Aid');
  const [reportType, setReportType] = useState('Financial');
  
  const [reportsList, setReportsList] = useState([
    { 
      id: '#RPT-001', 
      campaign: 'Health Aid', 
      campaignAr: 'المساعدة الصحية', 
      date: '2025-08-01', 
      type: 'Financial', 
      typeAr: 'مالي', 
      status: 'Completed', 
      statusAr: 'مكتمل' 
    },
    { 
      id: '#RPT-002', 
      campaign: 'Education Fund', 
      campaignAr: 'صندوق التعليم', 
      date: '2025-08-05', 
      type: 'Compliance', 
      typeAr: 'امتثال', 
      status: 'Completed', 
      statusAr: 'مكتمل' 
    },
    { 
      id: '#RPT-003', 
      campaign: 'Relief Packages', 
      campaignAr: 'حزم الإغاثة', 
      date: '2025-08-10', 
      type: 'Financial', 
      typeAr: 'مالي', 
      status: 'In Progress', 
      statusAr: 'قيد التنفيذ' 
    },
  ]);

  const handleGenerateReport = (e) => {
    e.preventDefault();
    // Allows the page to naturally refresh on submit
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
          padding: 14px 30px;
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
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
        }

        /* Form Controls */
        .form-row {
          display: flex;
          gap: 24px;
          align-items: flex-end;
        }

        .form-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: #374151;
        }

        .form-select {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 0.9rem;
          color: #1f2937;
          background-color: #ffffff;
          outline: none;
          cursor: pointer;
        }

        .form-select:focus {
          border-color: rgb(114, 49, 52);
        }

        .btn-generate {
          background-color: rgb(114, 49, 52);
          color: #ffffff;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
          height: 42px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .btn-generate:hover {
          background-color: #4a3525; 
        }

        /* Table Styles (Compact Height) */
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
          padding: 8px 16px;
          text-align: ${isRtl ? 'right' : 'left'};
          white-space: nowrap;
        }

        td {
          padding: 8px 16px;
          color: #374151;
          border-bottom: 1px solid #eae6e1;
          white-space: nowrap;
        }

        tr:nth-child(odd) td {
          background-color: rgb(242, 237, 233);
        }

        tr:nth-child(even) td {
          background-color: #ffffff;
        }

        tr:last-child td {
          border-bottom: none;
        }

        /* Action Buttons at bottom */
        .action-buttons-row {
          display: flex;
          justify-content: ${isRtl ? 'flex-start' : 'flex-end'};
          gap: 12px;
          margin-top: 4px;
        }

        .btn-pdf {
          background-color: #0066ff;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .btn-pdf:hover {
          background-color: #0052cc;
        }

        .btn-excel {
          background-color: #00a859;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .btn-excel:hover {
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

          .form-row {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }

          .btn-generate {
            width: 100%;
          }

          .action-buttons-row {
            flex-direction: column;
          }

          .btn-pdf, .btn-excel {
            width: 100%;
          }
        }
      `}</style>

      <div className="page-body">
        <h1 className="page-header-title">
          {isRtl ? 'التقارير والامتثال' : 'Reports & Compliance'}
        </h1>

        {/* Generate New Report Card */}
        <div className="card">
          <h3 className="card-title">
            {isRtl ? 'إنشاء تقرير جديد' : 'Generate New Report'}
          </h3>
          <form onSubmit={handleGenerateReport} className="form-row">
            <div className="form-group">
              <label className="form-label">{isRtl ? 'الحملة' : 'Campaign'}</label>
              <select 
                className="form-select" 
                value={campaign} 
                onChange={(e) => setCampaign(e.target.value)}
              >
                <option value="Health Aid">{isRtl ? 'المساعدة الصحية' : 'Health Aid'}</option>
                <option value="Education Fund">{isRtl ? 'صندوق التعليم' : 'Education Fund'}</option>
                <option value="Relief Packages">{isRtl ? 'حزم الإغاثة' : 'Relief Packages'}</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">{isRtl ? 'نوع التقرير' : 'Report Type'}</label>
              <select 
                className="form-select" 
                value={reportType} 
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="Financial">{isRtl ? 'مالي' : 'Financial'}</option>
                <option value="Compliance">{isRtl ? 'امتثال' : 'Compliance'}</option>
                <option value="Audit">{isRtl ? 'تدقيق' : 'Audit'}</option>
              </select>
            </div>

            <button type="submit" className="btn-generate">
              {isRtl ? 'إنشاء' : 'Generate'}
            </button>
          </form>
        </div>

        {/* Generated Reports Card */}
        <div className="card">
          <h3 className="card-title">
            {isRtl ? 'التقارير المُنشأة' : 'Generated Reports'}
          </h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>{isRtl ? 'معرف التقرير' : 'Report ID'}</th>
                  <th>{isRtl ? 'الحملة' : 'Campaign'}</th>
                  <th>{isRtl ? 'تاريخ الإنشاء' : 'Generated On'}</th>
                  <th>{isRtl ? 'النوع' : 'Type'}</th>
                  <th>{isRtl ? 'الحالة' : 'Status'}</th>
                </tr>
              </thead>
              <tbody>
                {reportsList.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 500 }}>{item.id}</td>
                    <td>{isRtl ? item.campaignAr : item.campaign}</td>
                    <td>{item.date}</td>
                    <td>{isRtl ? item.typeAr : item.type}</td>
                    <td>{isRtl ? item.statusAr : item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download & Export Buttons */}
          <div className="action-buttons-row">
            <button className="btn-pdf">
              {isRtl ? 'تنزيل PDF' : 'Download PDF'}
            </button>
            <button className="btn-excel">
              {isRtl ? 'تصدير Excel' : 'Export Excel'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;