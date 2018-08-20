import styled, {injectGlobal} from 'styled-components'

injectGlobal`
  margin: 0;
  padding: 0;
`

export const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`

export const Modal = styled.div`
  min-width: 300px;
  min-height: 400px;
`