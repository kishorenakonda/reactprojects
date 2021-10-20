import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <img key={image.id} src={image.webformatURL} alt="images"
            height={image.previewHeight} width={image.previewWidth} />
    });

    return (
        <div>
            {images}
        </div>
    )
}

export default ImageList;