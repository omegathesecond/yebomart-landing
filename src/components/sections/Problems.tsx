const PROBLEMS = [
  {
    emoji: '😤',
    title: '"End of day, cash doesn\'t match"',
    body: 'Sales are happening but money is missing. You know something is wrong but can\'t prove it.',
  },
  {
    emoji: '😩',
    title: '"I can\'t leave my shop for one day"',
    body: 'No visibility when you\'re away. Miss family events. Take a sick day and lose money.',
  },
  {
    emoji: '🤦',
    title: '"Always out of bread, stuck with rice"',
    body: 'Run out of what sells fast. Slow products take up space and money for months.',
  },
  {
    emoji: '📝',
    title: '"Counting stock takes forever"',
    body: 'Paper records get lost. Manual counting wastes entire weekends. Mistakes cost money.',
  },
  {
    emoji: '🤷',
    title: '"Am I even making profit?"',
    body: 'Work 16 hours a day but don\'t know if you\'re making money or losing it.',
  },
  {
    emoji: '😰',
    title: '"I think staff are stealing"',
    body: 'Products disappear. No way to track who sold what. No accountability.',
  },
];

export function Problems() {
  return (
    <section id="problems" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sound Familiar?</h2>
          <p className="text-xl text-gray-400">Every shop owner in Eswatini knows these problems</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-brand-400">YeboMart AI fixes all of this.</p>
        </div>
      </div>
    </section>
  );
}
