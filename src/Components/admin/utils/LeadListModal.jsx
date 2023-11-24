/* eslint-disable react/jsx-pascal-case */
import { useState, useEffect } from 'react'
import Pagination from '../../commons/Pagination'
import LeadItem from './LeadItem'
import ErrorMessage from '../../commons/ErrorMessage'
import Loader from '../../commons/Loader'
import ReactModal from 'react-modal'

const LeadListModal = ({ isOpen, onRequestClose }) => {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const leadsPerPage = 10

  const renderLeadItems = () => {
    return currentLeads.map((lead) => (
      <LeadItem
        key={String(lead._id)}
        lead={lead}
      />
    ))
  }

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

  const totalPages = Math.ceil(leads.length / leadsPerPage)

  const indexOfLastLead = currentPage * leadsPerPage
  const indexOfFirstLead = indexOfLastLead - leadsPerPage
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead)

  const hasPrevPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

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
