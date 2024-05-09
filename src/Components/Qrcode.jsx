import React, { useState, useEffect } from 'react';
import generateQRCode from '../../twofa.js'; // Assuming twofa.js is in the same directory

function Qrcode() {
  const [qrData, setQrData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await generateQRCode('SentinelShield'); // Replace with your desired name
        setQrData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : qrData ? (
        <img src={qrData} alt="QR Code" />
      ) : (
        <p>Loading QR Code...</p>
      )}
    </div>
  );
}

export default Qrcode;
