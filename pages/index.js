import { useEffect, useState } from 'react';

export default function Home() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetch('/api/assets')
      .then((response) => response.json())
      .then((data) => setAssets(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/BG.png)' }}>
      <header className="py-4 bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-50 w-full">
        <div className="container mx-auto flex justify-between items-center px-4">
          <img src="/BlockChain.png" alt="Logo" className="h-8" />
          <nav className="flex-1">
            <ul className="flex justify-center space-x-4">
              <li><a href="#" className="text-white hover:text-gray-400">Exchange</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Last Transactions</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Invite Friend</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Notifications</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-purple-600 text-white hover:bg-purple-600 rounded">LOG IN</button>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-800 text-white rounded">SIGN UP</button>
          </div>
        </div>
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold">Easy send and Request Crypto.</h1>
          <p className="mt-2">Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.</p>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full">
        <section className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-4xl bg-opacity-75">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left">
                <th className="py-2">Assets</th>
                <th className="py-2">Last Trade</th>
                <th className="py-2">24H %</th>
                <th className="py-2">24H Change</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id} className="border-b border-gray-700">
                  <td className="py-2">{asset.name}/{asset.symbol}</td>
                  <td className="py-2">${asset.price.toLocaleString()}</td>
                  <td className={`py-2 ${asset.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>{asset.changePercent}%</td>
                  <td className={`py-2 ${asset.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>${asset.change.toLocaleString()}</td>
                  <td className="py-2">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Trade</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="mt-8 bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-4xl bg-opacity-75">
          <h2 className="text-2xl font-bold mb-4 text-center">Swap Tokens</h2>
          <div className="flex space-x-4">
            <div className="flex-1">
              <input type="number" className="w-full bg-gray-900 text-white p-2 rounded" placeholder="0.00" />
            </div>
            <div className="flex-1">
              <input type="number" className="w-full bg-gray-900 text-white p-2 rounded" placeholder="0.00" />
            </div>
          </div>
          <button className="mt-4 bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded block mx-auto">Swap Tokens</button>
        </section>
      </main>
    </div>
  );
}
