import logo from "../../assets/logo.svg";

const SideBar = () => {
    return (
        <div className="hidden lg:block h-auto w-[300px] ">
            <img src={logo} alt="logo" className="pl-4 mb-[70px]" />
            <div className="font-poppins text-text font-[500] text-[16px] flex flex-col gap-[30px]">
                <div className="cursor-pointer pl-4 flex gap-[10px] items-center">
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.91797 8.64516C1.91797 8.02798 2.20291 7.44537 2.69009 7.06646L9.69009 1.62201C10.4123 1.06028 11.4236 1.06028 12.1459 1.62201L19.1459 7.06646C19.633 7.44537 19.918 8.02798 19.918 8.64516V18.667C19.918 19.1974 19.7073 19.7061 19.3322 20.0812C18.9571 20.4563 18.4484 20.667 17.918 20.667H3.91797C3.38754 20.667 2.87883 20.4563 2.50376 20.0812C2.12868 19.7061 1.91797 19.1974 1.91797 18.667V8.64516Z" fill="#939AA3" stroke="#939AA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Dashboard</span>
                </div>
                <div className="cursor-pointer pl-4 flex gap-[10px] items-center">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5098 4.20501H16.3898V5.95746C16.3898 6.67281 15.8104 7.25254 15.0951 7.25254C14.3797 7.25254 13.8004 6.67242 13.8004 5.95746V4.20501H8.76192V5.95746C8.76192 6.67281 8.18298 7.25254 7.46763 7.25254C6.75228 7.25254 6.17295 6.67242 6.17295 5.95746V4.20501H5.05289C3.66157 4.20501 2.53345 5.33298 2.53345 6.72445V19.8109C2.53345 21.2026 3.66143 22.33 5.05289 22.33L14.5398 22.3298C13.5801 21.3041 12.9915 19.9268 12.9915 18.4112C12.9915 15.2419 15.5605 12.6724 18.7298 12.6724C19.1774 12.6724 19.6117 12.7254 20.0297 12.8223L20.0293 6.72405C20.0293 5.33294 18.9017 4.20496 17.51 4.20496L17.5098 4.20501ZM9.8813 18.1132H4.49318C4.16451 18.1132 3.89806 17.8468 3.89806 17.5181C3.89806 17.1894 4.1641 16.923 4.49318 16.923H9.8813C10.21 16.923 10.4764 17.1894 10.4764 17.5181C10.4766 17.8468 10.2102 18.1132 9.8813 18.1132ZM9.8813 14.2822H4.49318C4.16451 14.2822 3.89806 14.0157 3.89806 13.6871C3.89806 13.3584 4.1641 13.0919 4.49318 13.0919H9.8813C10.21 13.0919 10.4764 13.3584 10.4764 13.6871C10.4766 14.0157 10.2102 14.2822 9.8813 14.2822ZM18.0695 10.1878H4.49318C4.16451 10.1878 3.89806 9.92209 3.89806 9.59264C3.89806 9.26416 4.1641 8.99811 4.49318 8.99811H18.0695C18.3979 8.99811 18.6646 9.26377 18.6646 9.59264C18.6648 9.92169 18.3983 10.1878 18.0695 10.1878Z" fill="#939AA3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.23728 5.70925C8.23728 6.13434 7.89229 6.47933 7.4672 6.47933C7.04249 6.47933 6.69751 6.13472 6.69751 5.70925V3.12028C6.69751 2.69518 7.0425 2.35059 7.4672 2.35059C7.89229 2.35059 8.23728 2.6952 8.23728 3.12028V5.70925Z" fill="#939AA3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8653 5.70925C15.8653 6.13434 15.5207 6.47933 15.0956 6.47933C14.6705 6.47933 14.3263 6.13472 14.3263 5.70925V3.12028C14.3263 2.69518 14.6705 2.35059 15.0956 2.35059C15.5207 2.35059 15.8653 2.6952 15.8653 3.12028V5.70925Z" fill="#939AA3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7305 13.8381C16.2053 13.8381 14.1586 15.8856 14.1586 18.4108C14.1586 20.9357 16.2053 22.9828 18.7305 22.9828C21.2558 22.9828 23.3028 20.9357 23.3028 18.4108C23.3032 15.8858 21.2557 13.8381 18.7305 13.8381ZM20.4816 19.2907H18.3771C18.3071 19.2907 18.2407 19.2767 18.1802 19.2521C18.1777 19.2507 18.1746 19.2507 18.1723 19.2494C18.1454 19.238 18.1202 19.2233 18.0955 19.2077C18.091 19.2052 18.0868 19.2035 18.0828 19.2008C18.0655 19.1891 18.0497 19.1743 18.034 19.1602C18.0248 19.1524 18.0136 19.1458 18.005 19.1368C17.996 19.1278 17.9892 19.1168 17.9812 19.1076C17.9673 19.0919 17.9525 19.0763 17.9408 19.0588C17.9381 19.055 17.9366 19.0509 17.9339 19.0463C17.9182 19.0219 17.9036 18.9964 17.8922 18.9693C17.8909 18.9668 17.8905 18.9637 17.8895 18.9618C17.8651 18.9005 17.8509 18.8348 17.8509 18.7649V16.6604C17.8509 16.3699 18.0864 16.1344 18.3769 16.1344C18.6673 16.1344 18.9028 16.3703 18.9028 16.6604V18.239H20.4814C20.7718 18.239 21.0073 18.4745 21.0073 18.7649C21.0075 19.0552 20.772 19.2907 20.4816 19.2907L20.4816 19.2907Z" fill="#939AA3" />
                    </svg>
                    <span>Bookings</span>
                </div>
                <div className="cursor-pointer pl-4 flex gap-[10px] items-center">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7.37054V18.2887C0 19.2322 0.763779 19.996 1.70732 19.996H20.1288C21.0724 19.996 21.8361 19.2322 21.8361 18.2887L21.8363 7.37054H0ZM14.0183 12.6948L12.6255 14.0428L12.9624 15.9524C12.9848 16.0422 12.94 16.1546 12.8501 16.1996C12.8051 16.222 12.7603 16.2445 12.6927 16.2445C12.6478 16.2445 12.6029 16.2445 12.5804 16.2221L10.8731 15.3236L9.16574 16.2221C9.07595 16.2671 8.96359 16.2671 8.8962 16.1997C8.80641 16.1323 8.78385 16.0424 8.78385 15.9526L9.12076 14.043L7.72796 12.695C7.66057 12.6276 7.63816 12.5152 7.66057 12.4254C7.68298 12.3356 7.77293 12.2681 7.86272 12.2457L9.77235 11.9762L10.6261 10.2463C10.7159 10.0665 11.008 10.0665 11.0979 10.2463L11.9516 11.9762L13.8613 12.2457C13.9511 12.2681 14.041 12.3355 14.0634 12.4254C14.1081 12.5152 14.0857 12.6274 14.0183 12.6948L14.0183 12.6948Z" fill="#939AA3" />
                        <path d="M20.1288 0.720825H1.70732C0.763779 0.720825 0 1.4846 0 2.42814V6.20223H21.8362V2.42814C21.8362 1.4846 21.0725 0.720825 20.1289 0.720825H20.1288ZM4.96478 4.49491C4.38073 4.49491 3.90891 4.02306 3.90891 3.43904C3.90891 2.85498 4.38077 2.38317 4.96478 2.38317C5.54884 2.38317 6.02065 2.85502 6.02065 3.43904C5.99808 4.04564 5.5488 4.49491 4.96478 4.49491ZM16.8714 4.49491C16.2873 4.49491 15.8155 4.02306 15.8155 3.43904C15.8155 2.85498 16.2874 2.38317 16.8714 2.38317C17.4554 2.38317 17.9272 2.85502 17.9272 3.43904C17.9272 4.04564 17.4555 4.49491 16.8714 4.49491Z" fill="#939AA3" />
                    </svg>
                    <span>Events</span>
                </div>
                <div className="cursor-pointer pl-4 flex gap-[10px] items-center  text-[#516DFC] py-2 bg-[#E1F0FF] rounded-[7px]">
                    <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.02783 17.1181L4.70609 22.219C2.07217 20.3422 0.34375 17.1899 0.34375 13.6176C0.34375 11.658 0.863755 9.82559 1.76768 8.25995L6.64201 11.8355C6.40094 12.3772 6.26683 12.9817 6.26683 13.6175C6.267 15.0677 6.96305 16.3486 8.02769 17.1184L8.02783 17.1181Z" fill="#516DFC" />
                        <path d="M7.50581 10.5676L2.62891 6.9936C3.92375 5.36159 5.68594 4.14202 7.70236 3.56738C7.32953 4.46596 7.12635 5.45326 7.12635 6.49287C7.12635 7.80742 7.45492 9.04457 8.03126 10.1163C7.84133 10.2502 7.66849 10.4017 7.50589 10.5676H7.50581Z" fill="#516DFC" />
                        <path d="M20.3869 13.6169C20.3869 19.3726 15.8997 24.0393 10.3653 24.0393C8.79945 24.0393 7.31853 23.6656 6 22.9997L9.40924 17.7617C9.71752 17.8395 10.0364 17.8782 10.365 17.8782C12.5238 17.8782 14.2927 16.1403 14.449 13.9377C16.7433 13.885 18.7735 12.711 20.0443 10.917C20.2684 11.7765 20.3867 12.6826 20.3867 13.6167L20.3869 13.6169Z" fill="#516DFC" />
                        <path d="M20.4901 6.05238V6.75725H20.4732C20.2936 10.0916 17.6399 12.7491 14.3895 12.7491C11.0241 12.7491 8.28906 9.90104 8.28906 6.40466C8.28906 3.02468 10.8444 0.261516 14.0504 0.0776325V0.0605469H14.7282V0.0781555C17.819 0.254242 20.2999 2.83454 20.4729 6.05259L20.4901 6.05238ZM13.9893 9.32899V10.2342H14.6209V9.36367C14.6957 9.34798 14.7517 9.3363 14.8114 9.32845C15.7829 9.21164 16.5188 8.31812 16.4817 7.30399C16.4593 6.70967 16.2092 6.25862 15.6823 6.01805C15.3349 5.8587 14.9688 5.7459 14.6136 5.61392C14.3556 5.52065 14.0905 5.44289 13.8475 5.31876C13.5561 5.16726 13.5598 4.82517 13.8438 4.65834C13.9485 4.59628 14.083 4.56106 14.2023 4.54938C14.2508 4.54554 14.2959 4.54153 14.3443 4.54554H14.3556C14.7665 4.52601 15.1663 4.57291 15.4991 4.89894C15.727 4.63847 15.9436 4.39406 16.1678 4.13743C15.7456 3.67508 15.2001 3.56609 14.621 3.49236V2.57566H13.9859V3.49656C13.9596 3.5044 13.9484 3.51225 13.9338 3.51225C13.8854 3.52393 13.8366 3.53177 13.7918 3.54345C13.2988 3.64859 12.8951 3.88517 12.6671 4.3749C12.6484 4.41396 12.6333 4.45266 12.6224 4.49171C12.4804 4.86464 12.4767 5.26108 12.5401 5.65353C12.5961 6.00309 12.8502 6.20531 13.1266 6.3725C13.6012 6.66 14.1205 6.83485 14.6475 6.98253C14.8453 7.03675 15.0211 7.12236 15.1668 7.2777C15.4357 7.56118 15.3164 8.10915 14.9427 8.19859C14.2664 8.36177 13.6202 8.29971 13.0633 7.77493C12.8129 8.01204 12.5627 8.25299 12.2972 8.50944C12.7304 9.08408 13.3615 9.19302 13.9893 9.32902L13.9893 9.32899Z" fill="#516DFC" />
                    </svg>

                    <span>Earnings</span>
                </div>
                <div className="cursor-pointer pl-4 flex gap-[10px] items-center">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.918 21.0498V19.0498C20.918 17.9889 20.4965 16.9715 19.7464 16.2214C18.9962 15.4712 17.9788 15.0498 16.918 15.0498H8.91797C7.8571 15.0498 6.83969 15.4712 6.08954 16.2214C5.3394 16.9715 4.91797 17.9889 4.91797 19.0498V21.0498" fill="#939AA3" />
                        <path d="M20.918 21.0498V19.0498C20.918 17.9889 20.4965 16.9715 19.7464 16.2214C18.9962 15.4712 17.9788 15.0498 16.918 15.0498H8.91797C7.8571 15.0498 6.83969 15.4712 6.08954 16.2214C5.3394 16.9715 4.91797 17.9889 4.91797 19.0498V21.0498" stroke="#939AA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.918 11.0498C15.1271 11.0498 16.918 9.25894 16.918 7.0498C16.918 4.84067 15.1271 3.0498 12.918 3.0498C10.7088 3.0498 8.91797 4.84067 8.91797 7.0498C8.91797 9.25894 10.7088 11.0498 12.918 11.0498Z" fill="#939AA3" stroke="#939AA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>Profile</span>
                </div>
                <div className="cursor-pointer pl-4 flex gap-[10px] items-center">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_12_84)">
                            <path d="M20.318 15.0498C20.1849 15.3514 20.1451 15.686 20.204 16.0104C20.2628 16.3348 20.4174 16.6341 20.648 16.8698L20.708 16.9298C20.8939 17.1155 21.0414 17.3361 21.1421 17.5789C21.2427 17.8217 21.2945 18.082 21.2945 18.3448C21.2945 18.6076 21.2427 18.8679 21.1421 19.1107C21.0414 19.3535 20.8939 19.5741 20.708 19.7598C20.5222 19.9458 20.3016 20.0933 20.0588 20.1939C19.8161 20.2946 19.5558 20.3464 19.293 20.3464C19.0301 20.3464 18.7699 20.2946 18.5271 20.1939C18.2843 20.0933 18.0637 19.9458 17.878 19.7598L17.818 19.6998C17.5823 19.4693 17.283 19.3146 16.9586 19.2558C16.6342 19.197 16.2996 19.2367 15.998 19.3698C15.7022 19.4966 15.45 19.7071 15.2723 19.9753C15.0946 20.2436 14.9993 20.558 14.998 20.8798V21.0498C14.998 21.5802 14.7873 22.0889 14.4122 22.464C14.0371 22.8391 13.5284 23.0498 12.998 23.0498C12.4675 23.0498 11.9588 22.8391 11.5838 22.464C11.2087 22.0889 10.998 21.5802 10.998 21.0498V20.9598C10.9902 20.6288 10.8831 20.3078 10.6905 20.0385C10.4979 19.7692 10.2287 19.5641 9.91797 19.4498C9.61635 19.3167 9.28178 19.277 8.95738 19.3358C8.63299 19.3946 8.33365 19.5493 8.09797 19.7798L8.03797 19.8398C7.85222 20.0258 7.63165 20.1733 7.38885 20.2739C7.14605 20.3746 6.8858 20.4264 6.62297 20.4264C6.36014 20.4264 6.09988 20.3746 5.85709 20.2739C5.61429 20.1733 5.39371 20.0258 5.20797 19.8398C5.02202 19.6541 4.8745 19.4335 4.77385 19.1907C4.6732 18.9479 4.6214 18.6876 4.6214 18.4248C4.6214 18.162 4.6732 17.9017 4.77385 17.6589C4.8745 17.4161 5.02202 17.1955 5.20797 17.0098L5.26797 16.9498C5.49851 16.7141 5.65315 16.4148 5.71197 16.0904C5.77079 15.766 5.73108 15.4314 5.59797 15.1298C5.47121 14.834 5.26072 14.5818 4.99243 14.4041C4.72414 14.2264 4.40976 14.1311 4.08797 14.1298H3.91797C3.38754 14.1298 2.87883 13.9191 2.50376 13.544C2.12868 13.1689 1.91797 12.6602 1.91797 12.1298C1.91797 11.5994 2.12868 11.0907 2.50376 10.7156C2.87883 10.3405 3.38754 10.1298 3.91797 10.1298H4.00797C4.33896 10.1221 4.65997 10.0149 4.92927 9.82232C5.19856 9.62971 5.40368 9.36054 5.51797 9.0498C5.65108 8.74819 5.69079 8.41361 5.63197 8.08922C5.57315 7.76482 5.41851 7.46548 5.18797 7.2298L5.12797 7.1698C4.94202 6.98406 4.7945 6.76348 4.69385 6.52069C4.5932 6.27789 4.5414 6.01764 4.5414 5.7548C4.5414 5.49197 4.5932 5.23172 4.69385 4.98892C4.7945 4.74613 4.94202 4.52555 5.12797 4.3398C5.31371 4.15385 5.53429 4.00633 5.77709 3.90569C6.01988 3.80504 6.28014 3.75323 6.54297 3.75323C6.8058 3.75323 7.06605 3.80504 7.30885 3.90569C7.55165 4.00633 7.77222 4.15385 7.95797 4.3398L8.01797 4.3998C8.25365 4.63034 8.55298 4.78499 8.87738 4.84381C9.20178 4.90263 9.53635 4.86292 9.83797 4.7298H9.91797C10.2137 4.60304 10.466 4.39256 10.6437 4.12427C10.8213 3.85598 10.9167 3.54159 10.918 3.2198V3.0498C10.918 2.51937 11.1287 2.01066 11.5038 1.63559C11.8788 1.26052 12.3875 1.0498 12.918 1.0498C13.4484 1.0498 13.9571 1.26052 14.3322 1.63559C14.7073 2.01066 14.918 2.51937 14.918 3.0498V3.1398C14.9193 3.46159 15.0146 3.77598 15.1923 4.04427C15.37 4.31256 15.6222 4.52304 15.918 4.6498C16.2196 4.78292 16.5542 4.82263 16.8786 4.76381C17.203 4.70499 17.5023 4.55034 17.738 4.3198L17.798 4.2598C17.9837 4.07385 18.2043 3.92633 18.4471 3.82569C18.6899 3.72504 18.9501 3.67323 19.213 3.67323C19.4758 3.67323 19.7361 3.72504 19.9788 3.82569C20.2216 3.92633 20.4422 4.07385 20.628 4.2598C20.8139 4.44555 20.9614 4.66613 21.0621 4.90892C21.1627 5.15172 21.2145 5.41197 21.2145 5.6748C21.2145 5.93764 21.1627 6.19789 21.0621 6.44069C20.9614 6.68348 20.8139 6.90406 20.628 7.0898L20.568 7.1498C20.3374 7.38548 20.1828 7.68482 20.124 8.00922C20.0651 8.33361 20.1049 8.66819 20.238 8.9698V9.0498C20.3647 9.34557 20.5752 9.59782 20.8435 9.7755C21.1118 9.95317 21.4262 10.0485 21.748 10.0498H21.918C22.4484 10.0498 22.9571 10.2605 23.3322 10.6356C23.7073 11.0107 23.918 11.5194 23.918 12.0498C23.918 12.5802 23.7073 13.0889 23.3322 13.464C22.9571 13.8391 22.4484 14.0498 21.918 14.0498H21.828C21.5062 14.0511 21.1918 14.1464 20.9235 14.3241C20.6552 14.5018 20.4447 14.754 20.318 15.0498Z" fill="#D9D9D9" stroke="#939AA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.918 15.0498C14.5748 15.0498 15.918 13.7067 15.918 12.0498C15.918 10.393 14.5748 9.0498 12.918 9.0498C11.2611 9.0498 9.91797 10.393 9.91797 12.0498C9.91797 13.7067 11.2611 15.0498 12.918 15.0498Z" stroke="#939AA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_12_84">
                                <rect width="24" height="24" fill="white" transform="translate(0.917969 0.0498047)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>Settings</span>
                </div>
            </div>
        </div>
    );
}

export default SideBar;