import React, { useState } from 'react';
import pugImage from '../assets/agat.png';
import sausageImage from '../assets/sausage.png'; // Путь к изображению колбасы
import './PugPanel.css';

const PugPanel: React.FC = () => {
  const [eyePosition, setEyePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [sausagePosition, setSausagePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isSausageVisible, setIsSausageVisible] = useState(false); // Состояние для отображения колбасы

  const handleMouseMove = (e: React.MouseEvent) => {
    const pugRect = e.currentTarget.getBoundingClientRect();
    const pugCenterX = pugRect.left + pugRect.width / 2;
    const pugCenterY = pugRect.top + pugRect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = (mouseX - pugCenterX) / pugRect.width;
    const deltaY = (mouseY - pugCenterY) / pugRect.height;

    setEyePosition({
      x: deltaX * 10, // Масштабирование движения глаз
      y: deltaY * 10,
    });

    // Позиция для колбасы
    setSausagePosition({
      x: mouseX - pugRect.left - 50, // Позиция по X, с учетом смещения изображения
      y: mouseY - pugRect.top - 50, // Позиция по Y, с учетом смещения изображения
    });

    // Показать колбасу при наведении на область глаз
    if (pugRect.left <= mouseX && mouseX <= pugRect.right && pugRect.top <= mouseY && mouseY <= pugRect.bottom) {
      setIsSausageVisible(true);
    } else {
      setIsSausageVisible(false);
    }
  };

  return (
    <div className="pug-container" onMouseMove={handleMouseMove}>
      <img src={pugImage} alt="Pug" className="pug-image" />
      <div
        className="pug-eye left-eye"
        style={{
          transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
        }}
      />
      {isSausageVisible && (
        <img
          src={sausageImage}
          alt="Sausage"
          className="sausage"
          style={{
            left: `${sausagePosition.x}px`,
            top: `${sausagePosition.y}px`,
          }}
        />
      )}
    </div>
  );
};

export default PugPanel;

