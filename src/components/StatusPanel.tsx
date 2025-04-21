import React from 'react';
import StatusCard from './StatusCard'; // если у тебя этот компонент уже есть
import './StatusPanel.css';

interface StatusPanelProps {
  status: {
    backend: string;
    database: string;
  };
  loading: boolean;
  fetchStatus: () => void;
}

const StatusPanel: React.FC<StatusPanelProps> = ({ status, loading, fetchStatus }) => (
  <div className="status-panel">
    {status && (
      <>
        <StatusCard name="Backend" status={status.backend} />
        <StatusCard name="Database" status={status.database} />
      </>
    )}
    <button
      onClick={fetchStatus}
      disabled={loading}
      className="refresh-button"
    >
      {loading ? 'Refreshing...' : '🔄 Обновить'}
    </button>
  </div>
);

export default StatusPanel;

