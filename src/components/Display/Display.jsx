import { v4 as uuid } from 'uuid';
// hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useQRContext } from '../../hooks/useQRContext';
// Styles
import './Display.css';

export default function Display({ result, isCodeExist, setIsCodeExist }) {
    const [, setStorage] = useLocalStorage('qr-codes');
    const { saveQRCode, codes } = useQRContext();

    const handleClick = () => {
        // create new qr obj with a id
        const newQRCode = { id: uuid(), code: result };
        saveQRCode(newQRCode);
        // saving to localStorage
        setStorage([...codes, newQRCode]);
        setIsCodeExist(true);
    };

    return (
        <div className='result-container'>
            <h3>Here is your QR Code</h3>
            <a className='image-wrapper' href={result} download>
                <img src={result} alt={result} />
            </a>
            <button disabled={isCodeExist} onClick={handleClick}>
                save for later
            </button>
        </div>
    );
};
