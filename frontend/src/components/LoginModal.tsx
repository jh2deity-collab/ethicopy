'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginSuccess: (user: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            onLoginSuccess(email.split('@')[0] || 'Premium User');
            onClose();
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md glass-panel p-10 rounded-[3rem] shadow-2xl border border-white/20 overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-trust-blue/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-mint-green/20 rounded-full blur-3xl" />

                        <div className="relative z-10 space-y-8">
                            <div className="text-center space-y-2">
                                <div className="w-16 h-16 bg-gradient-to-br from-trust-blue to-mint-green rounded-2xl mx-auto flex items-center justify-center font-black text-white text-3xl shadow-xl shadow-blue-500/20 mb-4 transition-transform hover:rotate-3">E</div>
                                <h3 className="text-3xl font-bold tracking-tight text-slate-800">환영합니다</h3>
                                <p className="text-xs font-medium text-slate-gray/60 uppercase tracking-widest">EthiCopy 엔터프라이즈 보안 접속</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2 text-left">
                                    <label className="text-[10px] font-black text-slate-gray/50 uppercase tracking-widest ml-4">기업용 이메일 계정</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@company.com"
                                        className="w-full bg-white/50 border border-slate-200 h-14 rounded-2xl px-6 outline-none focus:ring-2 focus:ring-trust-blue/30 focus:border-trust-blue/50 transition-all font-medium text-slate-700"
                                    />
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-[10px] font-black text-slate-gray/50 uppercase tracking-widest ml-4">아키텍처 액세스 키</label>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-white/50 border border-slate-200 h-14 rounded-2xl px-6 outline-none focus:ring-2 focus:ring-trust-blue/30 focus:border-trust-blue/50 transition-all font-medium text-slate-700"
                                    />
                                </div>

                                <div className="pt-4">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="w-full rounded-2xl h-14 shadow-xl shadow-blue-500/20"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? '서버 노드 검증 중...' : '로그인'}
                                    </Button>
                                </div>
                            </form>

                            <div className="pt-4 text-center">
                                <p className="text-[10px] font-bold text-slate-gray/40 uppercase tracking-[0.2em]">
                                    보안 프로토콜 v.2.4 활성화 &bull; AES-256 암호화
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 hover:text-slate-600 hover:bg-slate-50 transition-all duration-300"
                        >
                            ✕
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
