import React from "react";
import { useNotification } from "../contexts/NotificationContext";

const ws = new WebSocket(`ws://${window.location.host}/cable`);

function Notification() {
  const { notification, setNotification } = useNotification();

  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          channel: "NotificationsChannel",
        }),
      })
    );
  };

  ws.onmessage = (e) => {
    const response = JSON.parse(e.data);

    if (
      response.type === "ping" ||
      response.type === "welcome" ||
      response.type === "confirm_subscription"
    ) {
      return;
    }

    setNotification(response.message);

    setTimeout(() => {
      setNotification();
    }, 2000);
  };

  return (
    <div>
      {notification?.message && (
        <div className="fixed z-10" style={{ right: "20px", top: "100px" }}>
          <div
            className="bg-white p-8 rounded shadow-lg"
            dangerouslySetInnerHTML={{ __html: notification.message }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Notification;
