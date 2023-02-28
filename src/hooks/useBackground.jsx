import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

export const useBackground = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return router.pathname === '/' ? 'gray' : 'pink';
    //can use switch instead 
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [bgColor]);

  // before
  // useEffect(() => {
  //   run when mounting
  //   document.body.style.backgroundColor = 'gray';

  //   run when unmounting
  //   return () => {
  //     document.body.style.backgroundColor = '';
  //   };
  // }, []);
};
