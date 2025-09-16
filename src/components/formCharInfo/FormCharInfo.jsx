import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

import useMarvelService from '../../services/MarvelService'

import './formCharInfo.css'

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
        navigate(`/char/${res[0].id}`)
        
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
                <Form>
                    <label htmlFor='text'>Введіть ім'я героя</label>
                    <Field id='search' name='search' type='text' />
                    {!resultFindChar && !errors.search? (
                        <div>Героя не знайдено</div>
                    ) : null}
                    <ErrorMessage name='search' component={'div'} />
                    <button type='submit' disabled={isSubmitting}>
                        Пошук
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default FormCharInfo
