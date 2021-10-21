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
import {getPosicionXDivision} from 'src/api/posiciones'
import useAuth from 'src/hooks/useAuth';

const columns = [
  { id: 'nombre', label: 'POSICIONES', minWidth: 170 },
  { id: 'hora', label: 'SOCIOS VINCULADOS', minWidth: 100 },

  {
    id: 'usuario',
    label: 'ACCIONES',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}



export default function EditProfileTab({valor}) {
  const token = window.localStorage.getItem('accessToken');
  const { user } = useAuth();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows,setRows] = useState([])

  console.log('este es valor de edit',valor)



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


const llamadaPosicion = async(param) => {

    const result = await getPosicionXDivision(param,token)
    console.log('posicionesas',result)


    if(result && result.posiciones.length > 0){
        
        let arr = []

        for(let val of result.posiciones){
            let obj = {
                nombre: val.nombre
            }
            arr.push(obj)
        }
        setRows(arr)
    }else{
        setRows([])
    }
   
}

  useEffect(()=>{

    if(valor !== null){

    llamadaPosicion(valor)

     

    }

    
    
},[valor])
  

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
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