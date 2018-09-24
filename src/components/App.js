import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactJson from 'react-json-view'
import { startWatcher, selectItem, closeModal } from '../actions/actions'
import { Modal, Container, StyledTextField, StyledButton, Spinner } from './Style'
import { toLower, contains, filter, sort, descend, ascend, compose, prop } from 'ramda'
import ContentTable from './ContentTable'
import {compose, withHandlers} from 'recompose'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      byTitle: 'title',
      byTime: 'created_at',
      byAuthor: 'author'
    }
  }

  componentDidMount = () => this.props.startWatcher()

  shouldComponentUpdate = (nextProps, nextState) => {
    const { data, item, isModalOpen } = this.props.list

    if (nextProps.list.data !== data) return true
    if (nextState.searchValue !== this.state.searchValue) return true
    if (nextProps.list.item !== item) return true
    if (nextProps.list.isModalOpen !== isModalOpen) return true
    return false
  }

  handleSearchValue = e =>
    this.setState({ searchValue: toLower(e.target.value) })

  render() {
    const { data, isFetching, isError, item, hasItem, isModalOpen } = this.props.list
    const { searchValue } = this.state

    const filterByInput = ({ title }) => contains(toLower(searchValue), toLower(title))
    const filteredData = filter(filterByInput, data)
    const sorted = sort(ascend(compose(toLower, prop('author'))))

    return (
      <Container>
        {hasItem && isModalOpen &&
          <Modal>
            <ReactJson src={item} />
            <StyledButton
              onClick={this.props.closeModal}>
              CLOSE
            </StyledButton>
          </Modal>}
        {isFetching && !isModalOpen && filteredData.length === 0 && <Spinner />}
        {!isModalOpen && !isFetching &&
          <StyledTextField
            value={searchValue}
            onChange={this.handleSearchValue}
          />}
        {!isFetching && !isError && !isModalOpen && filteredData.length > 0 &&
          <ContentTable
            data={(filteredData)}
            selectItem={this.props.selectItem}
          />}
        {filteredData.length === 0 && searchValue.length > 0 && <div>No results</div>}
      </Container>
    )
  }
}

export default connect(
  state => ({ list: state.reducer }),
  { startWatcher, selectItem, closeModal })(App)