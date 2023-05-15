import React from 'react'
import { LoadMoreBtnStyled } from './LoadMoreButton.styled'

export default function LoadMoreButton({ onClick, disabled }) {
  return (
    <LoadMoreBtnStyled onClick={onClick} disabled={disabled}>
      Load More
    </LoadMoreBtnStyled>
  )
}
