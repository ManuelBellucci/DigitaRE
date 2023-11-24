const LeadItem = ({ lead }) => {
  return (
    <div className='grid grid-cols-3 text-black'>
      <div className='text-myBlue text-lg font-bold'>{lead.name} {lead.surname}</div>
      <div className='text-black text-sm'>{lead.email}</div>
      <div className='text-black text-sm'>{lead.phone}</div>
    </div>
  )
}

export default LeadItem
