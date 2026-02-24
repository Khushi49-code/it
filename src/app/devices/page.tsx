'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DevicesPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/companies', icon: '🏢', label: 'Companies' },
    { path: '/devices', icon: '💻', label: 'Devices' },
    { path: '/tickets', icon: '🎫', label: 'Tickets' },
    { path: '/reports', icon: '📈', label: 'Reports' },
    { path: '/settings', icon: '⚙️', label: 'Settings' },
  ];

  // Devices data
  const devices = [
    { 
      id: 1, 
      name: 'Dell Latitude 5420', 
      type: 'Laptop',
      brand: 'Dell',
      model: 'Latitude 5420',
      serialNumber: 'DL5420-2024-001',
      assetTag: 'AST-LT-001',
      company: 'Tech Solutions Inc.',
      companyId: 1,
      location: 'Mumbai Office',
      status: 'Active',
      warranty: '2025-12-31',
      warrantyStatus: 'Active',
      amc: 'Yes',
      amcExpiry: '2024-12-31',
      lastMaintenance: '2024-01-15',
      nextMaintenance: '2024-04-15',
      processor: 'Intel Core i7-1165G7',
      ram: '16GB DDR4',
      storage: '512GB NVMe SSD',
      os: 'Windows 11 Pro',
      ipAddress: '192.168.1.101',
      assignedTo: 'Rahul Mehta',
      purchaseDate: '2023-06-15',
      purchasePrice: '₹85,000',
      vendor: 'Dell India',
      notes: 'Primary device for CEO'
    },
    { 
      id: 2, 
      name: 'HP LaserJet Pro M15w', 
      type: 'Printer',
      brand: 'HP',
      model: 'LaserJet Pro M15w',
      serialNumber: 'HP-M15W-2024-002',
      assetTag: 'AST-PR-001',
      company: 'Global Enterprises',
      companyId: 2,
      location: 'Delhi Office',
      status: 'Active',
      warranty: '2025-06-30',
      warrantyStatus: 'Active',
      amc: 'Yes',
      amcExpiry: '2024-06-30',
      lastMaintenance: '2024-01-10',
      nextMaintenance: '2024-04-10',
      // Removed duplicate type property
      connectivity: 'USB, Wireless',
      ipAddress: '192.168.1.105',
      assignedTo: 'IT Dept',
      purchaseDate: '2023-08-20',
      purchasePrice: '₹15,000',
      vendor: 'HP India',
      notes: 'Color printer'
    },
    { 
      id: 3, 
      name: 'Lenovo ThinkCentre M70s', 
      type: 'Desktop',
      brand: 'Lenovo',
      model: 'ThinkCentre M70s',
      serialNumber: 'LEN-M70S-2024-003',
      assetTag: 'AST-DT-001',
      company: 'Digital Systems',
      companyId: 3,
      location: 'Bangalore Office',
      status: 'Maintenance',
      warranty: '2024-12-31',
      warrantyStatus: 'Expiring',
      amc: 'No',
      lastMaintenance: '2024-02-01',
      nextMaintenance: '2024-05-01',
      processor: 'Intel Core i5-11400',
      ram: '8GB DDR4',
      storage: '1TB HDD',
      os: 'Windows 10 Pro',
      ipAddress: '192.168.1.110',
      assignedTo: 'Amit Kumar',
      purchaseDate: '2023-10-10',
      purchasePrice: '₹45,000',
      vendor: 'Lenovo India',
      notes: 'Under maintenance'
    },
    { 
      id: 4, 
      name: 'HP ProLiant DL380', 
      type: 'Server',
      brand: 'HP',
      model: 'ProLiant DL380 Gen10',
      serialNumber: 'HP-DL380-2024-004',
      assetTag: 'AST-SR-001',
      company: 'Innovation Labs',
      companyId: 4,
      location: 'Pune Data Center',
      status: 'Active',
      warranty: '2026-01-15',
      warrantyStatus: 'Active',
      amc: 'Yes',
      amcExpiry: '2025-01-15',
      lastMaintenance: '2024-01-20',
      nextMaintenance: '2024-04-20',
      processor: 'Intel Xeon Silver 4210',
      ram: '64GB DDR4 ECC',
      storage: '4TB SAS x4',
      os: 'Windows Server 2019',
      ipAddress: '192.168.1.200',
      assignedTo: 'IT Team',
      purchaseDate: '2023-12-05',
      purchasePrice: '₹2,50,000',
      vendor: 'HP Enterprise',
      notes: 'Primary domain controller'
    },
    { 
      id: 5, 
      name: 'MacBook Pro 14"', 
      type: 'Laptop',
      brand: 'Apple',
      model: 'MacBook Pro M3',
      serialNumber: 'MBP-M3-2024-005',
      assetTag: 'AST-LT-002',
      company: 'Creative Studios',
      companyId: 5,
      location: 'Hyderabad Studio',
      status: 'Active',
      warranty: '2025-08-31',
      warrantyStatus: 'Active',
      amc: 'Yes',
      amcExpiry: '2024-08-31',
      lastMaintenance: '2024-02-05',
      nextMaintenance: '2024-05-05',
      processor: 'Apple M3 Pro',
      ram: '18GB Unified',
      storage: '1TB SSD',
      os: 'macOS Sonoma',
      ipAddress: '192.168.1.115',
      assignedTo: 'Vikram Singh',
      purchaseDate: '2023-11-15',
      purchasePrice: '₹1,99,000',
      vendor: 'Apple India',
      notes: 'Design team lead'
    },
    { 
      id: 6, 
      name: 'Cisco Catalyst 9200', 
      type: 'Network',
      brand: 'Cisco',
      model: 'Catalyst 9200',
      serialNumber: 'CISCO-9200-006',
      assetTag: 'AST-NW-001',
      company: 'Alpha Technologies',
      companyId: 6,
      location: 'Chennai Server Room',
      status: 'Active',
      warranty: '2025-03-31',
      warrantyStatus: 'Active',
      amc: 'Yes',
      amcExpiry: '2024-03-31',
      lastMaintenance: '2024-01-25',
      nextMaintenance: '2024-04-25',
      ports: '48 Ports',
      managed: 'Yes',
      ipAddress: '192.168.1.250',
      assignedTo: 'Network Team',
      purchaseDate: '2023-09-18',
      purchasePrice: '₹1,25,000',
      vendor: 'Cisco Systems',
      notes: 'Core switch'
    },
  ];

  // Filter devices based on search and type
  const filteredDevices = devices.filter(device => {
    const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || device.type === filterType;
    return matchesSearch && matchesType;
  });

  // Stats
  const stats = {
    total: devices.length,
    active: devices.filter(d => d.status === 'Active').length,
    maintenance: devices.filter(d => d.status === 'Maintenance').length,
    expiringWarranty: devices.filter(d => d.warrantyStatus === 'Expiring').length,
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Active': return { bg: '#e6f7e6', color: '#10b981' };
      case 'Maintenance': return { bg: '#fef3c7', color: '#f59e0b' };
      case 'Inactive': return { bg: '#fee2e2', color: '#ef4444' };
      default: return { bg: '#f3f4f6', color: '#6b7280' };
    }
  };

  const getWarrantyColor = (status: string) => {
    switch(status) {
      case 'Active': return { bg: '#dbeafe', color: '#3b82f6' };
      case 'Expiring': return { bg: '#fef3c7', color: '#f59e0b' };
      case 'Expired': return { bg: '#fee2e2', color: '#ef4444' };
      default: return { bg: '#f3f4f6', color: '#6b7280' };
    }
  };

  const getDeviceIcon = (type: string) => {
    switch(type) {
      case 'Laptop': return '💻';
      case 'Desktop': return '🖥️';
      case 'Printer': return '🖨️';
      case 'Server': return '🔧';
      case 'Network': return '🌐';
      default: return '📱';
    }
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
                background: item.path === '/devices' ? '#334155' : 'transparent',
                borderLeft: item.path === '/devices' ? '4px solid #3b82f6' : '4px solid transparent'
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
          <h1 style={{ margin: 0, fontSize: '24px', color: '#1f2937' }}>Devices</h1>
          
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
              <span>+</span> Add Device
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '30px' }}>
          {/* Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3b82f6' }}>{stats.total}</div>
              <div style={{ color: '#666' }}>Total Devices</div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981' }}>{stats.active}</div>
              <div style={{ color: '#666' }}>Active</div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#f59e0b' }}>{stats.maintenance}</div>
              <div style={{ color: '#666' }}>Under Maintenance</div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#ef4444' }}>{stats.expiringWarranty}</div>
              <div style={{ color: '#666' }}>Warranty Expiring</div>
            </div>
          </div>

          {/* Search and Filter */}
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '30px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px' }}>
              <input
                type="text"
                placeholder="Search devices by name, serial number, company..."
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
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                style={{
                  padding: '12px 16px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  background: 'white'
                }}
              >
                <option value="all">All Types</option>
                <option value="Laptop">Laptops</option>
                <option value="Desktop">Desktops</option>
                <option value="Printer">Printers</option>
                <option value="Server">Servers</option>
                <option value="Network">Network</option>
              </select>
            </div>
          </div>

          {/* Devices Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            {filteredDevices.map((device) => {
              const statusStyle = getStatusColor(device.status);
              const warrantyStyle = getWarrantyColor(device.warrantyStatus);
              
              return (
                <div 
                  key={device.id} 
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
                  onClick={() => setSelectedDevice(device)}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '30px' }}>{getDeviceIcon(device.type)}</span>
                      <div>
                        <h3 style={{ margin: '0 0 3px 0', fontSize: '16px', fontWeight: 'bold' }}>{device.name}</h3>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{device.serialNumber}</p>
                      </div>
                    </div>
                    <span style={{
                      background: statusStyle.bg,
                      color: statusStyle.color,
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      {device.status}
                    </span>
                  </div>

                  {/* Company & Location */}
                  <div style={{ marginBottom: '12px', padding: '8px', background: '#f9fafb', borderRadius: '6px' }}>
                    <div style={{ fontSize: '13px', fontWeight: '500', marginBottom: '3px' }}>{device.company}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>📍 {device.location}</div>
                  </div>

                  {/* Specs Summary */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '8px',
                    marginBottom: '12px',
                    fontSize: '12px'
                  }}>
                    <div>
                      <span style={{ color: '#666' }}>Brand:</span> {device.brand}
                    </div>
                    <div>
                      <span style={{ color: '#666' }}>Model:</span> {device.model}
                    </div>
                    <div>
                      <span style={{ color: '#666' }}>RAM:</span> {device.ram || 'N/A'}
                    </div>
                    <div>
                      <span style={{ color: '#666' }}>Storage:</span> {device.storage || 'N/A'}
                    </div>
                  </div>

                  {/* Assigned To */}
                  <div style={{ fontSize: '12px', marginBottom: '12px' }}>
                    <span style={{ color: '#666' }}>Assigned to:</span> {device.assignedTo}
                  </div>

                  {/* Warranty and AMC */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <span style={{
                      background: warrantyStyle.bg,
                      color: warrantyStyle.color,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '10px',
                      fontWeight: '500'
                    }}>
                      Warranty: {device.warranty}
                    </span>
                    {device.amc === 'Yes' && (
                      <span style={{
                        background: '#e6f7e6',
                        color: '#10b981',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: '500'
                      }}>
                        AMC Active
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid #f0f0f0',
                    fontSize: '11px',
                    color: '#666'
                  }}>
                    <span>IP: {device.ipAddress}</span>
                    <span>Last Maint: {device.lastMaintenance}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredDevices.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '50px',
              background: 'white',
              borderRadius: '12px',
              color: '#666'
            }}>
              No devices found matching your search.
            </div>
          )}
        </div>
      </div>

      {/* View Device Modal */}
      {selectedDevice && (
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
        }} onClick={() => setSelectedDevice(null)}>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '12px',
            width: '800px',
            maxWidth: '90%',
            maxHeight: '80vh',
            overflow: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, fontSize: '20px' }}>{selectedDevice.name}</h2>
              <button onClick={() => setSelectedDevice(null)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>

            {/* Device Details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {/* Left Column */}
              <div>
                <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Basic Information</h3>
                  <div style={{ display: 'grid', gap: '8px' }}>
                    <div><span style={{ color: '#666' }}>Type:</span> {selectedDevice.type}</div>
                    <div><span style={{ color: '#666' }}>Brand:</span> {selectedDevice.brand}</div>
                    <div><span style={{ color: '#666' }}>Model:</span> {selectedDevice.model}</div>
                    <div><span style={{ color: '#666' }}>Serial Number:</span> {selectedDevice.serialNumber}</div>
                    <div><span style={{ color: '#666' }}>Asset Tag:</span> {selectedDevice.assetTag}</div>
                  </div>
                </div>

                <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Assignment</h3>
                  <div style={{ display: 'grid', gap: '8px' }}>
                    <div><span style={{ color: '#666' }}>Company:</span> {selectedDevice.company}</div>
                    <div><span style={{ color: '#666' }}>Location:</span> {selectedDevice.location}</div>
                    <div><span style={{ color: '#666' }}>Assigned To:</span> {selectedDevice.assignedTo}</div>
                    <div><span style={{ color: '#666' }}>IP Address:</span> {selectedDevice.ipAddress}</div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Specifications</h3>
                  <div style={{ display: 'grid', gap: '8px' }}>
                    <div><span style={{ color: '#666' }}>Processor:</span> {selectedDevice.processor || 'N/A'}</div>
                    <div><span style={{ color: '#666' }}>RAM:</span> {selectedDevice.ram || 'N/A'}</div>
                    <div><span style={{ color: '#666' }}>Storage:</span> {selectedDevice.storage || 'N/A'}</div>
                    <div><span style={{ color: '#666' }}>OS:</span> {selectedDevice.os || 'N/A'}</div>
                  </div>
                </div>

                <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Warranty & Maintenance</h3>
                  <div style={{ display: 'grid', gap: '8px' }}>
                    <div><span style={{ color: '#666' }}>Warranty:</span> {selectedDevice.warranty}</div>
                    <div><span style={{ color: '#666' }}>Warranty Status:</span> 
                      <span style={{
                        marginLeft: '5px',
                        background: getWarrantyColor(selectedDevice.warrantyStatus).bg,
                        color: getWarrantyColor(selectedDevice.warrantyStatus).color,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '11px'
                      }}>{selectedDevice.warrantyStatus}</span>
                    </div>
                    <div><span style={{ color: '#666' }}>AMC:</span> {selectedDevice.amc}</div>
                    {selectedDevice.amc === 'Yes' && <div><span style={{ color: '#666' }}>AMC Expiry:</span> {selectedDevice.amcExpiry}</div>}
                    <div><span style={{ color: '#666' }}>Last Maintenance:</span> {selectedDevice.lastMaintenance}</div>
                    <div><span style={{ color: '#666' }}>Next Maintenance:</span> {selectedDevice.nextMaintenance}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Purchase Info */}
            <div style={{ marginTop: '15px', background: '#f9fafb', padding: '15px', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Purchase Information</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div><span style={{ color: '#666' }}>Purchase Date:</span> {selectedDevice.purchaseDate}</div>
                <div><span style={{ color: '#666' }}>Purchase Price:</span> {selectedDevice.purchasePrice}</div>
                <div><span style={{ color: '#666' }}>Vendor:</span> {selectedDevice.vendor}</div>
              </div>
            </div>

            {/* Notes */}
            {selectedDevice.notes && (
              <div style={{ marginTop: '15px', background: '#f9fafb', padding: '15px', borderRadius: '8px' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>Notes</h3>
                <div style={{ fontSize: '13px', color: '#666' }}>{selectedDevice.notes}</div>
              </div>
            )}

            {/* Actions */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button style={{
                padding: '10px 20px',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Edit Device
              </button>
              <button style={{
                padding: '10px 20px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Schedule Maintenance
              </button>
              <button style={{
                padding: '10px 20px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Decommission
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Device Modal */}
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
            width: '700px',
            maxWidth: '90%',
            maxHeight: '80vh',
            overflow: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ margin: '0 0 20px 0' }}>Add New Device</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <select style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                <option>Select Company *</option>
                <option>Tech Solutions Inc.</option>
                <option>Global Enterprises</option>
                <option>Digital Systems</option>
              </select>
              <select style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                <option>Device Type *</option>
                <option>Laptop</option>
                <option>Desktop</option>
                <option>Printer</option>
                <option>Server</option>
                <option>Network</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <input type="text" placeholder="Brand *" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              <input type="text" placeholder="Model *" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <input type="text" placeholder="Serial Number *" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              <input type="text" placeholder="Asset Tag" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
            </div>

            <h3 style={{ fontSize: '16px', margin: '15px 0 10px 0' }}>Specifications</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <input type="text" placeholder="Processor" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              <input type="text" placeholder="RAM" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              <input type="text" placeholder="Storage" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              <input type="text" placeholder="Operating System" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
            </div>

            <h3 style={{ fontSize: '16px', margin: '15px 0 10px 0' }}>Warranty & AMC</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <input type="date" placeholder="Warranty Expiry" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              <select style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                <option>AMC Status</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <h3 style={{ fontSize: '16px', margin: '15px 0 10px 0' }}>Assignment</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <input type="text" placeholder="Location" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              <input type="text" placeholder="Assigned To" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
              <input type="text" placeholder="IP Address" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
            </div>

            <textarea placeholder="Additional Notes" rows={3} style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '15px' }}></textarea>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
              <button onClick={() => setShowModal(false)} style={{ padding: '10px 20px', background: '#f3f4f6', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => setShowModal(false)} style={{ padding: '10px 20px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add Device</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
