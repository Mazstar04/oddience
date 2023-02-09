const Stats = () => {

    const currencies = ["USD", "EUR", "GBH", "GHS", "NGN", "KES", "UGX", "ZAR", "TZS"];
    return (
        <div className="font-poppins flex flex-col gap-[30px] h-auto">
            <h1 className="font-[500] text-[22px]">Earnings</h1>
            <div className="flex items-center">
                <div className="flex-1 flex gap-[10px] text-[#CED4DB] text-[12px] cursor-pointer">
                    <span className="text-black bg-ash rounded-[4px] p-[3px]">7D</span>
                    <span className="p-[3px]">1M</span>
                    <span className="p-[3px]">3M</span>
                    <span className="p-[3px]">1Y</span>
                    <span className="p-[3px]">Lifetime</span>
                </div>
                <select name="" id="" className="outline-none border-none">
                    <option value="1" selected disabled>Select Currency</option>
                    {
                        currencies.map(c => <option value={c}>{c}</option>)
                    }
                </select>
            </div>
            <div className="border-[1px] flex flex-col lg:flex-row gap-[20px] border-secondary rounded-[20px] h-auto p-[15px]">
                <div className="flex  lg:basis-[60%] gap-[20px] flex-col md:flex-row ">
                    <div className="md:flex-1 lg:basis-[50%]  bg-[#F6FFF5] rounded-[12px] h-[150px] lg:h-full p-[20px] flex justify-center font-[500] flex-col">
                        <p className="text-[#939AA3] text-[12px]">Total Earned</p>
                        <p className="text-secondary text-[30px]">$440,574<span className="text-[#939AA3] text-[16px]"> .35</span></p>
                    </div>
                    <div className="md:flex-1 lg:basis-[50%]  border-2 border-[#E1E5EB] h-[190px] md:h-[150px] lg:h-full rounded-[12px] flex flex-col  font-[500]">
                        <div className="basis-[60%] flex flex-col items-center justify-center">
                            <p className="text-[12px] text-[#939AA3]">Available Balance</p>
                            <p className="text-secondary text-[18px]">$2,510<span className="text-[#939AA3] text-[12px]">.53</span></p>
                        </div>
                        <div className="border-[1px] border-[#E1E5EB]"></div>
                        <div className="bg-ash rounded-b-[12px] flex-1  px-[15px] py-[10px] flex items-center">
                            <div className="bg-secondary py-[10px] text-center w-full text-white rounded-[24px] cursor-pointer ">Withdraw</div>
                        </div>
                    </div>
                </div>
                <div className="lg:basis-[40%] flex flex-col md:flex-row lg:flex-col gap-[20px]">
                    <div className="flex-1 border-[1px] border-[#E1E5EB] rounded-[12px] p-[15px] flex justify-center font-[500] flex-col">
                        <p className="text-[#939AA3] text-[12px]">Book Balance</p>
                        <p className="text-secondary text-[18px]">$2,510<span className="text-[#939AA3] text-[12px]">.53</span></p>
                    </div>
                    <div className="flex gap-[20px] flex-1 ">
                        <div className="flex-1 border-[1px] border-[#E1E5EB] rounded-[12px] p-[15px] flex justify-center font-[500] flex-col">
                            <p className="text-[#939AA3] text-[12px]">Slots Sold</p>
                            <p className="text-secondary text-[18px]">54</p>
                        </div>
                        <div className="flex-1 border-[1px] border-[#E1E5EB] rounded-[12px] p-[15px] flex justify-center font-[500] flex-col">
                            <p className="text-[#939AA3] text-[12px]">Sources</p>
                            <p className="text-secondary text-[18px]">9</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;