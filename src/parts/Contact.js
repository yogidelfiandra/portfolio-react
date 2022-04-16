import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_e7hcfwi',
        'template_5e1r8pp',
        form.current,
        'Wb9O4wzN27ci-vDuB'
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success('Pesan berhasil dikirim!');
          }
          e.target.reset();
        },
        (error) => {
          toast.error('Gagal mengirin pesan!');
          e.target.reset();
        }
      );
  };

  return (
    <section id='contact' className='pt-36 pb-32 dark:bg-dark'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='mx-auto mb-16 max-w-xl text-center'>
            <h3 className='mb-2 text-lg font-semibold text-primary'>Contact</h3>
            <h4 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl'>
              Hubungi Kami
            </h4>
            {/* <p className='font-medium text-base text- text-secondary md:text-lg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus nisi nihil perspiciatis saepe!
            </p> */}
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className='w-full lg:mx-auto lg:w-2/3'>
            <div className='mb-8 w-full px-4'>
              <label
                htmlFor='nama'
                className='text-base font-bold text-primary'
              >
                Nama
              </label>
              <input
                type='text'
                id='nama'
                name='nama'
                className='mt-2 w-full rounded-md bg-slate-100 p-3 text-dark caret-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
                required
              />
            </div>
            <div className='mb-8 w-full px-4'>
              <label
                htmlFor='email'
                className='text-base font-bold text-primary'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='mt-2 w-full rounded-md bg-slate-100 p-3 text-dark caret-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
                required
              />
            </div>
            <div className='mb-8 w-full px-4'>
              <label
                htmlFor='pesan'
                className='text-base font-bold text-primary'
              >
                Pesan
              </label>
              <textarea
                type='text'
                id='pesan'
                name='pesan'
                className='mt-2 h-36 w-full rounded-md bg-slate-100 p-3 text-dark caret-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
                required
              ></textarea>
            </div>
            <div className='w-full px-4'>
              <button className='w-full rounded-full bg-primary py-3 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg'>
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
