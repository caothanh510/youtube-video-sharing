import React, { useState } from "react";

function Message({ status, message }) {
  let statusColor = {
    error: "red",
    success: "green",
    info: "blue",
  }[status];

  return (
    <div
      className={`bg-${statusColor}-100 border-t border-b border-${statusColor}-500 text-${statusColor}-700 px-4 py-3 mb-3`}
      role="alert"
    >
      <p className="text-sm">{message}</p>
    </div>
  );
}

export default Message;
