import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const showSuccessAlert = (message, page) => {
  MySwal.fire({
    title: "<strong>Listo</strong>",
    html: `<i>${message}</i>`,
    icon: "success",
    confirmButtonText: "Aceptar",
  }).then((result) => {
    if (result.isConfirmed) {
      reloadPage(page);
    }
  });
};

export const showErrorAlert = (message) => {
  MySwal.fire({
    title: "<strong>Error</strong>",
    html: `<i>${message}</i>`,
    icon: "error",
  });
};

const reloadPage=(page)=> {
  window.location.href = page;
}