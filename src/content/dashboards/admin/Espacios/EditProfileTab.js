import  React , {useState,useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {getIngresoByEspacio} from 'src/api/ingreso'
const columns = [
  { id: 'fecha', label: 'FECHA', minWidth: 170 },
  { id: 'hora', label: 'HORA', minWidth: 100 },

  {
    id: 'usuario',
    label: 'USUARIO',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}



export default function EditProfileTab({espacio}) {
  const token = window.localStorage.getItem('accessToken');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows,setRows] = useState([])
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const llamadaIngreso = async(param) => {
    const result = await getIngresoByEspacio(param,token)

    let arr = []

    for(let val of result){
      const obj = {
        hora: val.hora,
        fecha: val.fecha,
        usuario: `${val.usuario !== null && val.usuario.persona !== null ? val.usuario.persona.nombre : ''} ${val.usuario !== null && val.usuario.persona !== null ? val.usuario.persona.apellido : ''}`  
      }

      arr.push(obj)
    }

  setRows(arr)
    console.log('llamada de ingreso',result)
  }

  useEffect(()=>{
    llamadaIngreso(espacio)
  },[])
  

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
        {rows && rows.length === 0  ? <caption>No posee registro</caption> : null  }  
                
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}