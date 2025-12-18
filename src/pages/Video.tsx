import { useState } from "react";
import { Search, Play, Clock, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import heroVideo from "@/assets/hero-video.jpg";
import alertThumb from "@/assets/video-alert-thumb.jpg";
import standardsThumb from "@/assets/video-standards-thumb.jpg";
import caseThumb from "@/assets/video-case-thumb.jpg";
import tutorialThumb from "@/assets/video-tutorial-thumb.jpg";
import eventThumb from "@/assets/video-event-thumb.jpg";
import interviewThumb from "@/assets/video-interview-thumb.jpg";
import infographicThumb from "@/assets/video-infographic-thumb.jpg";

const Video = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const playlists = [
    {
      id: 1,
      title: "Cảnh báo nhanh 72h",
      description: "Cập nhật nhanh các cảnh báo chất lượng mới nhất",
      videoCount: 12,
      thumbnail: alertThumb
    },
    {
      id: 2,
      title: "Giải thích tiêu chuẩn",
      description: "Hiểu rõ các tiêu chuẩn kỹ thuật trong 3 phút",
      videoCount: 8,
      thumbnail: standardsThumb
    },
    {
      id: 3,
      title: "Case tuân thủ",
      description: "Câu chuyện thực tế từ doanh nghiệp",
      videoCount: 15,
      thumbnail: caseThumb
    },
    {
      id: 4,
      title: "Hướng dẫn truy xuất",
      description: "Bước-từng-bước áp dụng truy xuất nguồn gốc",
      videoCount: 10,
      thumbnail: tutorialThumb
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Cảnh báo thu hồi sản phẩm sữa bột: Những điểm cần lưu ý",
      description: "Thông tin chi tiết về đợt thu hồi sản phẩm sữa bột, mã lô ảnh hưởng và hướng dẫn xử lý cho người tiêu dùng",
      thumbnail: alertThumb,
      duration: "03:45",
      views: "12.5K",
      published: "2 ngày trước",
      platform: "youtube",
      category: "Cảnh báo",
      playlist: "Cảnh báo nhanh 72h"
    },
    {
      id: 2,
      title: "Tiêu chuẩn TCVN về nhãn mác hàng hóa - Giải thích chi tiết",
      description: "Phân tích các yêu cầu bắt buộc trong tiêu chuẩn TCVN về nhãn mác, ví dụ thực tế và lỗi thường gặp",
      thumbnail: standardsThumb,
      duration: "05:20",
      views: "8.3K",
      published: "3 ngày trước",
      platform: "youtube",
      category: "Tiêu chuẩn",
      playlist: "Giải thích tiêu chuẩn"
    },
    {
      id: 3,
      title: "DN FMCG giảm 70% khiếu nại nhờ hệ thống truy xuất",
      description: "Case study chi tiết về doanh nghiệp FMCG áp dụng thành công hệ thống truy xuất nguồn gốc",
      thumbnail: caseThumb,
      duration: "04:15",
      views: "15.2K",
      published: "5 ngày trước",
      platform: "youtube",
      category: "Case Study",
      playlist: "Case tuân thủ"
    },
    {
      id: 4,
      title: "3 bước quét mã TraceID đúng cách - Hướng dẫn chi tiết",
      description: "Video hướng dẫn từng bước cách quét và kiểm tra thông tin sản phẩm qua mã TraceID",
      thumbnail: tutorialThumb,
      duration: "02:30",
      views: "22.1K",
      published: "1 tuần trước",
      platform: "youtube",
      category: "Hướng dẫn",
      playlist: "Hướng dẫn truy xuất"
    },
    {
      id: 5,
      title: "Recap Hội thảo Chống hàng giả TMĐT 2025",
      description: "Tổng hợp những điểm nhấn và giải pháp từ hội thảo chống hàng giả trên sàn TMĐT",
      thumbnail: eventThumb,
      duration: "08:45",
      views: "6.8K",
      published: "2 tuần trước",
      platform: "youtube",
      category: "Sự kiện",
      playlist: ""
    },
    {
      id: 6,
      title: "Phỏng vấn chuyên gia: Xu hướng công nghệ chống giả 2025",
      description: "Chia sẻ từ chuyên gia về các công nghệ mới trong lĩnh vực chống hàng giả và truy xuất",
      thumbnail: interviewThumb,
      duration: "12:15",
      views: "9.4K",
      published: "3 tuần trước",
      platform: "youtube",
      category: "Phỏng vấn",
      playlist: ""
    },
    {
      id: 7,
      title: "Infographic: 5 dấu hiệu nhận biết hàng giả trên TMĐT",
      description: "Video infographic trực quan giúp người tiêu dùng nhận biết sản phẩm giả mạo khi mua sắm online",
      thumbnail: infographicThumb,
      duration: "01:45",
      views: "31.7K",
      published: "1 tháng trước",
      platform: "facebook",
      category: "Infographic",
      playlist: ""
    },
    {
      id: 8,
      title: "Quy trình kiểm soát chất lượng tại nhà máy sản xuất",
      description: "Cận cảnh quy trình kiểm soát chất lượng nghiêm ngặt tại một doanh nghiệp đạt chuẩn",
      thumbnail: caseThumb,
      duration: "06:30",
      views: "11.2K",
      published: "1 tháng trước",
      platform: "youtube",
      category: "Case Study",
      playlist: "Case tuân thủ"
    }
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || video.category.toLowerCase().includes(activeTab);
    return matchesSearch && matchesTab;
  });

  const featuredVideo = videos[0];
  const relatedVideos = videos.slice(1, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Top Leaderboard Ad */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner type="leaderboard-top" variant={3} />
      </div>
      
      {/* Hero Section with Featured Video */}
      <section className="relative bg-background border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured Video Player */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="h-10 w-10 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-white text-sm">
                  {featuredVideo.duration}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Badge>{featuredVideo.category}</Badge>
                {featuredVideo.platform === "youtube" && (
                  <Youtube className="h-4 w-4 text-red-600" />
                )}
                {featuredVideo.platform === "facebook" && (
                  <Facebook className="h-4 w-4 text-blue-600" />
                )}
                <span className="text-sm text-muted-foreground">• {featuredVideo.views} lượt xem</span>
                <span className="text-sm text-muted-foreground">• {featuredVideo.published}</span>
              </div>
              <h1 className="text-2xl font-bold mb-2">{featuredVideo.title}</h1>
              <p className="text-muted-foreground">{featuredVideo.description}</p>
            </div>

            {/* Related Videos Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">Video liên quan</h3>
              <div className="space-y-3">
                {relatedVideos.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-3">
                      <div className="flex gap-3">
                        <div className="relative w-40 h-24 flex-shrink-0 rounded overflow-hidden">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 py-0.5 rounded text-white text-xs">
                            {video.duration}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium line-clamp-2 mb-1">
                            {video.title}
                          </h4>
                          <div className="text-xs text-muted-foreground">
                            <div>{video.views} lượt xem</div>
                            <div>{video.published}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Ad */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner type="inline" variant={2} />
      </div>

      {/* Playlists Section */}
      <section className="py-8 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Chuỗi Video / Playlist</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {playlists.map((playlist) => (
              <Card key={playlist.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={playlist.thumbnail}
                    alt={playlist.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1 text-white text-sm mb-1">
                      <Play className="h-4 w-4" />
                      <span className="font-semibold">{playlist.videoCount} videos</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {playlist.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {playlist.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="border-y bg-background sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Tìm kiếm video theo tiêu đề, chủ đề..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="all">Tất cả</TabsTrigger>
                <TabsTrigger value="cảnh">Cảnh báo</TabsTrigger>
                <TabsTrigger value="tiêu">Tiêu chuẩn</TabsTrigger>
                <TabsTrigger value="case">Case Study</TabsTrigger>
                <TabsTrigger value="hướng">Hướng dẫn</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Bottom Ad Before All Videos */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner type="bottom" variant={3} />
      </div>

      {/* All Videos Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">
            Video mới nhất ({filteredVideos.length})
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs font-medium">
                    {video.duration}
                  </div>
                  {video.playlist && (
                    <div className="absolute top-2 left-2 bg-primary/90 px-2 py-1 rounded text-white text-xs font-medium">
                      Playlist
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">{video.category}</Badge>
                    {video.platform === "youtube" && (
                      <Youtube className="h-3 w-3 text-red-600" />
                    )}
                    {video.platform === "facebook" && (
                      <Facebook className="h-3 w-3 text-blue-600" />
                    )}
                  </div>
                  <h3 className="font-semibold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </span>
                    <span>{video.views} lượt xem</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {video.published}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Xem thêm video
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Video;
