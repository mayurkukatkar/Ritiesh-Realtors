'use client';

import { useState } from 'react';

export default function EMICalculator() {
  const [plotSize, setPlotSize] = useState(1000);
  const [pricePerSqft, setPricePerSqft] = useState(1000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [tenureMonths, setTenureMonths] = useState(36);

  const totalCost = plotSize * pricePerSqft;
  const downPaymentAmt = (totalCost * downPaymentPercent) / 100;
  const loanAmount = totalCost - downPaymentAmt;
  const emiAmount = Math.round(loanAmount / tenureMonths);

  const formatCurrency = (val: number) => {
    return '₹' + new Intl.NumberFormat('en-IN').format(val);
  };

  const formatLakhs = (val: number) => {
    return '₹' + (val / 100000).toFixed(2) + ' L';
  };

  return (
    <section id="emi-calculator" className="py-24 bg-gradient-to-b from-forest to-deep-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm mb-4">
            <i className="fas fa-calculator mr-2"></i>Financial Planning
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-4">Plan Your <span className="gold-gradient-text">Investment</span></h2>
          <p className="text-gray-400 text-lg">Calculate your monthly installments with our easy-to-use EMI calculator. Zero interest on direct EMI plans!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Calculator Inputs */}
          <div className="glass-card p-8 rounded-3xl reveal">
            <h3 className="text-2xl font-bold mb-8">EMI Calculator</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300">Plot Size (sq.ft)</label>
                  <span className="text-yellow-400 font-bold">{plotSize.toLocaleString()} sq.ft</span>
                </div>
                <input 
                  type="range" min="500" max="5000" step="100" 
                  value={plotSize} onChange={(e) => setPlotSize(Number(e.target.value))}
                  className="w-full accent-yellow-400" 
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>500</span>
                  <span>5,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300">Price per sq.ft</label>
                  <span className="text-yellow-400 font-bold">{formatCurrency(pricePerSqft)}</span>
                </div>
                <input 
                  type="range" min="800" max="3000" step="50" 
                  value={pricePerSqft} onChange={(e) => setPricePerSqft(Number(e.target.value))}
                  className="w-full accent-yellow-400" 
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹800</span>
                  <span>₹3,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300">Down Payment (%)</label>
                  <span className="text-yellow-400 font-bold">{downPaymentPercent}%</span>
                </div>
                <input 
                  type="range" min="10" max="80" step="5" 
                  value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-yellow-400" 
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10%</span>
                  <span>80%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300">EMI Tenure (Months)</label>
                  <span className="text-yellow-400 font-bold">{tenureMonths} Months</span>
                </div>
                <input 
                  type="range" min="6" max="36" step="6" 
                  value={tenureMonths} onChange={(e) => setTenureMonths(Number(e.target.value))}
                  className="w-full accent-yellow-400" 
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>6</span>
                  <span>36</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl border-2 border-yellow-500/30 text-center reveal">
              <p className="text-gray-400 mb-2">Your Monthly EMI</p>
              <div className="text-4xl md:text-6xl font-bold gold-gradient-text mb-2">{formatCurrency(emiAmount)}</div>
              <p className="text-sm text-gray-400">per month for <span>{tenureMonths}</span> months at <span className="text-yellow-400 font-semibold">0% interest</span></p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-2xl text-center reveal">
                <p className="text-gray-400 text-xs mb-1">Total Cost</p>
                <p className="text-lg font-bold text-white">{formatLakhs(totalCost)}</p>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center reveal">
                <p className="text-gray-400 text-xs mb-1">Down Payment</p>
                <p className="text-lg font-bold text-white">{formatLakhs(downPaymentAmt)}</p>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center reveal">
                <p className="text-gray-400 text-xs mb-1">Loan Amount</p>
                <p className="text-lg font-bold text-white">{formatLakhs(loanAmount)}</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl reveal">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm">Payment Breakdown</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-full rounded-full" style={{ width: `${downPaymentPercent}%` }}></div>
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-yellow-400">Down Payment ({downPaymentPercent}%)</span>
                <span className="text-gray-400">EMI ({100 - downPaymentPercent}%)</span>
              </div>
            </div>

            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="btn-gold w-full py-4 rounded-xl text-estate-dark font-bold text-lg reveal">
              Get Custom Quote <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
