import { useState, useEffect } from "react";

export default function App() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://week-6-api.vercel.app/api/images`);
      const data = await res.json();
      setImages(data);
    }
    fetchData();
  }, []);

  function handleThumbnailClick(index) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <div>
        {images.map((image) => (
          <p key={image.id}>{image.title}</p>
        ))}
      </div>

      <div className="thumbnail">
        {images.map((image, index) => (
          <div key={image.id} onClick={() => handleThumbnailClick(index)}>
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>

      <h2>Big image:</h2>
      {images[currentIndex] ? (
        <img src={images[currentIndex].url} alt="selected" />
      ) : (
        <p>Loading.</p>
      )}
    </div>
  );
}