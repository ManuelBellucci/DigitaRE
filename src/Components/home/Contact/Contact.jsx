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
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const phoneRegex = /^\+?[0-9]+$/

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    setErrors({
      ...errors,
      [e.target.name]: ''
    })
  }

  const validateField = (fieldName, value, errorMessage) => {
    if (!value.trim()) {
      setErrors({
        ...errors,
        [fieldName]: errorMessage
      })
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, surname, email, phone, message } = formData

    const isEmailValid = validateField('email', email, emailRegex, 'Inserisci una email valida')
    const isPhoneValid = validateField('phone', phone, phoneRegex, 'Inserisci un numero di telefono valido')

    if (name && surname && isEmailValid && isPhoneValid && message) {
      console.log('Sending data to backend...', formData)

      setFormData({
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: ''
      })
    } else {
      window.alert('TODO')
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
