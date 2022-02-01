import { useContext } from "react";
import { QRCodeContext } from "../context/QRContext";

export const useQRContext = () => {
    const context = useContext(QRCodeContext);

    if (context === undefined) {
        throw new Error('useQRContext() must be used inside a QRCodeProvider');
    }

    return context;
};