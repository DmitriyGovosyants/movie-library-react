import { useEffect, useRef } from 'react';

const initialOptions = {
  rootMargin: '0px',
  threshold: 0,
};

export const IntersectonObserver = ({
  children,
  onIntersect,
  options,
  triggerOnce = false,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref) return;

    const handleIntersect = entries => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (!isIntersecting) return;

        onIntersect?.();

        if (triggerOnce) {
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      ...initialOptions,
      ...options,
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect, options, triggerOnce]);

  return <div ref={ref}>{children}</div>;
};
