import { useState, useEffect } from "react";
import { Camera, Zap, Image as ImageIcon, X, ScanLine, Mic, Globe, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const CameraAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(true);
  const [flashOn, setFlashOn] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);
  const [voiceText, setVoiceText] = useState("");
  const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);
  
  // Stages: 'idle' | 'listening' | 'analyzing' | 'result'
  const [stage, setStage] = useState<'idle' | 'listening' | 'analyzing' | 'result'>('idle');
  const [analysisStep, setAnalysisStep] = useState<string>("");
  const [result, setResult] = useState<any>(null);

  const checkCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop());
      setPermissionGranted(true);
    } catch (err) {
      console.error("Camera permission error:", err);
      setPermissionGranted(false);
    }
  };

  // Reset state when dialog opens/closes
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      checkCameraPermission();
    } else {
      setTimeout(() => {
        setStage('idle');
        setVoiceActive(false);
        setResult(null);
        setIsScanning(true);
        setPermissionGranted(null);
      }, 300);
    }
  };

  // Simulate Voice Interaction
  const toggleVoice = () => {
    if (stage === 'analyzing' || stage === 'result') return;
    
    if (!voiceActive) {
      setVoiceActive(true);
      setStage('listening');
      setVoiceText("Đang nghe...");
      
      // Simulate speech recognition
      setTimeout(() => {
        setVoiceText("Cái này có phải hàng thật không?");
      }, 1500);

      setTimeout(() => {
        setVoiceActive(false);
        startAnalysis();
      }, 3000);
    } else {
      setVoiceActive(false);
      setStage('idle');
      setVoiceText("");
    }
  };

  // Simulate AI Analysis Process
  const startAnalysis = () => {
    setStage('analyzing');
    setIsScanning(false);
    
    const steps = [
      "Đang quét đối tượng...",
      "Đang tìm kiếm trên Internet...",
      "Truy xuất nguồn gốc...",
      "Đang phân tích đặc điểm...",
      "Tổng hợp đánh giá..."
    ];

    let currentStep = 0;
    setAnalysisStep(steps[0]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setAnalysisStep(steps[currentStep]);
      } else {
        clearInterval(interval);
        finishAnalysis();
      }
    }, 1200);
  };

  const finishAnalysis = () => {
    // Randomize result for demo purposes
    const isReal = Math.random() > 0.4; 
    
    setResult({
      isReal: isReal,
      productName: isReal ? "Đồng hồ Rolex Submariner Date" : "Đồng hồ Rolex Fake Loại 1",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400",
      score: isReal ? 98 : 12,
      manufacturer: "Rolex SA",
      origin: "Geneva, Thụy Sĩ",
      details: isReal 
        ? "Mã serial trùng khớp với cơ sở dữ liệu chính hãng. Chi tiết máy và vật liệu đạt chuẩn."
        : "Phát hiện sai lệch về font chữ trên mặt số. Trọng lượng nhẹ hơn tiêu chuẩn 12%. Mã serial không tồn tại.",
      sources: 1420
    });
    setStage('result');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5">
          <Camera className="h-4 w-4 text-primary" />
          <span className="sr-only">Camera AI</span>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md p-0 gap-0 border-none bg-black text-white overflow-hidden shadow-2xl">
        
        {/* Main Camera Viewport */}
        <div className="relative h-[600px] w-full bg-zinc-950 flex flex-col">
          
          {/* Header Overlay */}
          <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent h-20">
             <div className="flex flex-col">
                <h3 className="font-bold text-lg tracking-wide flex items-center gap-2">
                  QSAC AI EYE
                  {stage === 'listening' && <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"/>}
                </h3>
                <span className="text-[10px] text-white/70 uppercase tracking-wider">Mắt thần giám sát & Truy vết</span>
             </div>
             <DialogClose asChild>
                <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10 -mt-1 -mr-1">
                    <X className="h-6 w-6" />
                </Button>
             </DialogClose>
          </div>

          {/* Camera Preview Placeholder or Permission Request */}
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
             {permissionGranted === true ? (
               <div className="text-zinc-700 flex flex-col items-center gap-2">
                  <Camera className="h-12 w-12 opacity-20" />
                  <p className="text-sm font-mono opacity-40">CAMERA PREVIEW ACTIVE</p>
               </div>
             ) : permissionGranted === false ? (
               <div className="flex flex-col items-center gap-4 p-6 text-center max-w-xs">
                  <div className="h-16 w-16 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Cần quyền truy cập Camera</h4>
                  <p className="text-sm text-zinc-400">
                    Ứng dụng cần quyền truy cập camera để quét và phân tích sản phẩm. Vui lòng cấp quyền trong cài đặt trình duyệt.
                  </p>
                  <Button onClick={checkCameraPermission} variant="secondary" className="mt-2">
                    Thử lại
                  </Button>
               </div>
             ) : (
               <div className="flex flex-col items-center gap-4">
                  <Loader2 className="h-8 w-8 text-primary animate-spin" />
                  <p className="text-sm text-zinc-400">Đang yêu cầu quyền truy cập...</p>
               </div>
             )}
             
             {/* Simulated Captured Image for Result */}
             {stage === 'result' && result && permissionGranted && (
               <img src={result.image} alt="Captured" className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm" />
             )}
          </div>

          {/* Scanning Overlay (Visible only in idle/listening AND when permission granted) */}
          {(stage === 'idle' || stage === 'listening') && permissionGranted && (
            <>
              {/* Dark Overlay with Transparent Center */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute inset-0 bg-black/60 [mask-image:linear-gradient(to_bottom,black_20%,transparent_20%,transparent_60%,black_60%)]"></div>
              </div>
              
              {/* Active Scanning Frame */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none mt-[-10%]">
                <div className={cn("relative w-64 h-64 sm:w-72 sm:h-72 transition-all duration-300", voiceActive ? "scale-105" : "")}>
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                    
                    {/* Scanning Laser Line */}
                    <div className={cn(
                        "absolute left-2 right-2 h-0.5 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] opacity-80",
                        isScanning ? "animate-scan" : "hidden"
                    )}></div>
                    
                    {/* Voice Wave Animation */}
                    {voiceActive && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-full animate-ping"></div>
                        <div className="absolute w-32 h-32 bg-primary/10 rounded-full animate-ping delay-75"></div>
                      </div>
                    )}
                </div>
                
                {/* Voice Text / Instruction */}
                <div className="mt-8 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-white/10 shadow-lg min-w-[200px] text-center transition-all">
                    <p className="text-sm font-medium text-white flex items-center justify-center gap-2">
                        {voiceActive ? (
                          <>
                            <Mic className="h-4 w-4 text-primary animate-pulse" />
                            "{voiceText}"
                          </>
                        ) : (
                          <>
                            <ScanLine className="h-4 w-4 text-primary" />
                            Di chuyển camera vào đối tượng
                          </>
                        )}
                    </p>
                </div>
              </div>
            </>
          )}

          {/* Analysis Loading Screen */}
          {stage === 'analyzing' && (
            <div className="absolute inset-0 z-30 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
              <div className="relative w-24 h-24 mb-6">
                 <div className="absolute inset-0 border-4 border-zinc-700 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
                 <Globe className="absolute inset-0 m-auto h-10 w-10 text-primary animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">QSAC AI đang phân tích</h3>
              <p className="text-primary animate-pulse mb-4">{analysisStep}</p>
              <div className="w-full max-w-xs bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-progress origin-left"></div>
              </div>
              <p className="text-xs text-zinc-500 mt-4 max-w-xs">
                Hệ thống đang đối chiếu với 14 triệu điểm dữ liệu sản phẩm toàn cầu...
              </p>
            </div>
          )}

          {/* Result Screen */}
          {stage === 'result' && result && (
             <div className="absolute inset-0 z-30 bg-gradient-to-t from-black via-black/90 to-black/40 flex flex-col justify-end pb-24 px-4 overflow-y-auto">
                <div className="w-full bg-zinc-900/90 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-500">
                  {/* Status Banner */}
                  <div className={cn(
                    "p-3 flex items-center justify-center gap-2 font-bold text-lg uppercase tracking-wider",
                    result.isReal ? "bg-green-600 text-white" : "bg-red-600 text-white"
                  )}>
                    {result.isReal ? <CheckCircle className="h-6 w-6"/> : <AlertTriangle className="h-6 w-6"/>}
                    {result.isReal ? "XÁC THỰC: HÀNG CHÍNH HÃNG" : "CẢNH BÁO: NGHI VẤN HÀNG GIẢ"}
                  </div>
                  
                  <div className="p-5 space-y-4">
                    {/* Product Header */}
                    <div>
                      <h2 className="text-xl font-bold text-white leading-tight mb-1">{result.productName}</h2>
                      <div className="flex items-center gap-2 text-zinc-400 text-sm">
                        <span>{result.manufacturer}</span>
                        <span>•</span>
                        <span>{result.origin}</span>
                      </div>
                    </div>

                    {/* Trust Score */}
                    <div className="bg-black/40 rounded-lg p-3 border border-white/5">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm text-zinc-400">Điểm tin cậy AI</span>
                        <span className={cn("text-2xl font-bold", result.isReal ? "text-green-500" : "text-red-500")}>
                          {result.score}/100
                        </span>
                      </div>
                      <div className="w-full bg-zinc-700 h-2 rounded-full overflow-hidden">
                        <div 
                          className={cn("h-full rounded-full", result.isReal ? "bg-green-500" : "bg-red-500")} 
                          style={{ width: `${result.score}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Analysis Details */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white/90">Kết luận phân tích:</h4>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {result.details}
                      </p>
                    </div>

                    {/* Footer Source */}
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs text-zinc-500">
                      <span>Dữ liệu từ {result.sources} nguồn</span>
                      <Button variant="link" className="h-auto p-0 text-primary text-xs">Xem chi tiết báo cáo</Button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <Button className="w-full bg-white text-black hover:bg-zinc-200" onClick={() => handleOpenChange(false)}>
                            Đóng
                        </Button>
                        <Button className="w-full" variant="outline" onClick={() => startAnalysis()}>
                            Quét lại
                        </Button>
                    </div>
                  </div>
                </div>
             </div>
          )}

          {/* Bottom Controls (Only visible in idle/listening) */}
          {(stage === 'idle' || stage === 'listening') && (
            <div className="absolute bottom-0 left-0 right-0 z-20 h-28 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end justify-center pb-8">
              <div className="flex items-center gap-8">
                  {/* Flash Button */}
                  <Button 
                      variant="ghost" 
                      size="icon" 
                      className={cn(
                          "rounded-full h-12 w-12 text-white hover:bg-white/10 transition-all",
                          flashOn ? "bg-white/20 text-yellow-400" : "bg-transparent"
                      )}
                      onClick={() => setFlashOn(!flashOn)}
                  >
                      <Zap className={cn("h-6 w-6", flashOn && "fill-current")} />
                  </Button>

                  {/* Main Action Button - Changes based on context */}
                  <div className="relative group cursor-pointer" onClick={toggleVoice}>
                      {/* Pulse effect when voice active */}
                      {voiceActive && (
                         <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping"></div>
                      )}
                      
                      <div className="relative h-20 w-20 rounded-full border-4 border-white flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-white/10 transition-all">
                          {voiceActive ? (
                            <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center animate-pulse">
                               <Mic className="h-8 w-8 text-white" />
                            </div>
                          ) : (
                            <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center transition-transform group-active:scale-90">
                               <Mic className="h-6 w-6 text-black" />
                            </div>
                          )}
                      </div>
                  </div>

                  {/* Gallery Button */}
                  <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 text-white hover:bg-white/10 transition-all">
                      <ImageIcon className="h-6 w-6" />
                  </Button>
              </div>
            </div>
          )}
          
        </div>

        {/* Info Footer */}
        <div className="bg-zinc-950 p-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 px-6">
            <span>QSAC Global Database</span>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                {stage === 'analyzing' ? 'Processing...' : 'AI Ready'}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CameraAI;
