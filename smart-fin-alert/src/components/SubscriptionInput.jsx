import { useState } from "react";

function SubscriptionInput({ subscriptions, setSubscriptions }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const addSubscription = () => {
    if (!name || !date) return;

    setSubscriptions([
      ...subscriptions,
      { name, renewalDate: date },
    ]);

    setName("");
    setDate("");
  };

  return (
    <div className="card">
      <h3>Add Subscription</h3>

      <input
        placeholder="Subscription name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={inputStyle}
      />

      <button onClick={addSubscription} style={buttonStyle}>
        Add
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "6px",
  border: "none",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "10px",
  width: "100%",
  background: "#00e676",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default SubscriptionInput;
