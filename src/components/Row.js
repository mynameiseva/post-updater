import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import moment from 'moment'

export default ({ title, url, created_at, author, selectHandler }) => (
  <TableRow>
    <TableCell onClick={selectHandler}>{title}</TableCell>
    <TableCell>{url ? <a target="_blank" href={url}>Read more</a> : 'No URL'}</TableCell>
    <TableCell onClick={selectHandler}>{moment(created_at).startOf('hour').fromNow()}</TableCell>
    <TableCell onClick={selectHandler}>{author}</TableCell>
  </TableRow>
)