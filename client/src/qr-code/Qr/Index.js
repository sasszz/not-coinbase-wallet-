// import styles from "./../../style.module.scss";
import QRCode from "qrcode.react";

// const networks = {
//     BTC: "https://i.ibb.co/L8hpQcf/bitcoin.png",
//     ETH: "https://i.ibb.co/NWCRLCx/ethereum.png",
//     XRP: "https://i.ibb.co/RCX0Ws9/ripple.png"
// }

function Qr({ value, invalidAddress }) {
    return (
        // <div className>
        <QRCode
            className="border border-white"
            value={value}
            bgColor={"#ffffff"}
            fgColor={"#000000"} // The Qr Color
            size={192}
            level={"Q"} // Levels Can be L,M,Q,H Default is L
            includeMargin={false}
            renderAs={"svg"}
            // Uncomment the Line to add Image to the QR CODE
            imageSettings={{
                src: "https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png",
                x: null,
                y: null,
                height: 40,
                width: 35,
                excavate: true
            }}
        />
        // </div>
    );
}

export default Qr;
