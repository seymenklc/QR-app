// hooks
import { useQRContext } from '../../../hooks/useQRContext';
// styles
import './SingleQRCode.css';

export default function SingleQRCode({ qrCode }) {
    const { deleteQRCode } = useQRContext();

    const handleDeleteClick = () => deleteQRCode(qrCode.id);

    return (
        <div className='saved-code' onClick={handleDeleteClick}>
            <img src={qrCode.code} alt={qrCode.code} key={qrCode.id} />
        </div>
    );
}
