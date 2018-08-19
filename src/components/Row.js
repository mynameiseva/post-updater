import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
export default class Row extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }
  handleClickListItem = () => this.setState({isOpen: true})

  handleCloseButton = () => this.setState({isOpen: false})

  render() {
    const { title, url, created_at, author } = this.props.hit
    
    return (
      <TableRow onClick={this.props.selectHandler}>
        <TableCell>{title}</TableCell>
        <TableCell>{url ? url : 'No URL :('}</TableCell>
        <TableCell>{created_at}</TableCell>
        <TableCell>{author}</TableCell>
      </TableRow>
    )
  }
}