"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { EthicsEditor } from "@/components/EthicsEditor";
import { DiagnosisResult, NudgeOption } from "@/components/DiagnosisResult";
import { LoginModal } from '@/components/LoginModal';

interface DiagnosisData {
  patterns: string[];
  riskLevel: string;
  explanation: string;
  legalProvision?: string;
  options: NudgeOption[];
  overallScore: number;
}

export default function Home() {
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const handleDiagnose = async (text: string) => {
    if (!user) {
      alert('진행을 위해 Enterprise 로그인이 필요합니다.');
      setIsLoginOpen(true);
      return;
    }

    setIsDiagnosing(true);
    try {
      const response = await fetch('http://localhost:8000/api/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();

      if (!data.detected_patterns) {
        throw new Error('Invalid response from diagnosis engine');
      }

      setResult({
        patterns: data.detected_patterns,
        riskLevel: data.risk_level,
        explanation: data.explanation,
        legalProvision: data.legal_provision,
        options: data.transformed_options,
        overallScore: data.overall_ethics_score
      });
    } catch (error) {
      console.error('Diagnosis failed:', error);
      alert('진단 엔진 연결에 실패했거나 올바르지 않은 응답을 받았습니다.');
    } finally {
      setIsDiagnosing(false);
    }
  };

  const handleLoginSuccess = (userName: string) => {
    setUser(userName);
  };

  return (
    <main className="h-screen hero-gradient selection:bg-trust-blue selection:text-white relative overflow-hidden flex flex-col">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="/bg.png"
          alt="Premium Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
      </div>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Navbar - More Compact */}
      <nav className="relative w-full h-20 bg-white/40 backdrop-blur-2xl border-b border-white/20 z-50 px-8 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3" onClick={() => setResult(null)} style={{ cursor: 'pointer' }}>
          <div className="w-10 h-10 bg-gradient-to-br from-trust-blue to-mint-green rounded-xl flex items-center justify-center font-black text-white text-2xl shadow-md">E</div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-gray">EthiCopy <span className="text-xs font-black bg-mint-green/20 text-mint-green px-2 py-0.5 rounded-full ml-1 align-top uppercase">Enterprise</span></h1>
        </div>
        <div className="hidden lg:flex gap-10 text-sm font-bold text-slate-gray/50 uppercase tracking-[0.1em]">
          <a href="/docs/platform" target="_blank" className="hover:text-trust-blue transition-colors">Platform</a>
          <a href="/docs/api" target="_blank" className="hover:text-trust-blue transition-colors">Ethics API</a>
          <a href="/docs/pricing" target="_blank" className="hover:text-trust-blue transition-colors">Pricing</a>
        </div>
        {!user ? (
          <Button
            variant="primary"
            size="md"
            className="rounded-full px-8 shadow-blue-500/20 shadow-lg"
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </Button>
        ) : (
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black text-slate-gray/40 uppercase tracking-widest">Connected Node</p>
              <p className="text-sm font-bold text-slate-800">{user}</p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-mint-green p-0.5">
              <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-xs font-black text-trust-blue">
                {user[0].toUpperCase()}
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 overflow-hidden">
        {!result ? (
          <div className="w-full max-w-5xl space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-mint-green animate-pulse" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-gray/60">
                  White Nudge Transformation Engine
                </span>
              </div>

              <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-slate-800 leading-[0.95] max-w-4xl mx-auto">
                <span className="premium-gradient-text">신뢰로 설득하는</span> <br />
                가장 스마트한 방법.
              </h2>

              <p className="text-xl text-slate-gray/70 font-medium max-w-xl mx-auto leading-relaxed">
                다크패턴 리스크를 제거하고, <br />
                윤리적 넛지로 고객 구매 여정을 선순환시키세요.
              </p>
            </div>

            <div className="max-w-4xl mx-auto w-full">
              <EthicsEditor onDiagnose={handleDiagnose} isLoading={isDiagnosing} />
            </div>

            <div className="grid grid-cols-3 gap-12 opacity-60 max-w-3xl mx-auto pt-6">
              <div className="text-center space-y-1">
                <p className="text-4xl font-black text-slate-gray tracking-tighter">98%</p>
                <p className="text-xs font-bold uppercase text-slate-gray/50 tracking-widest">Compliance</p>
              </div>
              <div className="text-center space-y-1">
                <p className="text-4xl font-black text-slate-gray tracking-tighter">1.5x</p>
                <p className="text-xs font-bold uppercase text-slate-gray/50 tracking-widest">LTV Boost</p>
              </div>
              <div className="text-center space-y-1">
                <p className="text-4xl font-black text-slate-gray tracking-tighter">&lt; 0.1s</p>
                <p className="text-xs font-bold uppercase text-slate-gray/50 tracking-widest">Analysis Speed</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-500 w-full h-full flex items-center justify-center p-4 overflow-y-auto mt-4">
            <DiagnosisResult
              {...result}
              onReset={() => setResult(null)}
            />
          </div>
        )}
      </div>

      <footer className="relative z-10 py-8 border-t border-slate-200/50 bg-white/30 backdrop-blur-sm shrink-0">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-xs font-bold text-slate-gray/40 uppercase tracking-[0.2em]">
          <p>EthiCopy Protocol &bull; 2026</p>
          <div className="flex gap-10">
            <a href="/docs/sla" target="_blank" className="hover:text-trust-blue transition-colors">Integrity SLA</a>
            <a href="/docs/privacy" target="_blank" className="hover:text-trust-blue transition-colors">Privacy First</a>
            <button
              className="text-slate-800 hover:text-trust-blue transition-colors font-black"
              onClick={() => {
                if (confirm('EthiCopy의 "간편 종료 원칙"에 따라 계정을 안전하게 보호하고 종료하시겠습니까?')) {
                  setResult(null);
                  setUser(null);
                  alert('안전하게 로그아웃 되었습니다.');
                }
              }}
            >
              Safe Account Exit
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
