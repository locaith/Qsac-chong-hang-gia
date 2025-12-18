import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Video, Download, Clock, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import AdBanner from "@/components/AdBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-event-conference.jpg";
import ecommerceSeminar from "@/assets/event-ecommerce-seminar.jpg";
import traceabilityWorkshop from "@/assets/event-traceability-workshop.jpg";
import panelDiscussion from "@/assets/event-panel-discussion.jpg";
import standardLaunch from "@/assets/event-standard-launch.jpg";
import webinarOnline from "@/assets/event-webinar-online.jpg";
import trainingCourse from "@/assets/event-training-course.jpg";
import networking from "@/assets/event-networking.jpg";
import agriRoundtable from "@/assets/event-agri-roundtable.jpg";

const Events = () => {
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  const featuredEvent = {
    id: 1,
    title: "Hội thảo: Chống giả trên sàn TMĐT – Dữ liệu và giải pháp thực thi 2025",
    excerpt: "Tổng hợp dữ liệu vi phạm, xu hướng hàng giả trên nền tảng thương mại điện tử và giải pháp kiểm soát hiệu quả cho doanh nghiệp và sàn TMĐT.",
    image: heroImage,
    date: "15/04/2025",
    time: "09:00 - 17:00",
    format: "Trực tiếp",
    location: "Khách sạn Sheraton, Hà Nội",
    status: "Còn vé",
    attendees: "200+ người",
    topics: ["Chống giả TMĐT", "Dữ liệu"]
  };

  const upcomingEvents = [
    {
      id: 2,
      title: "Workshop: Truy xuất nguồn gốc – từ lô đến đơn vị sản phẩm",
      excerpt: "Thực hành thiết lập hệ thống truy xuất nguồn gốc với QR code tuần tự, tích hợp vào quy trình sản xuất.",
      image: traceabilityWorkshop,
      date: "22/04/2025",
      time: "14:00 - 17:30",
      format: "Trực tiếp",
      location: "Trung tâm Đào tạo QSAC",
      status: "Còn vé",
      capacity: "45/60 chỗ",
      topics: ["Truy xuất nguồn gốc", "Công nghệ"],
      price: "Miễn phí"
    },
    {
      id: 3,
      title: "Webinar: Cập nhật nhãn & quảng cáo TPCN theo quy định mới",
      excerpt: "Ra mắt bảng so sánh thay đổi, FAQ và mẫu thông báo nội bộ giúp doanh nghiệp tuân thủ nhanh chóng.",
      image: webinarOnline,
      date: "28/04/2025",
      time: "10:00 - 11:30",
      format: "Trực tuyến",
      location: "Zoom",
      status: "Còn vé",
      capacity: "300/500 chỗ",
      topics: ["Tiêu chuẩn & Pháp lý", "TPCN"],
      price: "Miễn phí"
    },
    {
      id: 4,
      title: "Tọa đàm: Truy xuất nông sản theo mùa vụ",
      excerpt: "Chia sẻ kinh nghiệm thực tế từ các doanh nghiệp nông sản về playbook 0-90-180 ngày triển khai truy xuất.",
      image: agriRoundtable,
      date: "05/05/2025",
      time: "09:00 - 12:00",
      format: "Trực tiếp",
      location: "TP. Hồ Chí Minh",
      status: "Còn vé",
      capacity: "80/100 chỗ",
      topics: ["Truy xuất nguồn gốc", "Nông sản"],
      price: "500.000 VNĐ"
    },
    {
      id: 5,
      title: "Khóa tập huấn: Quản lý nhãn phụ hàng nhập khẩu",
      excerpt: "Checklist 5 bước không lỗi, quy trình xử lý sai phạm và mẫu biên bản đính chính chuẩn.",
      image: trainingCourse,
      date: "12/05/2025",
      time: "08:30 - 16:30",
      format: "Trực tiếp",
      location: "Hà Nội",
      status: "Còn vé",
      capacity: "35/40 chỗ",
      topics: ["Tuân thủ", "Nhãn mác"],
      price: "1.200.000 VNĐ"
    },
    {
      id: 6,
      title: "Hội nghị: Công nghệ Blockchain trong chuỗi cung ứng",
      excerpt: "Panel discussion với các chuyên gia về ứng dụng blockchain cho truy xuất nguồn gốc minh bạch.",
      image: panelDiscussion,
      date: "20/05/2025",
      time: "13:00 - 17:00",
      format: "Trực tiếp",
      location: "Khách sạn JW Marriott, Hà Nội",
      status: "Sắp hết chỗ",
      capacity: "145/150 chỗ",
      topics: ["Công nghệ", "Blockchain"],
      price: "800.000 VNĐ"
    }
  ];

  const eventSeries = [
    {
      title: "Chuỗi: Chống giả TMĐT",
      description: "4 phiên - từ nhận diện đến giải pháp kỹ thuật",
      count: "4 sự kiện"
    },
    {
      title: "Chuỗi: Truy xuất nguồn gốc",
      description: "6 phiên - từ cơ bản đến nâng cao",
      count: "6 sự kiện"
    },
    {
      title: "Chuỗi: Tiêu chuẩn mới 2025",
      description: "3 phiên - cập nhật quy định",
      count: "3 sự kiện"
    },
    {
      title: "Chuỗi: Case tuân thủ",
      description: "5 phiên - học từ thực tế",
      count: "5 sự kiện"
    },
    {
      title: "Chuỗi: Công nghệ & Giải pháp",
      description: "8 phiên - AI, IoT, QR, RFID",
      count: "8 sự kiện"
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: "Ra mắt: Bộ tiêu chí đánh giá DN tuân thủ v1.0",
      date: "15/03/2025",
      attendees: "180 người",
      documents: 5,
      image: standardLaunch
    },
    {
      id: 8,
      title: "Workshop: Ký số & Serialized QR trong nhà máy",
      date: "08/03/2025",
      attendees: "42 người",
      documents: 8,
      image: ecommerceSeminar
    },
    {
      id: 9,
      title: "Networking: Gặp gỡ DN tuân thủ 2025",
      date: "28/02/2025",
      attendees: "95 người",
      documents: 3,
      image: networking
    }
  ];

  const documents = [
    { title: "Handout: Checklist TMĐT chống giả", format: "PDF", size: "2.3 MB" },
    { title: "Slide: Truy xuất nông sản", format: "PPT", size: "8.7 MB" },
    { title: "Biên bản: Hội thảo Blockchain Q1/2025", format: "PDF", size: "1.1 MB" },
    { title: "Bảng dữ liệu: Vi phạm TMĐT 2024", format: "CSV", size: "450 KB" },
    { title: "Mẫu SOP: Quản lý nhãn phụ", format: "DOC", size: "1.8 MB" },
    { title: "FAQ: Tiêu chuẩn TPCN mới", format: "PDF", size: "980 KB" }
  ];

  const sidebarStats = [
    { label: "Sự kiện năm 2025", value: "24" },
    { label: "Người tham dự", value: "3,200+" },
    { label: "Tài liệu chia sẻ", value: "156" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">Sự kiện</h1>
            <p className="text-muted-foreground">
              Hội thảo, tập huấn và tọa đàm về giám sát chất lượng & phòng chống hàng giả
            </p>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-card">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 relative">
                <img 
                  src={featuredEvent.image} 
                  alt={featuredEvent.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-alert text-alert-foreground">
                  Sự kiện nổi bật
                </Badge>
              </div>
              <CardContent className="md:col-span-2 p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredEvent.topics.map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                  {featuredEvent.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {featuredEvent.excerpt}
                </p>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredEvent.date} | {featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{featuredEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{featuredEvent.attendees}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    Đăng ký ngay
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Chi tiết
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-secondary/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">Lọc theo:</span>
            <div className="flex flex-wrap gap-2 md:gap-3 w-full md:w-auto">
              <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                <SelectTrigger className="w-full sm:w-[180px] h-9 text-sm bg-background">
                  <SelectValue placeholder="Chủ đề" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả chủ đề</SelectItem>
                  <SelectItem value="counterfeit">Chống giả TMĐT</SelectItem>
                  <SelectItem value="trace">Truy xuất nguồn gốc</SelectItem>
                  <SelectItem value="standard">Tiêu chuẩn & Pháp lý</SelectItem>
                  <SelectItem value="tech">Công nghệ</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                <SelectTrigger className="w-full sm:w-[160px] h-9 text-sm bg-background">
                  <SelectValue placeholder="Hình thức" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="offline">Trực tiếp</SelectItem>
                  <SelectItem value="online">Trực tuyến</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-full sm:w-[160px] h-9 text-sm bg-background">
                  <SelectValue placeholder="Thời gian" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả tháng</SelectItem>
                  <SelectItem value="04">Tháng 4/2025</SelectItem>
                  <SelectItem value="05">Tháng 5/2025</SelectItem>
                  <SelectItem value="06">Tháng 6/2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Events */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                  Sự kiện sắp diễn ra
                </h2>
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-card">
                      <div className="flex flex-col sm:flex-row gap-0">
                        <div className="relative sm:w-48 flex-shrink-0">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-40 sm:h-full object-cover"
                          />
                          <Badge className={`absolute top-3 left-3 text-xs ${
                            event.status === "Sắp hết chỗ" 
                              ? "bg-alert text-alert-foreground" 
                              : "bg-success text-success-foreground"
                          }`}>
                            {event.status}
                          </Badge>
                        </div>
                        <CardContent className="p-4 flex-1">
                          <div className="flex flex-wrap gap-2 mb-2">
                            {event.topics.map((topic, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="text-base md:text-lg font-bold mb-2 text-foreground hover:text-primary transition-colors cursor-pointer">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                            {event.excerpt}
                          </p>
                          <div className="space-y-1 mb-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-3 w-3" />
                              <span>{event.date} | {event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {event.format === "Trực tuyến" ? (
                                <Video className="h-3 w-3" />
                              ) : (
                                <MapPin className="h-3 w-3" />
                              )}
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-3 w-3" />
                              <span>{event.capacity}</span>
                              {event.price && <span className="ml-2 font-semibold">• {event.price}</span>}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs">
                              Đăng ký
                            </Button>
                            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 text-xs">
                              Chi tiết →
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Past Events */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                  Sự kiện đã diễn ra
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {pastEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-none bg-card cursor-pointer">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-40 object-cover"
                      />
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2 text-xs">
                          Đã diễn ra
                        </Badge>
                        <h3 className="font-semibold text-sm mb-2 text-foreground line-clamp-2">
                          {event.title}
                        </h3>
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-3 w-3" />
                            <span>{event.attendees} tham dự</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Download className="h-3 w-3" />
                            <span>{event.documents} tài liệu</span>
                          </div>
                        </div>
                        <Button variant="link" size="sm" className="px-0 mt-2 text-primary hover:text-primary/80 text-xs">
                          Xem tổng hợp →
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Sidebar Ad */}
              <AdBanner type="sidebar-rect" variant={3} />
              
              {/* Statistics */}
              <Card className="border-none bg-card">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">
                    Thống kê
                  </h3>
                  <div className="space-y-3">
                    {sidebarStats.map((stat, index) => (
                      <div key={index} className="p-3 rounded-lg bg-secondary/30">
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Event Series */}
              <Card className="border-none bg-card">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">
                    Chuỗi chuyên đề
                  </h3>
                  <div className="space-y-3">
                    {eventSeries.map((series, index) => (
                      <div key={index} className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
                        <h4 className="font-semibold text-sm mb-1 text-foreground">
                          {series.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-1">
                          {series.description}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {series.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Xem tất cả chuỗi
                  </Button>
                </CardContent>
              </Card>

              {/* Documents */}
              <Card className="border-none bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">
                    Tài liệu sự kiện
                  </h3>
                  <div className="space-y-2">
                    {documents.map((doc, index) => (
                      <div key={index} className="p-2 rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs flex-shrink-0">
                            {doc.format}
                          </Badge>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-foreground line-clamp-1">
                              {doc.title}
                            </p>
                            <p className="text-xs text-muted-foreground">{doc.size}</p>
                          </div>
                          <Download className="h-3 w-3 text-primary flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    Xem tất cả tài liệu
                  </Button>
                </CardContent>
              </Card>

              {/* Newsletter CTA */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-card">
                <CardContent className="p-4 md:p-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    Nhận thông báo sự kiện
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Đăng ký để nhận thông tin sự kiện mới qua email
                  </p>
                  <div className="space-y-2">
                    <Input 
                      type="email" 
                      placeholder="Email của bạn" 
                      className="h-9 text-sm"
                    />
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Đăng ký nhận thông báo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Events;
