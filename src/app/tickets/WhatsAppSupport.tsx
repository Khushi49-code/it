
'use client';

import { useState } from 'react';

interface TicketFormData {
  name: string;
  phone: string;
  email: string;
  issue: string;
  priority: string;
  description: string;
}

export default function WhatsAppSupport() {
  const [formData, setFormData] = useState<TicketFormData>({
    name: '',
    phone: '',
    email: '',
    issue: '',
    priority: 'Medium',
    description: ''
  });
  
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  // Generate Ticket Number
  const generateTicketNumber = () => {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `TKT-${year}${month}${day}-${random}`;
  };

  // Format WhatsApp Message
  const formatWhatsAppMessage = (data: TicketFormData, ticketId: string) => {
    const message = `🔔 *NEW SUPPORT TICKET* 🔔

━━━━━━━━━━━━━━━━━━━
📋 *TICKET DETAILS*
━━━━━━━━━━━━━━━━━━━
🆔 *Ticket ID:* ${ticketId}
📅 *Date:* ${new Date().toLocaleDateString()}
⏰ *Time:* ${new Date().toLocaleTimeString()}

━━━━━━━━━━━━━━━━━━━
👤 *CUSTOMER INFO*
━━━━━━━━━━━━━━━━━━━
📛 *Name:* ${data.name}
📞 *Phone:* ${data.phone}
📧 *Email:* ${data.email || 'Not provided'}

━━━━━━━━━━━━━━━━━━━
⚠️ *ISSUE DETAILS*
━━━━━━━━━━━━━━━━━━━
📌 *Issue:* ${data.issue}
⚡ *Priority:* ${data.priority}

━━━━━━━━━━━━━━━━━━━
📝 *DESCRIPTION*
━━━━━━━━━━━━━━━━━━━
${data.description}

━━━━━━━━━━━━━━━━━━━
✅ *Your ticket has been registered!*
🔧 *Our team will contact you soon.*

Thank you for contacting support! 🙏`;

    return encodeURIComponent(message);
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate ticket number
    const newTicketNumber = generateTicketNumber();
    setTicketNumber(newTicketNumber);
    
    // Format phone number (remove any special characters)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    
    // Create WhatsApp URL
    const message = formatWhatsAppMessage(formData, newTicketNumber);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show ticket generated message
    setTicketGenerated(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setTicketGenerated(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        issue: '',
        priority: 'Medium',
        description: ''
      });
    }, 3000);
  };

  // Handle Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '30px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '30px',
        color: 'white'
      }}>
        <div style={{ fontSize: '60px', marginBottom: '10px' }}>📱</div>
        <h1 style={{ margin: '0', fontSize: '28px' }}>WhatsApp Support</h1>
        <p style={{ margin: '10px 0 0', opacity: '0.9', fontSize: '14px' }}>
          Create ticket & chat instantly on WhatsApp
        </p>
      </div>

      {/* Success Message */}
      {ticketGenerated && (
        <div style={{
          background: '#10b981',
          color: 'white',
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '20px',
          textAlign: 'center',
          animation: 'slideDown 0.3s ease'
        }}>
          ✅ Ticket #{ticketNumber} created! WhatsApp opening...
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} style={{
        background: 'white',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
      }}>
        {/* Name */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: '600',
            fontSize: '14px',
            color: '#333'
          }}>
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '14px',
              transition: 'border-color 0.3s'
            }}
          />
        </div>

        {/* Phone */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: '600',
            fontSize: '14px',
            color: '#333'
          }}>
            WhatsApp Number (with country code) *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="e.g., 919876543210"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          />
          <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
            Format: Country code + number (without + or spaces)
          </p>
        </div>

        {/* Email (Optional) */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: '600',
            fontSize: '14px',
            color: '#333'
          }}>
            Email Address (Optional)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          />
        </div>

        {/* Issue Title */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: '600',
            fontSize: '14px',
            color: '#333'
          }}>
            Issue Title *
          </label>
          <input
            type="text"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
            placeholder="Brief description of your issue"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          />
        </div>

        {/* Priority */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: '600',
            fontSize: '14px',
            color: '#333'
          }}>
            Priority *
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '14px',
              background: 'white'
            }}
          >
            <option value="Low">🟢 Low</option>
            <option value="Medium">🟡 Medium</option>
            <option value="High">🔴 High</option>
            <option value="Critical">⚡ Critical</option>
          </select>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: '600',
            fontSize: '14px',
            color: '#333'
          }}>
            Detailed Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Please describe your issue in detail..."
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '14px',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <span style={{ fontSize: '20px' }}>📱</span>
          Create Ticket & Open WhatsApp
        </button>

        {/* Note */}
        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#666',
          marginTop: '15px'
        }}>
          ⚡ WhatsApp will open with your ticket details pre-filled
        </p>
      </form>

      {/* Style for animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: #25D366 !important;
          box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.1);
        }
      `}</style>
    </div>
  );
}
