// hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useQRContext } from '../../hooks/useQRContext';
// Components
import SingleQRCode from './SingleQRCode/SingleQRCode';
// Styles
import './Saved.css';

export default function Saved() {
    const [storage,] = useLocalStorage('qr-codes');
    const { codes, isChooseMode } = useQRContext();

    const QRCodes = storage ? storage : codes;

    if (!codes.length && !storage.length) {
        return <h2 className='info'>No codes...</h2>;
    }

    return (
        <div className='saved-codes-container'>
            {isChooseMode ? 'Choose the code you want to resolve' : null}
            {QRCodes.map(qr => (
                <SingleQRCode key={qr.id} qrCode={qr} />
            ))}
        </div>
    );
}
