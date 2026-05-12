import { Price } from '@/components/Price';

export function Solutions() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Run Your Shop With Confidence</h2>
          <p className="text-xl text-gray-400">Simple tools that solve real problems</p>
        </div>

        <div className="space-y-20">
          {/* Solution 1: Money tracking */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-brand-400 font-semibold mb-2">EVERY CENT TRACKED</div>
              <h3 className="text-3xl font-bold mb-4">Know Where Your Money Goes</h3>
              <p className="text-xl text-gray-400 mb-6">
                Every sale is recorded automatically. Cash matches the register. See exactly how much you made today,
                this week, this month.
              </p>
              <Checks
                items={[
                  'Every transaction recorded with time and staff member',
                  'Daily, weekly, monthly profit reports',
                  'Know your real margins on every product',
                ]}
              />
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="text-sm text-gray-500 mb-4">Today's Summary</div>
              <div className="space-y-4">
                <Row label="Total Sales" value={<Price szl={4250} className="text-2xl font-bold" />} />
                <Row label="Transactions" value={<span className="text-2xl font-bold">47</span>} />
                <Row
                  label="Profit"
                  value={<Price szl={890} className="text-2xl font-bold text-brand-400" />}
                />
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-sm text-gray-500">Cash in Register</div>
                  <div className="flex items-center gap-2">
                    <Price szl={4250} className="text-xl font-bold" />
                    <span className="text-brand-400 text-sm">✓ Matches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution 2: Peace of mind */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="text-sm text-gray-500 mb-4">Live Shop View</div>
              <div className="space-y-3">
                <StaffRow name="Thandi" sale="2 min ago" />
                <StaffRow name="Sipho" sale="5 min ago" />
                <div className="border-t border-gray-700 pt-3 mt-3">
                  <div className="text-sm text-gray-400">📱 You're at home but you see everything</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-sm text-brand-400 font-semibold mb-2">PEACE OF MIND</div>
              <h3 className="text-3xl font-bold mb-4">Leave Your Shop Without Worry</h3>
              <p className="text-xl text-gray-400 mb-6">
                See what's happening from anywhere. Your phone shows you live sales, who's working, and alerts you if
                something looks wrong.
              </p>
              <Checks
                items={[
                  'See every sale as it happens, from anywhere',
                  'Get alerts for unusual activity',
                  'Daily WhatsApp summary every evening',
                ]}
              />
            </div>
          </div>

          {/* Solution 3: Stock */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-brand-400 font-semibold mb-2">SMART STOCK</div>
              <h3 className="text-3xl font-bold mb-4">Never Run Out of What Sells</h3>
              <p className="text-xl text-gray-400 mb-6">
                Know exactly what's in stock. Get alerts before you run out. See what's selling fast and what's just
                sitting there.
              </p>
              <Checks
                items={[
                  'Automatic stock updates with every sale',
                  'Low stock alerts before you run out',
                  'See best sellers and slow movers',
                ]}
              />
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="text-sm text-gray-500 mb-4">Stock Alerts</div>
              <div className="space-y-3">
                <StockRow emoji="🍞" name="White Bread" status="Only 3 left!" tone="red" />
                <StockRow emoji="🥛" name="Fresh Milk" status="8 left" tone="amber" />
                <StockRow emoji="🍚" name="Rice 10kg" status="45 in stock ✓" tone="ok" />
              </div>
            </div>
          </div>

          {/* Solution 4: Accountability */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="text-sm text-gray-500 mb-4">Staff Activity Log</div>
              <div className="space-y-2 text-sm">
                <ActivityRow time="14:32" name="Thandi" what="sold Bread, Milk, Eggs" szl={67.5} />
                <ActivityRow time="14:28" name="Sipho" what="sold Airtime" szl={50} />
                <ActivityRow time="14:15" name="Thandi" what="sold Coca-Cola x3" szl={45} />
                <div className="border-t border-gray-700 pt-2 mt-2">
                  <span className="text-gray-400">Every sale tied to a person. Full accountability.</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-sm text-brand-400 font-semibold mb-2">ACCOUNTABILITY</div>
              <h3 className="text-3xl font-bold mb-4">Know Who Sold What, When</h3>
              <p className="text-xl text-gray-400 mb-6">
                Every transaction is tied to a staff member. If something doesn't add up, you'll know exactly who was
                responsible.
              </p>
              <Checks
                items={[
                  'Each staff has their own PIN login',
                  'Full activity log for every sale',
                  'Discrepancy alerts sent to your phone',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className="flex items-center gap-3">
          <span className="text-brand-400">✓</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-400">{label}</span>
      {value}
    </div>
  );
}

function StaffRow({ name, sale }: { name: string; sale: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-green-500 rounded-full" />
        <span>{name}</span>
      </div>
      <span className="text-sm text-gray-400">Last sale: {sale}</span>
    </div>
  );
}

function StockRow({ emoji, name, status, tone }: { emoji: string; name: string; status: string; tone: 'red' | 'amber' | 'ok' }) {
  const cls = {
    red: 'bg-red-900/30 border-red-800',
    amber: 'bg-amber-900/30 border-amber-800',
    ok: 'bg-gray-900',
  }[tone];
  const textCls = {
    red: 'text-red-400 font-medium',
    amber: 'text-amber-400 font-medium',
    ok: 'text-gray-400',
  }[tone];
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg border ${cls}`}>
      <div className="flex items-center gap-3">
        <span>{emoji}</span>
        <span>{name}</span>
      </div>
      <span className={textCls}>{status}</span>
    </div>
  );
}

function ActivityRow({ time, name, what, szl }: { time: string; name: string; what: string; szl: number }) {
  return (
    <div className="flex items-center gap-3 p-2 bg-gray-900 rounded">
      <span className="text-gray-500">{time}</span>
      <span>{name}</span>
      <span className="text-gray-400">{what}</span>
      <Price szl={szl} className="text-brand-400 ml-auto" />
    </div>
  );
}
