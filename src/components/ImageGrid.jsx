import "./ImageGridStyles.css"
import { useState } from "react";
import Modal from "./Modal.jsx";

const images = import.meta.glob('../assets/images/*.jpg', { eager: true });

const imageList = Object.entries(images).map(([key, mod], i) => ({
  id: i,
  src: mod.default,
  alt: `Image ${i}`,
}));





function ImageGrid() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const selectNextImage = (currentIndex) => {
        const nextIndex = (currentIndex + 1) % imageList.length;
        setSelectedPhoto(imageList[nextIndex]);
        return imageList[nextIndex];
    }
    const selectPreviousImage = (currentIndex) => {
        const previousIndex = (currentIndex - 1 + imageList.length) % imageList.length;
        setSelectedPhoto(imageList[previousIndex]);
        return imageList[previousIndex];
    }

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
                onClose={() => setSelectedPhoto(null)} 
                nextImage={() => selectNextImage(selectedPhoto.id)}
                previousImage={() => selectPreviousImage(selectedPhoto.id)}/>
            )}
        
        </>
        
    )
}

export default ImageGrid;