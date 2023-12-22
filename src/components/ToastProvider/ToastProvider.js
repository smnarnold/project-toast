import React from 'react';
import useEscape from '../../hooks/UseEscape';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  useEscape(() => clearAllToasts());

  const addToast = ({msg, variant}) => {
    const nextToasts = [...toasts];
    const id = `${variant}-${Math.random()}`;
    nextToasts.push({id, msg, variant});
    setToasts(nextToasts);
  }

  const clearToast = ({id}) => {
    const nextToasts = [...toasts].filter(toast => toast.id !== id);
    setToasts(nextToasts);
  }

  const clearAllToasts = () => {
    setToasts([]);
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, clearToast, clearAllToasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
