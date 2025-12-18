import { useState } from "react";
import { Search, Download, FileText, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import heroLibrary from "@/assets/hero-library.jpg";
import checklistImg from "@/assets/library-checklist.jpg";
import sopImg from "@/assets/library-sop.jpg";
import formsImg from "@/assets/library-forms.jpg";
import dataImg from "@/assets/library-data.jpg";
import technicalImg from "@/assets/library-technical.jpg";
import whitepaperImg from "@/assets/library-whitepaper.jpg";
import faqImg from "@/assets/library-faq.jpg";
import playbookImg from "@/assets/library-playbook.jpg";

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("Tất cả");
  const [selectedRole, setSelectedRole] = useState("Tất cả");

  const documentTypes = ["Tất cả", "Checklist", "SOP", "Mẫu biểu", "Dữ liệu mở", "Hướng dẫn", "Whitepaper", "FAQ"];
  const roles = ["Tất cả", "QA/Compliance", "Pháp chế", "Kho & Phân phối", "TMĐT/Marketing", "Lãnh đạo"];

  const documents = [
    {
      id: 1,
      title: "Checklist duyệt nhãn trước in (nhập khẩu & nội địa)",
      description: "Danh sách kiểm tra đầy đủ các yêu cầu pháp lý và kỹ thuật cho nhãn sản phẩm trước khi in ấn",
      type: "Checklist",
      formats: ["PDF", "CSV"],
      image: checklistImg,
      industry: "Đa ngành",
      role: "QA/Compliance",
      status: "Còn hiệu lực",
      updated: "15/01/2025",
      downloads: 1247
    },
    {
      id: 2,
      title: "Quy trình dán nhãn phụ theo lô (SOP)",
      description: "Hướng dẫn chi tiết quy trình kiểm soát và dán nhãn phụ cho hàng nhập khẩu theo từng lô hàng",
      type: "SOP",
      formats: ["DOC", "PDF"],
      image: sopImg,
      industry: "FMCG",
      role: "Kho & Phân phối",
      status: "Còn hiệu lực",
      updated: "12/01/2025",
      downloads: 892
    },
    {
      id: 3,
      title: "Mẫu Biên bản thu hồi tự nguyện",
      description: "Biểu mẫu chuẩn để lập biên bản thu hồi sản phẩm có vấn đề về chất lượng hoặc an toàn",
      type: "Mẫu biểu",
      formats: ["DOC", "PDF"],
      image: formsImg,
      industry: "Đa ngành",
      role: "Pháp chế",
      status: "Còn hiệu lực",
      updated: "10/01/2025",
      downloads: 645
    },
    {
      id: 4,
      title: "Danh mục trường dữ liệu TraceID (Dataset)",
      description: "Bộ dữ liệu mở định nghĩa các trường thông tin tối thiểu cho hệ thống truy xuất nguồn gốc",
      type: "Dữ liệu mở",
      formats: ["CSV", "JSON"],
      image: dataImg,
      industry: "Công nghệ",
      role: "TMĐT/Marketing",
      status: "Còn hiệu lực",
      updated: "08/01/2025",
      downloads: 1523
    },
    {
      id: 5,
      title: "Hướng dẫn tích hợp API kiểm chứng sản phẩm",
      description: "Tài liệu kỹ thuật chi tiết về cách tích hợp API xác thực và kiểm chứng sản phẩm vào hệ thống",
      type: "Hướng dẫn",
      formats: ["PDF"],
      image: technicalImg,
      industry: "Công nghệ",
      role: "TMĐT/Marketing",
      status: "Còn hiệu lực",
      updated: "05/01/2025",
      downloads: 734
    },
    {
      id: 6,
      title: "Whitepaper: Xu hướng chống hàng giả 2025",
      description: "Báo cáo chuyên sâu về các công nghệ và giải pháp chống hàng giả mới nhất năm 2025",
      type: "Whitepaper",
      formats: ["PDF"],
      image: whitepaperImg,
      industry: "Đa ngành",
      role: "Lãnh đạo",
      status: "Còn hiệu lực",
      updated: "02/01/2025",
      downloads: 2156
    },
    {
      id: 7,
      title: "FAQ pháp lý: Quy định về nhãn hàng hóa 2024-2025",
      description: "Tập hợp câu hỏi thường gặp và giải đáp về các quy định pháp lý mới nhất về nhãn hàng hóa",
      type: "FAQ",
      formats: ["PDF"],
      image: faqImg,
      industry: "Đa ngành",
      role: "Pháp chế",
      status: "Còn hiệu lực",
      updated: "28/12/2024",
      downloads: 1834
    },
    {
      id: 8,
      title: "Playbook 180 ngày: Triển khai truy xuất nguồn gốc",
      description: "Lộ trình chi tiết từng bước để triển khai hệ thống truy xuất nguồn gốc trong 180 ngày",
      type: "Hướng dẫn",
      formats: ["PDF", "DOC"],
      image: playbookImg,
      industry: "FMCG",
      role: "QA/Compliance",
      status: "Còn hiệu lực",
      updated: "25/12/2024",
      downloads: 967
    }
  ];

  const newDocuments = documents.slice(0, 8);
  const popularDocuments = [...documents].sort((a, b) => b.downloads - a.downloads).slice(0, 10);

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "Tất cả" || doc.type === selectedType;
    const matchesRole = selectedRole === "Tất cả" || doc.role === selectedRole;
    return matchesSearch && matchesType && matchesRole;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={heroLibrary}
          alt="Thư viện tài liệu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Thư viện Tài liệu
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Tài liệu thực hành sẵn dùng cho giám sát chất lượng & phòng chống hàng giả: 
                Checklist, SOP, Mẫu biểu, Dữ liệu mở, Hướng dẫn kỹ thuật
              </p>
              <div className="flex gap-3 flex-wrap">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  500+ Tài liệu
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  8 Danh mục
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Cập nhật hàng tuần
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="border-b bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Tìm kiếm tài liệu theo tên, từ khóa, mã biểu mẫu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <div className="flex gap-3 flex-wrap w-full md:w-auto">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 rounded-md border bg-background text-sm"
              >
                {documentTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="px-4 py-3 rounded-md border bg-background text-sm"
              >
                {roles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* New Documents Section */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    Tài liệu mới phát hành
                  </h2>
                  <Button variant="ghost">
                    Xem tất cả
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredDocuments.slice(0, 6).map((doc) => (
                    <Card key={doc.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={doc.image}
                          alt={doc.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline">{doc.type}</Badge>
                          <span className="text-xs text-muted-foreground">{doc.updated}</span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {doc.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {doc.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex gap-2">
                            {doc.formats.map((format) => (
                              <Badge key={format} variant="secondary" className="text-xs">
                                {format}
                              </Badge>
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {doc.downloads}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Tải tài liệu
                          </Button>
                          <Button size="sm" variant="outline">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Document Categories */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Danh mục tài liệu
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {documentTypes.filter(t => t !== "Tất cả").map((type) => (
                    <Card key={type} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <FileText className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">{type}</h3>
                        <p className="text-xs text-muted-foreground">
                          {documents.filter(d => d.type === type).length} tài liệu
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* All Documents List */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Tất cả tài liệu ({filteredDocuments.length})
                </h2>
                <div className="space-y-4">
                  {filteredDocuments.map((doc) => (
                    <Card key={doc.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                            <img
                              src={doc.image}
                              alt={doc.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <Badge variant="outline" className="mb-2">{doc.type}</Badge>
                                <h3 className="text-lg font-semibold hover:text-primary transition-colors cursor-pointer">
                                  {doc.title}
                                </h3>
                              </div>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {doc.updated}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                              {doc.description}
                            </p>
                            <div className="flex items-center justify-between flex-wrap gap-3">
                              <div className="flex gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  {doc.industry}
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  {doc.role}
                                </Badge>
                                {doc.formats.map((format) => (
                                  <Badge key={format} variant="outline" className="text-xs">
                                    {format}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Download className="h-3 w-3" />
                                  {doc.downloads} lượt
                                </span>
                                <Button size="sm">
                                  <Download className="h-4 w-4 mr-2" />
                                  Tải về
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button variant="outline" size="lg" className="min-w-[200px]">
                    Bấm để xem thêm
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Sidebar Ad */}
              <AdBanner type="sidebar-rect" variant={1} />
              
              {/* Quick Access by Role */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Truy cập nhanh theo vai trò</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {roles.filter(r => r !== "Tất cả").map((role) => (
                      <Button
                        key={role}
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => setSelectedRole(role)}
                      >
                        {role}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Most Downloaded */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Tải nhiều nhất</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {popularDocuments.slice(0, 5).map((doc, index) => (
                      <div key={doc.id} className="flex gap-3">
                        <span className="text-2xl font-bold text-primary/20 flex-shrink-0">
                          {index + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                            {doc.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">{doc.type}</Badge>
                            <span className="text-xs text-muted-foreground">
                              {doc.downloads} lượt
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Document Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Thống kê</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Tổng tài liệu</span>
                      <span className="text-lg font-bold text-primary">500+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Cập nhật tháng này</span>
                      <span className="text-lg font-bold text-primary">24</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Lượt tải tháng này</span>
                      <span className="text-lg font-bold text-primary">3,421</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Library;
