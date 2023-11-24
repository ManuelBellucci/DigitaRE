const FormField = ({ type, placeholder, required, name, onChange, value }) => (
  <input
    className='border-2 border-white rounded-lg p-2'
    type={type}
    placeholder={placeholder}
    required={required}
    name={name}
    onChange={onChange}
    value={value}
  />
)

export default FormField
