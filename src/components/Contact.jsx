import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { IoMdSend } from "react-icons/io";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m6e1fq4', 'template_q1lhgcg', form.current, 'oOrAfJnCcFa3tYx1s')
            .then((result) => {
                if (result.text === 'OK') {
                    toast.success('Message send successfully');
                    e.target.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="px-4 pb-4 md:px-16 lg:px-8 lg:pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 pt-24" name="contact" data-aos="fade-right" data-aos-duration="1000">
            <div className="flex flex-col justify-center mx-auto h-full">
                <div className="pb-8">
                    <p className="text-3xl font-semibold text-primary-300 sm:text-4xl inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="text-primary-50 mt-5 text-base leading-relaxed opacity-80">Submit the form below to get in touch with me</p>
                </div>
                <div className=" flex justify-center items-center">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full md:w-1/2 gap-4">
                        <input
                            required
                            type="text"
                            name="from_name"
                            placeholder="Enter your name"
                            className="rounded border text-white border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                        />
                        <input
                            required
                            type="text"
                            name="from_email"
                            placeholder="Enter your email"
                            className="rounded border text-white border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                        />
                        <textarea
                            required
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="rounded border text-white border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                        ></textarea>

                        <div className='flex w-full justify-end p-2'>
                            <button className="text-md mb-2 inline-flex w-28 items-center justify-center rounded-lg border bg-primary-700 px-1 py-2.5 font-medium text-primary-50 hover:bg-primary-700/80 focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-600">
                                Send <IoMdSend className="ml-2"></IoMdSend>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Contact;
