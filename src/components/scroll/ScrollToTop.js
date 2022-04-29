import { useEffect, useState } from 'react';
import { GoArrowUp } from 'react-icons/go';
import { classNames } from '../../utils';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-5 right-5 z-50'>
      <button
        type='button'
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'inline-flex items-center rounded-full bg-secondary bg-opacity-20 p-3 text-white shadow-sm transition duration-500 hover:bg-primary hover:bg-opacity-100 dark:text-dark'
        )}
      >
        <GoArrowUp className='h-6 w-6 opacity-80' aria-hidden='true' />
      </button>
    </div>
  );
};
