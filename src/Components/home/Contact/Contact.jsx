/* eslint-disable space-unary-ops */
import React, { useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import Form from './utils/Form'
import FormField from './utils/FormField'
import FormHeader from './utils/FormHeader'
import data from '../../../data/contact.json'

const Contact = () => {
  const { title, subtitle } = data

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: ''
  })

  const [errors, setErrors] = useState({})

  const validatePhone = (value) => {
    const phoneRegex = /^[0-9]{9,12}$/
    return phoneRegex.test(value)
  }
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

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))

    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: ''
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

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
