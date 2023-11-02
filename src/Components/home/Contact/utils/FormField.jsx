const FormField = ({ type, placeholder, required }) => (
  <input
    className='border-2 border-white rounded-lg p-2'
    type={type}
    placeholder={placeholder}
    required={required}
  />
)

export default FormField
