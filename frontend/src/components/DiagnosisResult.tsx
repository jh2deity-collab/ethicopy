"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';

export interface NudgeOption {
    id: string;
    type: string;
    text: string;
    predicted_ctr: number;
    ethics_score: number;
}

interface DiagnosisResultProps {
    patterns: string[];
    riskLevel: string;
    explanation: string;
    legalProvision?: string;
    options: NudgeOption[];
    overallScore: number;
    onReset: () => void;
}

export const DiagnosisResult: React.FC<DiagnosisResultProps> = ({
    patterns,
    riskLevel,
    explanation,
    legalProvision,
    options,
    overallScore,
    onReset
}) => {
    return (
        <div className="w-full max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Risk Analysis Panel */}
                <div className="lg:col-span-3 glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.05] -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000 pointer-events-none">
                        <Image src="/dark.png" alt="Dark Pattern Metaphor" fill className="object-cover rounded-full rotate-12" />
                    </div>

                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-4">
                            <span className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] border-2 ${riskLevel === 'High Risk' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                riskLevel === 'Warning' ? 'bg-warning-orange/10 text-warning-orange border-warning-orange/20' : 'bg-mint-green/10 text-mint-green border-mint-green/20'
                                }`}>
                                {riskLevel} Phase Detected
                            </span>
                            <div className="h-px bg-slate-200 flex-1" />
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-800">
                                탐지 패턴: <span className="text-warning-red underline decoration-warning-red/20 underline-offset-4">{(patterns || []).join(', ')}</span>
                            </h2>
                            <p className="text-xl text-slate-gray/80 leading-relaxed font-medium max-w-3xl">
                                {explanation}
                            </p>
                        </div>

                        {legalProvision && (
                            <div className="p-5 bg-slate-800/5 rounded-2xl border border-slate-800/10 inline-flex items-center gap-4">
                                <span className="text-2xl opacity-60">⚖️</span>
                                <p className="text-sm font-bold text-slate-800/70 leading-none tracking-tight">Compliance Reference: {legalProvision}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Ethics Score Gauge */}
                <div className="glass-panel p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-trust-blue/[0.04]" />
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-gray/40 relative z-10">Ethics Reliability Index</p>
                    <div className="relative w-40 h-40 flex items-center justify-center z-10">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-slate-100" />
                            <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="10" fill="transparent"
                                strokeDasharray={452} strokeDashoffset={452 - (452 * overallScore) / 100}
                                className={`${overallScore < 50 ? 'text-warning-red' : 'text-mint-green'} transition-all duration-1000 ease-out`} />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-black text-slate-800 tracking-tighter">{overallScore}</span>
                            <span className="text-xs font-bold text-slate-gray/40 uppercase">PTS</span>
                        </div>
                    </div>
                    <p className="text-sm font-bold text-slate-gray/60 relative z-10 leading-snug px-2">
                        {overallScore < 50 ? "기만적 패턴으로 인한 위험이 감지되었습니다." : "비교적 투명하고 윤리적인 카피입니다."}
                    </p>
                </div>
            </div>

            {/* White Nudge Section */}
            <div className="space-y-6 px-2 pt-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-800 uppercase flex items-center gap-3">
                        <span className="w-2 h-2 bg-mint-green rounded-full shadow-[0_0_10px_rgba(0,217,126,0.6)]" />
                        Nudge Alternatives
                    </h3>
                    <div className="text-xs font-black text-slate-gray/30 uppercase tracking-[0.4em]">Transformation Stack v.1.2026</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {options.map((option) => (
                        <div key={option.id} className="glass-panel p-10 rounded-[2rem] hover:ring-2 hover:ring-trust-blue/30 transition-all group flex flex-col justify-between h-64">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-black uppercase tracking-widest text-trust-blue bg-trust-blue/5 px-3 py-1 rounded-full border border-trust-blue/10">
                                    {option.type}
                                </span>
                                <span className="text-sm font-black text-mint-green">{option.ethics_score}% Integrity</span>
                            </div>

                            <div className="flex-1 overflow-y-auto my-4 pr-2 custom-scrollbar">
                                <blockquote className="text-lg font-bold text-slate-800 leading-tight">
                                    "{option.text}"
                                </blockquote>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-100/50 shrink-0">
                                <p className="text-sm font-black text-trust-blue uppercase tracking-tight">Est. Conversion +{option.predicted_ctr}%</p>
                                <button className="text-xs font-bold text-slate-gray/40 hover:text-trust-blue uppercase tracking-widest transition-colors">Apply Copy</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
