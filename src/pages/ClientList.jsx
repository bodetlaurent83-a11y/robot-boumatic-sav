import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const clients = [
  { id: 1, name: "GAEC du Guéret", technician: "Faye Benjamin", contract: true },
  { id: 2, name: "GAEC du Pilat", technician: "Alexandre Dutrait", contract: false },
  { id: 3, name: "GAEC Terron", technician: "Rémi Blanc", contract: true },
  { id: 4, name: "GAEC Haut de Béjure", technician: "Adrien Delorme", contract: true },
  { id: 5, name: "GAEC de Bernuizet", technician: "Faye Benjamin", contract: false }
]

const ClientList = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <h1>Robot Boumatic SAV</h1>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Technicien référent</th>
            <th>Contrat</th>
            <th>Fiche</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.technician}</td>
              <td>{client.contract ? "Oui" : "Non"}</td>
              <td><button onClick={() => navigate(`/client/${client.id}`)}>Ouvrir</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClientList
