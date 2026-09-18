import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          title: "Dashboard"
        },
        sidebar: {
          brand: "Dashboard",
          overview: "Overview",
          donations: "Donations",
          donors: "Donors",
          charities: "Charities",
          campaigns: "Campaigns",
          authority: "Authority",
          beneficiaries: "Beneficiaries",
          reports: "Reports",
          settings: "Settings"
        },
        overview: {
          beneficiaries: "Beneficiaries",
          registeredCharities: "Registered Charities",
          activeCampaigns: "Active Campaigns",
          totalDonations: "Total Donations",
          topCampaigns: "Top Campaigns",
          donationTrends: "Donation Trends",
          campaigns: {
            health: "Health Aid",
            education: "Education for All",
            relief: "Emergency Relief"
          },
          months: {
            feb: "Feb",
            mar: "Mar",
            apr: "Apr",
            may: "May"
          }
        },
        donationsPage: {
          pageTitle: "Donations",
          cardTitle: "Donation Transactions",
          filterTitle: "Filter Donations",
          table: {
            txnId: "Txn ID",
            donorName: "Donor Name",
            campaign: "Campaign",
            amount: "Amount",
            method: "Payment Method",
            date: "Date",
            status: "Status"
          },
          status: {
            completed: "Completed",
            pending: "Pending",
            failed: "Failed"
          },
          buttons: {
            showAll: "Show All",
            showCompleted: "Show Completed",
            showPending: "Show Pending",
            showFailed: "Show Failed"
          },
          noData: "No transactions found for this filter."
        }
      }
    },
    ar: {
      translation: {
        navbar: {
          title: "لوحة القيادة"
        },
        sidebar: {
          brand: "لوحة التحكم",
          overview: "نظرة عامة",
          donations: "التبرعات",
          donors: "المتبرعون",
          charities: "الجمعيات الخيرية",
          campaigns: "الحملات",
          authority: "الهيئة",
          beneficiaries: "المستفيدون",
          reports: "التقارير",
          settings: "الإعدادات"
        },
        overview: {
          beneficiaries: "المستفيدون",
          registeredCharities: "الجمعيات المسجلة",
          activeCampaigns: "الحملات النشطة",
          totalDonations: "إجمالي التبرعات",
          topCampaigns: "أبرز الحملات",
          donationTrends: "اتجاهات التبرع",
          campaigns: {
            health: "المساعدات الصحية",
            education: "التعليم للجميع",
            relief: "الإغاثة الطارئة"
          },
          months: {
            feb: "فبراير",
            mar: "مارس",
            apr: "أبريل",
            may: "مايو"
          }
        },
        donationsPage: {
          pageTitle: "التبرعات",
          cardTitle: "معاملات التبرع",
          filterTitle: "تصفية التبرعات",
          table: {
            txnId: "رقم المعاملة",
            donorName: "اسم المتبرع",
            campaign: "الحملة",
            amount: "المبلغ",
            method: "طريقة الدفع",
            date: "التاريخ",
            status: "الحالة"
          },
          status: {
            completed: "مكتملة",
            pending: "قيد الانتظار",
            failed: "فشلت"
          },
          buttons: {
            showAll: "عرض الكل",
            showCompleted: "عرض المكتملة",
            showPending: "عرض قيد الانتظار",
            showFailed: "عرض الفاشلة"
          },
          noData: "لم يتم العثور على معاملات لهذه التصفية."
        }
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;