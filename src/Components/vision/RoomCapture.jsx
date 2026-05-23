import React, { useState } from 'react';
import { Upload, Sparkles, X } from 'lucide-react';

export default function RoomCapture({ onProcessImage }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleStartAnalysis = async () => {
    setIsProcessing(true);
    await onProcessImage(selectedImage);
    setIsProcessing(false);
  };

  return (
    <div className="card p-4 shadow-sm border-0 rounded-4">
      <h4 className="fw-bold mb-3" style={{ color: '#2c1a11' }}>San3A Vision</h4>
      
      {!selectedImage ? (
        <label className="btn btn-outline-secondary p-5 w-100 border-2 border-dashed rounded-4">
          <Upload size={40} className="mb-2" style={{ color: '#c85a32' }} />
          <p className="m-0">Upload a photo of your room</p>
          <input type="file" hidden accept="image/*" onChange={handleImageChange} />
        </label>
      ) : (
        <div className="position-relative">
          <img src={selectedImage} alt="Room preview" className="img-fluid rounded-4 shadow-sm" />
          <button 
            className="btn btn-sm btn-dark position-absolute top-0 end-0 m-2 rounded-circle"
            onClick={() => setSelectedImage(null)}
          >
            <X size={16} />
          </button>
          <button 
            className="btn w-100 mt-3 py-2 rounded-pill text-white d-flex align-items-center justify-content-center gap-2"
            style={{ backgroundColor: '#c85a32' }}
            onClick={handleStartAnalysis}
            disabled={isProcessing}
          >
            {isProcessing ? "Analyzing Space..." : <><Sparkles size={20} /> Discover Crafts</>}
          </button>
        </div>
      )}
    </div>
  );
}