import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(!onlineStatus)
    });
    window.addEventListener("online", () => {
      setOnlineStatus(onlineStatus)
    });
  }, [])

  return onlineStatus;
};
export default useOnlineStatus;