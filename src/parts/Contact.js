import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputItem from '../components/InputItem';
import SubHeader from '../components/SubHeader';

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
            toast.success('Message sent successfully!');
          }
          e.target.reset();
        },
        (error) => {
          toast.error('Failed to send a message!');
          e.target.reset();
        }
      );
  };

  return (
    <section id='contact' className='contact-section'>
      <div className='container'>
        <SubHeader
          title='Contact'
          subtitle='Contact Me'
          paragraph='Get In Touch'
        />

        <form ref={form} onSubmit={sendEmail}>
          <div className='w-full lg:mx-auto lg:w-1/2'>
            <InputItem title='Name' type='text' id='name' />
            <InputItem title='Email' type='email' id='email' />
            <InputItem title='Subject' type='text' id='subject' />

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
