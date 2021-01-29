import React from "react"
import styled from "styled-components"

const Loading = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 5rem;
`

const LoadingScreen = () => {
  return <Loading>Loading...</Loading>
}

export default LoadingScreen
