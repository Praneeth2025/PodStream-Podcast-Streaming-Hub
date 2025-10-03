import React, { useState } from 'react';
import './reservations.css';

const Reservations = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        persons: '',
        date: '',
        time: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const isFormValid = () => {
        return formData.name && formData.phone && formData.persons && formData.date && formData.time;
    };

    const handleBookingSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            alert('Please fill out all fields');
            return;
        }

        setLoading(true);

        // Create a formatted string from the form data
        const bookingString = `
            Name: ${formData.name}
            Phone: ${formData.phone}
            Persons: ${formData.persons}
            Date: ${formData.date}
            Time: ${formData.time}
            Message: ${formData.message}
        `;

        try {
            const response = await fetch(`${window.location.origin}/api/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ bookingDetails: bookingString }), // Send the formatted string
            });

            if (!response.ok) {
                const errorData = await response.json(); 
                throw new Error(errorData.message || 'Failed to send booking request');
            }

            const result = await response.json(); // Get JSON response
            alert(result.message); // Show response message
        } catch (error) {
            console.error('Error:', error.message);
            alert(`Booking request failed: ${error.message}`);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div id='Reservations'>
            <div className='reservations_session'>
                <div className="mid">
                    <h2 className='reservations_h2'>Online Reservations</h2>
                    <p className='booking_middle'>
                        Booking request <span><a href="tel:7396425771" className='green'>+91-7396425771</a></span><br />
                        or<br /> fill out the order form
                    </p>
                </div>
                <form onSubmit={handleBookingSubmit}>
                    <div className="combine">
                        <input type="text" name="name" placeholder='Your Name' className='inputs_name' value={formData.name} onChange={handleChange} />
                        <input type="number" name="phone" placeholder='Phone No.' className='inputs_number' value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="combine">
                        <input type="number" name="persons" placeholder='Persons' className='inputs_persons' value={formData.persons} onChange={handleChange} />
                        <input type="date" name="date" className='inputs_date' value={formData.date} onChange={handleChange} />
                        <input type="time" name="time" className='inputs_time' value={formData.time} onChange={handleChange} />
                    </div>
                    <div className="combine">
                        <input type='text' name="message" placeholder='Message' className='inputs_message' value={formData.message} onChange={handleChange} />
                    </div>
                    <div className="combine">
                        <button type='submit' className='book_table' disabled={loading || !isFormValid()}>
                            {loading ? 'Booking...' : 'BOOK A TABLE'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Reservations;
