import { CheckCircle, XCircle } from 'lucide-react';
import './StatusCard.css';

interface StatusCardProps {
  name: string;
  status: string;
}

export default function StatusCard({ name, status }: StatusCardProps) {
  const isOk = status === 'ok';

  return (
    <div className={`status-card ${isOk ? 'status-ok' : 'status-error'}`}>
      {isOk ? (
        <CheckCircle className="status-icon" size={24} />
      ) : (
        <XCircle className="status-icon" size={24} />
      )}
      <div className="status-info">
        <span className="status-name">{name}</span>
        <span className="status-description">{isOk ? 'Connected' : 'Error'}</span>
      </div>
    </div>
  );
}

