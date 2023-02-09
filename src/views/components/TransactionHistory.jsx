const TransactionHistory = () => {

    const transactions = [
        {
            amount: "$21.00",
            date: "Oct 26, 2022",
            time: "12:19 PM",
            prevBalance: "$164.00",
            currentBalance: "$243.00",
            reference: "QR124GB",
            status: "outgoing",
        },
        {
            amount: "$21.00",
            date: "Oct 26, 2022",
            time: "12:19 PM",
            prevBalance: "$164.00",
            currentBalance: "$243.00",
            reference: "QR124GB",
            status: "outgoing",
        },
        {
            amount: "$21.00",
            date: "Oct 26, 2022",
            time: "12:19 PM",
            prevBalance: "$164.00",
            currentBalance: "$243.00",
            reference: "QR124GB",
            status: "incoming",
        },
        {
            amount: "$21.00",
            date: "Oct 26, 2022",
            time: "12:19 PM",
            prevBalance: "$164.00",
            currentBalance: "$243.00",
            reference: "QR124GB",
            status: "outgoing",
        },
        {
            amount: "$21.00",
            date: "Oct 26, 2022",
            time: "12:19 PM",
            prevBalance: "$164.00",
            currentBalance: "$243.00",
            reference: "QR124GB",
            status: "incoming",
        },
    ]
    return (
        <div className="font-poppins flex flex-col gap-[20px]">
            <h1 className="font-[500] text-[22px]">Transaction History</h1>
            <div className="h-auto  rounded-[20px] bg-ash px-[30px] py-[20px] lg:p-[20px]">
                <div className="hidden lg:block">
                    <div className=" gap-[10px] mb-[30px] flex">
                        <span className="basis-[5%]"></span>
                        <span className="flex-1 font-[400] text-[#939AA3] text-[12px] flex gap-[10px]">Amount <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.626491 7.90766L4.25461 13.8835L7.88274 7.90766L4.25461 8.54796L0.626491 7.90766ZM7.88281 6.2004L4.25469 0.224609L0.626568 6.2004L4.25469 5.5601L7.88281 6.2004Z" fill="#939AA3" />
                        </svg>
                        </span>
                        <span className="flex-1 font-[400] text-[#939AA3] text-[12px] flex gap-[10px]">Date
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.626491 7.90766L4.25461 13.8835L7.88274 7.90766L4.25461 8.54796L0.626491 7.90766ZM7.88281 6.2004L4.25469 0.224609L0.626568 6.2004L4.25469 5.5601L7.88281 6.2004Z" fill="#939AA3" />
                            </svg></span>
                        <span className="flex-1 font-[400] text-[#939AA3] text-[12px]">Previous Balance</span>
                        <span className="flex-1 font-[400] text-[#939AA3] text-[12px]">Current Balance</span>
                        <span className="flex-1 font-[400] text-[#939AA3] text-[12px]">Reference</span>
                    </div>
                    <div className="flex-col gap-[20px] flex">
                        {
                            transactions.map(t =>
                                <div className="flex gap-[10px] font-[500] items-center">
                                    {
                                        t.status == "incoming" && <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="basis-[5%]">
                                            <circle cx="16.3477" cy="16.0547" r="16" fill="#FFF9F9" />
                                            <path d="M22.6051 10.3982C22.6051 10.0668 22.3365 9.79821 22.0051 9.79821L16.6051 9.79821C16.2737 9.79821 16.0051 10.0668 16.0051 10.3982C16.0051 10.7296 16.2737 10.9982 16.6051 10.9982H21.4051V15.7982C21.4051 16.1296 21.6737 16.3982 22.0051 16.3982C22.3365 16.3982 22.6051 16.1296 22.6051 15.7982L22.6051 10.3982ZM11.1157 22.1362L22.4294 10.8225L21.5809 9.97394L10.2671 21.2876L11.1157 22.1362Z" fill="#000C2D" />
                                        </svg>

                                    }
                                    {
                                        t.status == "outgoing" &&
                                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="basis-[5%]">
                                            <circle cx="16.3477" cy="16.0547" r="16" fill="#F6FFF5" />
                                            <path d="M10.0902 21.7121C10.0902 22.0435 10.3588 22.3121 10.6902 22.3121L16.0902 22.3121C16.4216 22.3121 16.6902 22.0435 16.6902 21.7121C16.6902 21.3808 16.4216 21.1121 16.0902 21.1121H11.2902V16.3121C11.2902 15.9808 11.0216 15.7121 10.6902 15.7121C10.3588 15.7121 10.0902 15.9808 10.0902 16.3121L10.0902 21.7121ZM21.5796 9.97417L10.2659 21.2879L11.1145 22.1364L22.4282 10.8227L21.5796 9.97417Z" fill="#000C2D" />
                                        </svg>
                                    }
                                    <p className="flex-1 text-[16px] font-[600]">{t.amount}</p>
                                    <div className="flex-1">
                                        <p className="text-[14px]">{t.date}</p>
                                        <p className=" text-[#6E7A8A] text-[12px] font-[400]">{t.time}</p>
                                    </div>
                                    <p className="flex-1 text-[14px]">{t.prevBalance}</p>
                                    <p className="flex-1 text-[14px]">{t.currentBalance}</p>
                                    <p className="flex-1 text-[14px]">{t.reference}</p>
                                </div>)
                        }
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="flex flex-col gap-[10px]">
                        {
                            transactions.map(t =>
                                <div className="flex flex-col gap-[20px]">
                                    {
                                        t.status == "incoming" && <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.3477" cy="16.0547" r="16" fill="#FFF9F9" />
                                            <path d="M22.6051 10.3982C22.6051 10.0668 22.3365 9.79821 22.0051 9.79821L16.6051 9.79821C16.2737 9.79821 16.0051 10.0668 16.0051 10.3982C16.0051 10.7296 16.2737 10.9982 16.6051 10.9982H21.4051V15.7982C21.4051 16.1296 21.6737 16.3982 22.0051 16.3982C22.3365 16.3982 22.6051 16.1296 22.6051 15.7982L22.6051 10.3982ZM11.1157 22.1362L22.4294 10.8225L21.5809 9.97394L10.2671 21.2876L11.1157 22.1362Z" fill="#000C2D" />
                                        </svg>

                                    }
                                    {
                                        t.status == "outgoing" &&
                                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.3477" cy="16.0547" r="16" fill="#F6FFF5" />
                                            <path d="M10.0902 21.7121C10.0902 22.0435 10.3588 22.3121 10.6902 22.3121L16.0902 22.3121C16.4216 22.3121 16.6902 22.0435 16.6902 21.7121C16.6902 21.3808 16.4216 21.1121 16.0902 21.1121H11.2902V16.3121C11.2902 15.9808 11.0216 15.7121 10.6902 15.7121C10.3588 15.7121 10.0902 15.9808 10.0902 16.3121L10.0902 21.7121ZM21.5796 9.97417L10.2659 21.2879L11.1145 22.1364L22.4282 10.8227L21.5796 9.97417Z" fill="#000C2D" />
                                        </svg>
                                    }
                                    <div className="flex ">
                                        <div className="">
                                            <p className="font-[600] text-[18px]">{t.amount}</p>
                                            <p className="font-[400] text-[#475566] text-[12px]">{t.date}, {t.time}</p>
                                        </div>
                                        <div className="flex-1"></div>
                                        <div className="">
                                            <p className="font-[400] text-[#475566] text-[12px]">Previous Balance</p>
                                            <p className="text-[14px] font-[500]">{t.prevBalance}</p>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <div >
                                            <p className="font-[400] text-[#475566] text-[12px]">Reference</p>
                                            <p className="text-[14px] font-[500]">{t.reference}</p>
                                        </div>
                                        <div className="flex-1"></div>
                                        <div >
                                            <p className="font-[400] text-[#475566] text-[12px]">Current Balance</p>
                                            <p className="text-[14px] font-[500]">{t.currentBalance}</p>
                                        </div>
                                    </div>
                                    <div className="border-[0.1px] border-[#E1E5EB]"></div>
                                </div>)
                        }
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end gap-[15px] text-[14px] font-[500] text-[#BCC3CC] cursor-pointer items-center lg:pr-[100px] mt-4">
                    <div className="p-[10px] h-[40px] w-[40px] rounded-[50%] bg-[#F6FBFF]">
                        <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 19.0547L9.5 13.0547L15.5 7.05469" stroke="#021059" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <span className="text-secondary">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <div className="p-[10px] h-[40px] w-[40px] rounded-[50%] bg-[#F6FBFF]">
                        <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 6.2793L15.5 12.2793L9.5 18.2793" stroke="#021059" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionHistory;