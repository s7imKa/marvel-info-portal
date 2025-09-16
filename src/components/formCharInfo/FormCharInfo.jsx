import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

import useMarvelService from '../../services/MarvelService'

import './formCharInfo.css'
import '../../assets/styles/button.css'

const FormCharInfo = () => {
    const navigate = useNavigate()
    const [resultFindChar, setResultFindChar] = useState([])

    const { getAllCharacters } = useMarvelService()

    const searchChar = async value => {
        const allChars = await getAllCharacters(0, 20)
        const res = allChars.filter(
            item => item.name.toLowerCase() === value.search.toLowerCase(),
        )
        setResultFindChar(res[0])
         if (res[0]) {
             navigate(`/char/${res[0].id}`)
         }
        
    }

    console.log(resultFindChar)

    return (
        <Formik
            initialValues={{
                search: '',
            }}
            validationSchema={Yup.object({
                search: Yup.string()
                    .min(2, 'Мінімальна кількість символів 2!')
                    .matches(/^[^\d]+$/, 'Тільки букви, без цифр!')
                    .required('Обовязкове поле...'),
            })}
            onSubmit={values => searchChar(values)}
        >
            {({ errors, isSubmitting }) => (
                <Form className='form-serach'>
                    <label htmlFor='text'>Or find a character by name:</label>
                    <Field
                        id='search'
                        name='search'
                        type='text'
                        placeholder={'Enter name...'}
                    />
                    {!resultFindChar && !errors.search ? (
                        <div>Героя не знайдено !</div>
                    ) : null}
                    <ErrorMessage name='search' component={'div'} />
                    <button className={'button'}type='submit' disabled={isSubmitting}>
                        Пошук
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default FormCharInfo
