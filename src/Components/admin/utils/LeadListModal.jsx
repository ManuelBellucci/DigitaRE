/* eslint-disable react/jsx-pascal-case */

// imports
import { useState, useEffect } from 'react'
import Pagination from '../../commons/Pagination'
import LeadItem from './LeadItem'
import ErrorMessage from '../../commons/ErrorMessage'
import Loader from '../../commons/Loader'
import ReactModal from 'react-modal'

const LeadListModal = ({ isOpen, onRequestClose }) => {
  // states
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  // numero di leads per pagina
  const leadsPerPage = 10

  // funzione per renderizzare i LeadItem
  const renderLeadItems = () => {
    return currentLeads.map((lead) => (
      <LeadItem
        key={String(lead._id)}
        lead={lead}
      />
    ))
  }

  // funzione per rendere la paginazione con Pagination
  const renderPagination = () => {
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    )
  }

  // effetto per fetchare le lead quando il modale è aperto (isOpen)
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/contacts')
        const data = await response.json()
        setLeads(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching leads:', error)
        setError(true)
        setLoading(false)
      }
    }

    if (isOpen) {
      fetchLeads()
    }
  }, [isOpen])

  // costante per salvare il numero totale di pagine in base al numero di leads e il num. di leads per pagina
  const totalPages = Math.ceil(leads.length / leadsPerPage)

  // costanti per salvare gli indici
  const indexOfLastLead = currentPage * leadsPerPage
  const indexOfFirstLead = indexOfLastLead - leadsPerPage

  // costanti per salvare le lead in pagina
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead)

  // costanti per sapere se esistono le prev page o next page
  const hasPrevPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  // funzioni per gestire la navigazione nelle pagine
  const handlePrevPage = () => {
    if (hasPrevPage) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className=''
      overlayClassName='overlay'
    >
      {loading && <Loader />}
      {error && <ErrorMessage text='Errore nel caricamento dei post' />}
      {!loading && !error && (
        <div className='flex flex-col gap-4'>
          {renderLeadItems()}
          {renderPagination()}
        </div>
      )}
    </ReactModal>
  )
}

export default LeadListModal
