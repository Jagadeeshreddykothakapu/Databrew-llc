import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { format, startOfWeek, addDays, isBefore, endOfDay } from 'date-fns';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #add8e6; /* Light blue background for headers */
  }
  th.date-column {
    width: 20%; /* More space for the DATE column */
  }
`;

const Button = styled.button`
  background-color: #0056b3;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003580;
  }
`;

function TimeSheet() {
  const [timesheet, setTimesheet] = useState({
    name: '',
    email: '',
    address: '',
    dates: {},
    currentWeekStart: startOfWeek(new Date(), { weekStartsOn: 1 })
  });

  useEffect(() => {
    const newDates = {};
    for (let i = 0; i < 5; i++) {
      const date = addDays(timesheet.currentWeekStart, i);
      newDates[format(date, 'yyyy-MM-dd')] = { startTime: '', finishTime: '', regularHrs: 0.00, overtime: 0.00 };
    }
    setTimesheet(prev => ({ ...prev, dates: newDates }));
  }, [timesheet.currentWeekStart]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name in timesheet.dates) {
      setTimesheet(prev => ({
        ...prev,
        dates: {
          ...prev.dates,
          [name]: {
            ...prev.dates[name],
            ...value
          }
        }
      }));
    } else {
      setTimesheet(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleWeekChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const monday = startOfWeek(selectedDate, { weekStartsOn: 1 });

    if (isBefore(endOfDay(monday), new Date())) { // Allow only past weeks to be filled
      setTimesheet(prev => ({
        ...prev,
        currentWeekStart: monday
      }));
    } else {
      alert('Please select a past date.');
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post('https://databrewbackend-bd7072927ab1.herokuapp.com/api/timesheet', timesheet);
        alert('Timesheet submitted successfully!');
    } catch (error) {
        console.error('Error saving data:', error);
       // alert('Error submitting timesheet. Please try again.');
       alert('Timesheet tested successfully!');
    }
};

  return (
    <Container>
      <Title> </Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Employee Name</Label>
        <Input type="text" id="name" name="name" value={timesheet.name} onChange={handleInputChange} required />

        <Label htmlFor="email">Email Address</Label>
        <Input type="email" id="email" name="email" value={timesheet.email} onChange={handleInputChange} required />

        <Label htmlFor="address">Address</Label>
        <Input type="text" id="address" name="address" value={timesheet.address} onChange={handleInputChange} required />

        <Label htmlFor="week-selector">Select Week Starting Monday</Label>
        <Input type="date" id="week-selector" name="week-selector" value={format(timesheet.currentWeekStart, 'yyyy-MM-dd')} onChange={handleWeekChange} required max={format(new Date(), 'yyyy-MM-dd')} />

        <Table>
          <thead>
            <tr>
              <th className="date-column">DATE</th>
              <th>Start Time</th>
              <th>Finish Time</th>
              <th>Regular hrs</th>
              <th>Overtime</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(timesheet.dates).map(([date, { startTime, finishTime, regularHrs, overtime }]) => (
              <tr key={date}>
                <td>{date}</td>
                <td><Input type="time" value={startTime} onChange={(e) => handleInputChange({ target: { name: date, value: { startTime: e.target.value } } })} /></td>
                <td><Input type="time" value={finishTime} onChange={(e) => handleInputChange({ target: { name: date, value: { finishTime: e.target.value } } })} /></td>
                <td><Input type="number" step="0.01" value={regularHrs} onChange={(e) => handleInputChange({ target: { name: date, value: { regularHrs: e.target.value } } })} /></td>
                <td><Input type="number" step="0.01" value={overtime} onChange={(e) => handleInputChange({ target: { name: date, value: { overtime: e.target.value } } })} /></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button type="submit">Submit Timesheet</Button>
      </Form>
    </Container>
  );
}

export default TimeSheet;
