'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface DocContent {
    title: string;
    subtitle: string;
    content: React.ReactNode;
}

const docData: Record<string, DocContent> = {
    platform: {
        title: 'Enterprise Service Guide',
        subtitle: 'Behavioral Economics Compliance & Transformation Framework',
        content: (
            <div className="space-y-10">
                <section className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800">1. Executive Summary</h3>
                    <p className="text-lg leading-relaxed text-slate-gray/80">
                        EthiCopy는 마케팅의 효율성과 기업의 윤리적 책임을 동시에 실현하는 **글로벌 비헤이비어 경제 규제 준수 플랫폼**입니다.
                        당사의 AI 엔진은 소비자를 기만하는 '다크패턴'을 정교하게 탐지하고, 이를 브랜드 신뢰도를 도모하는 '화이트넛지'로 즉각 변환합니다.
                    </p>
                </section>

                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800">2. 핵심 기술 엔진</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-black text-trust-blue text-xs uppercase tracking-widest mb-2">Pattern Radar™</h4>
                            <p className="text-sm font-medium text-slate-gray">
                                희소성 가공, 감정적 조작, 강제적 결제 유도 등 12가지 범주의 다크패턴을 99.8%의 정확도로 식별합니다.
                            </p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-black text-mint-green text-xs uppercase tracking-widest mb-2">Nudge Transformer</h4>
                            <p className="text-sm font-medium text-slate-gray">
                                탐지된 부정 패턴을 투명성 기반의 언어로 재구축하여, 신뢰 구축과 전환율 향상을 동시에 달성합니다.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="p-8 bg-trust-blue shadow-2xl shadow-blue-500/20 rounded-[2.5rem] text-white">
                    <h3 className="text-xl font-bold mb-4">"윤리는 브랜드의 가장 강력한 자산입니다."</h3>
                    <p className="opacity-80 leading-loose">
                        단기적인 기만은 즉각적인 구매를 유도할 수 있지만, 장기적인 LTV(고객 생애 가치)를 파괴합니다.
                        EthiCopy는 규제 리스크를 0%로 관리하면서도 고객과의 투명한 소통을 통해 비즈니스의 지속 가능성을 보장합니다.
                    </p>
                </section>
            </div>
        )
    },
    api: {
        title: 'Ethics API Developer Portal',
        subtitle: 'Standardized Interface for Ethical AI Integration',
        content: (
            <div className="space-y-10">
                <section className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800 italic">"Code with Integrity"</h3>
                    <p className="text-lg leading-relaxed text-slate-gray/80 font-medium">
                        EthiCopy API는 전 세계 모든 이커머스, 핀테크, 플랫폼 서비스에 당사의 윤리 진단 엔진을 플러그인 형태로 통합할 수 있도록 설계되었습니다.
                    </p>
                </section>

                <section className="space-y-6">
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest bg-slate-100 px-3 py-1 inline-block rounded-full">
                        Endpoint Specifications
                    </h4>
                    <div className="bg-slate-900 rounded-3xl p-8 overflow-hidden relative group">
                        <div className="absolute top-4 right-6 text-[10px] font-black text-white/20 uppercase tracking-widest">Post Request</div>
                        <pre className="text-trust-blue font-mono text-sm leading-relaxed">
                            <code>{`POST https://api.ethicopy.io/v2/diagnose
Authorization: Bearer <YOUR_API_KEY>
Content-Type: application/json`}</code>
                        </pre>
                        <div className="h-px bg-white/10 my-6" />
                        <pre className="text-mint-green font-mono text-sm leading-relaxed">
                            <code>{`{
  "content": "오늘만 이 가격!",
  "strictness": 8
}`}</code>
                        </pre>
                    </div>
                </section>

                <div className="grid grid-cols-2 gap-8 pt-6">
                    <div className="space-y-2">
                        <h5 className="font-bold text-slate-800 uppercase text-xs tracking-tighter">Latency</h5>
                        <p className="text-2xl font-black text-trust-blue tracking-tighter">&lt; 100ms</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="font-bold text-slate-800 uppercase text-xs tracking-tighter">Uptime SLA</h5>
                        <p className="text-2xl font-black text-mint-green tracking-tighter">99.9%</p>
                    </div>
                </div>
            </div>
        )
    },
    privacy: {
        title: 'Privacy & Integrity Protocol',
        subtitle: 'Our Commitment to Transparency and Data Sovereignty',
        content: (
            <div className="space-y-10">
                <section className="space-y-6">
                    <div className="flex items-center gap-4 text-slate-800 border-l-4 border-trust-blue pl-6">
                        <h3 className="text-3xl font-bold tracking-tight">Data Sovereignty</h3>
                    </div>
                    <p className="text-lg text-slate-gray/80 leading-relaxed">
                        EthiCopy는 고객이 입력한 마케팅 카피 데이터를 모델 학습에 재사용하지 않는 것을 원칙으로 합니다.
                        당사는 '개인정보 보호 제일주의(Privacy First)'를 통해 기업의 마케팅 자산과 고객의 개인정보를 철저히 보호합니다.
                    </p>
                </section>

                <div className="grid grid-cols-1 gap-6">
                    <div className="glass-panel p-8 rounded-3xl border border-slate-200/50 space-y-4">
                        <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-trust-blue" />
                            Clear Exit Policy
                        </h4>
                        <p className="text-sm text-slate-gray leading-relaxed font-medium">
                            우리는 다크패턴을 지양하는 플랫폼으로서, 사용자가 언제든 자신의 데이터와 계정을 한 번의 클릭으로 완벽하게 삭제하고 수출할 수 있음을 보장합니다.
                            사용자를 붙잡기 위한 어떠한 심리적 트릭도 사용하지 않습니다.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    pricing: {
        title: 'Enterprise Pricing Plan',
        subtitle: 'Scalable Solutions for Ethical Growth',
        content: (
            <div className="space-y-10">
                <table className="w-full border-separate border-spacing-0 rounded-3xl overflow-hidden border border-slate-200">
                    <thead>
                        <tr className="bg-slate-50">
                            <th className="p-6 text-left text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-200">Tier</th>
                            <th className="p-6 text-left text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-200">Audits</th>
                            <th className="p-6 text-left text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-200">Pricing</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr>
                            <td className="p-6 font-bold text-slate-800">Professional</td>
                            <td className="p-6 text-slate-gray">Up to 5,000 / mo</td>
                            <td className="p-6 font-black text-trust-blue">$499 <span className="text-[10px] text-slate-400">/mo</span></td>
                        </tr>
                        <tr className="bg-slate-50/50">
                            <td className="p-6 font-bold text-slate-800">Enterprise</td>
                            <td className="p-6 text-slate-gray">Unlimited</td>
                            <td className="p-6 font-black text-slate-800 font-bold uppercase text-[10px] tracking-widest">Custom Quote</td>
                        </tr>
                    </tbody>
                </table>

                <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden group">
                    <div className="relative z-10 space-y-4">
                        <h3 className="text-2xl font-bold">글로벌 규제 대응 파트너</h3>
                        <p className="opacity-70 leading-relaxed font-medium">
                            FTC(미국), GDPR(유럽), EU AI Act 등 전 세계 60개국 이상의 소비자 보호법을 실시간으로 추적하고 대응합니다.
                            EthiCopy와 함께 글로벌 시장에서의 신뢰를 선점하세요.
                        </p>
                        <Button variant="success" size="lg" className="rounded-2xl mt-4 px-10 h-16 shadow-xl shadow-mint-green/20">Talk to Ethics Council</Button>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-trust-blue/10 rounded-full blur-3xl" />
                </div>
            </div>
        ),
    },
    sla: {
        title: 'Service Level Agreement',
        subtitle: 'Institutional Commitment to Reliability & Precision',
        content: (
            <div className="space-y-10">
                <section className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800">1. 가동 시간 보장 (Uptime)</h3>
                    <p className="text-lg leading-relaxed text-slate-gray/80">
                        EthiCopy Protocol은 엔터프라이즈 계층에 대해 **연간 99.9% 이상의 가동 시간**을 보장합니다.
                        당사의 분산형 AI 인프라는 전 세계 어디서든 지연 없는 진단 환경을 제공합니다.
                    </p>
                </section>

                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800">2. 분석 정밀도 유지</h3>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                        <p className="text-sm font-medium text-slate-gray">
                            당사는 매주 전 세계 주요 국가(FTC, GDPR, EU AI Act 등)의 소비자 보호 규제 변화를 추적하여 AI 엔진을 업데이트합니다.
                        </p>
                        <ul className="list-disc list-inside text-xs font-bold text-trust-blue space-y-1">
                            <li>오탐률(False Positive) 0.5% 미만 유지</li>
                            <li>평균 분석 응답 속도 100ms 미만</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800">3. 고객 지원 및 보상</h3>
                    <p className="text-sm text-slate-gray leading-relaxed">
                        서비스 수준 합의(SLA) 미달 시, 당사는 '무결성 크레딧(Integrity Credits)' 정책에 따라 다음 결제 주기에 대한 보상을 제공합니다.
                        우리는 기술적 오류에 대해 책임을 지는 것이 윤리적 플랫폼의 기본이라고 믿습니다.
                    </p>
                </section>
            </div>
        )
    }
};

export default function DocPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const doc = docData[slug] || docData['platform'];

    return (
        <main className="min-h-screen bg-slate-50/50 selection:bg-trust-blue selection:text-white flex flex-col">
            {/* Header */}
            <nav className="h-24 bg-white border-b border-slate-100 flex items-center justify-between px-12 shrink-0">
                <Link href="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-trust-blue to-mint-green rounded-xl flex items-center justify-center font-black text-white text-2xl shadow-lg">E</div>
                    <p className="text-xl font-bold tracking-tight text-slate-gray">EthiCopy <span className="text-[10px] font-black text-trust-blue bg-trust-blue/5 px-2 py-0.5 rounded-full uppercase ml-1">Docs</span></p>
                </Link>
                <Link href="/">
                    <Button variant="outline" size="sm" className="rounded-full px-6 font-black text-[10px] tracking-widest uppercase">← Back to Dashboard</Button>
                </Link>
            </nav>

            {/* Hero Section */}
            <header className="bg-white px-12 py-16 border-b border-slate-100">
                <div className="max-w-4xl mx-auto space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3"
                    >
                        <span className="h-[2px] w-8 bg-trust-blue" />
                        <p className="text-xs font-black uppercase tracking-[0.4em] text-trust-blue">Official Protocol Document</p>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl font-bold tracking-tighter text-slate-900"
                    >
                        {doc.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-medium text-slate-gray/50 tracking-tight"
                    >
                        {doc.subtitle}
                    </motion.p>
                </div>
            </header>

            {/* Content */}
            <section className="flex-1 px-12 py-20 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-4xl mx-auto py-12 px-16 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] rounded-[3rem] border border-slate-100"
                >
                    {doc.content}
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center text-[10px] font-black text-slate-gray/30 uppercase tracking-[0.5em] shrink-0">
                EthiCopy Protocol Security Architecture &bull; Updated Jan 2026
            </footer>
        </main>
    );
}
