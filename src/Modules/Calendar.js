import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ orders }) => {
  const [date, setDate] = useState(new Date());

  const ordersOnDate = orders.filter(order => {
    const expectedDeliveryDate = new Date(order.expectedDeliveryDate);
    return expectedDeliveryDate.toDateString() === date.toDateString();
  });

  return (
    <div>
      <h2>Orders Calendar View</h2>
      <div>
        <Calendar
          onChange={setDate}
          value={date}
        />
      </div>
      <div>
        <h3>Orders for {date.toDateString()}</h3>
        <ul>
          {ordersOnDate.map(order => (
            <li key={order.id}>
              Order ID: {order.id} - Customer: {order.customerName} - Expected Delivery Date: {order.expectedDeliveryDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CalendarView;
