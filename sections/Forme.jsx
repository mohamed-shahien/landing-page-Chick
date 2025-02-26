'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    store: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formURL =
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2Y40a_hx36UM0WmvXmcZkT19Y58j_A6hejWkM0uyt4ci2nw/formResponse';
    const formBody = new URLSearchParams();
    formBody.append('entry.25397604', formData.name);
    formBody.append('entry.838003227', formData.email);
    formBody.append('entry.1467162486', formData.store);
    formBody.append('entry.2108675564', formData.message);

    fetch(formURL, {
      method: 'POST',
      mode: 'no-cors',
      body: formBody,
    })
      .then(() => {
        alert('تم إرسال البيانات بنجاح!');
        setFormData({
          name: '',
          email: '',
          store: '',
          message: '',
        });
      })
      .catch((err) => console.error('خطأ:', err));
  };
  return (
    <div className="container mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
      <h2 className="text-2xl font-bold text-white mb-2 text-center">
        تواصل معنا
      </h2>
      <p className="text-gray-300 text-center mb-6">
        نحن هنا لمساعدتك! لا تتردد في إرسال استفساراتك أو ملاحظاتك، وسنقوم بالرد
        عليك في أقرب وقت ممكن.
      </p>
      <form onSubmit={handleSubmit} className="text-right">
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="name"
          >
            الاسم الكامل
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="email"
          >
            البريد الإلكتروني
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="store"
          >
            المتجر
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="store"
            value={formData.store}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="message"
          >
            الرسالة
          </label>
          <textarea
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            rows="3"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
            type="submit"
          >
            إرسال
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
