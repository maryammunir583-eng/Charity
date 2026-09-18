// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   ReferenceLine,
// } from 'recharts';

// const Overview = () => {
//   const { t, i18n } = useTranslation();
//   const [activeTooltipIndex, setActiveTooltipIndex] = useState(null);

//   const currentLang = i18n.language;
//   const isRtl = currentLang === 'ar';

//   const statsLeft = [
//     { titleKey: "overview.totalDonations", value: "$1.2M" },
//     { titleKey: "overview.activeCampaigns", value: "45" },
//   ];

//   const statsRight = [
//     { titleKey: "overview.registeredCharities", value: "120" },
//     { titleKey: "overview.beneficiaries", value: "8,540" },
//   ];

//   const donationTrendData = [
//     { nameKey: "feb", donations: 35000 },
//     { nameKey: "mar", donations: 28000 },
//     { nameKey: "apr", donations: 42000 },
//     { nameKey: "may", donations: 51000 },
//   ];

//   const topCampaigns = [
//     { nameKey: "health", amount: "$250K" },
//     { nameKey: "education", amount: "$180K" },
//     { nameKey: "relief", amount: "$120K" },
//   ];

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       const translatedMonth = t(`overview.months.${label}`);
//       return (
//         <div className="custom-tooltip">
//           <p className="tooltip-label">{translatedMonth}</p>
//           <p className="tooltip-value">
//             {t("overview.donationTrends", "Donations")} : <span>{payload[0].value.toLocaleString()}</span>
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div dir={isRtl ? 'rtl' : 'ltr'}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');

//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//           font-family: ${isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
//         }

//         .overview-body {
//           flex: 1;
//           overflow-y: auto;
//           padding: 28px 32px;
//           display: flex;
//           flex-direction: column;
//           gap: 24px;
//           background-color: #f7f6f4;
//           min-height: 100vh;
//         }

//         .content-grid {
//           display: grid;
//           grid-template-columns: 1.2fr 1.4fr;
//           gap: 28px;
//         }

//         @media (max-width: 1024px) {
//           .content-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         .column-section {
//           display: flex;
//           flex-direction: column;
//           gap: 16px;
//         }

//         .stats-grid-2 {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 16px;
//         }

//         .stat-card {
//           background: #ffffff;
//           padding: 14px 14px;
//           border-radius: 16px;
//           border: 1px solid #eae6e1;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
//         }

//         .stat-title {
//           font-size: 0.75rem;
//           font-weight: 400;
//           color: #6b7280;
//           margin: 0;
//         }

//         .stat-value {
//           font-size: 1.3rem;
//           font-weight: 700;
//           color: rgb(114, 49, 52); 
//           margin: 0;
//         }

//         .card {
//           background: #ffffff;
//           padding: 30px 32px;
//           border-radius: 16px;
//           border: 1px solid #eae6e1;
//           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
//           display: flex;
//           flex-direction: column;
//         }

//         .card-title {
//           font-size: 1.05rem;
//           font-weight: 600;
//           color: #1f2937;
//           margin-bottom: 20px;
//         }

//         .chart-container {
//           height: 240px;
//           width: 100%;
//         }

//         .campaigns-container {
//           height: 240px;
//           display: flex;
//           flex-direction: column;
//         }

//         .custom-tooltip {
//           background: #ffffff;
//           padding: 8px 12px;
//           border: 1px solid #e5e7eb;
//           border-radius: 8px;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
//           font-size: 0.8rem;
//           text-align: ${isRtl ? 'right' : 'left'};
//         }

//         .tooltip-label {
//           color: #6b7280;
//           margin: 0 0 2px 0;
//           font-weight: 500;
//         }

//         .tooltip-value {
//           color: #111827;
//           margin: 0;
//         }

//         .tooltip-value span {
//           font-weight: 600;
//         }

//         .campaigns-list {
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//         }

//         .campaign-item {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .campaign-name {
//           color: #4b5563;
//           font-size: 0.9rem;
//           font-weight: 500;
//         }

//         .campaign-amount {
//           color: #111827;
//           font-size: 0.9rem;
//           font-weight: 600;
//         }
//       `}</style>

//       <div className="overview-body">
//         <div className="content-grid">
          
//           {/* Left Column: Stats Cards + Donation Trends Chart */}
//           <div className="column-section">
//             <div className="stats-grid-2">
//               {statsLeft.map((card, idx) => (
//                 <div key={idx} className="stat-card">
//                   <p className="stat-title">{t(card.titleKey)}</p>
//                   <h3 className="stat-value">{card.value}</h3>
//                 </div>
//               ))}
//             </div>

//             <div className="card">
//               <h3 className="card-title">{t("overview.donationTrends")}</h3>
//               <div className="chart-container">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart
//                     data={donationTrendData}
//                     margin={{ top: 10, right: 15, left: 0, bottom: 0 }}
//                     onMouseMove={(state) => {
//                       if (state && state.activeTooltipIndex !== undefined) {
//                         setActiveTooltipIndex(state.activeTooltipIndex);
//                       }
//                     }}
//                     onMouseLeave={() => setActiveTooltipIndex(null)}
//                   >
//                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eae6e1" />
//                     <XAxis
//                       dataKey="nameKey"
//                       tickFormatter={(val) => t(`overview.months.${val}`)}
//                       axisLine={{ stroke: 'rgb(114, 49, 52)' }}
//                       tickLine={false}
//                       tick={{ fill: "#7f1d1d", fontSize: 11 }}
//                     />
//                     <YAxis
//                       orientation={isRtl ? 'right' : 'left'}
//                       axisLine={{ stroke: '#7f1d1d' }}
//                       tickLine={false}
//                       ticks={[0, 15000, 30000, 45000, 60000]}
//                       tick={{ fill: "#7f1d1d", fontSize: 11 }}
//                     />
//                     <Tooltip content={<CustomTooltip />} cursor={false} />
                    
//                     {activeTooltipIndex !== null && donationTrendData[activeTooltipIndex] && (
//                       <ReferenceLine
//                         x={donationTrendData[activeTooltipIndex].nameKey}
//                         stroke="#d1d5db"
//                         strokeWidth={1}
//                       />
//                     )}
                    
//                     <Line
//                       type="monotone"
//                       dataKey="donations"
//                       stroke="#7f1d1d"
//                       strokeWidth={2}
//                       dot={{ r: 4, strokeWidth: 2, fill: "#ffffff", stroke: "#7f1d1d" }}
//                       activeDot={{ r: 6, fill: "#7f1d1d", stroke: "#ffffff", strokeWidth: 2 }}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Stats Cards + Top Campaigns List */}
//           <div className="column-section">
//             <div className="stats-grid-2">
//               {statsRight.map((card, idx) => (
//                 <div key={idx} className="stat-card">
//                   <p className="stat-title">{t(card.titleKey)}</p>
//                   <h3 className="stat-value">{card.value}</h3>
//                 </div>
//               ))}
//             </div>

//             <div className="card">
//               <h3 className="card-title">{t("overview.topCampaigns")}</h3>
//               <div className="campaigns-container">
//                 <div className="campaigns-list">
//                   {topCampaigns.map((camp, idx) => (
//                     <div key={idx} className="campaign-item">
//                       <span className="campaign-name">{t(`overview.campaigns.${camp.nameKey}`)}</span>
//                       <span className="campaign-amount">{camp.amount}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const Overview = () => {
  const { t, i18n } = useTranslation();
  const [activeTooltipIndex, setActiveTooltipIndex] = useState(null);

  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';

  const statsLeft = [
    { titleKey: "overview.totalDonations", value: "$1.2M" },
    { titleKey: "overview.activeCampaigns", value: "45" },
  ];

  const statsRight = [
    { titleKey: "overview.registeredCharities", value: "120" },
    { titleKey: "overview.beneficiaries", value: "8,540" },
  ];

  const donationTrendData = [
    { nameKey: "feb", donations: 35000 },
    { nameKey: "mar", donations: 28000 },
    { nameKey: "apr", donations: 42000 },
    { nameKey: "may", donations: 51000 },
  ];

  const topCampaigns = [
    { nameKey: "health", amount: "$250K" },
    { nameKey: "education", amount: "$180K" },
    { nameKey: "relief", amount: "$120K" },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const translatedMonth = t(`overview.months.${label}`);
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{translatedMonth}</p>
          <p className="tooltip-value">
            {t("overview.donationTrends", "Donations")} : <span>{payload[0].value.toLocaleString()}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: ${isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
        }

        .overview-body {
          flex: 1;
          overflow-y: auto;
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          background-color: #f7f6f4;
          min-height: 100vh;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.4fr;
          gap: 28px;
        }

        /* Combined container for all 4 stats cards */
        .all-stats-container {
          display: contents; /* Keeps desktop grid behavior untouched */
        }

        .column-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .stats-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .stat-card {
          background: #ffffff;
          padding: 14px 14px;
          border-radius: 16px;
          border: 1px solid #eae6e1;
          display: flex;
          flex-direction: column;
          gap: 6px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .stat-title {
          font-size: 0.75rem;
          font-weight: 400;
          color: #6b7280;
          margin: 0;
        }

        .stat-value {
          font-size: 1.3rem;
          font-weight: 700;
          color: rgb(114, 49, 52); 
          margin: 0;
        }

        .card {
          background: #ffffff;
          padding: 30px 32px;
          border-radius: 16px;
          border: 1px solid #eae6e1;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 20px;
        }

        .chart-container {
          height: 240px;
          width: 100%;
        }

        .campaigns-container {
          height: 240px;
          display: flex;
          flex-direction: column;
        }

        .custom-tooltip {
          background: #ffffff;
          padding: 8px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          font-size: 0.8rem;
          text-align: ${isRtl ? 'right' : 'left'};
        }

        .tooltip-label {
          color: #6b7280;
          margin: 0 0 2px 0;
          font-weight: 500;
        }

        .tooltip-value {
          color: #111827;
          margin: 0;
        }

        .tooltip-value span {
          font-weight: 600;
        }

        .campaigns-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .campaign-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .campaign-name {
          color: #4b5563;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .campaign-amount {
          color: #111827;
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* Mobile Media Query: Forces 4 stats cards to top, followed by charts */
        @media (max-width: 1024px) {
          .content-grid {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .all-stats-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
            order: 1; /* Forces all stats cards to display first */
          }

          .column-section {
            order: 2; /* Forces graphs and lists to show below the cards */
          }

          .overview-body {
            padding: 14px 16px;
            gap: 16px;
          }

          .card {
            padding: 16px 18px;
          }

          .card-title {
            font-size: 0.95rem;
            margin-bottom: 12px;
          }

          .chart-container,
          .campaigns-container {
            height: 200px;
          }

          .stat-value {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="overview-body">
        <div className="content-grid">
          
          {/* Wrapper to group all 4 stat cards together at the top on mobile */}
          <div className="all-stats-container">
            <div className="stats-grid-2">
              {statsLeft.map((card, idx) => (
                <div key={idx} className="stat-card">
                  <p className="stat-title">{t(card.titleKey)}</p>
                  <h3 className="stat-value">{card.value}</h3>
                </div>
              ))}
            </div>

            <div className="stats-grid-2">
              {statsRight.map((card, idx) => (
                <div key={idx} className="stat-card">
                  <p className="stat-title">{t(card.titleKey)}</p>
                  <h3 className="stat-value">{card.value}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Left Column: Donation Trends Chart */}
          <div className="column-section">
            <div className="card">
              <h3 className="card-title">{t("overview.donationTrends")}</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={donationTrendData}
                    margin={{ top: 10, right: 15, left: 0, bottom: 0 }}
                    onMouseMove={(state) => {
                      if (state && state.activeTooltipIndex !== undefined) {
                        setActiveTooltipIndex(state.activeTooltipIndex);
                      }
                    }}
                    onMouseLeave={() => setActiveTooltipIndex(null)}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eae6e1" />
                    <XAxis
                      dataKey="nameKey"
                      tickFormatter={(val) => t(`overview.months.${val}`)}
                      axisLine={{ stroke: 'rgb(114, 49, 52)' }}
                      tickLine={false}
                      tick={{ fill: "#7f1d1d", fontSize: 11 }}
                    />
                    <YAxis
                      orientation={isRtl ? 'right' : 'left'}
                      axisLine={{ stroke: '#7f1d1d' }}
                      tickLine={false}
                      ticks={[0, 15000, 30000, 45000, 60000]}
                      tick={{ fill: "#7f1d1d", fontSize: 11 }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    
                    {activeTooltipIndex !== null && donationTrendData[activeTooltipIndex] && (
                      <ReferenceLine
                        x={donationTrendData[activeTooltipIndex].nameKey}
                        stroke="#d1d5db"
                        strokeWidth={1}
                      />
                    )}
                    
                    <Line
                      type="monotone"
                      dataKey="donations"
                      stroke="#7f1d1d"
                      strokeWidth={2}
                      dot={{ r: 4, strokeWidth: 2, fill: "#ffffff", stroke: "#7f1d1d" }}
                      activeDot={{ r: 6, fill: "#7f1d1d", stroke: "#ffffff", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column: Top Campaigns List */}
          <div className="column-section">
            <div className="card">
              <h3 className="card-title">{t("overview.topCampaigns")}</h3>
              <div className="campaigns-container">
                <div className="campaigns-list">
                  {topCampaigns.map((camp, idx) => (
                    <div key={idx} className="campaign-item">
                      <span className="campaign-name">{t(`overview.campaigns.${camp.nameKey}`)}</span>
                      <span className="campaign-amount">{camp.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Overview;