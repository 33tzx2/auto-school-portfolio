import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';


const ContactForm = () => {
  const { t } = useTranslation();
  const handlePhoneNumberChange = (e, field) => {
    const cleanedValue = e.target.value.replace(/\D/g, '');
    e.target.value = cleanedValue;
    field.onChange(e);
  };
  

  const MyPhoneInput = ({ ...props }) => {
    const [field] = useField(props);
    return (
      <input
        {...field}
        {...props}
        onChange={(e) => handlePhoneNumberChange(e, field)}
      />
    );
  };
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(t('Некорректный email')).required(t('Поле является обязательным')),
    fullName: Yup.string().min(2, t('Имя должно содержать не менее 2 символов')).max(40, t('Имя не должно превышать 40 символов')).required(t('Поле является обязательным')),
    phoneNumber: Yup.string().min(8, t('Номер телефона должен содержать не менее 8 цифр')).max(13, t('Номер телефона не должен превышать 13 цифр')).required(t('Поле является обязательным')),
    theme: Yup.string(),
    message: Yup.string(),
    checkbox: Yup.boolean().oneOf([true], t('Необходимо согласиться с условиями')),
  });
  
  return (
    <Formik
            initialValues={{
              email: '',
              fullName: '',
              phoneNumber: '',
              theme: '',
              message: '',
              checkbox: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, values }) => (
              <Form className='bg-[#faf8f8] lg:bg-white w-full flex flex-col lg:px-[40px] lg:py-[30px] px-[10px] py-[20px] lg:mt-0 mt-[10px] lg:shadow-md shadow-none lg:rounded-md'>
                <div className='bg-white lg:p-0 p-[15px] flex flex-col rounded-md shadow-md lg:rounded-none lg:shadow-none'>
                  <div className='font-medium text-[1.75em] mb-[20px]'>{t('НАПИШИТЕ НАМ')}</div>
                  <div className='flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-45% lg:mr-[20px]'>
                      <Field className='border border-grey-500 p-[10px] min-h-[40px] my-[10px] w-full rounded-md' type='email' name='email' placeholder={t('Эл. почта')} />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm " />
                    </div>
                    <div className='w-full lg:w-45%'>
                      <Field className='border border-grey-500 p-[10px] min-h-[40px] my-[10px] w-full rounded-md' type='text' name='fullName' placeholder={t('Имя и Фамилия')} />
                      <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm " />
                    </div>
                  </div>
                  <MyPhoneInput
              className='border border-grey-500 p-[10px] min-h-[40px] my-[10px] rounded-md'
              type='tel'
              name='phoneNumber'
              placeholder={t('Номер телефона')}
            />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
                  <Field className='border border-grey-500 p-[10px] min-h-[40px] my-[10px] rounded-md' type='text' name='theme' placeholder={t('Тема')} />
                  <ErrorMessage name="theme" component="div" className="text-red-500 text-sm" />
                  <Field className='border border-grey-500 p-[10px] min-h-[80px] my-[10px] rounded-md' as='textarea' name='message' placeholder={t('Сообщение')} />
                  <label>
                    <div className='flex flex-row items-start lg:my-[20px] mt-[5px]'>
                      <Field type='checkbox' name='checkbox' className='mr-[8px] mt-[5px] rounded-md'/>
                      <div className='lineHeightMedium'>{t('Я ДАЮ СОГЛАСИЕ НА ОБРАБОТКУ МОИХ ПЕРСОНАЛЬНЫХ ДАННЫХ В ЦЕЛЯХ ОБРАБОТКИ ЗАПРОСА И ЗАЯВЛЯЮ, ЧТО ОЗНАКОМИЛСЯ С ПОЛОЖЕНИЯМИ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ.')}</div>
                    </div>
                  </label>
                  <ErrorMessage name="checkbox" component="div" className="text-red-500 text-sm" />
                  <button className={'border-[#0378db] font-semibold text-[1.2em] lg:min-w-[150px] lg:py-[7px] py-[13px] px-[25px] border-[2px] w-full lg:w-min h-min rounded-2xl flex justify-center items-center my-[40px]  lg:my-[20px] lg:self-start self-center' + ((!values.email || !values.fullName || !values.phoneNumber || !values.checkbox || !isValid) ? ' cursor-not-allowed border-gray-500' : ' hover:text-white hover:bg-[#0378db] transition-colors duration-400')} type='submit' disabled={isSubmitting || !isValid}>
                    {t('Отправить')}
                  </button>

                </div>
              </Form>
            )}
          </Formik>
  )
}

export default ContactForm