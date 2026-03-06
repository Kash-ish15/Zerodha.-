import React from 'react';
import { useLocation } from 'react-router-dom';

function LearnMore() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const product = searchParams.get('product') || 'platform';

    // Product-specific content
    const productInfo = {
        'kite': {
            title: 'Kite - Ultra-Fast Trading Platform',
            description: 'Experience the power of our flagship trading platform designed for speed, reliability, and ease of use.',
            features: [
                'Streaming market data in real-time',
                'Advanced charting with 100+ indicators',
                'Elegant and intuitive user interface',
                'Seamless mobile experience on Android and iOS',
                'One-click order placement',
                'Advanced order types and brackets',
                'Market depth and order book visualization',
                'Price alerts and notifications'
            ],
            image: './media/kite(1).png'
        },
        'coin': {
            title: 'Coin - Direct Mutual Funds',
            description: 'Buy direct mutual funds online, commission-free, delivered directly to your Demat account.',
            features: [
                'Commission-free direct mutual funds',
                'Zero brokerage on investments',
                'Direct delivery to Demat account',
                'Seamless mobile app experience',
                'Wide range of fund options',
                'Easy portfolio tracking',
                'Automated SIP setup',
                'Tax-efficient investing'
            ],
            image: './media/coin.png'
        },
        'console': {
            title: 'Console - Central Dashboard',
            description: 'The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualizations.',
            features: [
                'Comprehensive portfolio analytics',
                'In-depth trade reports',
                'Visual data representations',
                'Tax reports and P&L statements',
                'Account activity tracking',
                'Performance metrics',
                'Export reports in multiple formats',
                'Real-time portfolio updates'
            ],
            image: './media/console.png'
        },
        'kite-connect': {
            title: 'Kite Connect API',
            description: 'Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. Perfect for startups and developers.',
            features: [
                'Simple HTTP/JSON REST APIs',
                'Real-time WebSocket streaming',
                'Comprehensive documentation',
                'Build custom trading applications',
                'Showcase your app to our client base',
                'High-performance and reliable',
                'Developer-friendly SDKs',
                'Secure authentication'
            ],
            image: './media/kiteconnect1.png'
        },
        'varsity': {
            title: 'Varsity Mobile - Stock Market Education',
            description: 'An easy-to-grasp collection of stock market lessons with in-depth coverage and illustrations. Learn on the go with bite-size content.',
            features: [
                'Comprehensive stock market education',
                'Bite-size learning cards',
                'In-depth coverage of trading concepts',
                'Illustrations and visual aids',
                'Mobile-optimized learning experience',
                'Progressive learning paths',
                'Track your learning progress',
                'Free and open access'
            ],
            image: './media/varsity(1).png'
        },
        'platform': {
            title: 'Zerodha Trading Platform',
            description: 'A comprehensive trading and investment platform designed to empower traders and investors with cutting-edge tools and technology.',
            features: [
                'Ultra-fast order execution',
                'Advanced charting and technical analysis',
                'Real-time market data streaming',
                'Multiple trading instruments',
                'Mobile and web access',
                'Commission-free mutual funds',
                'Comprehensive portfolio analytics',
                'Educational resources and support'
            ],
            image: './media/kite(1).png'
        }
    };

    // Normalize product name for lookup
    let productKey = product.toLowerCase();
    // Handle variations
    if (productKey.includes('varsity')) {
        productKey = 'varsity';
    }
    const info = productInfo[productKey] || productInfo['platform'];

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12 text-center mb-5">
                    <h1 style={{fontSize: '2.5rem', fontWeight: '500', color: '#333'}}>{info.title}</h1>
                    <p className="text-muted" style={{fontSize: '1.1rem', marginTop: '1rem'}}>{info.description}</p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6 mb-4">
                    <img 
                        src={info.image} 
                        alt={info.title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <h2 style={{fontSize: '1.8rem', fontWeight: '500', marginBottom: '1.5rem', color: '#333'}}>
                        Key Features
                    </h2>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {info.features.map((feature, index) => (
                            <li key={index} style={{
                                padding: '0.8rem 0',
                                borderBottom: index < info.features.length - 1 ? '1px solid #eee' : 'none',
                                fontSize: '1rem',
                                color: '#555'
                            }}>
                                <i className="fa-solid fa-check" style={{color: '#0464f5ff', marginRight: '10px'}}></i>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '2rem',
                        borderRadius: '8px',
                        marginTop: '2rem'
                    }}>
                        <h3 style={{fontSize: '1.5rem', fontWeight: '500', marginBottom: '1rem', color: '#333'}}>
                            Why Choose Our Platform?
                        </h3>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div style={{textAlign: 'center'}}>
                                    <i className="fa-solid fa-bolt" style={{fontSize: '2rem', color: '#0464f5ff', marginBottom: '1rem'}}></i>
                                    <h4 style={{fontSize: '1.1rem', fontWeight: '500', marginTop: '1rem'}}>Lightning Fast</h4>
                                    <p className="text-muted">Ultra-low latency order execution</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div style={{textAlign: 'center'}}>
                                    <i className="fa-solid fa-shield-halved" style={{fontSize: '2rem', color: '#0464f5ff', marginBottom: '1rem'}}></i>
                                    <h4 style={{fontSize: '1.1rem', fontWeight: '500', marginTop: '1rem'}}>Secure & Reliable</h4>
                                    <p className="text-muted">Bank-grade security and 99.9% uptime</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div style={{textAlign: 'center'}}>
                                    <i className="fa-solid fa-dollar-sign" style={{fontSize: '2rem', color: '#0464f5ff', marginBottom: '1rem'}}></i>
                                    <h4 style={{fontSize: '1.1rem', fontWeight: '500', marginTop: '1rem'}}>Low Cost</h4>
                                    <p className="text-muted">Transparent, low-cost pricing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5 text-center">
                <div className="col-12">
                    <a 
                        href="/signup" 
                        className="btn"
                        style={{
                            backgroundColor: '#0464f5ff',
                            color: 'white',
                            padding: '12px 30px',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            display: 'inline-block',
                            fontSize: '1rem',
                            fontWeight: '500'
                        }}
                    >
                        Get Started <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LearnMore;

