import React, {Component} from 'react'
import {connect} from  'react-redux'
import ReactJson from 'react-json-view'
import {startWatcher, selectItem, closeModal} from '../actions/actions'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Row from './Row'
import {Modal, Container, Spinner} from './Style'
import {toLower, contains, filter} from 'ramda'

class App extends Component {
  constructor() {
    super()
      this.state = {value: ''}
  }
  
  componentDidMount = () => this.props.startWatcher()

  shouldComponentUpdate = (nextProps, nextState) => {
    const {data, item, isModalOpen} = this.props.list

    if(nextProps.list.data !== data) return true 
    if(nextState.value !== this.state.value) return true 
    if(nextProps.list.item !== item) return true
    if(nextProps.list.isModalOpen !== isModalOpen) return true
    return false
  }

  handleValue = e => this.setState({value: e.target.value})
  
  render() {
    const {data, isFetching, isError, item, hasItem, isModalOpen} = this.props.list
    const {value} = this.state
    const filteredData = filter(i => contains(toLower(value), toLower(i.title)), data)
    
    return (
      <Container>
        {hasItem && isModalOpen &&
          <Modal>
            {<ReactJson src={item}/>}
              <Button 
                variant="contained"
                color="secondary"
                onClick={() => this.props.closeModal()}>
                CLOSE
              </Button>
          </Modal>}
        {isFetching && !isError && !isModalOpen && filteredData.length === 0 &&  <Spinner/>}
        {!isModalOpen && !isFetching && 
          <TextField
            id="name"
            label="Search"
            value={value}
            placeholder="Search topic"
            onChange={e => this.handleValue(e)}
            margin="normal"
          />}
        {!isFetching && !isError &&
           !isModalOpen && filteredData.length > 0 &&
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
                {filteredData.map((hit, i) => 
                  <Row 
                    key={i} 
                    hit={hit}
                    selectHandler={() => this.props.selectItem(hit)}
                  />)}
              </TableBody>
            </Table>}
          {filteredData.length === 0 && value.length > 0 && <div>No results</div>}
      </Container>
    )
  }
}

export default connect(
  state => ({list: state.reducer}),
  {startWatcher, selectItem, closeModal})(App)
