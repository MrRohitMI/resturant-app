import { useEffect, useState } from "react";

const useCheckStatus = () => {
  const [status, setStatus] = useState("Online");
  useEffect(() => {
    window.addEventListener("online", () => {
      setStatus("Online");
    });
    window.addEventListener("offline", () => {
      setStatus("Offline");
    });
  }, []);
  return status;
};

export default useCheckStatus;
