import { useCallback, useMemo, useState } from 'react';

export const useCounter = () => {
  //declare useState using destructuring assignment
  //first array: variable
  //second array: function for updating variable
  //add a value in the parentheses if you set a default
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCounter = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleCounter = useCallback(
    (e) => {
      console.log(count);
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  return {count, isShow, doubleCounter, handleCounter, handleDisplay}
};