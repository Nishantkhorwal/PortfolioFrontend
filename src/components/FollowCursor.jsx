
import React, { useRef, useEffect, useState } from 'react';

function FollowCursor({delay}) {
    const circleRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const circleStyle = {
    transition: `transform ${delay / 1000}s cubic-bezier(0.42, 0.42, 0.58, 1)`,
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  return (
    <>
      <div ref={circleRef} className="w-4 h-4 bg-transparent border-slate-300 border rounded-full fixed z-[9999] pointer-events-none "  style={circleStyle}
      ></div>
    </>
  )
}

export default FollowCursor
