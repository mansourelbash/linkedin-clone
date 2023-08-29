
import React, { useCallback, useMemo } from "react";

function Test({ count }) {
  const multiplyByTwo = useCallback(() => {
    return count * 2;
  }, [count]);

  const computedValue = useMemo(() => {
    return count * 10;
  }, [count]);


  return (
    <div>
      <p>Multiply by two: {multiplyByTwo()}</p>
      <p>Computed value: {computedValue}</p>
    </div>
  );
}

export default Test