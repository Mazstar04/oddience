const PaymentMethod = () => {
    const accounts = [
        {
            type: "Dollar",
            accontNo: 2234806524,
        },
        {
            type: "Euro",
            accontNo: 2234806524,
        },
        {
            type: "Naira",
            accontNo: 2234806524,
        },
    ]
    return (
        <div className="font-poppins flex flex-col gap-[20px]">
            <h1 className="font-[500] text-[22px]">Payment Methods</h1>
            <div className="flex gap-[15px] font-[500] overflow-x-auto">
                {
                    accounts.map(a => <div className="p-[20px] rounded-[12px] flex flex-col justify-center bg-ash gap-[5px]">
                        <p className="text-[12px] text-[#BCC3CC] whitespace-nowrap">Account Number
                            <span className="text-white bg-[#516DFC] rounded-[8px] py-[1px] px-[5px] ml-2 text-[10px] font-[400]">{a.type}</span>
                        </p>
                        <div className="flex gap-[5px]">
                            <p className="text-[16px] text-secondary">{a.accontNo}</p>
                            <svg width="12" height="13" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[15px] cursor-pointer">
                                <path d="M2.92647 12.3657C2.84554 12.3656 2.76552 12.3486 2.69151 12.3159C2.61749 12.2831 2.5511 12.2353 2.49656 12.1755C2.44102 12.1163 2.39864 12.0459 2.37221 11.9691C2.34577 11.8923 2.33586 11.8108 2.34314 11.7299L2.48606 10.1584L9.08822 3.55854L11.1515 5.62121L4.55106 12.2205L2.97956 12.3634C2.96191 12.365 2.94419 12.3658 2.92647 12.3657ZM11.5633 5.20879L9.50064 3.14613L10.7379 1.90888C10.7921 1.85464 10.8564 1.81161 10.9272 1.78226C10.998 1.7529 11.0739 1.73779 11.1506 1.73779C11.2273 1.73779 11.3032 1.7529 11.374 1.78226C11.4448 1.81161 11.5091 1.85464 11.5633 1.90888L12.8006 3.14613C12.8548 3.2003 12.8978 3.26464 12.9272 3.33545C12.9565 3.40627 12.9716 3.48218 12.9716 3.55884C12.9716 3.63549 12.9565 3.7114 12.9272 3.78222C12.8978 3.85303 12.8548 3.91737 12.8006 3.97154L11.5639 5.20821L11.5633 5.20879Z" fill="#000C2D" />
                            </svg>
                            <svg width="12" height="13" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                                <path d="M11.4323 3.86165V12.0283C11.4323 12.3377 11.3094 12.6345 11.0906 12.8533C10.8718 13.0721 10.575 13.195 10.2656 13.195H4.43229C4.12287 13.195 3.82613 13.0721 3.60733 12.8533C3.38854 12.6345 3.26563 12.3377 3.26562 12.0283V3.86165M5.01562 3.86165V2.69499C5.01562 2.38557 5.13854 2.08882 5.35733 1.87003C5.57613 1.65124 5.87287 1.52832 6.18229 1.52832H8.51562C8.82504 1.52832 9.12179 1.65124 9.34058 1.87003C9.55937 2.08882 9.68229 2.38557 9.68229 2.69499V3.86165" fill="#000C2D" />
                                <path d="M11.4323 3.86165V12.0283C11.4323 12.3377 11.3094 12.6345 11.0906 12.8533C10.8718 13.0721 10.575 13.195 10.2656 13.195H4.43229C4.12287 13.195 3.82613 13.0721 3.60733 12.8533C3.38854 12.6345 3.26563 12.3377 3.26562 12.0283V3.86165M5.01562 3.86165V2.69499C5.01562 2.38557 5.13854 2.08882 5.35733 1.87003C5.57613 1.65124 5.87287 1.52832 6.18229 1.52832H8.51562C8.82504 1.52832 9.12179 1.65124 9.34058 1.87003C9.55937 2.08882 9.68229 2.38557 9.68229 2.69499V3.86165" stroke="#000C2D" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.17969 6.77832V10.2783" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.51562 6.77832V10.2783" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.09766 3.86133H3.26432H12.5977" stroke="#000C2D" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.61328 2.95312C5.61328 2.40084 6.061 1.95312 6.61328 1.95312H8.07617C8.62846 1.95312 9.07617 2.40084 9.07617 2.95312V3.3388H5.61328V2.95312Z" fill="white" />
                            </svg>

                        </div>
                    </div>)
                }

            </div>
        </div>
    );
}

export default PaymentMethod;