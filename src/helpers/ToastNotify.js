 //https://fkhadra.github.io/react-toastify/introduction
 //! Get the toast emitter from above link and export here !

import { toast } from "react-toastify";

 export const toastSuccess = (msj)=> {
 
toast.success(msj, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,

});
}
 export const toastWarning = (msj)=> {
 
toast.warn(msj, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,

});

} 

export const toastError = (msj)=> {
 
toast.error(msj, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,

});
}