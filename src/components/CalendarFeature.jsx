import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const CalendarFeature = () => {
  const events = [
    {
      id: 1,
      title: 'Volunteering with Project Downtown',
      date: '0000-00-00 (TBA)',
      time: '0:00 AM',
      location: 'TBA',
      description: 'Serving the homeless population of Gainesville.',
    },
    {
      id: 2,
      title: 'Shoe Box Decorating',
      date: '0000-00-00 (TBA)',
      time: '0:00 AM',
      location: 'TBA',
      description: 'Decorating shoe boxes for the children and adults.',
    },
    {
      id: 3,
      title: 'Volunteering with Boys & Girls Club',
      date: '0000-00-00 (TBA)',
      time: '0:00 AM',
      location: 'TBA',
      description: 'Spending the day with the youth of Gainesville.',
    },
    {
      id: 4,
      title: 'Study Social',
      date: '0000-00-00 (TBA)',
      time: '0:00 AM',
      location: 'TBA',
      description: 'Study session with other members of the club.',
    },
  ];

  return (
    <Parallax
      translateX={['-100px', '100px']}
      id="calendar"
      className="w-full h-full grid grid-row-2 py-14 justify-center items-center "
    >
      <h1 className="lg:text-6xl md:text-4xl text-blue-500 md:px-0  text-3xl font-bold py-6 pb-4 flex justify-center">
        Shoes4Smiles Events
      </h1>
      <div className="lg:flex hidden">
        <iframe
          title="calendar"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=America%2FNew_York&showTitle=0&showNav=1&title&showPrint=0&showTz=0&showCalendars=1&showTabs=1&showDate=1&src=dWZzaG9lczRzbWlsZXNAZ21haWwuY29t&color=%23039BE5"
          width="900"
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
    </Parallax>
  );
};

export default CalendarFeature;
