import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';

const Gallery = ({ images }) => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <div className='flex flex-wrap lg:justify-start justify-center'>
        {images.map((image, index) => (
          <LazyLoad key={index} height={150}>
            <img
              src={image.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => openModal(image)}
              className='w-[160px] h-[110px] m-[5px] cursor-pointer'
            />
          </LazyLoad>
        ))}
      </div>
      {modalImage && (
        <div
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
          }}
          onClick={closeModal}
        >
          <img src={modalImage.original} alt="Original" style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
        </div>
      )}
    </div>
  );
};

export default Gallery;