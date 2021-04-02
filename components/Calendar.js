import RCalendar from 'rc-year-calendar';
import { useCallback } from 'react';
import { google } from 'calendar-link';

import styles from './Calendar.module.css';

const Calendar = ({ data }) => {
  const onDayClick = useCallback(
    ({ events }) => {
      const [event] = events;
      if (event) {
        const url = google({
          title: event.name,
          description: 'A jugar Twilight Imperium!!',
          start: event.startDate.toISOString(),
          duration: [6, 'hour'],
        });

        window.open(url, '_blank').focus();
      }
    },
    [data]
  );

  return (
    <div>
      <h2 id="calendar">Calendario de eventos</h2>
      <div className={styles.container}>
        <RCalendar
          style="background"
          onDayClick={onDayClick}
          dataSource={data.map((data) => ({
            ...data,
            startDate: new Date(data.startDate),
            endDate: new Date(data.endDate),
          }))}
        />
      </div>
    </div>
  );
};

export default Calendar;
