import bitconLogo from "../assets/images/vendor-bitcoin.svg";
import ninjaLogo from "../assets/images/vendor-ninja.svg";
import evilLogo from "../assets/images/vendor-evil.svg";
import blockChainLogo from "../assets/images/vendor-blockchain.svg";

// Denna fil innehåller all info om bankerna eller "vendors", valde att separare det till en gen fil istället för att ex ha infon i compnenten.

const banks = [
    {
        id: 1,
        name: "bitcoin",
        color: "#ebbb39",
        logo: bitconLogo,
        theme: "dark",
    },
    {
        id: 2,
        name: "ninja",
        color: "#0f0f0f",
        logo: ninjaLogo,
        theme: "light",
    },
    {
        id: 3,
        name: "evilCorp",
        color: "#e93131",
        logo: evilLogo,
        theme: "light",
    },
    {
        id: 4,
        name: "blockChain",
        color: "#8430e4",
        logo: blockChainLogo,
        theme: "light",
    },
];

export default banks;
