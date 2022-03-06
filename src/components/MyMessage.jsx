const MyMessage = ({ message }) => {
  if (message.attachements && message.attachements.length > 0) {
    return (
      <image
        src={message.attachement[0].file}
        alt="image-message"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
