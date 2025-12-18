import { useState } from "react";
import { Search, Download, Database, TrendingUp, AlertTriangle, FileJson, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import heroDataHub from "@/assets/hero-data-hub.jpg";
import dataRecalls from "@/assets/data-recalls.jpg";
import dataTraceid from "@/assets/data-traceid.jpg";
import dataEcommerce from "@/assets/data-ecommerce.jpg";
import dataRiskMap from "@/assets/data-risk-map.jpg";
import dataStandards from "@/assets/data-standards.jpg";
import dataSupplyChain from "@/assets/data-supply-chain.jpg";
import dataApi from "@/assets/data-api.jpg";

const Data = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("Tất cả");
  const [selectedFormat, setSelectedFormat] = useState("Tất cả");

  const topics = ["Tất cả", "Cảnh báo & Thu hồi", "TraceID", "TMĐT", "Bản đồ rủi ro", "Tiêu chuẩn", "Chuỗi cung ứng"];
  const formats = ["Tất cả", "CSV", "JSON", "API"];

  // Monthly metrics
  const monthlyMetrics = {
    month: "Tháng 11/2025",
    alerts: 142,
    recalls: 37,
    affectedIndustries: 18,
    downloads: 2847
  };

  const datasets = [
    {
      id: 1,
      code: "DL-RECALL-001-2025",
      title: "Cảnh báo & Thu hồi sản phẩm - Tháng 11/2025",
      description: "Danh sách đầy đủ các cảnh báo và thu hồi sản phẩm được công bố tháng 11/2025, bao gồm thông tin sản phẩm, lô hàng, mức độ rủi ro và phạm vi",
      topic: "Cảnh báo & Thu hồi",
      formats: ["CSV", "JSON"],
      image: dataRecalls,
      size: "2.3 MB",
      records: 142,
      updated: "15/11/2025",
      frequency: "Hàng tháng",
      status: "Còn hiệu lực",
      downloads: 1523,
      version: "V1.2"
    },
    {
      id: 2,
      code: "DL-TRACEID-001-2025",
      title: "Nhật ký kiểm chứng TraceID",
      description: "Dữ liệu quét và kiểm chứng mã TraceID từ người tiêu dùng, đại lý và kho, bao gồm kết quả xác thực, vị trí và kênh quét",
      topic: "TraceID",
      formats: ["CSV", "JSON", "API"],
      image: dataTraceid,
      size: "8.7 MB",
      records: 45782,
      updated: "16/11/2025",
      frequency: "Hàng tuần",
      status: "Còn hiệu lực",
      downloads: 2341,
      version: "V2.0"
    },
    {
      id: 3,
      code: "DL-ECOM-001-2025",
      title: "Vi phạm TMĐT - Dữ liệu quan sát",
      description: "Tập dữ liệu quan sát vi phạm trên các sàn thương mại điện tử: thiếu thông tin, ảnh không khớp, giá bất thường, tình trạng xử lý",
      topic: "TMĐT",
      formats: ["CSV", "JSON"],
      image: dataEcommerce,
      size: "5.1 MB",
      records: 3247,
      updated: "14/11/2025",
      frequency: "Hàng tuần",
      status: "Còn hiệu lực",
      downloads: 892,
      version: "V1.5"
    },
    {
      id: 4,
      code: "DL-RISK-001-2025",
      title: "Bản đồ rủi ro theo ngành & địa bàn - Q4/2025",
      description: "Phân tích tổng hợp rủi ro chất lượng theo ngành hàng và tỉnh thành, số lượng cảnh báo/thu hồi, nhóm rủi ro chính",
      topic: "Bản đồ rủi ro",
      formats: ["CSV", "JSON"],
      image: dataRiskMap,
      size: "1.8 MB",
      records: 567,
      updated: "10/11/2025",
      frequency: "Hàng quý",
      status: "Còn hiệu lực",
      downloads: 1745,
      version: "V1.0"
    },
    {
      id: 5,
      code: "DL-STD-001-2025",
      title: "Danh mục tiêu chuẩn áp dụng theo ngành",
      description: "Cơ sở dữ liệu tiêu chuẩn kỹ thuật (TCVN, ISO, QCVN) áp dụng theo từng ngành hàng, tình trạng hiệu lực, tài liệu gốc",
      topic: "Tiêu chuẩn",
      formats: ["CSV", "JSON"],
      image: dataStandards,
      size: "3.2 MB",
      records: 1234,
      updated: "12/11/2025",
      frequency: "Hàng tháng",
      status: "Còn hiệu lực",
      downloads: 2156,
      version: "V3.1"
    },
    {
      id: 6,
      code: "DL-TRACE-FIELD-001-2025",
      title: "Trường dữ liệu tối thiểu cho hồ sơ TraceID",
      description: "Định nghĩa từ điển dữ liệu chuẩn cho hệ thống truy xuất nguồn gốc: mã lô, trace_id, quy cách, ngày sx, kết quả kiểm nghiệm",
      topic: "TraceID",
      formats: ["CSV", "JSON"],
      image: dataTraceid,
      size: "0.5 MB",
      records: 45,
      updated: "08/11/2025",
      frequency: "Theo phiên bản",
      status: "Còn hiệu lực",
      downloads: 1867,
      version: "V2.3"
    },
    {
      id: 7,
      code: "DL-SUPPLY-001-2025",
      title: "Dữ liệu chuỗi cung ứng & phân phối",
      description: "Thông tin nhà cung cấp, đại lý phân phối, đường dây logistics cho các ngành FMCG, dược phẩm, mỹ phẩm",
      topic: "Chuỗi cung ứng",
      formats: ["CSV"],
      image: dataSupplyChain,
      size: "4.6 MB",
      records: 2891,
      updated: "13/11/2025",
      frequency: "Hàng tháng",
      status: "Còn hiệu lực",
      downloads: 634,
      version: "V1.1"
    },
    {
      id: 8,
      code: "DL-API-DOC-001-2025",
      title: "API Documentation & Schema",
      description: "Tài liệu API endpoint, mẫu request/response, JSON schema cho các bộ dữ liệu mở, hướng dẫn tích hợp",
      topic: "TraceID",
      formats: ["JSON", "API"],
      image: dataApi,
      size: "1.2 MB",
      records: 28,
      updated: "15/11/2025",
      frequency: "Theo phiên bản",
      status: "Còn hiệu lực",
      downloads: 945,
      version: "V2.0"
    }
  ];

  const filteredDatasets = datasets.filter((dataset) => {
    const matchesSearch = dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dataset.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dataset.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopic = selectedTopic === "Tất cả" || dataset.topic === selectedTopic;
    const matchesFormat = selectedFormat === "Tất cả" || dataset.formats.includes(selectedFormat);
    return matchesSearch && matchesTopic && matchesFormat;
  });

  const newDatasets = datasets.slice(0, 6);
  const popularDatasets = [...datasets].sort((a, b) => b.downloads - a.downloads).slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={heroDataHub}
          alt="Trung tâm dữ liệu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Trung tâm Dữ liệu Mở
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Chuẩn hoá & công bố bộ dữ liệu mở phục vụ giám sát chất lượng & phòng chống hàng giả: 
                Cảnh báo, Thu hồi, TraceID, Vi phạm TMĐT, Bản đồ rủi ro
              </p>
              <div className="flex gap-3 flex-wrap">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Database className="h-4 w-4 mr-2" />
                  {datasets.length} Bộ dữ liệu
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Download className="h-4 w-4 mr-2" />
                  {monthlyMetrics.downloads.toLocaleString()} Lượt tải/tháng
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Metrics Bar */}
      <section className="border-y bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Chỉ số {monthlyMetrics.month}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-primary">{monthlyMetrics.alerts}</div>
              <div className="text-sm text-muted-foreground">Cảnh báo</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-alert">{monthlyMetrics.recalls}</div>
              <div className="text-sm text-muted-foreground">Thu hồi</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-foreground">{monthlyMetrics.affectedIndustries}</div>
              <div className="text-sm text-muted-foreground">Ngành ảnh hưởng cao</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-success">{monthlyMetrics.downloads.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Lượt tải</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="border-b bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Tìm kiếm theo tên bộ dữ liệu, mã, từ khóa kỹ thuật..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <div className="flex gap-3 flex-wrap w-full md:w-auto">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="px-4 py-3 rounded-md border bg-background text-sm"
              >
                {topics.map((topic) => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="px-4 py-3 rounded-md border bg-background text-sm"
              >
                {formats.map((format) => (
                  <option key={format} value={format}>{format}</option>
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
              {/* New Datasets Section */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    Bộ dữ liệu mới phát hành
                  </h2>
                  <Button variant="ghost">
                    Xem tất cả
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {newDatasets.map((dataset) => (
                    <Card key={dataset.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={dataset.image}
                          alt={dataset.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline">{dataset.topic}</Badge>
                          <span className="text-xs text-muted-foreground">{dataset.updated}</span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {dataset.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {dataset.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex gap-2">
                            {dataset.formats.map((format) => (
                              <Badge key={format} variant="secondary" className="text-xs">
                                {format}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {dataset.records.toLocaleString()} bản ghi
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Tải dữ liệu
                          </Button>
                          <Button size="sm" variant="outline">
                            <FileJson className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* All Datasets List */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Tất cả bộ dữ liệu ({filteredDatasets.length})
                </h2>
                <div className="space-y-4">
                  {filteredDatasets.map((dataset) => (
                    <Card key={dataset.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                            <img
                              src={dataset.image}
                              alt={dataset.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <Badge variant="outline" className="mb-2">{dataset.code}</Badge>
                                <h3 className="text-lg font-semibold hover:text-primary transition-colors cursor-pointer">
                                  {dataset.title}
                                </h3>
                              </div>
                              <Badge variant={dataset.status === "Còn hiệu lực" ? "default" : "secondary"}>
                                {dataset.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                              {dataset.description}
                            </p>
                            <div className="flex items-center justify-between flex-wrap gap-3">
                              <div className="flex gap-2 flex-wrap">
                                <Badge variant="secondary" className="text-xs">
                                  {dataset.topic}
                                </Badge>
                                {dataset.formats.map((format) => (
                                  <Badge key={format} variant="outline" className="text-xs">
                                    {format}
                                  </Badge>
                                ))}
                                <span className="text-xs text-muted-foreground">
                                  {dataset.size} • {dataset.records.toLocaleString()} bản ghi
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Download className="h-3 w-3" />
                                  {dataset.downloads.toLocaleString()} lượt
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
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Sidebar Ad */}
              <AdBanner type="sidebar-rect" variant={2} />
              
              {/* Quick Filter by Topic */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Lọc nhanh theo chủ đề
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {topics.filter(t => t !== "Tất cả").map((topic) => (
                      <Button
                        key={topic}
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => setSelectedTopic(topic)}
                      >
                        {topic}
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
                    {popularDatasets.map((dataset, index) => (
                      <div key={dataset.id} className="flex gap-3">
                        <span className="text-2xl font-bold text-primary/20 flex-shrink-0">
                          {index + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                            {dataset.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">{dataset.code}</Badge>
                            <span className="text-xs text-muted-foreground">
                              {dataset.downloads.toLocaleString()} lượt
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Data Quality Notice */}
              <Card className="border-alert/20 bg-alert/5">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-alert">
                    <AlertTriangle className="h-5 w-5" />
                    Lưu ý dữ liệu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Dữ liệu có thể được hiệu chỉnh khi có tài liệu chính thức mới. 
                    Vui lòng kiểm tra phiên bản gần nhất trước khi sử dụng.
                  </p>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Phương pháp & Ghi chú
                  </Button>
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

export default Data;
