import React, { useState } from 'react';
import { fakeData } from '../FakeData/FakeData';
import Faqss from '../Faqss/Faqss';
import './faq.css'

const Faq = () => {
    const [faq, setFaq] = useState(fakeData);

    return (
        <div className='container'>
            <div className='faq'>
                <h1>FAQ</h1>
                {
                    faq.map(faq => <Faqss key={faq.id} faq={faq} />)
                }
            </div>
        </div>

    );
};

export default Faq;