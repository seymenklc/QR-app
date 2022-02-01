import { useState } from 'react';
// hooks
import { useQRCode } from '../../hooks/useQRCode';
// Components
import Display from '../Display/Display';
// Styles
import './Create.css';

export default function Create() {
  const [isCodeExist, setIsCodeExist] = useState(false);
  const { value, setValue, result, isError, generateQR } = useQRCode();

  const handleSubmit = (e) => {
    e.preventDefault();
    generateQR();
    // reset input
    setValue('');

    setIsCodeExist(false);
  };

  return (
    <>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <div className='form-container'>
          <h1>Your Text</h1>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className='form-btn' type='submit' disabled={!value}>
            Create QR
          </button>
        </div>
      </form>
      {
        // show generated qr
        isError
          ? <div className='form-info'>{isError}</div>
          : (
            <>
              {
                !result
                  ? <div className='form-info'>You haven't created a QR Code</div>
                  : <Display
                    result={result}
                    isCodeExist={isCodeExist}
                    setIsCodeExist={setIsCodeExist} />
              }
            </>
          )
      }
    </>
  );
}