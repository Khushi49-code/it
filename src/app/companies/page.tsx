'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CompaniesPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/companies', icon: '🏢', label: 'Companies' },
    { path: '/devices', icon: '💻', label: 'Devices' },
    { path: '/tickets', icon: '🎫', label: 'Tickets' },
    { path: '/reports', icon: '📈', label: 'Reports' },
    { path: '/settings', icon: '⚙️', label: 'Settings' },
  ];

  // Companies data with proper contact details
  const companies = [
    { 
      id: 1, 
      name: 'Tech Solutions Inc.', 
      contact: 'Rahul Mehta', 
      email: 'rahul.mehta@techsolutions.com',
      phone: '+91 98765 43210',
      altPhone: '+91 98765 43211',
      location: 'Mumbai, Maharashtra',
      address: '123 Business Park, Andheri East, Mumbai - 400093',
      devices: 12, 
      tickets: 3, 
      status: 'Active',
      gst: '27ABCDE1234F1Z5',
      since: '2023-01-15'
    },
    { 
      id: 2, 
      name: 'Global Enterprises', 
      contact: 'Priya Sharma', 
      email: 'priya.sharma@globalenterprises.com',
      phone: '+91 98765 43212',
      altPhone: '+91 98765 43213',
      location: 'Delhi NCR',
      address: '456 Corporate Tower, Sector 62, Noida - 201301',
      devices: 8, 
      tickets: 1, 
      status: 'Active',
      gst: '07FGHIJ5678K2L6',
      since: '2023-03-20'
    },
    { 
      id: 3, 
      name: 'Digital Systems', 
      contact: 'Amit Kumar', 
      email: 'amit.kumar@digitalsystems.com',
      phone: '+91 98765 43214',
      altPhone: '+91 98765 43215',
      location: 'Bangalore, Karnataka',
      address: '789 Tech Park, Whitefield, Bangalore - 560066',
      devices: 15, 
      tickets: 5, 
      status: 'Active',
      gst: '29KLMNO9012P3M7',
      since: '2023-02-10'
    },
    { 
      id: 4, 
      name: 'Innovation Labs', 
      contact: 'Neha Gupta', 
      email: 'neha.gupta@innovationlabs.com',
      phone: '+91 98765 43216',
      altPhone: '+91 98765 43217',
      location: 'Pune, Maharashtra',
      address: '321 Innovation Center, Hinjawadi, Pune - 411057',
      devices: 6, 
      tickets: 0, 
      status: 'Inactive',
      gst: '27PQRST3456U4N8',
      since: '2023-04-05'
    },
    { 
      id: 5, 
      name: 'Creative Studios', 
      contact: 'Vikram Singh', 
      email: 'vikram.singh@creativestudios.com',
      phone: '+91 98765 43218',
      altPhone: '+91 98765 43219',
      location: 'Hyderabad, Telangana',
      address: '654 Creative Street, Hitech City, Hyderabad - 500081',
      devices: 10, 
      tickets: 2, 
      status: 'Active',
      gst: '36UVWXY7890Z5P9',
      since: '2023-05-12'
    },
    { 
      id: 6, 
      name: 'Alpha Technologies', 
      contact: 'Sneha Reddy', 
      email: 'sneha.reddy@alphatech.com',
      phone: '+91 98765 43220',
      altPhone: '+91 98765 43221',
      location: 'Chennai, Tamil Nadu',
      address: '987 Alpha Tower, OMR, Chennai - 600041',
      devices: 7, 
      tickets: 4, 
      status: 'Active',
      gst: '33ABCDE1234F1Z5',
      since: '2023-06-18'
    },
  ];

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                background: item.path === '/companies' ? '#334155' : 'transparent',
                borderLeft: item.path === '/companies' ? '4px solid #3b82f6' : '4px solid transparent'
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
          <h1 style={{ margin: 0, fontSize: '24px', color: '#1f2937' }}>Companies</h1>
          
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
              onClick={() => setShowModal(true)}
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
              <span>+</span> Add Company
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '30px' }}>
          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold' }}>45</div>
              <div style={{ color: '#666' }}>Total Companies</div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981' }}>38</div>
              <div style={{ color: '#666' }}>Active</div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3b82f6' }}>58</div>
              <div style={{ color: '#666' }}>Devices</div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#f59e0b' }}>15</div>
              <div style={{ color: '#666' }}>Open Tickets</div>
            </div>
          </div>

          {/* Search Bar */}
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '30px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <input
              type="text"
              placeholder="Search companies by name, contact, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>

          {/* Companies Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            {filteredCompanies.map((company) => (
              <div 
                key={company.id} 
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  border: '1px solid #f0f0f0',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
                onClick={() => setSelectedCompany(company)}
              >
                {/* Header with Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold' }}>{company.name}</h3>
                    <p style={{ margin: 0, color: '#3b82f6', fontSize: '13px' }}>GST: {company.gst}</p>
                  </div>
                  <span style={{
                    background: company.status === 'Active' ? '#e6f7e6' : '#fee2e2',
                    color: company.status === 'Active' ? '#10b981' : '#ef4444',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {company.status}
                  </span>
                </div>

                {/* Contact Details - Main */}
                <div style={{ marginBottom: '15px', padding: '10px', background: '#f9fafb', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px' }}>👤</span>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>{company.contact}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px' }}>📧</span>
                    <span style={{ fontSize: '13px', color: '#3b82f6' }}>{company.email}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px' }}>📞</span>
                    <span style={{ fontSize: '13px' }}>{company.phone}</span>
                  </div>
                  {company.altPhone && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '14px' }}>📱</span>
                      <span style={{ fontSize: '13px', color: '#666' }}>Alt: {company.altPhone}</span>
                    </div>
                  )}
                </div>

                {/* Location */}
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
                    <span style={{ fontSize: '14px' }}>📍</span>
                    <span style={{ fontSize: '13px', fontWeight: '500' }}>{company.location}</span>
                  </div>
                  <div style={{ marginLeft: '22px', fontSize: '12px', color: '#666' }}>
                    {company.address}
                  </div>
                </div>

                {/* Stats Footer */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '15px 0 0 0',
                  borderTop: '1px solid #f0f0f0'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#3b82f6' }}>{company.devices}</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>Devices</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#f59e0b' }}>{company.tickets}</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>Tickets</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#10b981' }}>{company.since}</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>Since</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View Company Modal */}
      {selectedCompany && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }} onClick={() => setSelectedCompany(null)}>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '12px',
            width: '600px',
            maxWidth: '90%',
            maxHeight: '80vh',
            overflow: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, fontSize: '20px' }}>{selectedCompany.name}</h2>
              <button onClick={() => setSelectedCompany(null)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>

            <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Contact Person</div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{selectedCompany.contact}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Status</div>
                  <span style={{
                    background: selectedCompany.status === 'Active' ? '#e6f7e6' : '#fee2e2',
                    color: selectedCompany.status === 'Active' ? '#10b981' : '#ef4444',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    display: 'inline-block'
                  }}>
                    {selectedCompany.status}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Email</div>
                  <div style={{ fontSize: '14px' }}>{selectedCompany.email}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Phone</div>
                  <div style={{ fontSize: '14px' }}>{selectedCompany.phone}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Alternate Phone</div>
                  <div style={{ fontSize: '14px' }}>{selectedCompany.altPhone}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#666' }}>GST Number</div>
                  <div style={{ fontSize: '14px' }}>{selectedCompany.gst}</div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Address</div>
              <div style={{ fontSize: '14px', color: '#666' }}>{selectedCompany.address}</div>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button style={{
                padding: '10px 20px',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Edit Company
              </button>
              <button style={{
                padding: '10px 20px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Company Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }} onClick={() => setShowModal(false)}>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '12px',
            width: '600px',
            maxWidth: '90%',
            maxHeight: '80vh',
            overflow: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ margin: '0 0 20px 0' }}>Add New Company</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <input type="text" placeholder="Company Name *" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              <input type="text" placeholder="GST Number" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
            </div>

            <h3 style={{ fontSize: '16px', margin: '15px 0 10px 0' }}>Contact Details</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <input type="text" placeholder="Contact Person *" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              <input type="email" placeholder="Email *" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              <input type="text" placeholder="Phone Number *" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              <input type="text" placeholder="Alternate Phone" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
            </div>

            <h3 style={{ fontSize: '16px', margin: '15px 0 10px 0' }}>Address</h3>
            <div style={{ marginBottom: '15px' }}>
              <input type="text" placeholder="Street Address" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '10px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px' }}>
                <input type="text" placeholder="City" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
                <input type="text" placeholder="Pincode" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
              <button onClick={() => setShowModal(false)} style={{ padding: '10px 20px', background: '#f3f4f6', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => setShowModal(false)} style={{ padding: '10px 20px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save Company</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}