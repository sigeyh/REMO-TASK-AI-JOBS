import { useState, useEffect } from 'react';
import './App.css';

function BackButton({ goBack }) {
  return (
    <button className="back-btn" onClick={goBack} aria-label="Go back">
      ← Back
    </button>
  );
}

function LandingPage({ navTo }) {
  return (
    <>
      {/* Background Decorators */}
      <div className="decorator dec-ai-training">✨ AI TRAINING</div>
      <div className="decorator dec-money-bag">
        <div className="money-bag-icon">💰</div>
      </div>
      <div className="decorator dec-image-labeling">🖼️ IMAGE LABELING</div>
      <div className="decorator dec-audio-transcription">🎤 AUDIO TRANSCRIPTION</div>

      <div className="content-wrapper">
        <div className="header-section">
          <div className="badge-standard">
            <span className="star-icon">✨</span> THE NEW STANDARD IN REMOTE JOBS
          </div>

          <h1 className="logo-title">
            REMOTASK<span className="logo-ai">AI</span>
          </h1>

          <p className="subtitle">
            Train the world's most advanced AI models. Complete simple digital tasks and earn instantly from anywhere.
          </p>

          <div className="live-indicator">
            <span className="pulsing-dot"></span>
            Live: 14,249 trainers online earning now
          </div>
        </div>

        <div className="cta-group">
          <button className="btn-primary" onClick={() => navTo('signup')}>
            Get Started Now <span>→</span>
          </button>
          <button className="btn-secondary" onClick={() => navTo('login')}>
            I already have an account
          </button>
        </div>

        <div className="section-title">
          <h2>How It Works</h2>
        </div>

        <div className="how-it-works-card">
          <div className="step-line"></div>
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Create your free account <span className="step-icon">👥</span></h3>
              <p>Takes less than 2 minutes.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Complete simple jobs <span className="step-icon">📊</span></h3>
              <p>Image tagging, text review, & more.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Redeem instantly <span className="step-icon">💳</span></h3>
              <p>Withdraw to M-Pesa, Bank, or Crypto.</p>
            </div>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon icon-lightning">⚡</div>
            <h4>Easy Jobs</h4>
            <p>No experience needed</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-wallet">💳</div>
            <h4>Instant Withdraw</h4>
            <p>Zero payment delays</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-globe">🌍</div>
            <h4>Work Anywhere</h4>
            <p>100% remote layout</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-check">✅</div>
            <h4>Fast Setup</h4>
            <p>Instant account approval</p>
          </div>
        </div>

        <footer className="footer">
          <div className="trust-indicator">
            <span className="shield-icon">🛡️</span> Trusted by 10,000+ AI Trainers
          </div>
          
          <div className="avatars-group">
            <div className="avatar">👨🏽‍🦱</div>
            <div className="avatar">👩🏼‍💻</div>
            <div className="avatar">👨🏾‍🦲</div>
            <div className="avatar">🧑🏻‍🦱</div>
          </div>

          <div className="copyright">
            © 2026 REMOTASK. ALL RIGHTS RESERVED.
          </div>
        </footer>
      </div>
    </>
  );
}

function SignupPage({ navTo, goBack }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const canProceed = name.trim() !== '' && email.trim() !== '' && phone.trim() !== '' && country.trim() !== '' && password.trim() !== '' && password === confirmPassword;

  const handleSignup = () => {
    if (!canProceed) return;
    
    const newUser = { name, email, phone, country, password, balance: 4.80 };
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email === email)) {
      alert("Email already registered. Please login.");
      return;
    }
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    navTo('assessment');
  };

  return (
    <div className="page-wrapper mt-4">
      <BackButton goBack={goBack} />
      <div className="text-center mb-6">
        <h2 className="title-large mt-3">Create Account</h2>
        <p className="text-gray">Start earning from anywhere</p>
      </div>

      <div className="auth-card">
        <div className="input-group mb-4">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" className="form-input" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="input-group mb-4">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-group mb-4">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" className="form-input" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div className="input-group mb-4">
          <label>Country</label>
          <select className="form-input" value={country} onChange={e => setCountry(e.target.value)}>
            <option value="">Select your country</option>
            <option value="Kenya">Kenya</option>
            <option value="Nigeria">Nigeria</option>
            <option value="South Africa">South Africa</option>
            <option value="United States">United States</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="input-group mb-4">
          <label>Password</label>
          <input type="password" placeholder="Create a password" className="form-input" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="input-group mb-4">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" className="form-input" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          {confirmPassword && password !== confirmPassword && <p className="text-red-small mt-1" style={{color: '#ef4444', fontSize: '12px'}}>Passwords do not match</p>}
        </div>

        <button 
          className={`btn-primary w-full mt-2 ${!canProceed ? 'disabled' : ''}`} 
          onClick={handleSignup}
          disabled={!canProceed}
        >
          Create Account <span>→</span>
        </button>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-small">Already have an account? <span className="text-green link-text" onClick={() => navTo('login')}>Login</span></p>
      </div>
    </div>
  );
}

function LoginPage({ navTo, goBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const canProceed = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    if (!canProceed) return;
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navTo('dashboard');
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="page-wrapper mt-4">
      <BackButton goBack={goBack} />
      <div className="text-center mb-6">
        <h2 className="title-large mt-3">Welcome Back</h2>
        <p className="text-gray">Login to continue earning</p>
      </div>

      <div className="auth-card">
        <div className="input-group mb-4">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-group mb-4">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" className="form-input" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button 
          className={`btn-primary w-full mt-2 ${!canProceed ? 'disabled' : ''}`} 
          onClick={handleLogin}
          disabled={!canProceed}
        >
          Login <span>→</span>
        </button>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-small">Don't have an account? <span className="text-green link-text" onClick={() => navTo('signup')}>Create one</span></p>
      </div>
    </div>
  );
}

function AssessmentPage({ navTo, goBack }) {
  return (
    <div className="page-wrapper center-content">
      <BackButton goBack={goBack} />
      <div className="icon-badge target-badge">
        🎯
      </div>
      <h2 className="title-large text-center mt-4">Welcome to<br/>AI Training Assessment</h2>
      
      <div className="content-card mt-6">
        <p className="text-gray mb-4">Complete this technical assessment to verify your skills in:</p>
        
        <ul className="checklist">
          <li><span className="check-icon">✓</span> RLHF Response Evaluation</li>
          <li><span className="check-icon">✓</span> Prompt Classification</li>
          <li><span className="check-icon">✓</span> Hallucination Detection</li>
          <li><span className="check-icon">✓</span> Safety & Toxicity</li>
          <li><span className="check-icon">✓</span> Instruction Following</li>
          <li><span className="check-icon">✓</span> Reasoning Review</li>
        </ul>

        <div className="earn-pill mt-6">
          💰 Earn $1.20 for each correct answer!
        </div>
      </div>

      <div className="fixed-bottom">
        <button className="btn-primary w-full" onClick={() => navTo('quiz')}>
          Start Assessment <span>→</span>
        </button>
      </div>
    </div>
  );
}

function QuizPage({ navTo, goBack }) {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q6, setQ6] = useState(null);

  const canProceed = q1 && q2 && q3 && q4 && q5 && q6;

  return (
    <div className="page-wrapper center-content" style={{paddingBottom: '120px'}}>
      <BackButton goBack={goBack} />
      <div className="text-center mb-6">
        <div className="icon-badge target-badge mb-2">📝</div>
        <h2 className="title-large mt-3">Skill Assessment</h2>
        <p className="text-gray">Answer to prove your skills</p>
      </div>

      <div className="content-card mb-4" style={{textAlign: 'left'}}>
        <p className="mb-3" style={{fontWeight: 700, fontSize: 14, color: '#111'}}>1. What is an AI hallucination?</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <label className="radio-label">
            <input type="radio" value="a" checked={q1 === 'a'} onChange={() => setQ1('a')} /> A factual, correct answer
          </label>
          <label className="radio-label">
            <input type="radio" value="b" checked={q1 === 'b'} onChange={() => setQ1('b')} /> An incorrect or made-up statement
          </label>
        </div>
      </div>

      <div className="content-card mb-4" style={{textAlign: 'left'}}>
        <p className="mb-3" style={{fontWeight: 700, fontSize: 14, color: '#111'}}>2. If a user asks for a recipe to make a bomb, the AI should:</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <label className="radio-label">
            <input type="radio" value="a" checked={q2 === 'a'} onChange={() => setQ2('a')} /> Provide the recipe
          </label>
          <label className="radio-label">
            <input type="radio" value="b" checked={q2 === 'b'} onChange={() => setQ2('b')} /> Refuse due to safety policies
          </label>
        </div>
      </div>

      <div className="content-card mb-4" style={{textAlign: 'left'}}>
        <p className="mb-3" style={{fontWeight: 700, fontSize: 14, color: '#111'}}>3. When categorizing sentiment, "This product is okay, could be better" is:</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <label className="radio-label">
            <input type="radio" value="a" checked={q3 === 'a'} onChange={() => setQ3('a')} /> Positive
          </label>
          <label className="radio-label">
            <input type="radio" value="b" checked={q3 === 'b'} onChange={() => setQ3('b')} /> Neutral / Mixed
          </label>
        </div>
      </div>

      <div className="content-card mb-4" style={{textAlign: 'left'}}>
        <p className="mb-3" style={{fontWeight: 700, fontSize: 14, color: '#111'}}>4. Which of the following is an example of PII (Personally Identifiable Information)?</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <label className="radio-label">
            <input type="radio" value="a" checked={q4 === 'a'} onChange={() => setQ4('a')} /> The colour of a generic car
          </label>
          <label className="radio-label">
            <input type="radio" value="b" checked={q4 === 'b'} onChange={() => setQ4('b')} /> A Social Security Number
          </label>
        </div>
      </div>

      <div className="content-card mb-4" style={{textAlign: 'left'}}>
        <p className="mb-3" style={{fontWeight: 700, fontSize: 14, color: '#111'}}>5. A user asks "Who won the World Series in 2050?". The AI should:</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <label className="radio-label">
            <input type="radio" value="a" checked={q5 === 'a'} onChange={() => setQ5('a')} /> Guess a team
          </label>
          <label className="radio-label">
            <input type="radio" value="b" checked={q5 === 'b'} onChange={() => setQ5('b')} /> State it cannot predict the future
          </label>
        </div>
      </div>

      <div className="content-card mb-4" style={{textAlign: 'left'}}>
        <p className="mb-3" style={{fontWeight: 700, fontSize: 14, color: '#111'}}>6. In image labeling, if asked to bound a "car", you should:</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <label className="radio-label">
            <input type="radio" value="a" checked={q6 === 'a'} onChange={() => setQ6('a')} /> Bound the entire visible car tightly
          </label>
          <label className="radio-label">
            <input type="radio" value="b" checked={q6 === 'b'} onChange={() => setQ6('b')} /> Bound only the wheels
          </label>
        </div>
      </div>

      <div className="fixed-bottom" style={{background: 'linear-gradient(to top, var(--bg-bottom) 90%, transparent)'}}>
        <button 
          className={`btn-primary w-full ${!canProceed ? 'disabled' : ''}`} 
          onClick={() => { if(canProceed) navTo('processing'); }}
          disabled={!canProceed}
        >
          Submit Answers <span>→</span>
        </button>
      </div>
    </div>
  );
}

function ProcessingPage({ navTo }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          navTo('screening_passed');
          return 100;
        }
        return p + 5;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [navTo]);

  return (
    <div className="page-wrapper center-content full-height processing-screen">
      <div className="spinner-wrapper mb-6">
        <div className="loading-spinner"></div>
      </div>
      <h2 className="title-large text-center mb-2">Assessing Your Responses...</h2>
      <p className="text-gray text-center mb-8">Our AI is evaluating your answers. Please wait.</p>
      
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-gray-small text-center mt-2">Processing...</p>
    </div>
  );
}

function ScreeningPassedPage({ navTo }) {
  return (
    <div className="page-wrapper center-content full-height">
      <div className="icon-badge success-badge">
        ✓
      </div>
      <h2 className="title-large text-center mt-4 mb-6">Congratulations!<br/>Screening Passed!</h2>
      
      <div className="content-card text-center">
        <p className="text-gray mb-2">Your Score</p>
        <h3 className="score-large text-green">100%</h3>
        <p className="text-gray mb-4">6 out of 6 questions correct</p>
        
        <div className="qualified-pill mb-6">
          <span className="check-circle">✓</span> Qualified for AI Training Tasks
        </div>
        
        <div className="divider mb-6"></div>
        
        <p className="text-gray mb-2">Assessment Bonus</p>
        <h3 className="bonus-large text-green">+$4.80</h3>
        <p className="text-gray-small">Added to your balance</p>
      </div>

      <div className="fixed-bottom">
        <button className="btn-primary w-full" onClick={() => navTo('task_complete')}>
          Continue to Welcome Bonus <span>→</span>
        </button>
      </div>
    </div>
  );
}

function TaskCompletePage({ navTo }) {
  useEffect(() => {
    const active = JSON.parse(localStorage.getItem('currentUser'));
    if (active && active.balance !== undefined && !active.firstTaskCompleted) {
      active.balance = Number(active.balance) + 1.07;
      active.firstTaskCompleted = true; 
      localStorage.setItem('currentUser', JSON.stringify(active));
      
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex(u => u.email === active.email);
      if (userIndex !== -1) {
        users[userIndex] = active;
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
  }, []);

  return (
    <div className="page-wrapper center-content full-height">
      <div className="emoji-icon-large mt-6 mb-4">🎉</div>
      <h2 className="title-large text-center mb-6">Task Complete!</h2>
      
      <div className="score-card mb-4">
        <p className="text-gray mb-1">Score</p>
        <h3 className="score-xl text-green">100%</h3>
        <p className="text-gray">6 of 6 correct</p>
      </div>
      
      <div className="score-card mb-6">
        <p className="text-gray mb-1">Total Earned</p>
        <h3 className="score-xl text-green">+$1.07</h3>
        <p className="text-gray-small">Added to your balance</p>
      </div>

      <div className="fixed-bottom">
        <button className="btn-primary w-full" onClick={() => navTo('dashboard')}>
          Continue <span>→</span>
        </button>
      </div>
    </div>
  );
}

function DashboardPage({ navTo }) {
  const [userName, setUserName] = useState('ROWAN');
  const [balance, setBalance] = useState('4.80');
  
  useEffect(() => {
    const active = JSON.parse(localStorage.getItem('currentUser'));
    if (active && active.name) {
      setUserName(active.name.split(' ')[0].toUpperCase());
    }
    if (active && active.balance !== undefined) {
      setBalance(Number(active.balance).toFixed(2));
    }
  }, []);

  return (
    <div className="dashboard-wrapper">
      {/* Header Info */}
      <div className="dash-header-minimal" style={{marginTop: '-20px', paddingTop: '20px'}}>
        <div className="app-logo-small">
           <div className="avatar text-avatar">R</div>
           REMOTASK
           <div className="app-header-icons">
             <span className="icon-bell" style={{position: 'relative'}}>🔔<div className="red-dot" style={{position:'absolute', top:0, right:0, width:6, height:6, background:'red', borderRadius:'50%'}}></div></span>
             <span className="icon-profile text-green" style={{background: '#d8ead6', padding:'2px 6px', borderRadius:'10px', fontSize:12}}>RK</span>
             <span className="icon-menu" style={{fontSize:22, marginLeft:4, color:'#666'}}>☰</span>
           </div>
        </div>
      </div>

      <div className="dash-welcome mt-4 mb-4">
        <div className="welcome-text" style={{fontSize: 14, color: '#6b7280'}}>Welcome back,</div>
        <div className="welcome-name">{userName} <span className="icon-check-square">☑</span></div>
      </div>

      <div className="balance-card-new">
        <div className="balance-left">
           <div className="balance-label">💰 Available Balance</div>
           <div className="balance-amount-large">${balance}</div>
        </div>
        <button className="btn-withdraw-orange" onClick={() => navTo('payment')}>💸 Withdraw</button>
      </div>

      <div className="stats-row-new mt-4">
        <div className="stat-box-new">
          <div className="stat-label">Tasks</div>
          <div className="stat-value">400+</div>
        </div>
        <div className="stat-box-new">
          <div className="stat-label">Available</div>
          <div className="stat-value">24 hrs</div>
        </div>
        <div className="stat-box-new">
          <div className="stat-label">Active Users</div>
          <div className="stat-value">1,205</div>
        </div>
      </div>

      <div className="live-withdrawals-section mt-4 mb-4" style={{marginTop: '24px'}}>
        <div className="section-title-row">
          <h3 className="section-title-small" style={{marginBottom: 0, display: 'flex', alignItems: 'center', gap: 6}}>🌏 Live Withdrawals</h3>
          <span className="live-badge">● LIVE</span>
        </div>
        <div className="live-card mt-2">
          <div className="live-avatar">M</div>
          <div className="live-info">
             <div className="live-phone" style={{fontSize: '13px', fontWeight: 700}}>+254722****678</div>
             <div className="live-status" style={{fontSize: '11px', color: '#6b7280'}}>✓ Withdrawal Successful</div>
          </div>
          <div className="live-amount-info" style={{marginLeft: 'auto', textAlign:'right'}}>
             <div className="live-amount text-green" style={{fontSize: '13px', fontWeight: 800}}>$29.60</div>
             <div className="live-time" style={{fontSize: '11px', color: '#6b7280'}}>8m ago</div>
          </div>
        </div>
      </div>

      <div className="account-type-card mb-4">
        <div className="account-info">
           <div className="balance-label" style={{fontSize: '11px', color: '#6b7280', fontWeight: 600, marginBottom: '2px'}}>Account Type</div>
           <div className="account-value" style={{fontSize: '14px', fontWeight: 800}}><span className="tag-free">FREE</span> Free Account</div>
        </div>
        <button className="btn-upgrade-orange" onClick={() => navTo('payment')}>↑ Upgrade</button>
      </div>

      <div className="dash-content-new mt-4">
        <h3 className="section-title-small mb-3">📋 Start Earning</h3>
        
        <div className="job-grid-2col">
          <div className="job-card-new available">
            <h4>Data Categorization</h4>
            <p>Organize data into structured groups</p>
            <div className="job-price text-green">$1.85 - 2.50/task</div>
            <button className="btn-job-green-full" onClick={() => navTo('do_task', 'data_cat', false)}>Start Earning →</button>
          </div>
          
          <div className="job-card-new locked">
            <h4>Pattern Recognition</h4>
            <p>Identify data patterns in datasets</p>
            <div className="job-price text-green">$2.70 - 3.65/task</div>
            <button className="btn-job-faded" onClick={() => navTo('do_task', 'pattern', true)}>🔒 Try Task</button>
          </div>

          <div className="job-card-new locked">
            <h4>Sentence Arrangement</h4>
            <p>Arrange text in logical order</p>
            <div className="job-price text-green">$1.55 - 2.09/task</div>
            <button className="btn-job-faded" onClick={() => navTo('do_task', 'sentence', true)}>🔒 Try Task</button>
          </div>
          
          <div className="job-card-new locked">
            <h4>Refer & Earn</h4>
            <p>Invite friends for bonus rewards</p>
            <div className="job-price text-green">$2.00 - 2.70/task</div>
            <button className="btn-job-faded" onClick={() => navTo('do_task', 'refer', true)}>🔒 Try Task</button>
          </div>

          <div className="job-card-new locked">
            <h4>Image Labeling</h4>
            <p>Label images for ML training</p>
            <div className="job-price text-green">$1.60 - 2.16/task</div>
            <button className="btn-job-faded" onClick={() => navTo('do_task', 'image', true)}>🔒 Try Task</button>
          </div>

          <div className="job-card-new locked">
            <h4>Sentiment Analysis</h4>
            <p>Classify text sentiment</p>
            <div className="job-price text-green">$1.95 - 2.63/task</div>
            <button className="btn-job-faded" onClick={() => navTo('do_task', 'sentiment', true)}>🔒 Try Task</button>
          </div>
          
          <div className="job-card-new locked">
            <h4>Code Review</h4>
            <p>Evaluate code quality</p>
            <div className="job-price text-green">$2.10 - 3.00/task</div>
            <button className="btn-job-faded" onClick={() => navTo('do_task', 'code', true)}>🔒 Try Task</button>
          </div>
          
          <div className="job-card-new locked">
            <h4>Translation Task</h4>
            <p>Translate content accurately</p>
            <div className="job-price text-green">$1.80 - 2.45/task</div>
            <button className="btn-job-faded" onClick={() => navTo('do_task', 'translation', true)}>🔒 Try Task</button>
          </div>
        </div>
      </div>
      
      <div className="bottom-nav-new">
        <div className="nav-item-new active">
          <span className="nav-icon">🏠</span>
          <span className="nav-text" style={{marginTop: '4px'}}>Dashboard</span>
        </div>
        <div className="nav-item-new">
          <span className="nav-icon" style={{filter: 'grayscale(1)', opacity: 0.5}}>🔲</span>
          <span className="nav-text" style={{marginTop: '4px'}}>Earnings</span>
        </div>
        
        <div className="nav-fab-wrapper" onClick={() => navTo('payment')}>
          <div className="nav-fab">
             <span className="fab-icon" style={{marginTop: '-2px'}}>$</span>
          </div>
          <span className="nav-text active" style={{color:'var(--brand-green)', marginTop: '28px'}}>Withdraw</span>
        </div>

        <div className="nav-item-new">
          <span className="nav-icon" style={{filter: 'grayscale(1)', opacity: 0.5}}>❓</span>
          <span className="nav-text" style={{marginTop: '4px'}}>Help</span>
        </div>
      </div>
    </div>
  );
}

function DoTaskPage({ navTo, goBack, taskKey, isLocked }) {
  const [step, setStep] = useState('intro'); // intro | working | done
  const [answers, setAnswers] = useState({});

  const TASKS = {
    data_cat: {
      title: 'Data Categorization',
      icon: '📂',
      pay: '$1.85',
      desc: 'Classify each item into the correct category.',
      items: [
        { id: 'a', text: 'Python script that sorts a list', opts: ['Code', 'Recipe', 'News Article'], answer: 'Code' },
        { id: 'b', text: 'BBC report on climate summit', opts: ['Code', 'Recipe', 'News Article'], answer: 'News Article' },
        { id: 'c', text: 'Ingredients: flour, eggs, butter…', opts: ['Code', 'Recipe', 'News Article'], answer: 'Recipe' },
      ],
    },
    pattern: {
      title: 'Pattern Recognition',
      icon: '🔢',
      pay: '$2.70',
      desc: 'Identify the next item in each sequence.',
      items: [
        { id: 'a', text: '2, 4, 6, 8, __?', opts: ['10', '9', '12'], answer: '10' },
        { id: 'b', text: 'Mon, Wed, Fri, __?', opts: ['Sat', 'Sun', 'Tue'], answer: 'Sun' },
        { id: 'c', text: 'A, C, E, G, __?', opts: ['H', 'I', 'J'], answer: 'I' },
      ],
    },
    sentence: {
      title: 'Sentence Arrangement',
      icon: '📝',
      pay: '$1.55',
      desc: 'Select the sentence that best follows the given opening.',
      items: [
        { id: 'a', text: 'Opening: "The storm hit at midnight."', opts: ['Trees fell and power lines snapped.', 'She likes to bake bread.', 'The market opened at 9am.'], answer: 'Trees fell and power lines snapped.' },
        { id: 'b', text: 'Opening: "She studied all night for the exam."', opts: ['The cat sat on the mat.', 'By morning, she felt confident and ready.', 'He drove to the airport.'], answer: 'By morning, she felt confident and ready.' },
        { id: 'c', text: 'Opening: "The CEO announced record profits."', opts: ['Staff celebrated with a bonus.', 'It rained heavily in London.', 'She cooked pasta for dinner.'], answer: 'Staff celebrated with a bonus.' },
      ],
    },
    refer: {
      title: 'Refer & Earn',
      icon: '🤝',
      pay: '$2.00',
      desc: 'Answer these questions about the referral program.',
      items: [
        { id: 'a', text: 'How much does a referee earn on their first task?', opts: ['$1.00', '$4.80', '$0.00'], answer: '$4.80' },
        { id: 'b', text: 'What must a referee do to unlock your bonus?', opts: ['Just sign up', 'Complete assessment', 'Pay $3'], answer: 'Complete assessment' },
        { id: 'c', text: 'Where can you find your referral link?', opts: ['Settings', 'Dashboard > Refer & Earn', 'Email'], answer: 'Dashboard > Refer & Earn' },
      ],
    },
    image: {
      title: 'Image Labeling',
      icon: '🖼️',
      pay: '$1.60',
      desc: 'Choose the correct label for each description.',
      items: [
        { id: 'a', text: 'An image shows a four-wheeled motor vehicle on a highway. Label it:', opts: ['Bicycle', 'Car', 'Truck'], answer: 'Car' },
        { id: 'b', text: 'An image shows a red octagonal road sign with white letters. Label it:', opts: ['STOP sign', 'YIELD sign', 'Speed Limit'], answer: 'STOP sign' },
        { id: 'c', text: 'An image shows a furry four-legged animal with whiskers sleeping on a couch. Label it:', opts: ['Dog', 'Cat', 'Rabbit'], answer: 'Cat' },
      ],
    },
    sentiment: {
      title: 'Sentiment Analysis',
      icon: '💬',
      pay: '$1.95',
      desc: 'Classify the sentiment of each text snippet.',
      items: [
        { id: 'a', text: '"I absolutely love this product! Best purchase ever!"', opts: ['Positive', 'Neutral', 'Negative'], answer: 'Positive' },
        { id: 'b', text: '"The package arrived on time. Nothing special."', opts: ['Positive', 'Neutral', 'Negative'], answer: 'Neutral' },
        { id: 'c', text: '"This is the worst service I have ever experienced."', opts: ['Positive', 'Neutral', 'Negative'], answer: 'Negative' },
      ],
    },
    code: {
      title: 'Code Review',
      icon: '💻',
      pay: '$2.10',
      desc: 'Rate these code samples for quality.',
      items: [
        { id: 'a', text: 'def add(a, b): return a + b', opts: ['Good – clear & concise', 'Bad – no return type', 'Bad – wrong syntax'], answer: 'Good – clear & concise' },
        { id: 'b', text: 'x=1+2;y=x*3;print(y)', opts: ['Good – efficient', 'Needs improvement – no spacing or clarity', 'Bad – syntax error'], answer: 'Needs improvement – no spacing or clarity' },
        { id: 'c', text: 'while True: pass # infinite loop', opts: ['Good – necessary pattern', 'Bad – blocks execution forever without break', 'Bad – wrong loop'], answer: 'Bad – blocks execution forever without break' },
      ],
    },
    translation: {
      title: 'Translation Task',
      icon: '🌐',
      pay: '$1.80',
      desc: 'Choose the best English translation for each phrase.',
      items: [
        { id: 'a', text: 'Spanish: "Buenos días"', opts: ['Good night', 'Good morning', 'Goodbye'], answer: 'Good morning' },
        { id: 'b', text: 'French: "Merci beaucoup"', opts: ['Welcome', 'Thank you very much', 'Please help me'], answer: 'Thank you very much' },
        { id: 'c', text: 'Swahili: "Karibu"', opts: ['Goodbye', 'Welcome', 'Hello'], answer: 'Welcome' },
      ],
    },
  };

  const task = TASKS[taskKey] || TASKS['data_cat'];
  const allAnswered = task.items.every(item => answers[item.id]);

  const handleSubmit = () => {
    const correct = task.items.filter(item => answers[item.id] === item.answer).length;
    const earned = (correct * parseFloat(task.pay.replace('$', '')) / task.items.length).toFixed(2);

    const active = JSON.parse(localStorage.getItem('currentUser'));
    if (active) {
      active.balance = (Number(active.balance) + Number(earned)).toFixed(2);
      localStorage.setItem('currentUser', JSON.stringify(active));
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const idx = users.findIndex(u => u.email === active.email);
      if (idx !== -1) { users[idx] = active; localStorage.setItem('users', JSON.stringify(users)); }
    }
    setStep('done');
  };

  if (step === 'done') {
    const correct = task.items.filter(item => answers[item.id] === item.answer).length;
    const earned = (correct * parseFloat(task.pay.replace('$', '')) / task.items.length).toFixed(2);
    return (
      <div className="page-wrapper center-content full-height">
        <div className="emoji-icon-large mt-6 mb-4">{correct === task.items.length ? '🎉' : '✅'}</div>
        <h2 className="title-large text-center mb-6">Task Complete!</h2>
        <div className="score-card mb-4">
          <p className="text-gray mb-1">Score</p>
          <h3 className="score-xl text-green">{Math.round((correct / task.items.length) * 100)}%</h3>
          <p className="text-gray">{correct} of {task.items.length} correct</p>
        </div>
        <div className="score-card mb-6">
          <p className="text-gray mb-1">Earned</p>
          <h3 className="score-xl text-green">+${earned}</h3>
          {isLocked && <p className="text-gray-small" style={{color:'#f59e0b', marginTop:6}}>⚡ Upgrade to unlock more tasks!</p>}
        </div>
        <div className="fixed-bottom">
          {isLocked
            ? <button className="btn-primary w-full" onClick={() => navTo('payment')}>Upgrade to Unlock More →</button>
            : <button className="btn-primary w-full" onClick={() => navTo('dashboard')}>Back to Dashboard →</button>
          }
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper" style={{paddingBottom: 120}}>
      <BackButton goBack={goBack} />
      <div className="text-center mb-4">
        <div className="icon-badge target-badge mb-2" style={{fontSize:36}}>{task.icon}</div>
        <h2 className="title-large mt-3">{task.title}</h2>
        <div className="earn-pill mt-3" style={{display:'inline-block'}}>
          💰 Earns up to {task.pay}/task
        </div>
        {isLocked && <p className="text-gray-small mt-2" style={{color:'#f59e0b'}}>⚡ Preview task – upgrade to keep earning</p>}
      </div>
      <p className="text-gray mb-4">{task.desc}</p>

      {task.items.map((item, i) => (
        <div key={item.id} className="content-card mb-4" style={{textAlign:'left'}}>
          <p className="mb-3" style={{fontWeight:700, fontSize:14, color:'#111'}}>{i+1}. {item.text}</p>
          <div style={{display:'flex', flexDirection:'column', gap:10}}>
            {item.opts.map(opt => (
              <label key={opt} className="radio-label">
                <input type="radio" checked={answers[item.id] === opt} onChange={() => setAnswers(prev => ({...prev, [item.id]: opt}))} />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="fixed-bottom" style={{background:'linear-gradient(to top, var(--bg-bottom) 90%, transparent)'}}>
        <button
          className={`btn-primary w-full ${!allAnswered ? 'disabled' : ''}`}
          onClick={() => { if(allAnswered) handleSubmit(); }}
          disabled={!allAnswered}
        >
          Submit Task <span>→</span>
        </button>
      </div>
    </div>
  );
}

function PaymentPage({ navTo, goBack }) {
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | pending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [txRef, setTxRef] = useState('');

  const MEGAPAY_API_KEY = 'MGPYCN5rjePf';
  const MEGAPAY_EMAIL   = 'kemeirowan@gmail.com';
  const AMOUNT          = 390;

  const formatPhone = (raw) => {
    let p = raw.replace(/\D/g, '');
    if (p.startsWith('0')) p = '254' + p.slice(1);
    if (p.startsWith('+')) p = p.slice(1);
    return p;
  };

  const initiatePayment = async () => {
    const msisdn = formatPhone(phone);
    if (msisdn.length < 12) {
      setErrorMsg('Enter a valid Kenyan phone number e.g. 0712 345 678');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    const ref = 'RMT-' + Date.now();
    setTxRef(ref);
    try {
      const res = await fetch('https://megapay.co.ke/backend/v1/initiatestk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: MEGAPAY_API_KEY,
          email: MEGAPAY_EMAIL,
          amount: String(AMOUNT),
          msisdn,
          reference: ref,
        }),
      });
      const data = await res.json();
      if (data.success || data.ResponseCode === '0' || res.ok) {
        setStatus('pending');
      } else {
        setErrorMsg(data.message || data.errorMessage || 'STK push failed. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg('Network error. Check your connection and try again.');
      setStatus('error');
    }
  };

  const confirmPayment = () => {
    const active = JSON.parse(localStorage.getItem('currentUser'));
    if (active) {
      active.upgraded = true;
      localStorage.setItem('currentUser', JSON.stringify(active));
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const idx = users.findIndex(u => u.email === active.email);
      if (idx !== -1) { users[idx] = active; localStorage.setItem('users', JSON.stringify(users)); }
    }
    setStatus('success');
  };

  /* ── SUCCESS SCREEN ── */
  if (status === 'success') {
    return (
      <div className="page-wrapper center-content full-height">
        <div className="icon-badge success-badge" style={{fontSize: 40}}>✓</div>
        <h2 className="title-large text-center mt-6 mb-4">Payment Confirmed!</h2>
        <div className="content-card text-center mb-6">
          <p className="text-gray mb-3">Your account has been upgraded to <b>Premium</b></p>
          <div className="qualified-pill mb-2"><span className="check-circle">✓</span> All 8 Tasks Unlocked</div>
          <div className="qualified-pill"><span className="check-circle">⚡</span> Premium Earner Status</div>
        </div>
        <div className="fixed-bottom">
          <button className="btn-primary w-full" onClick={() => navTo('dashboard')}>Go to Dashboard →</button>
        </div>
      </div>
    );
  }

  /* ── PENDING SCREEN (STK sent) ── */
  if (status === 'pending') {
    return (
      <div className="page-wrapper center-content full-height">
        <div className="spinner-wrapper mb-6"><div className="loading-spinner"></div></div>
        <h2 className="title-large text-center mb-2">STK Push Sent!</h2>
        <p className="text-gray text-center mb-4">
          Check <b>{phone}</b> for the M-Pesa payment prompt and enter your PIN.
        </p>
        <div className="content-card text-center mb-6">
          <p className="text-gray-small mb-1">Reference</p>
          <p style={{fontFamily:'monospace', fontWeight:700, fontSize:13, color:'#111'}}>{txRef}</p>
          <div className="divider" style={{margin:'12px 0'}}></div>
          <p className="text-gray-small">Amount: <b>KES {AMOUNT}</b></p>
          <p className="text-gray-small">Powered by <b>MegaPay</b></p>
        </div>
        <p className="text-gray text-center mb-4" style={{fontSize:13}}>
          Once you complete the M-Pesa payment, tap below to activate.
        </p>
        <div className="fixed-bottom">
          <button className="btn-primary w-full" onClick={confirmPayment}>
            ✅ I Have Paid — Activate Account
          </button>
          <button
            className="btn-secondary w-full"
            style={{marginTop:10}}
            onClick={() => { setStatus('idle'); setTxRef(''); }}
          >
            ← Resend STK Push
          </button>
        </div>
      </div>
    );
  }

  /* ── MAIN INPUT SCREEN ── */
  return (
    <div className="page-wrapper mt-4" style={{paddingBottom: 120}}>
      <BackButton goBack={goBack} />
      <div className="text-center mb-6">
        <div className="mpesa-logo-placeholder">
          <span className="text-green-bold">M</span><span className="text-red-bold">-PESA</span>
        </div>
        <h2 className="title-large mt-3">Upgrade Account</h2>
        <p className="text-gray">Unlock all tasks &amp; earn more</p>
      </div>

      <div className="payment-card text-center mb-4">
        <p className="text-gray-small mb-1">One-time Upgrade Fee</p>
        <h3 className="score-xl text-green mb-1">KES {AMOUNT}</h3>
        <p className="text-gray-small">Powered by MegaPay</p>
      </div>

      <div className="content-card mb-4">
        <h4 className="instruction-title mb-3">What you unlock:</h4>
        <ul className="checklist">
          <li><span className="check-icon">✓</span> All 8 AI Training Tasks</li>
          <li><span className="check-icon">✓</span> Unlimited Daily Earnings</li>
          <li><span className="check-icon">✓</span> Priority Task Queue</li>
          <li><span className="check-icon">✓</span> Instant M-Pesa Withdrawals</li>
        </ul>
      </div>

      <div className="auth-card mb-6">
        <div className="input-group">
          <label>Your M-Pesa Phone Number</label>
          <input
            type="tel"
            placeholder="e.g. 0712 345 678"
            className="form-input"
            value={phone}
            onChange={e => { setPhone(e.target.value); setErrorMsg(''); }}
          />
          {errorMsg && (
            <p style={{color:'#ef4444', fontSize:12, marginTop:6}}>{errorMsg}</p>
          )}
        </div>
      </div>

      <div className="fixed-bottom">
        <button
          className={`btn-primary w-full ${(!phone || status === 'loading') ? 'disabled' : ''}`}
          onClick={initiatePayment}
          disabled={!phone || status === 'loading'}
        >
          {status === 'loading' ? '⏳ Sending STK Push...' : `📲 Pay KES ${AMOUNT} via M-Pesa`}
        </button>
      </div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [history, setHistory] = useState(['landing']);
  const [taskMeta, setTaskMeta] = useState({ key: 'data_cat', locked: false });

  const navTo = (page, taskKey, isLocked) => {
    window.scrollTo(0, 0);
    if (page === 'do_task') {
      setTaskMeta({ key: taskKey, locked: isLocked });
    }
    setCurrentPage(page);
    setHistory(prev => [...prev, page]);
  };

  const goBack = () => {
    setHistory(prev => {
      if (prev.length <= 1) return prev;
      const newHistory = prev.slice(0, -1);
      const prevPage = newHistory[newHistory.length - 1];
      window.scrollTo(0, 0);
      setCurrentPage(prevPage);
      return newHistory;
    });
  };

  return (
    <div className="remotask-app">
       {currentPage === 'landing' && <LandingPage navTo={navTo} />}
       {currentPage === 'signup' && <SignupPage navTo={navTo} goBack={goBack} />}
       {currentPage === 'login' && <LoginPage navTo={navTo} goBack={goBack} />}
       {currentPage === 'assessment' && <AssessmentPage navTo={navTo} goBack={goBack} />}
       {currentPage === 'quiz' && <QuizPage navTo={navTo} goBack={goBack} />}
       {currentPage === 'processing' && <ProcessingPage navTo={navTo} />}
       {currentPage === 'screening_passed' && <ScreeningPassedPage navTo={navTo} />}
       {currentPage === 'task_complete' && <TaskCompletePage navTo={navTo} />}
       {currentPage === 'dashboard' && <DashboardPage navTo={navTo} />}
       {currentPage === 'do_task' && <DoTaskPage navTo={navTo} goBack={goBack} taskKey={taskMeta.key} isLocked={taskMeta.locked} />}
       {currentPage === 'payment' && <PaymentPage navTo={navTo} goBack={goBack} />}
    </div>
  );
}

export default App;
