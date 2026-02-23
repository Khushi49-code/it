'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ReportsPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [reportType, setReportType] = useState('overview');
  const [dateRange, setDateRange] = useState('month');

  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/companies', icon: '🏢', label: 'Companies' },
    { path: '/devices', icon: '💻', label: 'Devices' },
    { path: '/tickets', icon: '🎫', label: 'Tickets' },
    { path: '/reports', icon: '📈', label: 'Reports' },
    { path: '/settings', icon: '⚙️', label: 'Settings' },
  ];

  // Report data
  const reports = {
    ticketSummary: {
      total: 1247,
      open: 23,
      inProgress: 15,
      closed: 1209,
      avgResolutionTime: '4.2 hours',
      slaCompliance: '94%',
      customerSatisfaction: '4.8/5'
    },
    monthlyData: [
      { month: 'Jan', tickets: 145, resolved: 140, pending: 5 },
      { month: 'Feb', tickets: 152, resolved: 148, pending: 4 },
      { month: 'Mar', tickets: 148, resolved: 145, pending: 3 },
      { month: 'Apr', tickets: 170, resolved: 165, pending: 5 },
      { month: 'May', tickets: 165, resolved: 160, pending: 5 },
      { month: 'Jun', tickets: 180, resolved: 175, pending: 5 },
      { month: 'Jul', tickets: 175, resolved: 170, pending: 5 },
      { month: 'Aug', tickets: 185, resolved: 180, pending: 5 },
      { month: 'Sep', tickets: 178, resolved: 172, pending: 6 },
      { month: 'Oct', tickets: 182, resolved: 178, pending: 4 },
      { month: 'Nov', tickets: 188, resolved: 182, pending: 6 },
      { month: 'Dec', tickets: 195, resolved: 188, pending: 7 },
    ],
    topCompanies: [
      { name: 'Tech Solutions Inc.', tickets: 245, resolved: 238, satisfaction: '4.9' },
      { name: 'Global Enterprises', tickets: 198, resolved: 192, satisfaction: '4.7' },
      { name: 'Digital Systems', tickets: 187, resolved: 180, satisfaction: '4.8' },
      { name: 'Innovation Labs', tickets: 156, resolved: 150, satisfaction: '4.6' },
      { name: 'Creative Studios', tickets: 142, resolved: 138, satisfaction: '4.8' },
    ],
    technicianPerformance: [
      { name: 'Raj Patel', assigned: 145, resolved: 142, avgTime: '3.8h', satisfaction: '4.9' },
      { name: 'Priya Sharma', assigned: 138, resolved: 135, avgTime: '4.1h', satisfaction: '4.8' },
      { name: 'Amit Kumar', assigned: 132, resolved: 128, avgTime: '4.5h', satisfaction: '4.7' },
      { name: 'Neha Gupta', assigned: 128, resolved: 125, avgTime: '4.2h', satisfaction: '4.8' },
      { name: 'Vikram Singh', assigned: 115, resolved: 112, avgTime: '4.0h', satisfaction: '4.9' },
    ],
    categoryBreakdown: [
      { category: 'Hardware', count: 423, percentage: 34 },
      { category: 'Software', count: 356, percentage: 28.5 },
      { category: 'Network', count: 287, percentage: 23 },
      { category: 'Email', count: 112, percentage: 9 },
      { category: 'Other', count: 69, percentage: 5.5 },
    ],
    priorityBreakdown: [
      { priority: 'High', count: 324, percentage: 26 },
      { priority: 'Medium', count: 578, percentage: 46.4 },
      { priority: 'Low', count: 345, percentage: 27.6 },
    ],
    revenueData: [
      { month: 'Jan', amc: 45000, service: 28000, total: 73000 },
      { month: 'Feb', amc: 52000, service: 32000, total: 84000 },
      { month: 'Mar', amc: 48000, service: 35000, total: 83000 },
      { month: 'Apr', amc: 55000, service: 42000, total: 97000 },
      { month: 'May', amc: 58000, service: 38000, total: 96000 },
      { month: 'Jun', amc: 62000, service: 45000, total: 107000 },
    ],
  };

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
                background: item.path === '/reports' ? '#334155' : 'transparent',
                borderLeft: item.path === '/reports' ? '4px solid #3b82f6' : '4px solid transparent'
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
          <h1 style={{ margin: 0, fontSize: '24px', color: '#1f2937' }}>Reports & Analytics</h1>
          
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
            <button
              style={{
                background: '#10b981',
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
              <span>📥</span> Export Report
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '30px' }}>
          {/* Report Type Tabs */}
          <div style={{
            background: 'white',
            padding: '10px',
            borderRadius: '10px',
            marginBottom: '30px',
            display: 'flex',
            gap: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            {['overview', 'tickets', 'performance', 'financial'].map((type) => (
              <button
                key={type}
                onClick={() => setReportType(type)}
                style={{
                  padding: '10px 20px',
                  background: reportType === type ? '#3b82f6' : 'transparent',
                  color: reportType === type ? 'white' : '#666',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: reportType === type ? '500' : 'normal',
                  flex: 1
                }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Report
              </button>
            ))}
          </div>

          {/* Date Range Selector */}
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '30px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Date Range:</span>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['week', 'month', 'quarter', 'year'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setDateRange(range)}
                    style={{
                      padding: '8px 16px',
                      background: dateRange === range ? '#3b82f6' : '#f3f4f6',
                      color: dateRange === range ? 'white' : '#666',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '13px'
                    }}
                  >
                    {range.charAt(0).toUpperCase() + range.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Overview Report */}
          {reportType === 'overview' && (
            <div>
              {/* Key Metrics */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
                marginBottom: '30px'
              }}>
                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>Total Tickets</div>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>{reports.ticketSummary.total}</div>
                  <div style={{ fontSize: '12px', color: '#10b981' }}>↑ 12.5% from last month</div>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>Open Tickets</div>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b' }}>{reports.ticketSummary.open}</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>{reports.ticketSummary.inProgress} in progress</div>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>Avg Resolution</div>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>{reports.ticketSummary.avgResolutionTime}</div>
                  <div style={{ fontSize: '12px', color: '#10b981' }}>↓ 0.3h improvement</div>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>SLA Compliance</div>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#8b5cf6' }}>{reports.ticketSummary.slaCompliance}</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>CSAT: {reports.ticketSummary.customerSatisfaction}</div>
                </div>
              </div>

              {/* Monthly Chart */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '30px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ margin: '0 0 20px 0', fontSize: '16px' }}>Monthly Ticket Trend</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '200px', gap: '5px' }}>
                  {reports.monthlyData.map((data) => (
                    <div key={data.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '2px', height: '150px', alignItems: 'flex-end' }}>
                        <div style={{ width: '30%', background: '#3b82f6', height: `${(data.tickets / 200) * 150}px`, borderRadius: '4px 4px 0 0' }}></div>
                        <div style={{ width: '30%', background: '#10b981', height: `${(data.resolved / 200) * 150}px`, borderRadius: '4px 4px 0 0' }}></div>
                      </div>
                      <span style={{ fontSize: '11px', marginTop: '5px' }}>{data.month}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '12px', height: '12px', background: '#3b82f6', borderRadius: '3px' }}></div>
                    <span style={{ fontSize: '12px' }}>Created</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '3px' }}></div>
                    <span style={{ fontSize: '12px' }}>Resolved</span>
                  </div>
                </div>
              </div>

              {/* Two Column Layout */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {/* Category Breakdown */}
                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ margin: '0 0 15px 0', fontSize: '16px' }}>Tickets by Category</h3>
                  {reports.categoryBreakdown.map((cat) => (
                    <div key={cat.category} style={{ marginBottom: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '5px' }}>
                        <span>{cat.category}</span>
                        <span>{cat.count} ({cat.percentage}%)</span>
                      </div>
                      <div style={{ width: '100%', height: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
                        <div style={{ width: `${cat.percentage}%`, height: '8px', background: '#3b82f6', borderRadius: '4px' }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Priority Breakdown */}
                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ margin: '0 0 15px 0', fontSize: '16px' }}>Tickets by Priority</h3>
                  {reports.priorityBreakdown.map((p) => (
                    <div key={p.priority} style={{ marginBottom: '15px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '5px' }}>
                        <span style={{ 
                          color: p.priority === 'High' ? '#ef4444' : p.priority === 'Medium' ? '#f59e0b' : '#10b981'
                        }}>{p.priority}</span>
                        <span>{p.count} ({p.percentage}%)</span>
                      </div>
                      <div style={{ width: '100%', height: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
                        <div style={{ 
                          width: `${p.percentage}%`, 
                          height: '8px', 
                          background: p.priority === 'High' ? '#ef4444' : p.priority === 'Medium' ? '#f59e0b' : '#10b981',
                          borderRadius: '4px' 
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tickets Report */}
          {reportType === 'tickets' && (
            <div>
              {/* Top Companies */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '20px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ margin: '0 0 15px 0', fontSize: '16px' }}>Top Companies by Tickets</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #f0f0f0' }}>
                      <th style={{ textAlign: 'left', padding: '10px', fontSize: '12px', color: '#666' }}>Company</th>
                      <th style={{ textAlign: 'center', padding: '10px', fontSize: '12px', color: '#666' }}>Tickets</th>
                      <th style={{ textAlign: 'center', padding: '10px', fontSize: '12px', color: '#666' }}>Resolved</th>
                      <th style={{ textAlign: 'center', padding: '10px', fontSize: '12px', color: '#666' }}>Resolution %</th>
                      <th style={{ textAlign: 'center', padding: '10px', fontSize: '12px', color: '#666' }}>Satisfaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.topCompanies.map((company) => (
                      <tr key={company.name} style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <td style={{ padding: '12px', fontSize: '13px' }}>{company.name}</td>
                        <td style={{ padding: '12px', fontSize: '13px', textAlign: 'center' }}>{company.tickets}</td>
                        <td style={{ padding: '12px', fontSize: '13px', textAlign: 'center' }}>{company.resolved}</td>
                        <td style={{ padding: '12px', fontSize: '13px', textAlign: 'center' }}>
                          {Math.round((company.resolved / company.tickets) * 100)}%
                        </td>
                        <td style={{ padding: '12px', fontSize: '13px', textAlign: 'center' }}>
                          <span style={{ color: '#f59e0b' }}>★</span> {company.satisfaction}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* SLA Summary */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ margin: '0 0 15px 0', fontSize: '16px' }}>SLA Performance</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#10b981' }}>94%</div>
                    <div style={{ fontSize: '13px', color: '#666' }}>Within SLA</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#ef4444' }}>6%</div>
                    <div style={{ fontSize: '13px', color: '#666' }}>Breached</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ width: '100%', height: '20px', background: '#f0f0f0', borderRadius: '10px' }}>
                      <div style={{ width: '94%', height: '20px', background: '#10b981', borderRadius: '10px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Performance Report */}
          {reportType === 'performance' && (
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px' }}>Technician Performance</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #f0f0f0' }}>
                    <th style={{ textAlign: 'left', padding: '12px', fontSize: '12px', color: '#666' }}>Technician</th>
                    <th style={{ textAlign: 'center', padding: '12px', fontSize: '12px', color: '#666' }}>Assigned</th>
                    <th style={{ textAlign: 'center', padding: '12px', fontSize: '12px', color: '#666' }}>Resolved</th>
                    <th style={{ textAlign: 'center', padding: '12px', fontSize: '12px', color: '#666' }}>Resolution %</th>
                    <th style={{ textAlign: 'center', padding: '12px', fontSize: '12px', color: '#666' }}>Avg Time</th>
                    <th style={{ textAlign: 'center', padding: '12px', fontSize: '12px', color: '#666' }}>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.technicianPerformance.map((tech) => (
                    <tr key={tech.name} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '12px', fontSize: '13px', fontWeight: '500' }}>{tech.name}</td>
                      <td style={{ padding: '12px', fontSize: '13px', textAlign: 'center' }}>{tech.assigned}</td>
                      <td style={{ padding: '12px', fontSize: '13px', textAlign: 'center' }}>{tech.resolved}</td>
                      <td style={{ padding: '12px', fontSize: '13px', textAlign: 'center' }}>
                        {Math.round((tech.resolved / tech.assigned) * 100)}%
                      </td>
                      <td style={{ padding: '12px', fontSize: '13px', textAlign: 'center' }}>{tech.avgTime}</td>
                      <td style={{ padding: '12px', fontSize: '13px', textAlign: 'center' }}>
                        <span style={{ color: '#f59e0b' }}>★</span> {tech.satisfaction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Financial Report */}
          {reportType === 'financial' && (
            <div>
              {/* Revenue Summary */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>Total Revenue (YTD)</div>
                  <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981' }}>₹12,45,000</div>
                  <div style={{ fontSize: '12px', color: '#10b981' }}>↑ 15.3% from last year</div>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>AMC Revenue</div>
                  <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3b82f6' }}>₹7,85,000</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>63% of total</div>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>Service Revenue</div>
                  <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#f59e0b' }}>₹4,60,000</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>37% of total</div>
                </div>
              </div>

              {/* Monthly Revenue Chart */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ margin: '0 0 20px 0', fontSize: '16px' }}>Monthly Revenue (AMC vs Service)</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '200px', gap: '5px' }}>
                  {reports.revenueData.map((data) => (
                    <div key={data.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '2px', height: '150px', alignItems: 'flex-end' }}>
                        <div style={{ width: '40%', background: '#3b82f6', height: `${(data.amc / 60000) * 150}px`, borderRadius: '4px 4px 0 0' }}></div>
                        <div style={{ width: '40%', background: '#f59e0b', height: `${(data.service / 60000) * 150}px`, borderRadius: '4px 4px 0 0' }}></div>
                      </div>
                      <span style={{ fontSize: '11px', marginTop: '5px' }}>{data.month}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '12px', height: '12px', background: '#3b82f6', borderRadius: '3px' }}></div>
                    <span style={{ fontSize: '12px' }}>AMC Revenue</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '12px', height: '12px', background: '#f59e0b', borderRadius: '3px' }}></div>
                    <span style={{ fontSize: '12px' }}>Service Revenue</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}