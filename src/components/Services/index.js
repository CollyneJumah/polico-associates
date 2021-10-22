const Services = () => {
    return (
        <div >
            <h2 className="text-center">Our Services</h2>
            <div className="accordion" id="headingOne">
                <div className="accordion-item" id="headingOne">
                    <h5 className="accordion-header">
                        <button class="accordion-button btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#taxConsultancy" aria-expanded="true" aria-controls="taxConsultancy">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg> Tax Consultancy Service
                        </button>
                    </h5>
                    <div id="taxConsultancy" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#headingOne">
                        <div className="accordion-body">
                            <p>
                                We provide tax advisory and compliance services through Tax training, tax planning, 
                                Tax Reconciliation and claims, 
                                Tax compliance and Negotiation with Tax Authorities on behalf of our clients.
                            </p>
                            <div>
                                <ul style={{listStyle:'none'}}>                       
                                    <li><h6><span className="badge bg-danger rounded-pill">1</span> Tax Planning</h6></li>
                                    <p>
                                        We advice on tax implecations on transactions,t ax optimal organization structures 
                                        and assist in making the applications 
                                        to the Ministry of Finance for tax exemptions and remissions.
                                    </p>
                                    <li> 
                                        <h6><span className="badge rounded-pill bg-danger">2</span>  Tax Compliance</h6>
                                    </li>
                                    <p>
                                        We assist in computing tax liabilities, completing returns and submit them to the Tax Authority.
                                    </p>
                                    <li><h6><span className="badge rounded-pill bg-danger">3</span> Tax Claims</h6></li>
                                    <p>
                                        We audit and Lodge claims of VAT and any other overpaid taxes, and also supply for setoff of overpaid taxes againist other tax liability.
                                    </p>
                                    <li><h6><span className="badge rounded-pill bg-danger">4</span> Tax Negotiation</h6></li>
                                    <p>
                                        We negotiate on behaif of our clients for reduction of additional tax that maybe levied & for suitable payment schedule.
                                    </p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        
            
               
            <h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg> Auditing</h5>
            <hr />
            <p>
                We audit financial Statements in accordance with the international 
                Auditing Standards.
            </p>
            <h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg> Accountancy</h5>
            <hr />
            <p>
            We maintain books of accounts and Provide periodic & annual financial statements.
            </p>
            
            <h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg> Book Keeping</h5>
            <p>
                We help our clients in maintain their accounting records and financial statements.
                We maintain your transactions..receipts and payments and E- bookkeeping using quick books.
            </p>
        </div>
    )
}
export default Services;