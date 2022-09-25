import React from 'react';

const CalendarFeature = () => {
  const events = [
    {
      id: 1,
      title: 'Turlington Tabling',
      date: '2021-10-05 (Monday)',
      time: '6:00 PM',
      location: 'Turlington Plaza',
      description: 'Come join us for our weekly meeting!',
    },
    {
      id: 2,
      title: 'Turlington Tabling',
      date: '2021-10-05 (Monday)',
      time: '6:00 PM',
      location: 'Turlington Plaza',
      description: 'Come join us for our weekly meeting!',
    },
    {
      id: 3,
      title: 'Turlington Tabling',
      date: '2021-10-05 (Monday)',
      time: '6:00 PM',
      location: 'Turlington Plaza',
      description: 'Come join us for our weekly meeting!',
    },
    {
      id: 4,
      title: 'Turlington Tabling',
      date: '2021-10-05 (Monday)',
      time: '6:00 PM',
      location: 'Turlington Plaza',
      description: 'Come join us for our weekly meeting!',
    },
  ];

  return (
    <div
      id="calendar"
      className="w-full h-full grid grid-row-2 py-14 justify-center items-center"
    >
      <h1 className="lg:text-6xl md:text-4xl text-blue-500 md:px-0  text-3xl font-bold py-6 pb-4 flex justify-center">
        Shoes4Smiles Events
      </h1>
      <div className="lg:flex hidden">
        <iframe
          title="calendar"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=America%2FNew_York&showTitle=0&showNav=1&title&showPrint=0&showTz=0&showCalendars=1&showTabs=1&showDate=1&src=dWZzaG9lczRzbWlsZXNAZ21haWwuY29t&color=%23039BE5"
          width="1000"
          height="600"
          style={{
            border: '0',
            borderRadius: '10px',
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.8)',
            margin: '2.5rem',
          }}
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>

      <div className="md:flex lg:hidden hidden">
        <iframe
          title="calendar"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=America%2FNew_York&showTitle=0&showNav=1&title&showPrint=0&showTz=0&showCalendars=1&showTabs=1&showDate=1&src=dWZzaG9lczRzbWlsZXNAZ21haWwuY29t&color=%23039BE5"
          width="600"
          height="400"
          style={{
            border: '0',
            borderRadius: '10px',
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.8)',
            margin: '1.5rem',
          }}
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>

      <div className="flex lg:hidden md:hidden">
        <div>
          <ul className="">
            {events.map((event) => (
              <li key={event.id} className="p-2 my-3">
                <h1 className="text-xl font-bold">{event.title}</h1>
                <p>
                  <span className="font-bold">Date: </span> {event.date}
                </p>
                <p>
                  <span className="font-bold">Time: </span> {event.time}
                </p>
                <p>
                  <span className="font-bold">Location: </span> {event.location}
                </p>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarFeature;
