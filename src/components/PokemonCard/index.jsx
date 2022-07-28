import React from 'react'
import Button from '../Button'
import { Card } from './styles'

const PokemonCard = ({ name, onClick }) => {
  return (
    <Card>
      <h3>{name}</h3>

      <Button onClick={onClick}>Ver</Button>
    </Card>
  )
}

export default PokemonCard