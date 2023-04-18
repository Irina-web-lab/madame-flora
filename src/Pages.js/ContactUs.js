import Footer from "../Components.js/Footer";
import Promo from "../Components.js/Promo";

function ContactUs() {

    return (<div>
<Promo />
    <div  className="info">
    <h1 className="inf">Contact Us</h1>
<div>

<h3>WE ARE HERE FOR YOU!</h3>
<p>At Madame Flora, we take our customers seriously. Do you have any enquiries, compaints or requests, 
please forward it to our support desk and we will get back to you as soon as possible.</p>
        </div>
        <div className='container-box'>
        <div className='address'>
<h4>Our address:</h4>
<p className='place'>99  Marine Avenue, </p>   
<p className='place'>0027  Big City</p>
<p className='place'>info@flower.com</p>
<p className='place'>+0(917)000-00-00</p>
<p className='place'>+0(916)000-00-00</p>
<p className='place'>8.00- 19.00  Daily</p>
            </div>

            <div className='message'>
            <form className="contact-form">
                <div className="input-group">
                    <label>Full Name*</label>
                    <input type="text" className="contact-input" placeholder="Enter Your Name..."/>
                </div>
                <div className="input-groups">
                    <div className="input-group">
                        <label>Email*</label>
                        <input type="email" className="contact-input" placeholder="Enter Your email..."/>
                    </div>
                </div>
                <div className="input-group">
                    <label>Message</label>
                    <textarea placeholder="Your message here..." className="form-textarea"></textarea>
                </div>
                <input type="submit" value="Submit" className="form-btn"/>
            </form>
            </div>

        </div>
</div>
<Footer />
</div>
        )
}       
        export default ContactUs;
