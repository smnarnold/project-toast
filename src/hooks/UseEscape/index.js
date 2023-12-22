import React from 'react';

function useEscape(cb) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape' && cb) {
        cb();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}

export default useEscape;