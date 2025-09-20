import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import './quill-custom.css';


export default function Admin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    date: "",
    content: "",
    imageUrl: ""
  });

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (value) => {
    setFormData({ ...formData, content: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://pn-j3rm.onrender.com/api/blogposts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Blogpost erfolgreich gespeichert!");
        setFormData({
          id: "",
          title: "",
          date: "",
          content: "",
          imageUrl: ""
        });
      } else {
        alert("Fehler beim Speichern.");
      }
    } catch (error) {
      console.error("Fehler beim Senden:", error);
      alert("Verbindung zum Server fehlgeschlagen.");
    }
  };

  return (
    <>
      <div className="admin-page">
        <h2>Neuen Blogpost erstellen</h2>
        <form onSubmit={handleSubmit} className="blog-form">
          <label>ID</label>
          <input name="id" value={formData.id} onChange={handleChange} placeholder="Nummer" required />

          <label>Titel</label>
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Überschrift..." required />

          <label>Datum</label>
          <input name="date" type="date" value={formData.date} onChange={handleChange}  required />

          <label>Bild hochladen</label>
          <button
            type="button"
            onClick={() => {
              window.cloudinary.openUploadWidget(
                {
                  cloudName: 'dzlpy6osa',
                  uploadPreset: 'blog_update',
                  sources: ['local', 'url', 'camera'],
                  multiple: true,
                  defaultSource: 'local',
                  maxFiles: 5,
                  styles: {
                    window: "#ffffff",
                    sourceBg: "#f4f4f4",
                    windowBorder: "#90a0b3",
                    tabIcon: "#0078ff",
                    inactiveTabIcon: "#69778A",
                    menuIcons: "#0078ff",
                    link: "#0078ff",
                    action: "#0078ff",
                    inProgress: "#0078ff",
                    complete: "#20B832",
                    error: "#c43737",
                    textDark: "#000000",
                    textLight: "#ffffff"
                  }
                },
                (error, result) => {
                  if (!error && result.event === "success") {
                    console.log("Bild hochgeladen:", result.info.secure_url);
                    setFormData(prev => ({ ...prev, imageUrl: result.info.secure_url }));
                  }
                }
              );
            }}
          >
            Bild auswählen
          </button>

          <label>Inhalt</label>
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={handleContentChange}
            placeholder="Schreibe deinen Blogpost hier..."
          />

          <button type="submit">Speichern</button>
        </form>
      </div>

      <button onClick={() => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login");
      }}>
        Logout
      </button>
    </>
  );
}
