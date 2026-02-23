'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/companies', icon: '🏢', label: 'Companies' },
    { path: '/devices', icon: '💻', label: 'Devices' },
    { path: '/tickets', icon: '🎫', label: 'Tickets' },
    { path: '/reports', icon: '📈', label: 'Reports' },
    { path: '/settings', icon: '⚙️', label: 'Settings' },
  ];

  // Updated stats as per your requirement
  const stats = [
    { 
      title: 'Open Today', 
      value: 8, 
      icon: '🟡', 
      color: '#f59e0b',
      bgColor: '#fef3c7',
      change: '+2 from yesterday'
    },
    { 
      title: 'Pending Today', 
      value: 12, 
      icon: '⏳', 
      color: '#3b82f6',
      bgColor: '#dbeafe',
      change: '5 high priority'
    },
    { 
      title: 'Closed Today', 
      value: 15, 
      icon: '✅', 
      color: '#10b981',
      bgColor: '#d1fae5',
      change: '+3 from yesterday'
    },
    { 
      title: 'Total Closed', 
      value: 1247, 
      icon: '📊', 
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      change: 'All time closed'
    },
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
                background: item.path === '/dashboard' ? '#334155' : 'transparent',
                borderLeft: item.path === '/dashboard' ? '4px solid #3b82f6' : '4px solid transparent'
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
          <h1 style={{ margin: 0, fontSize: '24px', color: '#1f2937' }}>Dashboard</h1>
          
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
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                A
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Admin User</div>
                <div style={{ fontSize: '12px', color: '#666' }}>admin@itasset.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '30px' }}>
          {/* Welcome Message */}
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '20px' }}>Welcome back, Admin!</h2>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Here's your ticket summary for today.</p>
          </div>

          {/* Stats Grid - Your 4 Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                border: '1px solid #f0f0f0',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: stat.bgColor,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px'
                  }}>
                    {stat.icon}
                  </div>
                  <span style={{
                    background: '#f3f4f6',
                    color: '#4b5563',
                    padding: '4px 8px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    Today
                  </span>
                </div>
                <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: stat.color }}>{stat.value}</div>
                <div style={{ fontSize: '15px', fontWeight: '500', marginBottom: '5px' }}>{stat.title}</div>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {/* Ticket Activity Chart */}
            <div style={{
              background: 'white',
              padding: '24px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #f0f0f0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ margin: 0, fontSize: '16px' }}>Ticket Activity (Last 7 Days)</h3>
                <select style={{
                  padding: '6px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '13px',
                  background: 'white'
                }}>
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>This Year</option>
                </select>
              </div>
              <div style={{
                height: '250px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f9fafb',
                borderRadius: '8px',
                color: '#9ca3af'
              }}>
                📊 Chart Visualization Here
              </div>
            </div>

            {/* Recent Activity */}
            <div style={{
              background: 'white',
              padding: '24px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #f0f0f0'
            }}>
              <h3 style={{ margin: '0 0 20px 0', fontSize: '16px' }}>Recent Activity</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#f59e0b', borderRadius: '50%' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: '500' }}>New ticket created #TKT-008</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>5 minutes ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: '500' }}>Ticket #TKT-005 resolved</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>15 minutes ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: '500' }}>Technician assigned to #TKT-006</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>1 hour ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Tickets Table */}
          <div style={{
            background: 'white',
            padding: '24px',
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            border: '1px solid #f0f0f0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '16px' }}>Recent Tickets</h3>
              <button style={{
                background: 'none',
                border: 'none',
                color: '#3b82f6',
                fontSize: '13px',
                cursor: 'pointer'
              }}>
                View All →
              </button>
            </div>
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #f0f0f0' }}>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280', fontSize: '12px', fontWeight: '600' }}>Ticket ID</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280', fontSize: '12px', fontWeight: '600' }}>Company</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280', fontSize: '12px', fontWeight: '600' }}>Problem</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280', fontSize: '12px', fontWeight: '600' }}>Status</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280', fontSize: '12px', fontWeight: '600' }}>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px', fontSize: '13px', fontWeight: '500', color: '#3b82f6' }}>#TKT-008</td>
                  <td style={{ padding: '12px', fontSize: '13px' }}>Tech Solutions</td>
                  <td style={{ padding: '12px', fontSize: '13px' }}>Printer not working</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Open</span>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ background: '#fee2e2', color: '#991b1b', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>High</span>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px', fontSize: '13px', fontWeight: '500', color: '#3b82f6' }}>#TKT-007</td>
                  <td style={{ padding: '12px', fontSize: '13px' }}>Global Enterprises</td>
                  <td style={{ padding: '12px', fontSize: '13px' }}>Laptop slow performance</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ background: '#dbeafe', color: '#1e40af', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>In Progress</span>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Medium</span>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px', fontSize: '13px', fontWeight: '500', color: '#3b82f6' }}>#TKT-006</td>
                  <td style={{ padding: '12px', fontSize: '13px' }}>Digital Systems</td>
                  <td style={{ padding: '12px', fontSize: '13px' }}>Network connectivity issue</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ background: '#d1fae5', color: '#166534', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Closed</span>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '500' }}>Low</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quick Actions */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginTop: '30px'
          }}>
            <button style={{
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              padding: '15px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <span>🎫</span> Create New Ticket
            </button>
            <button style={{
              background: '#10b981',
              color: 'white',
              border: 'none',
              padding: '15px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <span>💻</span> Add New Device
            </button>
            <button style={{
              background: '#8b5cf6',
              color: 'white',
              border: 'none',
              padding: '15px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <span>🏢</span> Add New Company
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}