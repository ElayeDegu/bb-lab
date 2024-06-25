const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./assets.db');

db.serialize(() => {
  db.run('CREATE TABLE assets (id TEXT, name TEXT, symbol TEXT, price REAL, change REAL, changePercent REAL)');

  const stmt = db.prepare('INSERT INTO assets VALUES (?, ?, ?, ?, ?, ?)');
  stmt.run('btc', 'Bitcoin', 'BTC', 63000, -1426.18, -2.21);
  stmt.run('eth', 'Ethereum', 'ETH', 3408.90, -11.20, -0.33);
  stmt.run('doge', 'Dogecoin', 'DOGE', 0.15, 0.02, 15.75);
  stmt.run('algo', 'Algorand', 'ALGO', 0.15, 0.00, 0.00);
  stmt.run('dot', 'Polkadot', 'DOT', 5.64, 0.00, 0.00);
  stmt.run('uni', 'Uniswap', 'UNI', 9.79, 0.00, 0.00);
  stmt.run('comp', 'Compound', 'COMP', 45.67, -0.44, -0.95);
  stmt.finalize();
});

db.close();
