import MUIDataTable from "mui-datatables";
export const TableBasic = ({ data }) => {
  const columns = ["Fecha", "Hora","Usuario", "Transacción", "Ciudad", "Sucursal"];

  return (
    <MUIDataTable title={"Auditoría PAR-KUD"} data={data} columns={columns} />
  );
};
