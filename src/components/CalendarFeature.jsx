import React from 'react';

const CalendarFeature = () => {
  return (
    <div
      id="calendar"
      className="w-full h-full grid grid-row-2  justify-center items-center p-10"
    >
      <h1 className="lg:text-6xl md:text-4xl text-orange-600 sm:text-3xl text-2xl font-bold mt-5 p-10 flex justify-center">
        Shoes4Smiles Events
      </h1>
      <iframe
        title="calendar"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=America%2FNew_York&showTitle=0&showNav=1&title&showPrint=0&showTz=0&showCalendars=1&showTabs=1&showDate=1&src=dWZzaG9lczRzbWlsZXNAZ21haWwuY29t&color=%23039BE5"
        width="1000"
        height="700"
        style={{
          border: '0',
          borderRadius: '10px',
          boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
          margin: '5rem',
        }}
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default CalendarFeature;
