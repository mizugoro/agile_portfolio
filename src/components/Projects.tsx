import { useState } from 'react';
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Github, 
  RotateCcw, 
  Smartphone, 
  Globe, 
  Award,
  TestTube,
  Presentation,
  Lightbulb,
  Zap
} from 'lucide-react';

export function Projects() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const projects = [
    // 開発プロジェクト
    {
      type: 'development',
      title: 'Smart Shopping Assistant',
      shortDesc: 'AI搭載のECサイト',
      fullDesc: 'ユーザーの購買履歴と行動分析を元に、パーソナライズされた商品推薦を行うECプラットフォーム。リアルタイム在庫管理と決済システムを統合。',
      image: 'https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc1MjA4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'ML API'],
      icon: Globe,
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      experiment: 'ユーザーが「これ欲しかった！」と言ってくれる瞬間を作りたくて',
      stats: { users: '10万+', conversion: '+35%' }
    },
    {
      type: 'development',
      title: 'Health Tracker Mobile',
      shortDesc: '健康管理アプリ',
      fullDesc: 'Kotlin × Jetpack Composeで開発したネイティブAndroidアプリ。センサーデータとウェアラブルデバイスとの連携で健康状態を可視化。',
      image: 'https://images.unsplash.com/photo-1612556810513-617a5a892418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwcm90b3R5cGV8ZW58MXx8fHwxNzU3NTkzNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Retrofit'],
      icon: Smartphone,
      githubUrl: 'https://github.com',
      liveUrl: 'https://play.google.com',
      experiment: 'スマートウォッチと会話するアプリを作る実験',
      stats: { rating: '4.8/5', downloads: '5万+' }
    },
    // QA実験プロジェクト
    {
      type: 'qa',
      title: 'Auto Bug Hunter',
      shortDesc: 'AI搭載テストツール',
      fullDesc: '機械学習を活用したバグ検出システム。過去のバグパターンを学習し、新機能のリスクエリアを予測。テスト工数を40%削減に成功。',
      image: 'https://images.unsplash.com/photo-1606619353143-8e11b4bdf76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwYXNzdXJhbmNlJTIwdGVzdGluZ3xlbnwxfHx8fDE3NTc1MTEzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Selenium', 'TensorFlow', 'Playwright'],
      icon: TestTube,
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      experiment: 'バグを見つけるAIを作って、バグハンティングを自動化',
      stats: { efficiency: '+40%', coverage: '95%+' }
    },
    // 研究プロジェクト
    {
      type: 'research',
      title: 'Vision-Based Slot Helper',
      shortDesc: 'コンピュータビジョン研究',
      fullDesc: '大学院での研究成果。カメラ映像からスロットマシンの図柄を認識し、目押しタイミングをサポートするシステム。リアルタイム画像処理の実装。',
      image: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcmVzZWFyY2glMjBsYWJ8ZW58MXx8fHwxNzU3NTU3MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'OpenCV', 'Deep Learning', 'TensorFlow'],
      icon: Award,
      githubUrl: 'https://github.com',
      paperUrl: 'https://example.com/paper',
      experiment: '「機械の目」で人間の反射神経をサポートする実験',
      stats: { accuracy: '98.2%', latency: '<50ms' }
    },
    {
      type: 'research',
      title: 'Surprise Game System',
      shortDesc: '感情認識実験',
      fullDesc: '国際会議で発表した研究。センサーで人の接近を検知し、驚かせるタイミングを計算するゲームシステム。心拍数と表情から驚き度を測定。',
      image: 'https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9uJTIwYWNhZGVtaWN8ZW58MXx8fHwxNzU3NjAyMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Arduino', 'Raspberry Pi', 'Computer Vision', 'IoT'],
      icon: Presentation,
      githubUrl: 'https://github.com',
      paperUrl: 'https://example.com/paper',
      experiment: '人を驚かせる最適なタイミングを科学する',
      stats: { surprise: '92%成功', citations: '15回' }
    },
    // 実験プロジェクト
    {
      type: 'experiment',
      title: 'Code Poetry Generator',
      shortDesc: '創作AI実験',
      fullDesc: '最新の実験プロジェクト。ソースコードから詩を生成するAI。プログラムの構造美を言葉で表現する試み。',
      image: 'https://images.unsplash.com/photo-1667503779301-3120a323859a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmltZW50JTIwbGFib3JhdG9yeSUyMHNldHVwfGVufDF8fHx8MTc1NzYwMjAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['GPT API', 'AST Parser', 'React', 'Poetry.js'],
      icon: Lightbulb,
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      experiment: 'コードの美しさを詩で表現できるか？という謎の挑戦',
      stats: { poems: '1000+生成', satisfaction: '85%' }
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'development': return 'from-blue-500 to-cyan-500';
      case 'qa': return 'from-purple-500 to-pink-500';
      case 'research': return 'from-green-500 to-emerald-500';
      case 'experiment': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'development': return '開発';
      case 'qa': return 'QA実験';
      case 'research': return '研究';
      case 'experiment': return '実験';
      default: return '作品';
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">実験室の作品たち</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            開発・QA・研究・実験の境界線を越えて。<br />
            <span className="text-primary">カードをクリックして裏面を見てみてください。</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="perspective-1000"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="h-96 cursor-pointer relative preserve-3d transition-transform duration-500 hover:shadow-lg"
                style={{
                  transform: flippedCards.includes(index) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
                onClick={() => toggleCard(index)}
              >
                {/* カード表面 */}
                <div className="absolute inset-0 backface-hidden">
                  <div className={`h-2 bg-gradient-to-r ${getTypeColor(project.type)}`} />
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${getTypeColor(project.type)} text-white border-0`}>
                        {getTypeLabel(project.type)}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 p-2 bg-background/90 backdrop-blur-sm rounded-full">
                      {React.createElement(project.icon, { className: "h-5 w-5" })}
                    </div>
                    <div className="absolute bottom-4 right-4 p-2 bg-background/90 backdrop-blur-sm rounded-full animate-pulse">
                      <RotateCcw className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.shortDesc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </div>

                {/* カード裏面 */}
                <div 
                  className="absolute inset-0 backface-hidden"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <div className={`h-2 bg-gradient-to-r ${getTypeColor(project.type)}`} />
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      {React.createElement(project.icon, { className: "h-5 w-5" })}
                      <h3 className="text-lg">{project.title}</h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {project.fullDesc}
                    </p>

                    <div className="p-3 bg-muted/50 rounded-lg mb-4">
                      <p className="text-xs italic flex items-start gap-2">
                        <Zap className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                        実験メモ：{project.experiment}
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-primary/10 rounded">
                            <div className="text-primary">{value}</div>
                            <div className="text-muted-foreground">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={project.liveUrl || project.paperUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          {project.paperUrl ? 'Paper' : 'Live'}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <TestTube className="mr-2 h-4 w-4" />
              実験室をもっと見る
            </a>
          </Button>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}