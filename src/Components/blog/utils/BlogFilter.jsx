const BlogFilter = ({ titleFilter, setTitleFilter, categoryFilter, setCategoryFilter }) => (
  <div className='flex gap-4'>
    <input
      type='text'
      name='browser'
      placeholder='Cerca ora'
      id='browser'
      value={titleFilter}
      onChange={(e) => setTitleFilter(e.target.value)}
      className='text-black p-4 w-[60%] lg:w-[80%] font-bold text-center self-center rounded'
    />
    <select
      name='filter'
      id='filter'
      value={categoryFilter}
      onChange={(e) => setCategoryFilter(e.target.value)}
      className='text-black p-4 w-[40%] lg:w-[20%] rounded bg-slate-200'
    >
      <option value='nofilter'>Senza filtro</option>
      <option value='acquisizione'>Acquisizione</option>
      <option value='advertising'>Advertising</option>
      <option value='vendita'>Vendita</option>
    </select>
  </div>
)

export default BlogFilter
