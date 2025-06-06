import './Modal.css'
export default function Modal({src, alt, onClose, nextImage, previousImage}) {
    return (
        <div className="modal-overlay"
            onClick={onClose}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                animation: 'fadeIn 0.25s',
            }}
            >
                <button
                    className="previous-image-button"
                    onClick={e => {
                        e.stopPropagation(); // prevent it from closing when clicking next
                        previousImage();
                    }}>
                    <span class="next-image-text">Previous</span>
                </button>
                <img
                    src={src}
                    alt={alt}
                    style={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                        borderRadius: '10px',
                    }}
                    onClick={e => e.stopPropagation()} // prevent it from closing when clicking image
                    />
                <button
                    className="next-image-button"
                    onClick={e => {
                        e.stopPropagation(); // prevent it from closing when clicking next
                        nextImage();
                    }}>
                    <span class="next-image-text">Next Image</span>
                </button>
                    
            </div>
    )
}