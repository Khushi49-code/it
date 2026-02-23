'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SettingsPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/companies', icon: '🏢', label: 'Companies' },
    { path: '/devices', icon: '💻', label: 'Devices' },
    { path: '/tickets', icon: '🎫', label: 'Tickets' },
    { path: '/reports', icon: '📈', label: 'Reports' },
    { path: '/settings', icon: '⚙️', label: 'Settings' },
  ];

  // Settings state
  const [settings, setSettings] = useState({
    // General Settings
    companyName: 'IT Asset Management System',
    companyEmail: 'admin@itasset.com',
    companyPhone: '+91 98765 43210',
    companyAddress: '123 Business Park, Andheri East, Mumbai - 400093',
    timezone: 'Asia/Kolkata',
    dateFormat: 'DD/MM/YYYY',
    currency: 'INR',
    language: 'English',

    // Notification Settings
    emailNotifications: true,
    whatsappNotifications: true,
    smsNotifications: false,
    ticketCreated: true,
    ticketAssigned: true,
    ticketResolved: true,
    amcExpiryReminder: true,
    warrantyExpiryReminder: true,
    dailyDigest: false,

    // Ticket Settings
    autoTicketId: true,
    ticketIdPrefix: 'TKT',
    defaultPriority: 'medium',
    allowReopen: true,
    reopenDays: '7',
    requireSolution: true,
    autoAssign: false,

    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: '30',
    passwordExpiry: '90',
    maxLoginAttempts: '5',
    ipWhitelisting: false,
    sslEnabled: true,

    // Backup Settings
    autoBackup: true,
    backupFrequency: 'daily',
    backupTime: '02:00',
    retentionDays: '30',
    lastBackup: '2024-02-22 02:00 AM',

    // Integration Settings
    whatsappBusinessApi: false,
    whatsappPhoneNumber: '',
    googleCalendar: false,
    slackIntegration: false,
    apiAccess: true,
    apiKey: 'api_live_xxxxxxxxxxxx',

    // Email Settings
    smtpServer: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUsername: 'notifications@itasset.com',
    smtpPassword: '********',
    fromEmail: 'support@itasset.com',
  });

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleChange = (field: string, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const tabs = [
    { id: 'general', label: 'General', icon: '⚙️' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'tickets', label: 'Ticket Settings', icon: '🎫' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'backup', label: 'Backup', icon: '💾' },
    { id: 'integrations', label: 'Integrations', icon: '🔌' },
    { id: 'email', label: 'Email', icon: '📧' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{
        width: collapsed ? '70px' : '250px',
        height: '100vh',
        background: '#1e293b',
        color: 'white',
        position: 'fixed',
        left: 0,
        top: 0,
        transition: 'width 0.3s',
        overflow: 'hidden',
        zIndex: 1000
      }}>
        {/* Logo */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #334155',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {!collapsed && <h3 style={{ margin: 0, color: 'white' }}>IT Asset</h3>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{
              background: '#334155',
              border: 'none',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: collapsed ? '0' : '10px'
            }}
          >
            {collapsed ? '→' : '←'}
          </button>
        </div>

        {/* Menu Items */}
        <div style={{ padding: '10px 0' }}>
          {menuItems.map((item) => (
            <div
              key={item.path}
              onClick={() => router.push(item.path)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 20px',
                cursor: 'pointer',
                background: item.path === '/settings' ? '#334155' : 'transparent',
                borderLeft: item.path === '/settings' ? '4px solid #3b82f6' : '4px solid transparent'
              }}
            >
              <span style={{ fontSize: '20px', minWidth: '30px' }}>{item.icon}</span>
              {!collapsed && <span style={{ marginLeft: '10px' }}>{item.label}</span>}
            </div>
          ))}
        </div>

        {/* User Info */}
        {!collapsed && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            padding: '20px',
            borderTop: '1px solid #334155'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#3b82f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                A
              </div>
              <div>
                <div style={{ fontWeight: 'bold' }}>Admin User</div>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>admin@itasset.com</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div style={{ 
        marginLeft: collapsed ? '70px' : '250px', 
        flex: 1, 
        background: '#f3f4f6',
        minHeight: '100vh',
        transition: 'margin-left 0.3s'
      }}>
        {/* Header */}
        <div style={{
          background: 'white',
          padding: '20px 30px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h1 style={{ margin: 0, fontSize: '24px', color: '#1f2937' }}>Settings</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button style={{
              background: '#f3f4f6',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              🔔
              <span style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                width: '8px',
                height: '8px',
                background: '#ef4444',
                borderRadius: '50%'
              }}></span>
            </button>
            {saveSuccess && (
              <div style={{
                background: '#d1fae5',
                color: '#166534',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px'
              }}>
                ✅ Settings saved successfully!
              </div>
            )}
            <button
              onClick={handleSave}
              style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <span>💾</span> Save Changes
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '30px' }}>
          {/* Settings Tabs */}
          <div style={{
            background: 'white',
            padding: '10px',
            borderRadius: '10px',
            marginBottom: '30px',
            display: 'flex',
            gap: '5px',
            flexWrap: 'wrap',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '10px 20px',
                  background: activeTab === tab.id ? '#3b82f6' : 'transparent',
                  color: activeTab === tab.id ? 'white' : '#666',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: activeTab === tab.id ? '500' : 'normal',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Settings Content */}
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            {/* General Settings */}
            {activeTab === 'general' && (
              <div>
                <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>General Settings</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={settings.companyName}
                      onChange={(e) => handleChange('companyName', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                      Company Email
                    </label>
                    <input
                      type="email"
                      value={settings.companyEmail}
                      onChange={(e) => handleChange('companyEmail', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                      Company Phone
                    </label>
                    <input
                      type="text"
                      value={settings.companyPhone}
                      onChange={(e) => handleChange('companyPhone', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                      Timezone
                    </label>
                    <select
                      value={settings.timezone}
                      onChange={(e) => handleChange('timezone', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '14px'
                      }}
                    >
                      <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                      <option value="Asia/Dubai">Asia/Dubai (GST)</option>
                      <option value="America/New_York">America/New York (EST)</option>
                      <option value="Europe/London">Europe/London (GMT)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                      Date Format
                    </label>
                    <select
                      value={settings.dateFormat}
                      onChange={(e) => handleChange('dateFormat', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '14px'
                      }}
                    >
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                      Currency
                    </label>
                    <select
                      value={settings.currency}
                      onChange={(e) => handleChange('currency', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '14px'
                      }}
                    >
                      <option value="INR">INR (₹)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                    Company Address
                  </label>
                  <textarea
                    value={settings.companyAddress}
                    onChange={(e) => handleChange('companyAddress', e.target.value)}
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div>
                <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Notification Settings</h2>
                
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Notification Channels</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="checkbox"
                        checked={settings.emailNotifications}
                        onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                      />
                      <span>Email Notifications</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="checkbox"
                        checked={settings.whatsappNotifications}
                        onChange={(e) => handleChange('whatsappNotifications', e.target.checked)}
                      />
                      <span>WhatsApp Notifications</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="checkbox"
                        checked={settings.smsNotifications}
                        onChange={(e) => handleChange('smsNotifications', e.target.checked)}
                      />
                      <span>SMS Notifications</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Notification Events</h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="checkbox"
                        checked={settings.ticketCreated}
                        onChange={(e) => handleChange('ticketCreated', e.target.checked)}
                      />
                      <span>Ticket Created</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="checkbox"
                        checked={settings.ticketAssigned}
                        onChange={(e) => handleChange('ticketAssigned', e.target.checked)}
                      />
                      <span>Ticket Assigned</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="checkbox"
                        checked={settings.ticketResolved}
                        onChange={(e) => handleChange('ticketResolved', e.target.checked)}
                      />
                      <span>Ticket Resolved</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="checkbox"
                        checked={settings.amcExpiryReminder}
                        onChange={(e) => handleChange('amcExpiryReminder', e.target.checked)}
                      />
                      <span>AMC Expiry Reminder</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="checkbox"
                        checked={settings.warrantyExpiryReminder}
                        onChange={(e) => handleChange('warrantyExpiryReminder', e.target.checked)}
                      />
                      <span>Warranty Expiry Reminder</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="checkbox"
                        checked={settings.dailyDigest}
                        onChange={(e) => handleChange('dailyDigest', e.target.checked)}
                      />
                      <span>Daily Digest</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Ticket Settings */}
            {activeTab === 'tickets' && (
              <div>
                <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Ticket Settings</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Ticket Configuration</h3>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                        Ticket ID Prefix
                      </label>
                      <input
                        type="text"
                        value={settings.ticketIdPrefix}
                        onChange={(e) => handleChange('ticketIdPrefix', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '14px'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                        Default Priority
                      </label>
                      <select
                        value={settings.defaultPriority}
                        onChange={(e) => handleChange('defaultPriority', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '14px'
                        }}
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <input
                        type="checkbox"
                        checked={settings.autoTicketId}
                        onChange={(e) => handleChange('autoTicketId', e.target.checked)}
                      />
                      <span>Auto-generate Ticket ID</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <input
                        type="checkbox"
                        checked={settings.autoAssign}
                        onChange={(e) => handleChange('autoAssign', e.target.checked)}
                      />
                      <span>Auto-assign tickets</span>
                    </label>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Ticket Lifecycle</h3>
                    
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                      <input
                        type="checkbox"
                        checked={settings.allowReopen}
                        onChange={(e) => handleChange('allowReopen', e.target.checked)}
                      />
                      <span>Allow reopening closed tickets</span>
                    </label>

                    {settings.allowReopen && (
                      <div style={{ marginBottom: '15px', marginLeft: '25px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                          Reopen Window (days)
                        </label>
                        <select
                          value={settings.reopenDays}
                          onChange={(e) => handleChange('reopenDays', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '14px'
                          }}
                        >
                          <option value="3">3 days</option>
                          <option value="7">7 days</option>
                          <option value="15">15 days</option>
                          <option value="30">30 days</option>
                        </select>
                      </div>
                    )}

                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="checkbox"
                        checked={settings.requireSolution}
                        onChange={(e) => handleChange('requireSolution', e.target.checked)}
                      />
                      <span>Require solution note when closing</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div>
                <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Security Settings</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Authentication</h3>
                    
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                      <input
                        type="checkbox"
                        checked={settings.twoFactorAuth}
                        onChange={(e) => handleChange('twoFactorAuth', e.target.checked)}
                      />
                      <span>Enable Two-Factor Authentication</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                      <input
                        type="checkbox"
                        checked={settings.ipWhitelisting}
                        onChange={(e) => handleChange('ipWhitelisting', e.target.checked)}
                      />
                      <span>Enable IP Whitelisting</span>
                    </label>

                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                        Session Timeout (minutes)
                      </label>
                      <select
                        value={settings.sessionTimeout}
                        onChange={(e) => handleChange('sessionTimeout', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '14px'
                        }}
                      >
                        <option value="15">15 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="60">1 hour</option>
                        <option value="120">2 hours</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Password Policy</h3>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                        Password Expiry (days)
                      </label>
                      <select
                        value={settings.passwordExpiry}
                        onChange={(e) => handleChange('passwordExpiry', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '14px'
                        }}
                      >
                        <option value="30">30 days</option>
                        <option value="60">60 days</option>
                        <option value="90">90 days</option>
                        <option value="never">Never</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                        Max Login Attempts
                      </label>
                      <select
                        value={settings.maxLoginAttempts}
                        onChange={(e) => handleChange('maxLoginAttempts', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '14px'
                        }}
                      >
                        <option value="3">3 attempts</option>
                        <option value="5">5 attempts</option>
                        <option value="10">10 attempts</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Backup Settings */}
            {activeTab === 'backup' && (
              <div>
                <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Backup Settings</h2>
                
                <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '20px' }}>💾</span>
                    <div>
                      <div style={{ fontWeight: '500' }}>Last Backup</div>
                      <div style={{ fontSize: '13px', color: '#666' }}>{settings.lastBackup}</div>
                    </div>
                  </div>
                </div>

                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <input
                    type="checkbox"
                    checked={settings.autoBackup}
                    onChange={(e) => handleChange('autoBackup', e.target.checked)}
                  />
                  <span>Enable Automatic Backups</span>
                </label>

                {settings.autoBackup && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                        Backup Frequency
                      </label>
                      <select
                        value={settings.backupFrequency}
                        onChange={(e) => handleChange('backupFrequency', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '14px'
                        }}
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                        Backup Time
                      </label>
                      <input
                        type="time"
                        value={settings.backupTime}
                        onChange={(e) => handleChange('backupTime', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '14px'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                        Retention Period
                      </label>
                      <select
                        value={settings.retentionDays}
                        onChange={(e) => handleChange('retentionDays', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '14px'
                        }}
                      >
                        <option value="7">7 days</option>
                        <option value="15">15 days</option>
                        <option value="30">30 days</option>
                        <option value="60">60 days</option>
                      </select>
                    </div>
                  </div>
                )}

                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                  <button style={{
                    padding: '10px 20px',
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}>
                    Backup Now
                  </button>
                  <button style={{
                    padding: '10px 20px',
                    background: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}>
                    Download Backup
                  </button>
                </div>
              </div>
            )}

            {/* Integrations */}
            {activeTab === 'integrations' && (
              <div>
                <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Integrations</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* WhatsApp Integration */}
                  <div style={{ border: '1px solid #f0f0f0', padding: '20px', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                      <div>
                        <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>WhatsApp Business API</h3>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Send notifications via WhatsApp</p>
                      </div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                          type="checkbox"
                          checked={settings.whatsappBusinessApi}
                          onChange={(e) => handleChange('whatsappBusinessApi', e.target.checked)}
                        />
                        <span>Enable</span>
                      </label>
                    </div>

                    {settings.whatsappBusinessApi && (
                      <div style={{ marginTop: '15px' }}>
                        <input
                          type="text"
                          placeholder="WhatsApp Phone Number"
                          value={settings.whatsappPhoneNumber}
                          onChange={(e) => handleChange('whatsappPhoneNumber', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '14px'
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Google Calendar */}
                  <div style={{ border: '1px solid #f0f0f0', padding: '20px', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>Google Calendar</h3>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Sync service schedules</p>
                      </div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                          type="checkbox"
                          checked={settings.googleCalendar}
                          onChange={(e) => handleChange('googleCalendar', e.target.checked)}
                        />
                        <span>Enable</span>
                      </label>
                    </div>
                  </div>

                  {/* Slack Integration */}
                  <div style={{ border: '1px solid #f0f0f0', padding: '20px', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>Slack</h3>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Receive notifications in Slack</p>
                      </div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                          type="checkbox"
                          checked={settings.slackIntegration}
                          onChange={(e) => handleChange('slackIntegration', e.target.checked)}
                        />
                        <span>Enable</span>
                      </label>
                    </div>
                  </div>

                  {/* API Access */}
                  <div style={{ border: '1px solid #f0f0f0', padding: '20px', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                      <div>
                        <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>API Access</h3>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>REST API for external integrations</p>
                      </div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                          type="checkbox"
                          checked={settings.apiAccess}
                          onChange={(e) => handleChange('apiAccess', e.target.checked)}
                        />
                        <span>Enable</span>
                      </label>
                    </div>

                    {settings.apiAccess && (
                      <div>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                          API Key
                        </label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <input
                            type="text"
                            value={settings.apiKey}
                            readOnly
                            style={{
                              flex: 1,
                              padding: '10px',
                              border: '1px solid #ddd',
                              borderRadius: '5px',
                              fontSize: '14px',
                              background: '#f9fafb'
                            }}
                          />
                          <button style={{
                            padding: '10px 20px',
                            background: '#f3f4f6',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            cursor: 'pointer'
                          }}>
                            Regenerate
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Email Settings */}
            {activeTab === 'email' && (
              <div>
                <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Email Settings</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                      SMTP Server
                    </label>
                    <input
                      type="text"
                      value={settings.smtpServer}
                      onChange={(e) => handleChange('smtpServer', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                      SMTP Port
                    </label>
                    <input
                      type="text"
                      value={settings.smtpPort}
                      onChange={(e) => handleChange('smtpPort', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                      SMTP Username
                    </label>
                    <input
                      type="text"
                      value={settings.smtpUsername}
                      onChange={(e) => handleChange('smtpUsername', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                      SMTP Password
                    </label>
                    <input
                      type="password"
                      value={settings.smtpPassword}
                      onChange={(e) => handleChange('smtpPassword', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' }}>
                      From Email
                    </label>
                    <input
                      type="email"
                      value={settings.fromEmail}
                      onChange={(e) => handleChange('fromEmail', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '14px'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <button style={{
                    padding: '10px 20px',
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}>
                    Test Email Configuration
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}