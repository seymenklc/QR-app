export const qrCodeReducer = (state, action) => {
    switch (action.type) {
        case 'SAVE_QR':
            return {
                ...state,
                codes: [...state.codes, action.payload]
            };
        case 'DELETE_QR':
            // get current codes
            const qrCodes = localStorage.getItem('qr-codes');
            let parsedQRCodes = JSON.parse(qrCodes);
            // finding index of the matching code at localstorage
            const index = parsedQRCodes.findIndex(qr => qr.id === action.payload);
            // deleting matching qr code from localstorage
            parsedQRCodes.splice(index, 1);
            localStorage.setItem('qr-codes', JSON.stringify(parsedQRCodes));
            // refresh page on delete 
            setTimeout(() => window.location.reload(), 200);

            return {
                ...state,
                codes: state.codes.filter(code => code.id !== action.payload)
            };
        case 'CHOOSE_FROM_SAVED':
            return { ...state, isChooseMode: true };
        default:
            return state;
    }
};