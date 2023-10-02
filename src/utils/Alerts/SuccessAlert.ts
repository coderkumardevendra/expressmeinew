import Swal from "sweetalert2";

const showSuccessDialog = (
  title: string,
  content: string,
  confirmButtonText?: string,
  colorConfirmButton?: string,
) => {
  Swal.fire({
    title: title ? title : "Operação realizada com sucesso !",
    text: content ? content : "",
    icon: "success",
    showCancelButton: false,
    showDenyButton: false,
    confirmButtonText: confirmButtonText ? confirmButtonText : "Ok !",
    confirmButtonColor: colorConfirmButton ? colorConfirmButton : "#1E88E5",
  })
};

export default showSuccessDialog;
