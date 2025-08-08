import React from 'react'
import { useParams } from 'react-router-dom'

const ClientDetail = () => {
  const { id } = useParams()
  return (
    <div>
      <h2>Fiche du Client #{id}</h2>
      <p>Ici s'affichera la fiche complète du client avec ses entretiens, interventions, garanties, etc.</p>
    </div>
  )
}

export default ClientDetail
