const LeadItem = ({ lead }) => {
  return (
    <div className='grid grid-cols-3 text-black items-center'>
      <div className='text-myBlue text-base lg:text-lg font-bold'>{lead.name} {lead.surname}</div>
      <div className='text-black text-sm truncate'>{lead.email}</div>
      <div className='text-black text-sm'>{lead.phone}</div>
    </div>
  )
}

export default LeadItem
