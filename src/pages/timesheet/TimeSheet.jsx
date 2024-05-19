// src/pages/timesheet/index.jsx
import React, { useState } from 'react';
import { submitTimesheet } from '../../api'; // Adjust the import path as necessary

function TimeSheet() {
    const [timesheet, setTimesheet] = useState({
        name: '',
        email: '',
        date: new Date().toISOString().split('T')[0],  // Default to today's date
        hours: {
            monday: 0,
            tuesday: 0,
            wednesday: 0,
            thursday: 0,
            friday: 0
        }
    });

    const handleChange = (event) => {
        if (event.target.name in timesheet.hours) {
            setTimesheet({
                ...timesheet,
                hours: {
                    ...timesheet.hours,
                    [event.target.name]: parseInt(event.target.value, 10)
                }
            });
        } else {
            setTimesheet({
                ...timesheet,
                [event.target.name]: event.target.value
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await submitTimesheet(timesheet);
            console.log('Data saved:', response.data);
            alert('Timesheet submitted successfully!');
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error submitting timesheet. Please try again.');
        }
    };

    return (
        <div className='max-w-4xl mx-auto px-4 py-8'>
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Employee Timesheet</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Employee Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={timesheet.name}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={timesheet.email}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                        Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={timesheet.date}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {Object.keys(timesheet.hours).map(day => (
                    <div key={day} className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={day}>
                            {day.charAt(0).toUpperCase() + day.slice(1)}
                        </label>
                        <input
                            type="number"
                            name={day}
                            id={day}
                            value={timesheet.hours[day]}
                            onChange={handleChange}
                            min="0"
                            max="24"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                ))}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit Timesheet
                </button>
            </form>
        </div>
    );
}

export default TimeSheet;
