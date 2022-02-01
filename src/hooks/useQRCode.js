import { useState } from 'react';
import QRCode from 'qrcode';

export const useQRCode = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState(null);
    const [isError, setIsError] = useState(null);

    const generateQR = async () => {
        try {
            const response = await QRCode.toDataURL(value);
            setResult(response);
        } catch (error) {
            setIsError(error);
        }
    };

    return { value, setValue, result, isError, generateQR };
};