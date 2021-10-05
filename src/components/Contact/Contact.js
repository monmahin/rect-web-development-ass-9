import React from 'react';

const Contact = () => {
    return (
        <div className="bg-dark p-3 container text-white" style={{margin:'200px auto',maxWidth:'600px'}}>
            <h1 className="text-danger mb-4">Sponsors</h1>
            
            <p>If you are interested in sponsoring This videos, please Contact us for pricing and terms at
                <a className="text-decoration-none fs-5 ms-2 fw-boder text-info"
                    href="http://monmahin13@gmail.com"> Web Development Course</a>
                <hr className="w-50 h-2 ms-5 border border-2 my-1 border-danger" />
            </p>
        </div>
    );
};

export default Contact;