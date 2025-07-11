import { useState } from 'react';

export const InquiryModal = ({ photographer, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    eventType: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="dark:bg-gray-400 rounded-xl w-full max-w-md overflow-hidden">
         <div className="bg-white-transparent rounded-xl w-full max-w-md overflow-hidden"></div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Inquire with {photographer.name}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              &times;
            </button>
          </div>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h3 className="text-xl font-semibold">Inquiry Sent!</h3>
              <p className="mt-2 text-gray-600">
                {photographer.name} will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Event Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Event Type</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="commercial">Commercial</option>
                    <option value="event">Special Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder={`Tell ${photographer.name} about your photography needs...`}
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-6 py-3 rounded-lg font-medium ${
                  isSubmitting 
                    ? 'bg-gray-400' 
                    : 'bg-gray-600 hover:bg-gray-700'
                } text-white`}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
      </div>
    
  );
};

export default InquiryModal;