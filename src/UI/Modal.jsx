import { createPortal } from "react-dom";

export default function Modal({children}){
    return createPortal(
        <div className="modal p-4 absolute top-0 right-[0%] w-[calc(100% - 121px)] h-[880px] z-[100]">
            {children}
        </div>
        ,
        document.getElementById('modal')
);}