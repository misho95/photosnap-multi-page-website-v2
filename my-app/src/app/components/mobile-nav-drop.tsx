import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const MobileNavDrop = () => {
  const [body, setBody] = useState<any>(null);

  useEffect(() => {
    setBody(document.body);
  }, []);

  if (!body) {
    return null; // Or a fallback UI if needed
  }

  return createPortal(
    <div className="fixed top-[71px] left-0 w-full h-screen bg-black/50 z-40">
      <div className="w-full bg-white p-[32px]">modal</div>
    </div>,
    body
  );
};

export default MobileNavDrop;
