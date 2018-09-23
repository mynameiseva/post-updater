import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Row from './Row'

export default ({ data, selectItem }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>URL</TableCell>
          <TableCell>Created at</TableCell>
          <TableCell>Autor</TableCell>
        </TableRow>
      </TableHead >
      <TableBody>
        {data.map((hit, i) =>
          <Row
            key={i}
            {...hit}
            selectHandler={() => selectItem(hit)}
          />)
        }
      </TableBody>
    </Table>
  )
}