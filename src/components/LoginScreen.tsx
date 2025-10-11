import { useState, KeyboardEvent } from 'react';
import { GradientLayout } from './GradientLayout';

interface LoginScreenProps {
  onLogin: (email: string, password: string) => void;
  onSignUp: () => void;
}

export function LoginScreen({ onLogin, onSignUp }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && email.trim() && password.trim()) {
      onLogin(email.trim(), password.trim());
    }
  };

  return (
    <GradientLayout>
      <div className="text-center">
        <p className="text-[36px] text-black leading-[normal] mb-[48px] font-['Manrope:SemiBold',_sans-serif] font-semibold">Welcome back</p>
        <div className="max-w-[350px] mx-auto space-y-[24px]">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Email"
              className="w-full bg-transparent border-0 border-b border-black/30 text-center text-[18px] text-black outline-none pb-[6px] placeholder:text-black/30 focus:border-black transition-colors"
              autoFocus
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Password"
              className="w-full bg-transparent border-0 border-b border-black/30 text-center text-[18px] text-black outline-none pb-[6px] placeholder:text-black/30 focus:border-black transition-colors"
            />
          </div>
          <p className="text-[12px] text-black/50 mt-[12px]">Press Enter to continue</p>
          <div className="pt-[24px]">
            <button
              onClick={onSignUp}
              className="text-[14px] text-black/60 hover:text-black underline"
            >
              Don't have an account? Sign up
            </button>
          </div>
        </div>
      </div>
    </GradientLayout>
  );
}
