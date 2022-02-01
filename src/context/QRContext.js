import { createContext, useReducer } from "react";
import { qrCodeReducer } from "./qrReducer";

export const QRCodeContext = createContext();

const initialState = {
    codes: [],
    isChooseMode: false
};

export function QRCodeProvider({ children }) {
    const [state, dispatch] = useReducer(qrCodeReducer, initialState);

    const saveQRCode = (qrCode) => {
        dispatch({ type: 'SAVE_QR', payload: qrCode });
    };

    const deleteQRCode = (id) => {
        dispatch({ type: 'DELETE_QR', payload: id });
    };

    const chooseFromSavedCodes = () => {
        dispatch({ type: 'CHOOSE_FROM_SAVED' });
    };

    return (
        <QRCodeContext.Provider value={{
            ...state,
            saveQRCode,
            deleteQRCode,
            chooseFromSavedCodes
        }}
        >
            {children}
        </QRCodeContext.Provider>
    );
}