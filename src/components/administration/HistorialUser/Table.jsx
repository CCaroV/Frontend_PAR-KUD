import MUIDataTable from "mui-datatables";
export const TableBasic = ({ data }) => {
  const columns = ["Fecha", "Usuario", "Transacción", "Ciudad", "Sucursal"];

  return (
    <MUIDataTable title={"Auditoría PAR-KUD"} data={data} columns={columns} />
  );
};
