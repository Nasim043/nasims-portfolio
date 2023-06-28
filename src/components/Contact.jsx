import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m6e1fq4', 'template_q1lhgcg', form.current, 'oOrAfJnCcFa3tYx1s')
            .then((result) => {
                if(result.text === 'OK') {
                    toast.success('Email send successfully');
                    e.target.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="px-4 pb-4 md:px-16 lg:px-8 lg:pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 pt-24" name="contact">
            <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
                        Contact
                    </p>
                    <p className="py-6 text-white">Submit the form below to get in touch with me</p>
                </div>
                <div className=" flex justify-center items-center">
                    <form ref={form} onSubmit={sendEmail} className=" flex flex-col w-full md:w-1/2">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="from_email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Let&apos;s talk
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Contact;
