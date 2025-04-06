import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `Kyle Chang | ${title}` : 'Kyle Chang';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}; 