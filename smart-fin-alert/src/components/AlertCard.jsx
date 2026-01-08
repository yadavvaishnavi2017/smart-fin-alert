function AlertCard({ title, message, priority }) {
  return (
    <div className="card alert">
      <h3>{title}</h3>
      <p>{message}</p>
      <span>{priority}</span>
    </div>
  );
}

export default AlertCard;
