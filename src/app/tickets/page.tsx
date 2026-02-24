'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
// WhatsAppSupport import removed

// Define TypeScript interfaces (keep all your existing interfaces)
interface Ticket {
  id: number;
  ticketId: string;
  company: string;
  companyId: number;
  contact: string;
  contactPhone: string;
  contactEmail: string;
  device: string;
  deviceId: number;
  problem: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  createdDate: string;
  createdBy: string;
  assignedTo: string;
  assignedToId: number;
  dueDate: string;
  attachments: number;
  comments: number;
  whatsappEnabled: boolean;
  resolvedDate?: string;
  resolution?: string;
}

// Define TypeScript interfaces
interface Ticket {
  id: number;
  ticketId: string;
  company: string;
  companyId: number;
  contact: string;
  contactPhone: string;
  contactEmail: string;
  device: string;
  deviceId: number;
  problem: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  createdDate: string;
  createdBy: string;
  assignedTo: string;
  assignedToId: number;
  dueDate: string;
  attachments: number;
  comments: number;
  whatsappEnabled: boolean;
  resolvedDate?: string;
  resolution?: string;
}

export default function TicketsPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [showModal, setShowModal] = useState(false);
<<<<<<< HEAD
=======
  // Removed: const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
>>>>>>> d0206b8 (Updated devices & tickets pages and added WhatsAppSupport component)
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusAction, setStatusAction] = useState('');
  const [statusNote, setStatusNote] = useState('');
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [whatsappSent, setWhatsappSent] = useState(false);

  // New state for smart category filtering
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [companySearch, setCompanySearch] = useState('');
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<string[]>([]);

  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/companies', icon: '🏢', label: 'Companies' },
    { path: '/devices', icon: '💻', label: 'Devices' },
    { path: '/tickets', icon: '🎫', label: 'Tickets' },
    { path: '/reports', icon: '📈', label: 'Reports' },
    { path: '/settings', icon: '⚙️', label: 'Settings' },
  ];

  // Company data for search
  const companies = [
    { id: 1, name: 'Tech Solutions Inc.', location: 'Mumbai', contact: 'Rahul Mehta' },
    { id: 2, name: 'Global Enterprises', location: 'Delhi', contact: 'Priya Sharma' },
    { id: 3, name: 'Digital Systems', location: 'Bangalore', contact: 'Amit Kumar' },
    { id: 4, name: 'Innovation Labs', location: 'Pune', contact: 'Neha Gupta' },
    { id: 5, name: 'Creative Studios', location: 'Hyderabad', contact: 'Vikram Singh' },
    { id: 6, name: 'Alpha Technologies', location: 'Chennai', contact: 'Sneha Reddy' },
  ];

  // Product catalog by category
  const productCatalog: { [key: string]: string[] } = {
    'Laptop': [
      'Dell Latitude 5420',
      'Dell XPS 13',
      'HP EliteBook 840',
      'HP ProBook 450',
      'Lenovo ThinkPad X1',
      'Lenovo IdeaPad 5',
      'Apple MacBook Air M1',
      'Apple MacBook Pro 14"',
      'Asus ZenBook 14',
      'Acer Swift 3'
    ],
    'Desktop': [
      'Dell OptiPlex 7080',
      'Dell XPS Desktop',
      'HP EliteDesk 800',
      'HP Pavilion Desktop',
      'Lenovo ThinkCentre M70s',
      'Lenovo IdeaCentre 5',
      'Apple Mac Mini',
      'Apple iMac 24"',
      'Asus ExpertCenter',
      'Custom Built PC'
    ],
    'Printer': [
      'HP LaserJet Pro M15w',
      'HP OfficeJet Pro 9015',
      'Canon imageCLASS MF743Cdw',
      'Canon PIXMA TS8320',
      'Epson WorkForce Pro WF-3720',
      'Epson EcoTank ET-4760',
      'Brother HL-L2350DW',
      'Brother MFC-L8900CDW',
      'Xerox VersaLink B405',
      'Xerox WorkCentre 6515'
    ],
    'Server': [
      'Dell PowerEdge R740',
      'Dell PowerEdge T340',
      'HP ProLiant DL380',
      'HP ProLiant ML350',
      'Lenovo ThinkSystem SR650',
      'Lenovo ThinkSystem ST550',
      'Cisco UCS C220',
      'Cisco UCS C240',
      'Synology RS1221+',
      'QNAP TS-873AeU'
    ],
    'Network': [
      'Cisco Catalyst 9200',
      'Cisco Meraki MX68',
      'Juniper EX2300',
      'Juniper SRX300',
      'Ubiquiti UniFi Dream Machine',
      'Ubiquiti EdgeRouter 12',
      'Netgear GS724T',
      'Netgear Orbi Pro',
      'TP-Link Omada ER7206',
      'TP-Link TL-SG3428X'
    ],
    'Mobile': [
      'iPhone 14 Pro',
      'iPhone 13',
      'Samsung Galaxy S23',
      'Samsung Galaxy Tab S8',
      'Google Pixel 7',
      'OnePlus 11',
      'Xiaomi Mi 11',
      'iPad Pro 12.9"',
      'iPad Air',
      'Samsung Galaxy Book'
    ],
    'Other': [
      'Projector',
      'Scanner',
      'Router',
      'Switch',
      'Firewall',
      'UPS',
      'Monitor',
      'Keyboard',
      'Mouse',
      'Headset'
    ]
  };

  // Tickets data with state management - Properly typed
  const [tickets, setTickets] = useState<Ticket[]>([
    { 
      id: 1,
      ticketId: 'TKT-2024-001',
      company: 'Tech Solutions Inc.',
      companyId: 1,
      contact: 'Rahul Mehta',
      contactPhone: '+919876543210',
      contactEmail: 'rahul@techsolutions.com',
      device: 'Dell Latitude 5420',
      deviceId: 1,
      problem: 'Printer not working - Paper jam error',
      description: 'Printer showing paper jam error even after clearing all paper. Tried restarting multiple times.',
      category: 'Hardware',
      priority: 'High',
      status: 'Open',
      createdDate: '2024-02-23 09:30 AM',
      createdBy: 'Rahul Mehta',
      assignedTo: 'Raj Patel',
      assignedToId: 101,
      dueDate: '2024-02-24',
      attachments: 2,
      comments: 3,
      whatsappEnabled: true
    },
    { 
      id: 2,
      ticketId: 'TKT-2024-002',
      company: 'Global Enterprises',
      companyId: 2,
      contact: 'Priya Sharma',
      contactPhone: '+919876543212',
      contactEmail: 'priya@global.com',
      device: 'HP LaserJet Pro M15w',
      deviceId: 2,
      problem: 'Laptop slow performance',
      description: 'Laptop takes too long to boot and applications are running slow.',
      category: 'Performance',
      priority: 'Medium',
      status: 'In Progress',
      createdDate: '2024-02-22 02:15 PM',
      createdBy: 'Priya Sharma',
      assignedTo: 'Priya Sharma',
      assignedToId: 102,
      dueDate: '2024-02-25',
      attachments: 1,
      comments: 5,
      whatsappEnabled: true
    },
    { 
      id: 3,
      ticketId: 'TKT-2024-003',
      company: 'Digital Systems',
      companyId: 3,
      contact: 'Amit Kumar',
      contactPhone: '+919876543214',
      contactEmail: 'amit@digitalsystems.com',
      device: 'Lenovo ThinkCentre M70s',
      deviceId: 3,
      problem: 'Network connectivity issue',
      description: 'Unable to connect to company network. WiFi and Ethernet both not working.',
      category: 'Network',
      priority: 'High',
      status: 'Open',
      createdDate: '2024-02-23 11:00 AM',
      createdBy: 'Amit Kumar',
      assignedTo: 'Amit Kumar',
      assignedToId: 103,
      dueDate: '2024-02-24',
      attachments: 0,
      comments: 2,
      whatsappEnabled: true
    },
    { 
      id: 4,
      ticketId: 'TKT-2024-004',
      company: 'Innovation Labs',
      companyId: 4,
      contact: 'Neha Gupta',
      contactPhone: '+919876543216',
      contactEmail: 'neha@innovationlabs.com',
      device: 'HP ProLiant DL380',
      deviceId: 4,
      problem: 'Software installation failed',
      description: 'Unable to install Adobe Creative Suite. Getting error code 127.',
      category: 'Software',
      priority: 'Low',
      status: 'Closed',
      createdDate: '2024-02-21 03:30 PM',
      createdBy: 'Neha Gupta',
      assignedTo: 'Vikram Singh',
      assignedToId: 104,
      dueDate: '2024-02-23',
      resolvedDate: '2024-02-22 11:45 AM',
      resolution: 'Reinstalled with admin privileges. Working now.',
      attachments: 3,
      comments: 4,
      whatsappEnabled: true
    },
    { 
      id: 5,
      ticketId: 'TKT-2024-005',
      company: 'Creative Studios',
      companyId: 5,
      contact: 'Vikram Singh',
      contactPhone: '+919876543218',
      contactEmail: 'vikram@creativestudios.com',
      device: 'MacBook Pro 14"',
      deviceId: 5,
      problem: 'Email configuration problem',
      description: 'Unable to configure company email on Outlook. Getting authentication error.',
      category: 'Email',
      priority: 'Medium',
      status: 'In Progress',
      createdDate: '2024-02-22 10:00 AM',
      createdBy: 'Vikram Singh',
      assignedTo: 'Neha Gupta',
      assignedToId: 105,
      dueDate: '2024-02-24',
      attachments: 1,
      comments: 3,
      whatsappEnabled: true
    },
    { 
      id: 6,
      ticketId: 'TKT-2024-006',
      company: 'Alpha Technologies',
      companyId: 6,
      contact: 'Sneha Reddy',
      contactPhone: '+919876543220',
      contactEmail: 'sneha@alphatech.com',
      device: 'Cisco Catalyst 9200',
      deviceId: 6,
      problem: 'VPN connection drops frequently',
      description: 'VPN connection drops every 10-15 minutes. Working from home issue.',
      category: 'Network',
      priority: 'High',
      status: 'Open',
      createdDate: '2024-02-23 01:00 PM',
      createdBy: 'Sneha Reddy',
      assignedTo: 'Raj Patel',
      assignedToId: 101,
      dueDate: '2024-02-24',
      attachments: 0,
      comments: 1,
      whatsappEnabled: true
    },
  ]);

  // Filter companies based on search
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(companySearch.toLowerCase())
  );

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedProduct('');
    if (category && productCatalog[category]) {
      setFilteredProducts(productCatalog[category]);
    } else {
      setFilteredProducts([]);
    }
  };

  // Handle company selection
  const handleCompanySelect = (company: any) => {
    setCompanySearch(company.name);
    setShowCompanyDropdown(false);
  };

<<<<<<< HEAD
  // Function to send WhatsApp message
  const sendWhatsAppMessage = (ticket: Ticket, message: string) => {
    console.log(`Sending WhatsApp to ${ticket.contactPhone}: ${message}`);
=======
  // Function to send WhatsApp message (using click-to-chat)
  const sendWhatsAppMessage = (phone: string, message: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
>>>>>>> d0206b8 (Updated devices & tickets pages and added WhatsAppSupport component)
    setWhatsappSent(true);
    setTimeout(() => {
      setWhatsappSent(false);
      setShowWhatsAppModal(false);
      setWhatsappMessage('');
    }, 2000);
  };

  // Function to create new ticket with WhatsApp notification
  const createNewTicket = (formData: any) => {
    const newId = tickets.length + 1;
    const newTicketId = `TKT-2024-${newId.toString().padStart(3, '0')}`;
    
    const newTicket: Ticket = {
      id: newId,
      ticketId: newTicketId,
      company: formData.company,
      companyId: 1,
      contact: formData.contactName,
      contactPhone: formData.contactPhone,
      contactEmail: formData.contactEmail,
      device: formData.device,
      deviceId: 1,
      problem: formData.problem,
      description: formData.description,
      category: formData.category,
      priority: formData.priority,
      status: 'Open',
      createdDate: new Date().toLocaleString(),
      createdBy: 'Admin',
      assignedTo: formData.assignedTo,
      assignedToId: 101,
      dueDate: new Date(Date.now() + 86400000).toLocaleDateString(),
      attachments: 0,
      comments: 0,
      whatsappEnabled: true
    };

    setTickets([...tickets, newTicket]);

    const whatsappMessage = `🔔 *NEW TICKET CREATED*\n\n` +
      `Ticket ID: ${newTicketId}\n` +
      `Problem: ${formData.problem}\n` +
      `Priority: ${formData.priority}\n` +
      `Status: Open\n\n` +
      `Your ticket has been created. Our technician will contact you soon.`;

    sendWhatsAppMessage(formData.contactPhone, whatsappMessage);
    setShowModal(false);
  };

  // Function to update ticket status with WhatsApp notification - FIXED TYPE ERROR HERE
  const updateTicketStatus = (ticketId: number, newStatus: string, note: string = '') => {
    const updatedTicket = tickets.find(t => t.id === ticketId);
    
    setTickets(tickets.map((ticket: Ticket): Ticket => {
      if (ticket.id === ticketId) {
        if (newStatus === 'Closed') {
<<<<<<< HEAD
          // For closed tickets, add resolvedDate and resolution
=======
>>>>>>> d0206b8 (Updated devices & tickets pages and added WhatsAppSupport component)
          return {
            ...ticket,
            status: newStatus,
            resolvedDate: new Date().toLocaleString(),
            resolution: note || 'Issue resolved'
          };
        } else {
<<<<<<< HEAD
          // For other status changes, don't add resolvedDate/resolution
=======
>>>>>>> d0206b8 (Updated devices & tickets pages and added WhatsAppSupport component)
          return {
            ...ticket,
            status: newStatus
          };
        }
      }
      return ticket;
    }));

    if (updatedTicket) {
      let statusMessage = '';
      
      if (newStatus === 'In Progress') {
        statusMessage = `🔄 *TICKET STATUS UPDATE*\n\n` +
          `Ticket ID: ${updatedTicket.ticketId}\n` +
          `Status: In Progress\n` +
          `Note: ${note || 'Technician has started working on your ticket.'}`;
      } else if (newStatus === 'Closed') {
        statusMessage = `✅ *TICKET RESOLVED*\n\n` +
          `Ticket ID: ${updatedTicket.ticketId}\n` +
          `Status: Closed\n` +
<<<<<<< HEAD
          `Resolution: ${note || 'Issue resolved'}\n\n` +
          `Thank you for your patience. Please let us know if you need further assistance.`;
=======
          `Resolution: ${note || 'Issue resolved'}`;
>>>>>>> d0206b8 (Updated devices & tickets pages and added WhatsAppSupport component)
      }

      if (statusMessage) {
        sendWhatsAppMessage(updatedTicket.contactPhone, statusMessage);
      }
    }

    setShowStatusModal(false);
    setStatusNote('');
  };

  // Filter tickets
  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.ticketId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || ticket.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Stats
  const stats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'Open').length,
    inProgress: tickets.filter(t => t.status === 'In Progress').length,
    closed: tickets.filter(t => t.status === 'Closed').length,
    highPriority: tickets.filter(t => t.priority === 'High').length,
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Open': return { bg: '#fef3c7', color: '#92400e' };
      case 'In Progress': return { bg: '#dbeafe', color: '#1e40af' };
      case 'Closed': return { bg: '#d1fae5', color: '#166534' };
      default: return { bg: '#f3f4f6', color: '#6b7280' };
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'High': return { bg: '#fee2e2', color: '#991b1b' };
      case 'Medium': return { bg: '#fef3c7', color: '#92400e' };
      case 'Low': return { bg: '#d1fae5', color: '#166534' };
      default: return { bg: '#f3f4f6', color: '#6b7280' };
    }
  };

  const handleStatusAction = (ticket: Ticket, action: string) => {
    setSelectedTicket(ticket);
    setStatusAction(action);
    setShowStatusModal(true);
  };

  const handleSendWhatsApp = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setWhatsappMessage(`Ticket ${ticket.ticketId} update: Your ticket is ${ticket.status}`);
    setShowWhatsAppModal(true);
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
                background: item.path === '/tickets' ? '#334155' : 'transparent',
                borderLeft: item.path === '/tickets' ? '4px solid #3b82f6' : '4px solid transparent'
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
          <h1 style={{ margin: 0, fontSize: '24px', color: '#1f2937' }}>Tickets</h1>
          
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
                background: '#25D366',
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
              <span>+</span> New Ticket
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '30px' }}>
          {/* Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3b82f6' }}>{stats.total}</div>
              <div style={{ color: '#666' }}>Total Tickets</div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#f59e0b' }}>{stats.open}</div>
              <div style={{ color: '#666' }}>Open</div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3b82f6' }}>{stats.inProgress}</div>
              <div style={{ color: '#666' }}>In Progress</div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981' }}>{stats.closed}</div>
              <div style={{ color: '#666' }}>Closed</div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#ef4444' }}>{stats.highPriority}</div>
              <div style={{ color: '#666' }}>High Priority</div>
            </div>
          </div>

          {/* WhatsApp Integration Status */}
          <div style={{
            background: '#e8f5e9',
            padding: '15px 20px',
            borderRadius: '10px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            border: '1px solid #25D366'
          }}>
            <span style={{ fontSize: '24px' }}>📱</span>
            <div style={{ flex: 1 }}>
              <span style={{ fontWeight: 'bold', color: '#075e54' }}>WhatsApp Integration Active</span>
              <span style={{ marginLeft: '10px', fontSize: '13px', color: '#128C7E' }}>
                Click-to-Chat enabled - No API required
              </span>
            </div>
            <span style={{ color: '#25D366', fontWeight: 'bold' }}>✓ Connected</span>
          </div>

          {/* Search and Filters */}
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '30px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '15px' }}>
              <input
                type="text"
                placeholder="Search tickets by ID, company, problem..."
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
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{
                  padding: '12px 16px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  background: 'white'
                }}
              >
                <option value="all">All Status</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
              </select>
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                style={{
                  padding: '12px 16px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  background: 'white'
                }}
              >
                <option value="all">All Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* Tickets Table */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            overflow: 'auto'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '1300px' }}>
              <thead>
                <tr style={{ background: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
                  <th style={{ padding: '15px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280' }}>Ticket ID</th>
                  <th style={{ padding: '15px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280' }}>Company</th>
                  <th style={{ padding: '15px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280' }}>Contact</th>
                  <th style={{ padding: '15px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280' }}>Problem</th>
                  <th style={{ padding: '15px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280' }}>Status</th>
                  <th style={{ padding: '15px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280' }}>Priority</th>
                  <th style={{ padding: '15px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280' }}>WhatsApp</th>
                  <th style={{ padding: '15px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.map((ticket) => {
                  const statusStyle = getStatusColor(ticket.status);
                  const priorityStyle = getPriorityColor(ticket.priority);
                  
                  return (
                    <tr 
                      key={ticket.id} 
                      style={{ borderBottom: '1px solid #f0f0f0' }}
                    >
                      <td style={{ padding: '15px', fontSize: '13px', fontWeight: '500', color: '#3b82f6' }}>{ticket.ticketId}</td>
                      <td style={{ padding: '15px', fontSize: '13px' }}>{ticket.company}</td>
                      <td style={{ padding: '15px', fontSize: '12px' }}>
                        <div>{ticket.contact}</div>
                        <div style={{ fontSize: '11px', color: '#666' }}>{ticket.contactPhone}</div>
                      </td>
                      <td style={{ padding: '15px', fontSize: '13px', maxWidth: '200px' }}>
                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {ticket.problem}
                        </div>
                      </td>
                      <td style={{ padding: '15px' }}>
                        <span style={{
                          background: statusStyle.bg,
                          color: statusStyle.color,
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '500'
                        }}>
                          {ticket.status}
                        </span>
                      </td>
                      <td style={{ padding: '15px' }}>
                        <span style={{
                          background: priorityStyle.bg,
                          color: priorityStyle.color,
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '500'
                        }}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td style={{ padding: '15px' }}>
                        <button
                          onClick={() => handleSendWhatsApp(ticket)}
                          style={{
                            background: '#25D366',
                            color: 'white',
                            border: 'none',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            fontSize: '11px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px'
                          }}
                        >
                          <span>📱</span> WhatsApp
                        </button>
                      </td>
                      <td style={{ padding: '15px' }}>
                        <div style={{ display: 'flex', gap: '5px' }}>
                          <button
                            onClick={() => setSelectedTicket(ticket)}
                            style={{
                              background: '#3b82f6',
                              color: 'white',
                              border: 'none',
                              padding: '5px 10px',
                              borderRadius: '4px',
                              fontSize: '11px',
                              cursor: 'pointer'
                            }}
                          >
                            View
                          </button>
                          {ticket.status !== 'In Progress' && ticket.status !== 'Closed' && (
                            <button
                              onClick={() => handleStatusAction(ticket, 'In Progress')}
                              style={{
                                background: '#f59e0b',
                                color: 'white',
                                border: 'none',
                                padding: '5px 10px',
                                borderRadius: '4px',
                                fontSize: '11px',
                                cursor: 'pointer'
                              }}
                            >
                              Start
                            </button>
                          )}
                          {ticket.status !== 'Closed' && (
                            <button
                              onClick={() => handleStatusAction(ticket, 'Closed')}
                              style={{
                                background: '#10b981',
                                color: 'white',
                                border: 'none',
                                padding: '5px 10px',
                                borderRadius: '4px',
                                fontSize: '11px',
                                cursor: 'pointer'
                              }}
                            >
                              Close
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {filteredTickets.length === 0 && (
              <div style={{ textAlign: 'center', padding: '50px', color: '#666' }}>
                No tickets found matching your filters.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* WhatsApp Message Modal */}
      {showWhatsAppModal && selectedTicket && (
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
        }} onClick={() => setShowWhatsAppModal(false)}>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '12px',
            width: '500px',
            maxWidth: '90%'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{ fontSize: '32px' }}>📱</span>
              <h2 style={{ margin: 0 }}>Send WhatsApp Message</h2>
            </div>
            
            <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
              <div><strong>To:</strong> {selectedTicket.contact}</div>
              <div><strong>Phone:</strong> {selectedTicket.contactPhone}</div>
              <div><strong>Ticket:</strong> {selectedTicket.ticketId}</div>
            </div>

            <textarea
              value={whatsappMessage}
              onChange={(e) => setWhatsappMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={5}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                marginBottom: '20px'
              }}
            />

            {whatsappSent && (
              <div style={{
                background: '#d1fae5',
                color: '#166534',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>✅</span>
                <span>WhatsApp opened with your message!</span>
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowWhatsAppModal(false)}
                style={{
                  padding: '10px 20px',
                  background: '#f3f4f6',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => sendWhatsAppMessage(selectedTicket.contactPhone, whatsappMessage)}
                style={{
                  padding: '10px 20px',
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span>📤</span> Open WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Status Update Modal */}
      {showStatusModal && selectedTicket && (
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
        }} onClick={() => setShowStatusModal(false)}>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '12px',
            width: '500px',
            maxWidth: '90%'
          }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ margin: '0 0 20px 0' }}>
              {statusAction === 'Closed' ? 'Close Ticket' : 'Mark In Progress'}
            </h2>
            
            <p style={{ marginBottom: '15px' }}>
              <strong>Ticket:</strong> {selectedTicket.ticketId}<br />
              <strong>Problem:</strong> {selectedTicket.problem}
            </p>

            {statusAction === 'Closed' && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Resolution Notes *</label>
                  <textarea
                    value={statusNote}
                    onChange={(e) => setStatusNote(e.target.value)}
                    placeholder="Describe how the issue was resolved..."
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '13px'
                    }}
                  />
                </div>
                <div style={{ background: '#f0f9ff', padding: '12px', borderRadius: '8px', marginBottom: '15px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" defaultChecked />
                    <span>Send WhatsApp notification to customer</span>
                  </label>
                </div>
              </>
            )}

            {statusAction === 'In Progress' && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Update Note (Optional)</label>
                  <textarea
                    value={statusNote}
                    onChange={(e) => setStatusNote(e.target.value)}
                    placeholder="Add a note about progress..."
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '13px'
                    }}
                  />
                </div>
                <div style={{ background: '#f0f9ff', padding: '12px', borderRadius: '8px', marginBottom: '15px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" defaultChecked />
                    <span>Send WhatsApp notification to customer</span>
                  </label>
                </div>
              </>
            )}

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowStatusModal(false)}
                style={{
                  padding: '10px 20px',
                  background: '#f3f4f6',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => updateTicketStatus(selectedTicket.id, statusAction, statusNote)}
                style={{
                  padding: '10px 20px',
                  background: statusAction === 'Closed' ? '#10b981' : '#f59e0b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                {statusAction === 'Closed' ? 'Close Ticket' : 'Start Progress'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Ticket Modal */}
      {selectedTicket && !showStatusModal && !showWhatsAppModal && (
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
        }} onClick={() => setSelectedTicket(null)}>
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
              <h2 style={{ margin: 0, fontSize: '20px' }}>Ticket {selectedTicket.ticketId}</h2>
              <button onClick={() => setSelectedTicket(null)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>

            {/* Status Bar */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{
                background: getStatusColor(selectedTicket.status).bg,
                color: getStatusColor(selectedTicket.status).color,
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                {selectedTicket.status}
              </span>
              <span style={{
                background: getPriorityColor(selectedTicket.priority).bg,
                color: getPriorityColor(selectedTicket.priority).color,
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                {selectedTicket.priority} Priority
              </span>
              {selectedTicket.whatsappEnabled && (
                <span style={{
                  background: '#25D36620',
                  color: '#075e54',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <span>📱</span> WhatsApp Enabled
                </span>
              )}
            </div>

            {/* Customer Contact Info with WhatsApp */}
            <div style={{
              background: '#f0f9ff',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '20px',
              border: '1px solid #25D366',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Customer Contact</div>
                <div style={{ fontSize: '13px' }}>📞 {selectedTicket.contactPhone}</div>
                <div style={{ fontSize: '13px' }}>📧 {selectedTicket.contactEmail}</div>
              </div>
              <button
                onClick={() => handleSendWhatsApp(selectedTicket)}
                style={{
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '13px'
                }}
              >
                <span>📱</span> Send WhatsApp
              </button>
            </div>

            {/* Ticket Details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              {/* Left Column */}
              <div>
                <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Company Information</h3>
                  <div style={{ marginBottom: '8px' }}><strong>{selectedTicket.company}</strong></div>
                  <div style={{ fontSize: '13px', marginBottom: '5px' }}>Contact: {selectedTicket.contact}</div>
                </div>

                <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Device Information</h3>
                  <div style={{ fontSize: '13px', marginBottom: '5px' }}><strong>Device:</strong> {selectedTicket.device}</div>
                  <div style={{ fontSize: '13px' }}><strong>Category:</strong> {selectedTicket.category}</div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Assignment</h3>
                  <div style={{ fontSize: '13px', marginBottom: '5px' }}><strong>Assigned To:</strong> {selectedTicket.assignedTo}</div>
                  <div style={{ fontSize: '13px', marginBottom: '5px' }}><strong>Created By:</strong> {selectedTicket.createdBy}</div>
                  <div style={{ fontSize: '13px' }}><strong>Created:</strong> {selectedTicket.createdDate}</div>
                </div>

                <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Dates</h3>
                  <div style={{ fontSize: '13px', marginBottom: '5px' }}><strong>Due Date:</strong> {selectedTicket.dueDate}</div>
                  {selectedTicket.resolvedDate && (
                    <div style={{ fontSize: '13px' }}><strong>Resolved:</strong> {selectedTicket.resolvedDate}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Problem Description */}
            <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Problem Description</h3>
              <div style={{ fontSize: '13px', lineHeight: '1.6' }}>{selectedTicket.description}</div>
            </div>

            {/* Resolution (if closed) */}
            {selectedTicket.resolution && (
              <div style={{ background: '#d1fae5', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#166534' }}>Resolution</h3>
                <div style={{ fontSize: '13px', color: '#166534' }}>{selectedTicket.resolution}</div>
              </div>
            )}

            {/* Attachments & Comments */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#f3f4f6', padding: '5px 10px', borderRadius: '20px' }}>
                <span>📎</span>
                <span style={{ fontSize: '12px' }}>{selectedTicket.attachments} Attachments</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#f3f4f6', padding: '5px 10px', borderRadius: '20px' }}>
                <span>💬</span>
                <span style={{ fontSize: '12px' }}>{selectedTicket.comments} Comments</span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', borderTop: '1px solid #e5e7eb', paddingTop: '20px', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleSendWhatsApp(selectedTicket)}
                style={{
                  padding: '10px 20px',
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span>📱</span> WhatsApp Customer
              </button>
              {selectedTicket.status !== 'In Progress' && selectedTicket.status !== 'Closed' && (
                <button
                  onClick={() => {
                    setShowStatusModal(true);
                    setStatusAction('In Progress');
                  }}
                  style={{
                    padding: '10px 20px',
                    background: '#f59e0b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Start Progress
                </button>
              )}
              {selectedTicket.status !== 'Closed' && (
                <button
                  onClick={() => {
                    setShowStatusModal(true);
                    setStatusAction('Closed');
                  }}
                  style={{
                    padding: '10px 20px',
                    background: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Close Ticket
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add Ticket Modal - Updated with Smart Category & Product Filtering */}
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
            width: '800px',
            maxWidth: '90%',
            maxHeight: '80vh',
            overflow: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ margin: '0 0 20px 0' }}>Create New Ticket</h2>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = {
                company: (e.target as any).company.value,
                contactName: (e.target as any).contactName.value,
                contactPhone: (e.target as any).contactPhone.value,
                contactEmail: (e.target as any).contactEmail.value,
                device: (e.target as any).device.value,
                problem: (e.target as any).problem.value,
                description: (e.target as any).description.value,
                category: (e.target as any).category.value,
                priority: (e.target as any).priority.value,
                assignedTo: (e.target as any).assignedTo.value
              };
              createNewTicket(formData);
            }}>
              <div style={{ marginBottom: '15px' }}>
                {/* Company Search with Dropdown */}
                <div style={{ position: 'relative', marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '13px' }}>Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Type to search company..."
                    value={companySearch}
                    onChange={(e) => {
                      setCompanySearch(e.target.value);
                      setShowCompanyDropdown(true);
                    }}
                    onFocus={() => setShowCompanyDropdown(true)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px'
                    }}
                    required
                  />
                  {showCompanyDropdown && companySearch && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      right: 0,
                      background: 'white',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      maxHeight: '200px',
                      overflow: 'auto',
                      zIndex: 1000,
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}>
                      {filteredCompanies.map(company => (
                        <div
                          key={company.id}
                          onClick={() => {
                            handleCompanySelect(company);
                            (document.querySelector('input[name="company"]') as HTMLInputElement).value = company.name;
                            setShowCompanyDropdown(false);
                          }}
                          style={{
                            padding: '12px',
                            cursor: 'pointer',
                            borderBottom: '1px solid #f0f0f0'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                          onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                        >
                          <div style={{ fontWeight: '500' }}>{company.name}</div>
                          <div style={{ fontSize: '11px', color: '#666' }}>{company.location} - {company.contact}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <input 
                    type="text" 
                    name="contactName"
                    placeholder="Contact Person *" 
                    required
                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                  />
                  <input 
                    type="text" 
                    name="contactPhone"
                    placeholder="Phone Number *" 
                    required
                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                  />
                </div>

                <input 
                  type="email" 
                  name="contactEmail"
                  placeholder="Email Address *" 
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '15px' }}
                />

                {/* Category Selection */}
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '13px' }}>Device Category *</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                    {Object.keys(productCatalog).map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          handleCategoryChange(category);
                          (document.querySelector('select[name="category"]') as HTMLSelectElement).value = category;
                        }}
                        style={{
                          padding: '8px',
                          background: selectedCategory === category ? '#3b82f6' : '#f3f4f6',
                          color: selectedCategory === category ? 'white' : '#666',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '12px'
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  <select name="category" required style={{ display: 'none' }}>
                    <option value="">Select Category</option>
                    {Object.keys(productCatalog).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Product Selection - Shows only products from selected category */}
                {selectedCategory && (
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '13px' }}>Select Device/Product *</label>
                    <select 
                      name="device" 
                      required 
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '10px', 
                        border: '1px solid #ddd', 
                        borderRadius: '5px', 
                        fontSize: '14px',
                        background: 'white'
                      }}
                    >
                      <option value="">Select {selectedCategory}</option>
                      {filteredProducts.map((product) => (
                        <option key={product} value={product}>{product}</option>
                      ))}
                    </select>
                  </div>
                )}

                <input 
                  type="text" 
                  name="problem"
                  placeholder="Problem Title *" 
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '15px' }}
                />

                <textarea 
                  name="description"
                  placeholder="Problem Description *" 
                  rows={4}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '15px' }}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <select name="priority" required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                    <option value="">Priority *</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>

                  <select name="assignedTo" required style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                    <option value="">Assign Technician *</option>
                    <option value="Raj Patel">Raj Patel</option>
                    <option value="Priya Sharma">Priya Sharma</option>
                    <option value="Amit Kumar">Amit Kumar</option>
                    <option value="Neha Gupta">Neha Gupta</option>
                  </select>
                </div>

                <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" defaultChecked />
                    <span>Send WhatsApp notification to customer when ticket is created</span>
                  </label>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ padding: '10px 20px', background: '#f3f4f6', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '10px 20px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Create Ticket & Notify</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
