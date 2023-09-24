import React from 'react'

function Confirmation () {
    return (

        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div className='card col-md-4 bg-white shadow-md p-5'>
                <div className='mb-4 text-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg' className='text-success bi bi-check-circle' width='75' height='75'
                        fill='currentColor' viewBox='0 0 16 16'
                    >
                        <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                        <path
                            d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z'
                        />
                    </svg>
                </div>
                <div className='text-center'>
                    <h1>Thank You !</h1>
                    <p>We have received your payment and are now preparing to provide the service you have requested.</p>
                    <p>You will soon receive an email confirmation with details about your order, including the service you have purchased and any additional information you have provided. If you have any questions or concerns about your order, please do not hesitate to contact us using the contact information provided on our website.</p>
                    <a href='/home' className='btn btn-outline-success'>Back Home</a>
                </div>

            </div>
        </div>

    )
}
export default Confirmation
