import "./ImageGridStyles.css"
import { useState } from "react";
import Modal from "./Modal.jsx";

const images = import.meta.glob('../assets/images/*.jpg', { eager: true });

const imageList = Object.entries(images).map(([key, mod], i) => ({
  id: i,
  src: mod.default,
}));




function ImageGrid() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    return (
        <>
        <div className="main-grid">
            {imageList.map(photo => (
                <img 
                key={photo.id} 
                src={photo.src} 
                alt={`Image ${photo.id}`} 
                onClick={() => setSelectedPhoto(photo)}
                style={{cursor: 'pointer'}}
                className="grid-image" />
            ))}
        </div>

            {/* conditionally renders Modal, && checks if selectedPhoto is truthy */}
            {selectedPhoto && ( 
                <Modal 
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                onClose={() => setSelectedPhoto(null)} />
            )}
        
        </>
        
    )
}

export default ImageGrid;