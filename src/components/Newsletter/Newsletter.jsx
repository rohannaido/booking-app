import './Newsletter.css'
import {BsNewspaper, BsArrowRight} from 'react-icons/bs'

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h2 className='newsletter_heading'>Join Newsletter Now!</h2>
            <p className='newsletter_description'>Get India's #1 travel super app, join 100 Million+ happy travellers!</p>
            <div className='newsletter_content'>
                <div className='newsletter_form'>
                    <span className='newsletter_iconSpan'>
                        <BsNewspaper />
                    </span>
                    <div className='newsletter_formDiv'>
                        <span>Use code WELCOMEBMT and get upto Rs 1200 off on your first domestic flight booking</span>
                        <div className='newsletter_emailInputDiv'>
                            <input type="email" placeholder='youremailid@email.com'/>
                            <button>
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter;