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
    <section id='contact' className='contact-section'>
      <div className='container'>
        <div className='w-full sm:px-4'>
          <div className='mx-auto mb-16 max-w-xl text-center'>
            <h3 className='sub-title mb-2'>Contact</h3>
            <h4 className='title lg:text-4xl'>Contact Me</h4>
            <p className='paragraph'>Get in touch</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className='w-full lg:mx-auto lg:w-1/2'>
            <div className='input-group'>
              <label htmlFor='name' className='sub-title'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='mt-2 w-full rounded-md bg-slate-100 p-3 text-dark caret-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
                required
              />
            </div>
            <div className='input-group'>
              <label htmlFor='email' className='sub-title'>
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
            <div className='input-group'>
              <label htmlFor='subject' className='sub-title'>
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                className='mt-2 w-full rounded-md bg-slate-100 p-3 text-dark caret-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
                required
              />
            </div>
            <div className='input-group'>
              <label htmlFor='message' className='sub-title'>
                Message
              </label>
              <textarea
                type='text'
                id='message'
                name='message'
                className='mt-2 h-36 w-full rounded-md bg-slate-100 p-3 text-dark caret-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
                required
              ></textarea>
            </div>
            <div className='input-group'>
              <button className='w-full rounded-full bg-primary py-3 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg'>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
