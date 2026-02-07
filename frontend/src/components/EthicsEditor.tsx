"use client";

import React, { useState } from 'react';
import { Button } from './ui/Button';

interface EthicsEditorProps {
    onDiagnose: (text: string) => void;
    isLoading: boolean;
}

export const EthicsEditor: React.FC<EthicsEditorProps> = ({ onDiagnose, isLoading }) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (text.trim()) {
            onDiagnose(text);
        }
    };

    return (
        <div className="glass-panel w-full p-10 rounded-[2.5rem] shadow-xl space-y-8 animate-float">
            <div className="flex justify-between items-end border-b border-slate-200/50 pb-6">
                <div className="space-y-1">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-trust-blue">AI Ethics Filter</p>
                    <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Marketing Copy Audit</h2>
                </div>
                <span className="text-xs font-bold text-slate-gray/40 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">
                    v2.4 Secured
                </span>
            </div>

            <div className="relative group">
                <textarea
                    className="w-full h-40 p-8 text-xl font-medium border-2 border-slate-100/50 rounded-[1.5rem] focus:outline-none focus:border-trust-blue/40 focus:ring-4 focus:ring-trust-blue/5 transition-all resize-none bg-white/40 placeholder:text-slate-300"
                    placeholder="여기에 마케팅 카피를 입력하세요..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="absolute top-4 right-6 text-xs font-black uppercase text-slate-300 group-focus-within:text-trust-blue transition-colors">
                    Secure Sandbox Area
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-trust-blue shadow-[0_0_10px_rgba(0,98,255,0.6)]" />
                    <p className="text-sm font-bold text-slate-gray/70 leading-relaxed">
                        실시간으로 <span className="text-slate-900">문맥과 뉘앙스</span>를 <br /> 즉각 검토 및 분석합니다.
                    </p>
                </div>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleSubmit}
                    disabled={isLoading || !text.trim()}
                    className="w-full md:w-auto min-w-[240px] rounded-2xl h-16 text-xl tracking-tight shadow-xl shadow-blue-500/30"
                >
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>진단 중...</span>
                        </div>
                    ) : 'Audit & Transform'}
                </Button>
            </div>
        </div>
    );
}
