import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `Phillip Che | ${title}` : 'Phillip Che';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}; 