import { useState, useEffect } from "react";
import { Mic, MicOff, Send, Keyboard, AlertTriangle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const LocaithVoicePro = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);
  const [checkingPermission, setCheckingPermission] = useState(false);

  // Check microphone permission
  const checkMicrophonePermission = async () => {
    setCheckingPermission(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      setPermissionGranted(true);
      setCheckingPermission(false);
      return true;
    } catch (err) {
      console.error("Microphone permission error:", err);
      setPermissionGranted(false);
      setCheckingPermission(false);
      return false;
    }
  };

  // Giả lập hiệu ứng lắng nghe
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isListening && open && permissionGranted) {
      const phrases = [
        "Đang nghe...",
        "Đang xử lý...",
        "Hàng giả",
        "Cảnh báo mới nhất"
      ];
      let i = 0;
      interval = setInterval(() => {
        const currentPhrase = phrases[i % phrases.length];
        setTranscript(currentPhrase);
        
        // Nếu là cụm từ có nghĩa (không phải trạng thái), cập nhật vào ô input
        if (currentPhrase !== "Đang nghe..." && currentPhrase !== "Đang xử lý...") {
             setSearchText(currentPhrase);
        }
        
        i++;
      }, 2000);
    } else {
      setTranscript("");
    }
    return () => clearInterval(interval);
  }, [isListening, open, permissionGranted]);

  const toggleListening = async () => {
    if (!isListening) {
      // Trying to start listening
      if (permissionGranted === true) {
        setIsListening(true);
      } else {
        const granted = await checkMicrophonePermission();
        if (granted) {
          setIsListening(true);
        }
      }
    } else {
      setIsListening(false);
    }
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      // Thực hiện hành động tìm kiếm ở đây
      console.log("Searching for:", searchText);
      setIsListening(false);
      // Có thể đóng dialog hoặc chuyển hướng
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val);
      if (!val) {
        setIsListening(false);
        setSearchText("");
      }
      else setIsListening(true);
    }}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5">
          <Mic className="h-4 w-4 text-primary" />
          <span className="sr-only">Voice Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center flex flex-col items-center gap-2">
            <span className="text-primary font-bold text-xl">Locaith Voice Pro</span>
            <span className="text-sm font-normal text-muted-foreground">Trợ lý giọng nói AI</span>
          </DialogTitle>
          <DialogDescription className="text-center pt-4">
            <div className="h-24 flex flex-col items-center justify-center gap-4">
                {isListening ? (
                <>
                    <div className="flex items-center gap-1 h-8">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                        key={i}
                        className={cn(
                            "w-1 bg-primary rounded-full animate-pulse",
                            i % 2 === 0 ? "h-4" : "h-8"
                        )}
                        style={{ animationDelay: `${i * 0.1}s` }}
                        />
                    ))}
                    </div>
                    <p className="text-lg font-medium animate-pulse text-primary">{transcript || "Đang lắng nghe..."}</p>
                </>
                ) : (
                <p className="text-muted-foreground">Nhấn vào micro để nói hoặc nhập nội dung bên dưới</p>
                )}
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-6 p-4">
          {/* Mic Button */}
          <Button
            size="lg"
            variant={isListening ? "destructive" : "default"}
            className={cn(
                "rounded-full h-16 w-16 p-0 shadow-lg transition-all duration-300",
                isListening ? "scale-110 shadow-red-500/20" : "hover:scale-105"
            )}
            onClick={toggleListening}
          >
            {isListening ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
          </Button>

          {/* Text Input Area */}
          <div className="w-full relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Keyboard className="h-4 w-4" />
            </div>
            <Input 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập nội dung tìm kiếm..." 
                className="pl-9 pr-12 h-11"
            />
            <Button 
                size="icon" 
                variant="ghost" 
                className="absolute right-1 top-1 h-9 w-9 hover:bg-primary/10 hover:text-primary"
                onClick={handleSearch}
                disabled={!searchText.trim()}
            >
                <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocaithVoicePro;
