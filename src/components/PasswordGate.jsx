import { useState } from 'react';

const SITE_PASSWORD = 'IPS2026$';

export default function PasswordGate({ onAuthenticated }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem('authenticated', 'true');
      onAuthenticated();
    } else {
      setError(true);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-navy overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 animate-float"
        style={{ background: 'radial-gradient(circle, #00C853 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full opacity-10 animate-float"
        style={{ background: 'radial-gradient(circle, #00BFA5 0%, transparent 70%)', animationDelay: '2s' }} />

      <form onSubmit={handleSubmit} className="relative z-10 flex flex-col items-center gap-6 px-8 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Enter Password</h2>

        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false); }}
          placeholder="Password"
          autoFocus
          className="w-72 px-5 py-3 rounded-lg bg-charcoal border border-white/10 text-white text-center text-lg placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
        />

        {error && (
          <p className="text-negative text-sm -mt-2">Incorrect password</p>
        )}

        <button
          type="submit"
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-accent/30 bg-accent/5 text-accent text-lg font-medium transition-all duration-300 hover:bg-accent/15 hover:border-accent/60 hover:scale-105 cursor-pointer"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
