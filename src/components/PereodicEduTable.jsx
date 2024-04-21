import React from 'react';
import { useTranslation } from 'react-i18next';

const PereodicEduTable = () => {
  const { t } = useTranslation();

  return (
    <table className="border-collapse border border-gray-300 max-w-[1270px] w-full">
      <thead>
        <tr className="bg-gray-200 ">
          <th className="border border-gray-300 p-2 text-left text-black">{t('Дата первого получения водительских прав категории D или D1:')}</th>
          <th className="border border-gray-300 p-2 text-left text-black">{t('Дата получения обязательной записи о периодическом обучении:')}</th>
        </tr>
      </thead>
      <tbody className='text-[#414247]'>
        <tr className='bg-[#faf8f8]'>
          <td className="border border-gray-300 p-2">{t('До 31 декабря 1980 г.')}</td>
          <td className="border border-gray-300 p-2">{t('10 сентября 2009 г.')}</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">{t('1 января 1981 г. - 31 декабря 1990 г.')}</td>
          <td className="border border-gray-300 p-2">{t('10 сентября 2010 г.')}</td>
        </tr>
        <tr className='bg-[#faf8f8]'>
          <td className="border border-gray-300 p-2">{t('1 января 1991 г. - 31 декабря 2000 г.')}</td>
          <td className="border border-gray-300 p-2">{t('10 сентября 2011 г.')}</td>
        </tr>
        <tr >
          <td className="border border-gray-300 p-2">{t('1 января 2001 г. - 31 декабря 2005 г.')}</td>
          <td className="border border-gray-300 p-2">{t('10 сентября 2012 г.')}</td>
        </tr>
        <tr className='bg-[#faf8f8]'>
          <td className="border border-gray-300 p-2">{t('1 января 2006 г. - 10 сентября 2008 г.')}</td>
          <td className="border border-gray-300 p-2">{t('10 сентября 2013 г.')}</td>
        </tr>
        <tr className='text-black font-semibold'>
          <td className="border border-gray-300 p-2">{t('Дата получения впервые водительских прав категории С или С1:')}</td>
          <td className="border border-gray-300 p-2">{t('Дата получения обязательной записи о периодическом обучении:')}</td>
        </tr>
        <tr className='bg-[#faf8f8]'>
          <td className="border border-gray-300 p-2">{t('До 31 декабря 1980 г.')}</td>
          <td className="border border-gray-300 p-2">{t('10 сентября 2010 г.')}</td>
        </tr>
        <tr >
          <td className="border border-gray-300 p-2">{t('1 января 1981 г. - 31 декабря 1995 г.')}</td>
          <td className="border border-gray-300 p-2">{t('10 сентября 2011 г.')}</td>
        </tr>
        <tr className='bg-[#faf8f8]'>
          <td className="border border-gray-300 p-2">{t('1 января 1996 г. - 31 декабря 2000 г.')}</td>
          <td className="border border-gray-300 p-2">{t('10 сентября 2012 г.')}</td>
        </tr>
        <tr >
          <td className="border border-gray-300 p-2">{t('1 января 2001 г. - 31 декабря 2005 г.')}</td>
          <td className="border border-gray-300 p-2">{t('10 сентября 2013 г.')}</td>
        </tr>
        <tr className='bg-[#faf8f8]'>
          <td className="border border-gray-300 p-2">{t('1 января 2006 г. - 10 сентября 2009 г.')}</td>
          <td className="border border-gray-300 p-2">{t('10 сентября 2014 г.')}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PereodicEduTable; 