import styled, {injectGlobal} from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

injectGlobal`
 * {
  margin: 0;
  padding: 0;
 } 
`

export const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`

export const Modal = styled.div`
  min-width: 300px;
  min-height: 400px;
`

export const Spinner = styled(CircularProgress).attrs({
  size: 50
})`
  && {
    display: block;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`

export const StyledTextField = styled(TextField).attrs({
  id: 'name',
  label: 'Search',
  placeholder: 'Search what u want',
  margin: 'normal'
})``

export const StyledButton = styled(Button).attrs({
  variant: 'contained',
  color: 'secondary'
})``