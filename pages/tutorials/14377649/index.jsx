import styles from './styles.module.scss';
import { createMachine } from '@xstate/fsm';
import { useReducer } from 'react';

const machine = createMachine({
  initial: 'selectDateTime',
  states: {
    selectDateTime: {
      on: {
        NEXT: 'information',
      },
    },
    information: {
      on: {
        NEXT: 'confirmation',
        BACK: 'selectDateTime',
      },
    },
    confirmation: {},
  },
});

// https://dribbble.com/shots/14377649-Schedule-Demo-Exploration
function App() {
  const [state, dispatch] = useReducer(
    machine.transition,
    machine.initialState
  );

  console.log(state);

  return (
    <main className={styles.app}>
      <div
        className={styles.layer}
        data-layer="schedule"
        hidden={state.matches('confirmation')}
      >
        <div className={styles.left}>
          <div>
            <div>Walkthrough</div>
            <h1>Schedule a demo</h1>
            <div>10-20 min</div>
          </div>
          <div className={styles.walkthroughInfo}>
            <label className={styles.field}>
              <div className={styles.label}>Date</div>
              <div>25 November 2020</div>
            </label>
            <label className={styles.field}>
              <div className={styles.label}>Time</div>
              <div>
                <time>14:00 - 14:15</time>
                <small>(GMT +1)</small>
              </div>
            </label>
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={styles.layer}
            data-layer="selectDateTime"
            hidden={!state.matches('selectDateTime')}
          >
            <div className={styles.selectDate}>
              <div>Select a Date &amp; Time</div>
              <div className={styles.calendar}>
                <h2>November 2020</h2>
                <div className={styles.arrows}>
                  <button>{'<'}</button>
                  <button>{'>'}</button>
                </div>
                <div className={styles.days}>
                  <div className={styles.day}>Sun</div>
                  <div className={styles.day}>Mon</div>
                  <div className={styles.day}>Tue</div>
                  <div className={styles.day}>Wed</div>
                  <div className={styles.day}>Thu</div>
                  <div className={styles.day}>Fri</div>
                  <div className={styles.day}>Sat</div>
                </div>
                <div className={styles.dates}>
                  {Array(31)
                    .fill(null)
                    .map((_, i) => {
                      return (
                        <div className={styles.date} key={i}>
                          {i}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className={styles.selectTime}>
              {[
                { time: '11:30', enabled: true },
                { time: '11:30', enabled: true },
                { time: '11:30', enabled: true },
                { time: '11:30', enabled: true },
                { time: '11:30', enabled: true },
                { time: '11:30', enabled: true },
                { time: '11:30', enabled: true },
                { time: '11:30', enabled: false },
                { time: '11:30', enabled: true },
              ].map((timeData, i) => {
                return (
                  <div key={i} className={styles.time}>
                    {timeData.time}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={styles.layer}
            data-layer="information"
            hidden={!state.matches('information')}
          >
            <div>Enter your information</div>
            <h2>Personal data</h2>
            <label htmlFor="">
              <div>Your name</div>
              <input type="text" />
            </label>
            <label htmlFor="">
              <div>Your work email address</div>
              <input type="text" />
            </label>
            <label htmlFor="">
              <div>Phone number</div>
              <input type="text" />
            </label>
          </div>
        </div>
        <footer className={styles.footer}>
          <button
            className={styles.button}
            onClick={() => {
              dispatch('BACK');
            }}
          >
            Back
          </button>
          <button
            className={styles.button}
            onClick={() => {
              dispatch('NEXT');
            }}
          >
            Next Step
          </button>
        </footer>
      </div>
      <div className={styles.layer} hidden={!state.matches('confirmation')}>
        <h1>We just scheduled a demo for you!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quis
          sed odit itaque? Illum, dolor, similique aliquam vero quidem deleniti
          quo pariatur praesentium aut eveniet tempore vel repellendus itaque
          recusandae.
        </p>
        <div className="panel">
          <label htmlFor="" className="field">
            <div className="label">Date</div>
            <div>25. November 2020</div>
          </label>
          <label htmlFor="" className="field">
            <div className="label">Time</div>
            <div>
              14:00 - 14:15 <small>(GMT +1)</small>
            </div>
          </label>
        </div>
        <button className="button">Get back home</button>
        <button className="button">Resend Email</button>
      </div>
    </main>
  );
}

export default App;
