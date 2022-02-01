import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QrReader from 'react-qr-reader-es6';
// hooks
import { useQRContext } from '../../hooks/useQRContext';
// styles
import './Scan.css';

export default function Scan() {
  const { chooseFromSavedCodes } = useQRContext();
  const [scannedCode, setScannedCode] = useState('');
  const qrRef = useRef(null);
  const navigate = useNavigate();

  const handleScan = (result) => {
    if (result) setScannedCode(result);
  };

  const handleScanError = (error) => {
    console.log(error);
  };

  const handleUpload = () => {
    qrRef.current.openImageDialog();
  };

  const handleChooseFromSavedClick = () => {
    chooseFromSavedCodes();
    navigate('/saved');
  };

  return (
    <div className='reader-container'>
      <QrReader
        className='reader'
        ref={qrRef}
        delay={300}
        style={{ width: '50%' }}
        onScan={handleScan}
        onError={handleScanError}
        legacyMode
      />
      {scannedCode ?
        <>
          <label>Your QR Result</label>
          <p className='result'>{scannedCode}</p>
        </>
        : null}
      <button className='reader-btn' onClick={handleUpload}>
        Upload from this device
      </button>
      <p>OR</p>
      <button disabled className='reader-btn' onClick={handleChooseFromSavedClick}>
        Choose from saved codes
      </button>
    </div>
  );
}