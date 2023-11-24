/* eslint-disable space-unary-ops */
// imports
import React, { useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import Form from './utils/Form'
import FormField from './utils/FormField'
import FormHeader from './utils/FormHeader'
import data from '../../../data/contact.json'

const Contact = () => {
  // destructuring e states
  const { title, subtitle } = data
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState({})

  // funzione per validare tramite regex il numero telefonico
  const validatePhone = (value) => {
    const phoneRegex = /^[0-9]{9,12}$/
    return phoneRegex.test(value)
  }

  // funzione per validare il form passando tutte le eventuali validazioni (potrei aggiungere anche un regex per l'email)
  const validateForm = () => {
    let valid = true
    const newErrors = {}

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Inserisci un numero di telefono valido'
      valid = false
    }
    setErrors(newErrors)
    return valid
  }

  // funzione per gestire il cambio dell'evento ed aggiornare formData
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
    // error handling
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: ''
    }))
  }

  // funzione per gestire il submit. Se il form è completo e validato, fa una richiesta fetch al server per fare un POST del contatto
  const handleSubmit = async (e) => {
    // per evitare il refresh della pagina con il submit del form
    e.preventDefault()

    // gestisco che il form sia valido prima del try..catch
    if (!validateForm()) {
      return
    }

    try {
      const response = await fetch('http://localhost:3001/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Errore durante l\'invio dei dati')
      }

      window.alert('Dati inviati correttamente')
    } catch (error) {
      console.error('Errore durante l\'invio dei dati:', error)
    }
  }

  return (
    <section className='bg-[#110F0F] flex w-full px-10 lg:px-[70px] pt-20 pb-[70px] justify-center items-center' id='contatti'>
      <Slide triggerOnce direction='up'>
        <Form onSubmit={handleSubmit}>
          <FormHeader title={title} subtitle={subtitle} />
          <div className='flex flex-col gap-4 flex-1 w-full max-w-lg self-center text-black'>
            <FormField
              type='text'
              placeholder='Nome'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FormField
              type='text'
              placeholder='Cognome'
              name='surname'
              value={formData.surname}
              onChange={handleChange}
              required
            />
            <FormField
              type='email'
              placeholder='Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className='text-red-500'>{errors.email}</p>}
            <FormField
              type='tel'
              placeholder='Telefono'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className='text-red-500'>{errors.phone}</p>}
          </div>
        </Form>
      </Slide>
    </section>
  )
}

export default Contact
