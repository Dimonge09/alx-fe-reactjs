function UserProfile(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1rem",
      margin: "1rem 0",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9"
    }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
