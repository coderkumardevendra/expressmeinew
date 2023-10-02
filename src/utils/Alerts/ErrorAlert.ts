import Swal from "sweetalert2";

const showErrorDialog = (title : string, content : string, confirmButtonText?: string, colorConfirmButton? : string) => {
  Swal.fire({
    title: title ? title : "Erro !",
    text: content ? content : "Algo deu errado !",
    icon: "error",
    confirmButtonText: confirmButtonText ? confirmButtonText : "Ok !",
    confirmButtonColor: colorConfirmButton ? colorConfirmButton : "#f44336",
  });
};
      
export default showErrorDialog;