import { useState, useEffect } from "react";
import LoadingSpin from "react-loading-spin";

function Loading() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [])

  if (isLoading) return (
    <LoadingSpin
      primaryColor={'#2c2d05'}
    />
  )

  return null;
}

export default Loading
