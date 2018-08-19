import React, { Component } from 'react'
import { connect } from  'react-redux'
import { startWatcher, selectItem } from '../actions/actions'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Row from './Row'
import { Modal, Container } from './Style'

class App extends Component {
  componentDidMount = () => this.props.startWatcher()

  render() {
    const { data, isFetching, isError, hasItem, item } = this.props.list
    console.log(JSON.stringify(item))
    return (
      <Container>
        {hasItem && 
          <Modal>
            {JSON.stringify(item) }
            <Button>CLOSE</Button>
          </Modal>
        }
        {isFetching && !isError ? 
          <CircularProgress size={50}/> :
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>URL</TableCell>
                  <TableCell>Created at</TableCell>
                  <TableCell>Autor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((hit, i) => 
                  <Row 
                    key={i} 
                    hit={hit}
                    selectHandler={() => this.props.selectItem(hit)}
                  />)}
              </TableBody>
          </Table>}
      </Container>
    );
  }
}

export default connect(
  state => ({ list: state.dataReducer }),
  { startWatcher, selectItem })(App)
