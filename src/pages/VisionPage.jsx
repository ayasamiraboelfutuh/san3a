import { useProducts } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { productService } from '../services/productService';
import RoomCapture from '../components/vision/RoomCapture';
import { IoSparkles } from "react-icons/io5";
export default function VisionPage() {
  const { setAiRecommendations } = useProducts(); // Pull the function out
  const navigate = useNavigate();

  const handleProcessImage = async (image) => {
    try {
      const result = await productService.analyzeRoom(image);
      const mockIds = [1, 2];
      // Save result to the "Central Memory"
    //   setAiRecommendations(result.recommendedIds); 
      setAiRecommendations(mockIds);
      // Move to the shop
      navigate('/storefront'); 
    } catch (error) {
      console.error("Analysis failed:", error);
    }
  };

  return (
    <div className="vision-page container-fluid py-5" style={{ minHeight: '80vh' }}>
      <div className="row h-100 align-items-center">
        
        {/* --- Left Side: Decorations & Text --- */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center px-lg-5 mb-5 mb-md-0">
          <div className="decoration-wrapper text-center text-md-start">
            <h1 className="display-4 fw-bold mb-4" style={{ color: '#2a5a54' }}>
              <IoSparkles className="me-2" style={{ color: '#f5c61a' }} />
              San3A Vision
            </h1>
            
            <p className="lead text-muted mb-5">
              Visualize craftsmanship in your home! Capture a picture of your room, 
              and our AI will analyze your space to recommend the perfect Egyptian 
              artisanal pieces that match your style.
            </p>
            
            <div className="how-it-works card p-4 shadow-sm" style={{ backgroundColor: '#f8fdfc', border: '1px solid #e0f2f0' }}>
              <h5 className="fw-bold mb-3" style={{ color: '#2a5a54' }}>How it Works:</h5>
              <ol className="text-start mb-0">
                <li className="mb-2"><strong>Capture:</strong> Upload or snap a photo of your room.</li>
                <li className="mb-2"><strong>Analyze:</strong> Our AI identifies the style, colors, and layout.</li>
                <li><strong>Discover:</strong> Browse curated handicrafts selected just for you.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* --- Right Side: Your Original RoomCapture Component --- */}
        <div className="col-12 col-md-6">
          <div className="capture-wrapper card shadow-lg p-3" style={{ backgroundColor: '#ffffff', borderRadius: '15px' }}>
            {/* THIS IS WHAT YOU ALREADY HAD */}
            <RoomCapture onProcessImage={handleProcessImage} />
          </div>
        </div>
        
      </div>
    </div>
  );
}