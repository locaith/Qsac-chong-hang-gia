import { Search, Bell, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LocaithVoicePro from "./LocaithVoicePro";
import CameraAI from "./CameraAI";
import qsacLogo from "@/assets/qsac-logo-main.jpg";
import headerBanner from "@/assets/header-banner.jpg";
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  const categories = [{
    name: "Tin & Cảnh báo",
    path: "/"
  }, {
    name: "Alo 389",
    path: "/alo-389"
  }, {
    name: "An ninh số",
    path: "/an-ninh-so"
  }, {
    name: "Giải mã hồ sơ",
    path: "/giai-ma-ho-so"
  }, {
    name: "TMĐT-AI",
    path: "/tmdt-ai"
  }, {
    name: "Doanh nghiệp số",
    path: "/doanh-nghiep-so"
  }, {
    name: "Sự kiện",
    path: "/su-kien"
  }, {
    name: "Video",
    path: "/video"
  }, {
    name: "Thư viện",
    path: "/thu-vien"
  }, {
    name: "Dữ liệu",
    path: "/du-lieu"
  }];
  return <header className={`sticky top-0 z-50 bg-white shadow-sm transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Hero Banner */}
      <div className="relative w-full h-32 md:h-40 overflow-hidden">
        <img src={headerBanner} alt="QSAC Header Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          
          <h1 className="text-lg md:text-3xl lg:text-4xl font-bold mb-1">
            <span className="text-alert">TRUNG TÂM GIÁM SÁT</span>
          </h1>
          <h1 className="text-lg md:text-3xl lg:text-4xl font-bold mb-2">
            <span className="text-primary">VÀ PHÒNG CHỐNG HÀNG GIẢ</span>
          </h1>
          <p className="text-[10px] md:text-xs text-muted-foreground max-w-3xl">CƠ QUAN NGÔN LUẬN CỦA TRUNG TÂM GIÁM SÁT VÀ CHỐNG HÀNG GIẢ</p>
        </div>
      </div>

      {/* Top Bar - Hidden on mobile */}
      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground hidden md:block border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-4">
              <span className="font-semibold">QSAC.VN</span>
              <span className="text-primary-foreground/80 hidden lg:inline">Trung tâm Giám sát Chất lượng & Phòng chống Hàng giả</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10 h-8">
                <Bell className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Cảnh báo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="flex-shrink-0">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px]">
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-3 pb-4 border-b">
                  <img src={qsacLogo} alt="QSAC Logo" className="h-12 w-12 bg-white rounded-lg p-1.5 shadow-sm" />
                  <h2 className="text-xl font-bold text-primary">QSAC.VN</h2>
                </div>
                
                <nav className="flex flex-col gap-2">
                  {categories.map(category => <Link key={category.name} to={category.path}>
                      <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary font-medium">
                        {category.name}
                      </Button>
                    </Link>)}
                </nav>
                
                <div className="flex flex-col gap-2 pt-4 border-t">
                  <Button variant="outline" size="sm" className="w-full">
                    Tra cứu TraceID
                  </Button>
                  <Button size="sm" className="w-full bg-alert hover:bg-alert/90">
                    Báo cáo vi phạm
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 md:gap-3">
            <img src={qsacLogo} alt="QSAC Logo" className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-lg p-1.5 shadow-sm" />
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-primary">QSAC</h1>
            </div>
          </Link>

          {/* Search - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Tìm kiếm tin tức, cảnh báo, tiêu chuẩn..." className="pl-10 h-11" />
            </div>
          </div>

          {/* Utilities - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-3">
            <LocaithVoicePro />
            <CameraAI />
            <Button size="sm" className="bg-alert hover:bg-alert/90">
              Báo cáo vi phạm
            </Button>
          </div>

          {/* Mobile Alert Button */}
          <Button variant="ghost" size="icon" className="md:hidden flex-shrink-0">
            <Bell className="h-5 w-5 text-primary" />
          </Button>
        </div>

        {/* Mobile Search & Utilities - Below header */}
        <div className="md:hidden mt-3 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Tìm kiếm..." className="pl-10 h-10 text-sm" />
          </div>
          <LocaithVoicePro />
          <CameraAI />
        </div>
      </div>

      {/* Navigation - Horizontal scroll on mobile */}
      <nav className="border-t border-border bg-secondary/30 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            {categories.map(category => <Link key={category.name} to={category.path}>
                <Button variant="ghost" size="sm" className="whitespace-nowrap hover:bg-primary/10 hover:text-primary font-medium">
                  {category.name}
                </Button>
              </Link>)}
          </div>
        </div>
      </nav>
    </header>;
};
export default Header;