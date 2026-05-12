import { Price } from '@/components/Price';

export function AIFeatures() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-900/50 border border-purple-700 rounded-full px-4 py-2 mb-6">
            <span className="text-lg">🤖</span>
            <span className="text-sm text-purple-300">AI That Works For You 24/7</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Shop Gets Its Own Brain</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            While you sleep, our AI watches your business. It learns your patterns, catches problems,
            and tells you what to do next.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            emoji="🔮"
            title="Predicts Stock Needs"
            body={`"Order 50 loaves of bread by Thursday — school holidays start Monday and you'll sell 40% more."`}
          />
          <FeatureCard
            emoji="🚨"
            title="Catches Theft"
            body={
              <>
                "Cash is <Price szl={340} /> short today. 3 transactions had no receipt printed. Sipho was on shift."
              </>
            }
          />
          <FeatureCard
            emoji="📊"
            title="Finds Hidden Profit"
            body={
              <>
                "Your margin on Simba Chips is only 5%. Competitors charge <Price szl={2} /> more. You're leaving{' '}
                <Price szl={3000} />/month on the table."
              </>
            }
          />
          <FeatureCard
            emoji="💬"
            title="Daily WhatsApp Briefing"
            body={`"Every evening at 6pm, get a summary of your day. Sales, issues, what to do tomorrow."`}
          />
        </div>

        {/* Voice Feature Highlight */}
        <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-gray-900 border border-purple-800/50 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-4xl shrink-0 animate-pulse">
            🎤
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Hands Busy? Just Talk.</h3>
            <p className="text-gray-400">
              Stocking shelves? Helping a customer? Just tap the mic and speak:{' '}
              <em className="text-purple-300">"Hey, how many Cokes do I have left?"</em> — Your AI responds instantly.
              Works in English and siSwati.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-900 rounded-2xl border border-gray-800 p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ask Your AI Anything</h3>
              <p className="text-gray-400 mb-6">
                Type or just speak — your AI understands both. Talk to it like you'd talk to your manager.
              </p>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2">
                  <span className="text-brand-400">⌨️</span>
                  <span className="text-sm">Type</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-900/50 border border-purple-700 rounded-full px-4 py-2">
                  <span className="text-purple-400">🎤</span>
                  <span className="text-sm">Voice</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2">
                  <span className="text-green-400">💬</span>
                  <span className="text-sm">WhatsApp</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "What's my best selling product this month?",
                  'Why did sales drop last Tuesday?',
                  'Which staff member sells the most?',
                  'What should I order this week?',
                ].map((q) => (
                  <div key={q} className="bg-gray-800 rounded-lg p-3 text-sm">
                    <span className="text-gray-400">"{q}"</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">You</div>
                <div className="bg-gray-700 rounded-2xl rounded-tl-none p-3 text-sm">What should I order this week?</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">🤖</div>
                <div className="bg-purple-900/50 border border-purple-800 rounded-2xl rounded-tl-none p-3 text-sm">
                  <p>Based on your sales patterns and current stock:</p>
                  <ul className="mt-2 space-y-1">
                    <li>🍞 <strong>Bread:</strong> Order 100 (you sell ~20/day, only 15 left)</li>
                    <li>🥛 <strong>Milk:</strong> Order 48 (selling fast, 3 days supply left)</li>
                    <li>🥚 <strong>Eggs:</strong> Skip this week (overstocked by 30%)</li>
                  </ul>
                  <p className="mt-2 text-gray-400">Shall I create this as a purchase order?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ emoji, title, body }: { emoji: string; title: string; body: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-b from-purple-900/30 to-gray-900 border border-purple-800/50 rounded-2xl p-6">
      <div className="text-3xl mb-4">{emoji}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{body}</p>
    </div>
  );
}
