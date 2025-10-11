import { createPortal } from "react-dom";

export default function Modal({children}){
    return createPortal(
        <div className="modal p-4 fixed top-0 right-[0%] w-[calc(100% - 121px)] min-h-screen z-[100]">
            {children}
        </div>
        ,
        document.getElementById('modal')
);}