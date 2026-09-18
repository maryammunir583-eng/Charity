import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const DonationsContent = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isRtl = currentLang === 'ar';

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [activeFilter, setActiveFilter] = useState('ALL'); // 'ALL', 'COMPLETED', 'PENDING', 'FAILED'

  const transactions = [
    { id: 'TXN-1001', donor: 'Qatar Airways', donorAr: 'الخطوط الجوية القطرية', campaign: 'Education for All', campaignAr: 'التعليم للجميع', amount: '500,000 QAR', method: 'Bank Transfer', methodAr: 'تحويل بنكي', date: '30-Aug-2025', status: 'Completed', statusAr: 'مكتمل' },
    { id: 'TXN-1002', donor: 'Mohammed Abdullah', donorAr: 'محمد عبدالله', campaign: 'Orphan Support', campaignAr: 'دعم الأيتام', amount: '10,000 QAR', method: 'Credit Card', methodAr: 'بطاقة ائتمان', date: '28-Aug-2025', status: 'Pending', statusAr: 'قيد الانتظار' },
    { id: 'TXN-1003', donor: 'Vodafone Qatar', donorAr: 'فودافون قطر', campaign: 'Healthcare Aid', campaignAr: 'مساعدة الرعاية الصحية', amount: '1,200,000 QAR', method: 'Mobile Wallet', methodAr: 'محفظة الجوال', date: '15-Aug-2025', status: 'Completed', statusAr: 'مكتمل' },
    { id: 'TXN-1004', donor: 'Fatima Zahra', donorAr: 'فاطمة الزهراء', campaign: 'Food Distribution', campaignAr: 'توزيع الطعام', amount: '2,000 QAR', method: 'Debit Card', methodAr: 'بطاقة خصم مباشر', date: '01-Sep-2025', status: 'Failed', statusAr: 'فشل' },
  ];

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredTransactions = transactions.filter((tx) => {
    if (activeFilter === 'ALL') return true;
    return tx.status.toUpperCase() === activeFilter;
  });

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (!sortConfig.key) return 0;
    let aVal = a[sortConfig.key];
    let bVal = b[sortConfig.key];
    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="content-layout">
      {}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: ${isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
        }

        .content-layout {
          width: 100%;
          min-height: 80vh;
          background-color: #f7f6f4;
          padding: 24px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .page-header-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1f2937;
        }

        .card {
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
          padding: 24px;
          max-width: 1050px;
          width: 100%;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 500;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .table-container {
          width: 100%;
          border-radius: 8px;
          overflow-x: auto;
          border: 1px solid #e5e7eb;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          text-align: ${isRtl ? 'right' : 'left'};
          font-size: 0.78rem;
          table-layout: auto;
          min-width: 650px;
        }

        th {
          background-color: rgb(114, 49, 52);
          color: #ffffff;
          font-weight: 600;
          padding: 12px 14px;
          cursor: pointer;
          user-select: none;
          transition: background-color 0.2s;
          text-align: ${isRtl ? 'right' : 'left'};
          white-space: nowrap;
        }

        td {
          padding: 11px 14px;
          color: #374151;
          border-bottom: 1px solid #e5e7eb;
          white-space: nowrap;
        }

        /* Rows 1 and 3 light shading pattern */
        tbody tr:nth-child(odd) {
          background-color: #f9fafb;
        }

        tbody tr:nth-child(even) {
          background-color: #ffffff;
        }

        tr:last-child td {
          border-bottom: none;
        }

        .no-records {
          text-align: center;
          padding: 24px;
          color: #6b7280;
          font-style: italic;
        }

        .filter-section {
          display: flex;
          flex-direction: column;
          gap: 13px;
          max-width: 1050px;
        }

        .filter-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
        }

        .filter-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .filter-btn-completed, .filter-btn-pending, .filter-btn-failed {
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          border: none;
          outline: none;
          cursor: pointer;
          color: #fff;
          transition: opacity 0.2s ease;
        }

        .filter-btn-completed:focus, .filter-btn-pending:focus, .filter-btn-failed:focus,
        .filter-btn-completed:hover, .filter-btn-pending:hover, .filter-btn-failed:hover,
        .filter-btn-completed:active, .filter-btn-pending:active, .filter-btn-failed:active {
          outline: none !important;
          box-shadow: none !important;
          border: none !important;
        }

        .filter-btn-completed { background-color: #2563eb; }
        .filter-btn-completed.active { opacity: 1; filter: brightness(0.9); }
        .filter-btn-completed:not(.active) { opacity: 0.75; }

        .filter-btn-pending { background-color: #eab308; }
        .filter-btn-pending.active { opacity: 1; filter: brightness(0.9); }
        .filter-btn-pending:not(.active) { opacity: 0.75; }

        .filter-btn-failed { background-color: #dc2626; }
        .filter-btn-failed.active { opacity: 1; filter: brightness(0.9); }
        .filter-btn-failed:not(.active) { opacity: 0.75; }

        /* Media Queries for Small Screens */
        @media (max-width: 768px) {
          .content-layout {
            padding: 16px;
            gap: 12px;
          }

          .card {
            padding: 16px;
          }
        }
      `}</style>

      {}
      {/* Main Page Title */}
      <h1 className="page-header-title">
        {isRtl ? 'التبرعات' : 'Donations'}
      </h1>

      {}
      {/* Donation Transactions Table Card */}
      <div className="card">
        <h3 className="card-title">
          {isRtl ? 'معاملات التبرع' : 'Donation Transactions'}
        </h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}>
                  {isRtl ? 'رقم المعاملة' : 'Txn ID'} {sortConfig.key === 'id' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                </th>
                <th onClick={() => handleSort('donor')}>
                  {isRtl ? 'اسم المتبرع' : 'Donor Name'} {sortConfig.key === 'donor' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                </th>
                <th onClick={() => handleSort('campaign')}>
                  {isRtl ? 'الحملة' : 'Campaign'} {sortConfig.key === 'campaign' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                </th>
                <th onClick={() => handleSort('amount')}>
                  {isRtl ? 'المبلغ' : 'Amount'} {sortConfig.key === 'amount' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                </th>
                <th onClick={() => handleSort('method')}>
                  {isRtl ? 'طريقة الدفع' : 'Payment Method'} {sortConfig.key === 'method' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                </th>
                <th onClick={() => handleSort('date')}>
                  {isRtl ? 'التاريخ' : 'Date'} {sortConfig.key === 'date' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                </th>
                <th onClick={() => handleSort('status')}>
                  {isRtl ? 'الحالة' : 'Status'} {sortConfig.key === 'status' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedTransactions.length > 0 ? (
                sortedTransactions.map((tx, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 500 }}>{tx.id}</td>
                    <td>{isRtl ? tx.donorAr : tx.donor}</td>
                    <td>{isRtl ? tx.campaignAr : tx.campaign}</td>
                    <td>{tx.amount}</td>
                    <td>{isRtl ? tx.methodAr : tx.method}</td>
                    <td>{tx.date}</td>
                    <td>
                      <span className={`status-${tx.status.toLowerCase()}`}>
                        {isRtl ? tx.statusAr : tx.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="no-records">
                    {isRtl ? 'لا توجد معاملات مطابقة' : 'No matching transactions found'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {}
      {/* Filter Donations Card */}
      <div className="card filter-section">
        <h3 className="filter-title">
          {isRtl ? 'تصفية التبرعات' : 'Filter Donations'}
        </h3>
        <div className="filter-buttons">
          <button 
            className={`filter-btn-completed ${activeFilter === 'COMPLETED' ? 'active' : ''}`} 
            onClick={() => setActiveFilter(activeFilter === 'COMPLETED' ? 'ALL' : 'COMPLETED')}
          >
            {isRtl ? 'إظهار المكتملة' : 'Show Completed'}
          </button>
          <button 
            className={`filter-btn-pending ${activeFilter === 'PENDING' ? 'active' : ''}`} 
            onClick={() => setActiveFilter(activeFilter === 'PENDING' ? 'ALL' : 'PENDING')}
          >
            {isRtl ? 'إظهار قيد الانتظار' : 'Show Pending'}
          </button>
          <button 
            className={`filter-btn-failed ${activeFilter === 'FAILED' ? 'active' : ''}`} 
            onClick={() => setActiveFilter(activeFilter === 'FAILED' ? 'ALL' : 'FAILED')}
          >
            {isRtl ? 'إظهار الفاشلة' : 'Show Failed'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationsContent;