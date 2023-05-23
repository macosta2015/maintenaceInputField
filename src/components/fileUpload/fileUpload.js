import React, { useState } from 'react';
import Button from '@mui/material/Button';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // You can perform the upload logic here
    console.log('Uploading file:', selectedFile);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="upload-button"
      />
      <label htmlFor="upload-button">
        <Button variant="contained" component="span">
          Select File
        </Button>
      </label>
      <Button variant="contained" onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </Button>
    </div>
  );
};

export default FileUpload;