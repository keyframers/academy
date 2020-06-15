import styles from './styles.module.scss';
import { createMachine } from '@xstate/fsm';
import { useReducer } from 'react';

const machine = createMachine({
  initial: 'welcome',
  states: {
    welcome: {
      on: { NEXT: 'books' },
    },
    books: {
      on: {
        BACK: 'welcome',
      },
    },
  },
});

export default function Reading() {
  const [state, dispatch] = useReducer(
    machine.transition,
    machine.initialState
  );

  return (
    <main className={styles.main}>
      <div className={styles.app}>
        <div className={styles.screens}>
          <div
            className={styles.screen}
            hidden={!state.matches('welcome')}
            onClick={() => dispatch('NEXT')}
          >
            <h1>Welcome!</h1>
          </div>
          <div
            className={styles.screen}
            hidden={!state.matches('books')}
            onClick={() => dispatch('BACK')}
          >
            <h1>Books</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
