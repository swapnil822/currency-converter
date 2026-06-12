import { useState } from "react";
import { InputBox } from "./component";
import useCurrencyInfo from "./hooks/useCurrency"
// git remote set-url origin https://github.com/swapnil822/currency-converter.git
function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertedAMount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const convert = () => {
        setConvertedAMount(amount * currencyInfo[to]);
    }

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAMount(amount)
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${"https://external-preview.redd.it/bitcoin-has-already-priced-in-spot-etf-approval-expert-v0-VCP7Yddh0VOGR0XybIAPnuF1LZKscb4B5u9KQtY7s9I.jpg?auto=webp&s=75d7b27a8b4abbcbd93fb75a497cbfc5f29be935"}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                selectCurrency={from}
                                onAmountChage={setAmount}
                                onCurrencyChange={setFrom}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                selectCurrency={to}
                                onCurrencyChange={setTo}
                                onAmountChage={setConvertedAMount}
                                amountDisabled
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;