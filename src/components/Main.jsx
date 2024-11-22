import React, { useState } from 'react';

const Main = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const getExcelFile = async () => {
    const sheetId = '1bkfNM6IVCWS1Bj9Xwer2sUBq5v_svj7E';
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=xlsx`;
    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.blob();
        console.log("data:",data);
        
        const fileURL = URL.createObjectURL(data); // Create a URL for the Blob
        console.log("fileURL:",fileURL);
      
        setFileUrl(fileURL); // Store the file URL for downloading
      } else {
        console.error('Error fetching the file', response.status);
      }
    } catch (error) {
      console.error('Error fetching the file', error);
    }
  };

  return (
    <div>
      <h1>Download Google Sheet as Excel</h1>
      <button onClick={getExcelFile}>Get Excel File</button>

      {fileUrl && (
        <a href={fileUrl} download="sheet.xlsx">
          <button>Download Excel File</button>
        </a>
      )}
    </div>
  );
};

export default Main;
