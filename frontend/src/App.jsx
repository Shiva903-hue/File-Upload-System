import { useState } from "react";
import Loading from "./Loading";

function App() {
  // Stores the uploaded image URL returned from the backend
  const [image, setImage] = useState(null);

  // Tracks whether an upload is in progress
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const file = e.target.files[0]; // Get the selected file

    // Wrap the file in FormData so it can be sent as multipart/form-data
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    // Send the file to the backend upload endpoint
    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setImage(data.imageUrl); // Save the Cloudinary URL to state
    setLoading(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Cloudinary Upload Demo</h2>

      <input type="file" onChange={uploadImage} />

      {loading && <Loading />}

      {!loading && image && (
        <div>
          <h3>Uploaded Image</h3>
          <img src={image} width="300" />
        </div>
      )}
    </div>
  );
}

export default App;
