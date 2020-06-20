import { useRef } from 'react';

const useComponentWillMount = method => {
  const isMethodCalled = useRef(false);
  if (!isMethodCalled.current) {
    method();
    isMethodCalled.current = true;
  }
};

export default useComponentWillMount;