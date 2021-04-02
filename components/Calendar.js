import RCalendar from 'rc-year-calendar';

import styles from './Calendar.module.css';

const Calendar = ({ data }) => (
  <div>
    <h2>Calendario de eventos</h2>
    <div className={styles.container}>
      <RCalendar
        style="background"
        onDayClick={({ date }) => {
          console.log(date);
        }}
        dataSource={data.map((data) => ({
          ...data,
          startDate: new Date(Date.parse(data.startDate, 'dd/MM/yyyy')),
          endDate: new Date(Date.parse(data.endDate, 'dd/MM/yyyy')),
        }))}
      />
    </div>
  </div>
);

export default Calendar;
