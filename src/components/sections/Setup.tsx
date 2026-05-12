export function Setup() {
  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start in 5 Minutes</h2>
          <p className="text-xl text-gray-400">No expensive hardware. No IT guy. Just sign in and go.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Step n={1} title="Open the App" body="Works on any phone, tablet, or computer you already have." />
          <Step n={2} title="Add Your Products" body="Scan barcodes or type them in. We help with pricing suggestions." />
          <Step n={3} title="Start Selling" body="Make your first sale. Everything is tracked from day one." />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Works even when the internet is down. 24/7 WhatsApp support.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium"
          >
            Talk to us on WhatsApp
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-brand-900/50 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
        {n}
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{body}</p>
    </div>
  );
}
