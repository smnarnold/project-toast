import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts, clearToast } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({id, msg, variant}) => (
        <li key={ id } className={styles.toastWrapper}>
          <Toast 
            id={id}
            variant={ variant } 
            clearToast={clearToast}>
              { msg }
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
