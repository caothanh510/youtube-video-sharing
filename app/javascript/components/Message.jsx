import React from "react";

function Message({ status, message }) {
  let statusColor = {
    error: "text-rose-700 border-rose-500",
    success: "text-green-700 border-emerald-500",
  }[status];

  return (
    message && (
      <div
        className={`border-t border-b ${statusColor} px-4 py-3 mb-3`}
        role="alert"
      >
        <p className="text-sm">{message}</p>
      </div>
    )
  );
}

export default Message;
