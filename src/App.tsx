// src/App.tsx
import React, { useEffect, useState } from 'react';
import StatusPanel from './components/StatusPanel';
import PugPanel from './components/PugPanel';
import './App.css';

interface Status {
  backend: string;
  database: string;
}

const App: React.FC = () => {
  const [status, setStatus] = useState<Status | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchStatus = async () => {
  setLoading(true);

    const check = async (url: string) => {
      try {
        const response = await fetch(url);
        console.log(response)
        return response.ok ? 'ok' : 'error';
      } catch (e) {
        return 'error';
      }
    };

    const [backendStatus, dbStatus] = await Promise.all([
      check('${WEB_APP_URL}:${WEB_APP_PORT}/health'), // backend health
      check('${WEB_APP_URL}:${WEB_APP_PORT}/db-check'), // proxy к PostgreSQL
    ]);

    setStatus({
      backend: backendStatus,
      database: dbStatus,
    });

    setLoading(false);
    }; 

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="main-window">
      <div className="child panel">
       <h1 className="text-3xl font-bold mb-8">🔧 DevOps Health Dashboard</h1>
        <StatusPanel status={status!} loading={loading} fetchStatus={fetchStatus} />
      </div>
      <div className="child">
        <PugPanel />
      </div>
    </div>
  );
};

export default App;

