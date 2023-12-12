
import Navbar from "./Navbar";
import Footer from "./Footer";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


const Contact = () => {
    const form = useRef();
    const serviceId = import.meta.env.VITE_ServiceID
    const templateID = import.meta.env.VITE_templateID
    const publicKey = import.meta.env.VITE_PublicKey

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateID, form.current, publicKey)
            .then((result) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully message sent",
                    showConfirmButton: false,
                    timer: 1000
                  });
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto h-[2px] bg-[#709176]"></div>
            <h2 className="text-center text-2xl font-semibold mt-3">Reach me Out </h2>
            <form ref={form} onSubmit={sendEmail} className="max-w-6xl mx-auto card-body md:w-1/2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="user_name"  placeholder="Provide Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="user_email" placeholder="Provide your email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea className="input input-bordered" name="message" />
                </div>
               
                <div className="form-control mt-6">
                <input className="btn btn-outline  border-[#709176] font-semibold" type="submit" value="Send" />
                    
                </div>
            </form>
            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}
            <Footer></Footer>
        </div>
    );
};

export default Contact;