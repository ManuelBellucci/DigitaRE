import { Slide } from 'react-awesome-reveal'
import Form from './utils/Form'
import FormField from './utils/FormField'
import Submit from './utils/Submit'
import FormHeader from './utils/FormHeader'
import data from '../../../data/contact.json'

const Contact = () => {
  const { title, subtitle } = data
  //   // email regex
  //   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  //   // international phone number regex
  //   const phoneRegex = /^\+[1-9]\d{1,14}$/

  //   // email validation
  //   const validateEmail = (email) => {
  //     if (emailRegex.test(email)) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }

  //   // phone number validation
  //   const validatePhone = (phone) => {
  //     if (phoneRegex.test(phone)) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }

  //   // handle form submit
  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     const name = e.target[0].value
  //     const surname = e.target[1].value
  //     const email = e.target[2].value
  //     const phone = e.target[3].value
  //     const message = e.target[4].value

  //     if (name && surname && email && phone && message) {
  //       if (validateEmail(email)) {
  //         if (validatePhone(phone)) {
  //           // send data to backend
  //           console.log('sending data to backend...')
  //         } else {
  //           alert('Inserisci un numero di telefono valido')
  //         }
  //       } else {
  //         alert('Inserisci una email valida')
  //       }
  //     } else {
  //       alert('Compila tutti i campi')
  //     }
  //   }

  return (
    <section
      className='bg-[#110F0F] flex w-full px-10 lg:px-[70px] pt-20 pb-[70px] justify-center items-center'
      id='contatti'
    >
      <Slide triggerOnce direction='up'>
        <Form>
          <FormHeader title={title} subtitle={subtitle} />
          <div className='flex flex-col gap-4 flex-1 w-full max-w-lg self-center text-black'>
            <FormField type='text' placeholder='Nome' required />
            <FormField type='text' placeholder='Cognome' required />
            <FormField type='email' placeholder='Email' required />
            <FormField type='tel' placeholder='Telefono' required />
          </div>
          <Submit>
            Invia
          </Submit>
        </Form>
      </Slide>
    </section>
  )
}

export default Contact
