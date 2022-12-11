import React, { useState } from 'react';
import './Faqss.css'

const Faqss = (props) => {
    const [toggle, setToggle] =useState(false);
    const { title, desc } = props.faq;
    return (
        <section className='faqs'>
            <div>
                <h3>{title}</h3>
                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? '-' : '+'}
                </button>
            </div>
            {toggle && <p>{desc}</p>}            
        </section>
    );
};

export default Faqss;