import React from 'react';
import { Button } from 'react-bootstrap';

function FileButton({ setFile, handleFile }) {
    // referencia al elemento input file oculto
    const hiddenFileInput = React.useRef(null);
    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    // subida de imagen
    const handleChange = async (event) => {
        const fileUploaded = event.target.files[0];
        beforeUpload(fileUploaded);
        const base64 = await getBase64(fileUploaded);
        setFile(base64);
        handleFile();
    };
    // base64 a la img
    function getBase64(img) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener('load', () => resolve(reader.result));
            reader.readAsDataURL(img);
        });
    }
    // corroboracion que sea solo img tipo jpg y png
    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            alert('Solamente archivos JPG/PNG!');
            return;
        }
    }

    const onInputClick = (event) => {
        event.target.value = '';
    };

    return (
        <>
            <Button variant="dark" onClick={handleClick}>
                Seleccionar foto
            </Button>

            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
                onClick={onInputClick}
            ></input>
        </>
    );
}

export default FileButton;
