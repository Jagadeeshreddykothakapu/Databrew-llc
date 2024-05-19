// src/api.js
const API_URL = 'https://databrewbackend-bd7072927ab1.herokuapp.com'; // Replace with your actual Heroku app URL

export const submitTimesheet = async (timesheetData) => {
  try {
    const response = await fetch(`${API_URL}/api/timesheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(timesheetData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error submitting timesheet:', error);
    throw error;
  }
};
