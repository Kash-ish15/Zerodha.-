import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TradingQA.css';

function TradingQA() {
    const [question, setQuestion] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [questionsList, setQuestionsList] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!question.trim() || !name.trim() || !email.trim()) {
            alert('Please fill in all fields');
            return;
        }

        const newQuestion = {
            id: Date.now(),
            name: name,
            email: email,
            question: question,
            timestamp: new Date().toLocaleString(),
            answered: false
        };

        setQuestionsList([...questionsList, newQuestion]);
        setQuestion('');
        setName('');
        setEmail('');
        setSubmitted(true);
        
        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="trading-qa-container">
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h1 className="mb-3">Trading Q&A</h1>
                        <p className="text-muted">Ask your trading questions and get answers from the community</p>
                    </div>
                </div>

                <div className="row">
                    {/* Question Form */}
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body p-4">
                                <h3 className="card-title mb-4">Ask a Question</h3>
                                
                                {submitted && (
                                    <div className="alert alert-success" role="alert">
                                        Your question has been submitted successfully!
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Your Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Your Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="question" className="form-label">Your Question</label>
                                        <textarea
                                            className="form-control"
                                            id="question"
                                            rows="5"
                                            value={question}
                                            onChange={(e) => setQuestion(e.target.value)}
                                            placeholder="Ask your trading question here..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">
                                        Submit Question
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Questions List */}
                    <div className="col-lg-6">
                        <div className="card shadow-sm">
                            <div className="card-body p-4">
                                <h3 className="card-title mb-4">Recent Questions</h3>
                                
                                {questionsList.length === 0 ? (
                                    <div className="text-center text-muted py-5">
                                        <p>No questions submitted yet.</p>
                                        <p>Be the first to ask a question!</p>
                                    </div>
                                ) : (
                                    <div className="questions-list">
                                        {questionsList.map((item) => (
                                            <div key={item.id} className="question-item mb-4 p-3 border rounded">
                                                <div className="d-flex justify-content-between align-items-start mb-2">
                                                    <div>
                                                        <strong>{item.name}</strong>
                                                        <small className="text-muted d-block">{item.email}</small>
                                                    </div>
                                                    <small className="text-muted">{item.timestamp}</small>
                                                </div>
                                                <p className="mb-0 mt-2">{item.question}</p>
                                                <div className="mt-2">
                                                    <span className="badge bg-secondary">Awaiting Answer</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="card shadow-sm">
                            <div className="card-body p-4">
                                <h3 className="card-title mb-4">Frequently Asked Questions</h3>
                                <div className="accordion" id="faqAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                                How do I get started with trading?
                                            </button>
                                        </h2>
                                        <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                To get started with trading, you need to open a Demat account, complete your KYC, and fund your account. Once your account is active, you can start trading on our platform.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                                What are the brokerage charges?
                                            </button>
                                        </h2>
                                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                We offer flat ₹20 per order for intraday and F&O trades, and zero charges for equity delivery and direct mutual funds.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                                How do I place a trade?
                                            </button>
                                        </h2>
                                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                You can place trades through our web platform or mobile app. Simply log in, search for the stock, enter the quantity and price, and click buy or sell.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TradingQA;


