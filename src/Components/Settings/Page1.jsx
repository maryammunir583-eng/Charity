import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isRtl = currentLang === 'ar';

  // Profile form state (phone set to empty string)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Security form state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Preferences checkboxes state (allowing multiple/all to be ticked at once)
  const [enableDarkMode, setEnableDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);

  const handleProfileSubmit = (e) => {
    // Left empty or no e.preventDefault() so the page naturally refreshes
  };

  const handlePasswordSubmit = (e) => {
    // Left empty or no e.preventDefault() so the page naturally refreshes
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
          border-radius: 7px;
          border: 1px solid #eae6e1;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          padding: 24px;
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
        .form-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
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

        .form-input {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 0.8rem;
          color: #1f2937;
          background-color: #ffffff;
          outline: none;
          text-align: ${isRtl ? 'right' : 'left'};
        }

        .form-input:focus {
          border-color: rgb(114, 49, 52);
        }

        /* Profile Button Style */
        .btn-profile {
          background-color: rgb(84, 61, 46);
          color: #ffffff;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
          width: fit-content;
        }

        /* Security Button Style */
        .btn-security {
          background-color: rgb(20, 71, 230);
          color: #ffffff;
          padding: 10px 15px;
          border-radius: 8px;
          font-size: 0.80rem;
          font-weight: 400;
          border: none;
          cursor: pointer;
          width: fit-content;
        }

        .btn-security:hover {
          background-color: blue;
        }

        /* Preferences Row Style */
        .preference-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f3f0ec;
        }

        .preference-row:last-child {
          border-bottom: none;
        }

        .preference-label {
          font-size: 0.9rem;
          color: #374151;
        }

        .preference-checkbox {
          width: 18px;
          height: 18px;
          accent-color: blue;
          cursor: pointer;
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

          .btn-profile,
          .btn-security {
            width: 100%;
          }
        }
      `}</style>

      <div className="page-body">
        <h1 className="page-header-title">
          {isRtl ? 'الإعدادات' : 'Settings'}
        </h1>

        {/* Profile Settings Card */}
        <div className="card">
          <h3 className="card-title">
            {isRtl ? 'إعدادات الملف الشخصي' : 'Profile Settings'}
          </h3>
          <form onSubmit={handleProfileSubmit} className="form-stack">
            <div className="form-group">
              <label className="form-label">
                {isRtl ? 'الاسم الكامل' : 'Full Name'}
              </label>
              <input 
                type="text" 
                className="form-input" 
                placeholder={isRtl ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                {isRtl ? 'البريد الإلكتروني' : 'Email'}
              </label>
              <input 
                type="email" 
                className="form-input" 
                placeholder={isRtl ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                {isRtl ? 'الهاتف' : 'Phone'}
              </label>
              <input 
                type="text" 
                placeholder="+974 1234 5678"
                className="form-input" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-profile">
              {isRtl ? 'حفظ التغييرات' : 'Save Changes'}
            </button>
          </form>
        </div>

        {/* Security Settings Card */}
        <div className="card">
          <h3 className="card-title">
            {isRtl ? 'إعدادات الأمان' : 'Security Settings'}
          </h3>
          <form onSubmit={handlePasswordSubmit} className="form-stack">
            <div className="form-group">
              <label className="form-label">
                {isRtl ? 'كلمة المرور الحالية' : 'Current Password'}
              </label>
              <input 
                type="password" 
                className="form-input" 
                placeholder={isRtl ? 'أدخل كلمة المرور الحالية' : 'Enter current password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                {isRtl ? 'كلمة المرور الجديدة' : 'New Password'}
              </label>
              <input 
                type="password" 
                className="form-input" 
                placeholder={isRtl ? 'أدخل كلمة المرور الجديدة' : 'Enter new password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                {isRtl ? 'تأكيد كلمة المرور الجديدة' : 'Confirm New Password'}
              </label>
              <input 
                type="password" 
                className="form-input" 
                placeholder={isRtl ? 'تأكيد كلمة المرور الجديدة' : 'Confirm new password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-security">
              {isRtl ? 'تحديث كلمة المرور' : 'Update Password'}
            </button>
          </form>
        </div>

        {/* Preferences Card */}
        <div className="card">
          <h3 className="card-title">
            {isRtl ? 'التفضيلات' : 'Preferences'}
          </h3>
          <div className="form-stack">
            <div className="preference-row">
              <span className="preference-label">
                {isRtl ? 'تفعيل الوضع الداكن' : 'Enable Dark Mode'}
              </span>
              <input 
                type="checkbox" 
                className="preference-checkbox" 
                checked={enableDarkMode}
                onChange={(e) => setEnableDarkMode(e.target.checked)}
              />
            </div>

            <div className="preference-row">
              <span className="preference-label">
                {isRtl ? 'إشعارات البريد الإلكتروني' : 'Email Notifications'}
              </span>
              <input 
                type="checkbox" 
                className="preference-checkbox" 
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
              />
            </div>

            <div className="preference-row">
              <span className="preference-label">
                {isRtl ? 'تنبيهات الرسائل القصيرة' : 'SMS Alerts'}
              </span>
              <input 
                type="checkbox" 
                className="preference-checkbox" 
                checked={smsAlerts}
                onChange={(e) => setSmsAlerts(e.target.checked)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;