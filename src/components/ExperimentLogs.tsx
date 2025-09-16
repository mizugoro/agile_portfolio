import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  ExternalLink, 
  Lightbulb, 
  Zap,
  Camera,
  Gamepad2,
  Brain,
  Coffee,
  ChevronRight,
  BookOpen
} from 'lucide-react';

export function ExperimentLogs() {
  const logs = [
    {
      title: 'カメラでスロットの目押し補助をしてみた',
      date: '2024-12-15',
      readTime: '5分',
      category: 'Computer Vision',
      icon: Camera,
      excerpt: 'スマホのカメラでリアルタイム画像認識。「7」が揃う瞬間を検出してバイブで知らせる実験。意外と高精度でびっくり。',
      tags: ['OpenCV', 'React Native', 'Real-time'],
      status: '成功',
      funFactor: 5,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'センサで人を驚かせるゲームをつくった話',
      date: '2024-11-28',
      readTime: '7分',
      category: 'IoT Experiment',
      icon: Gamepad2,
      excerpt: '人感センサーと心拍計を組み合わせて、最適な驚かせタイミングを計算。友達のリアクションが面白すぎて研究が進まない。',
      tags: ['Arduino', 'Sensor', 'Game Design'],
      status: '爆笑',
      funFactor: 5,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AIにコードレビューしてもらったら説教された',
      date: '2024-11-10',
      readTime: '4分',
      category: 'AI Assistant',
      icon: Brain,
      excerpt: 'GPT-4にPull Requestをレビューしてもらう実験。「この関数名は何を表現したいのですか？」と深く追求される展開に。',
      tags: ['GPT-4', 'Code Review', 'Automation'],
      status: '反省',
      funFactor: 4,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'バグ発見率を予測するAIを作ってみた',
      date: '2024-10-22',
      readTime: '8分',
      category: 'QA Automation',
      icon: Zap,
      excerpt: '過去のバグデータから機械学習で新機能のリスクを予測。チームのテスト工数が40%削減。でも予測が当たりすぎて少し怖い。',
      tags: ['Machine Learning', 'Quality Assurance', 'Data Science'],
      status: '実用化',
      funFactor: 4,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'コードから詩を生成するAIを作った理由',
      date: '2024-10-05',
      readTime: '6分',
      category: 'Creative AI',
      icon: BookOpen,
      excerpt: 'プログラムの美しさを言葉で表現したくて作ったポエジーAI。「for文は永遠の愛のように繰り返し...」とか出力されて笑った。',
      tags: ['Creative AI', 'Natural Language', 'Art'],
      status: '詩人',
      funFactor: 5,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'テスト自動化でコーヒータイムを増やす作戦',
      date: '2024-09-18',
      readTime: '5分',
      category: 'Automation',
      icon: Coffee,
      excerpt: 'E2Eテストを完全自動化してコーヒーブレイクの時間を確保。結果的にバグ検出率も向上して一石二鳥。コーヒーは正義。',
      tags: ['Playwright', 'CI/CD', 'Work-Life Balance'],
      status: '満足',
      funFactor: 3,
      color: 'from-amber-600 to-orange-600'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '成功': return 'bg-green-100 text-green-800 border-green-200';
      case '爆笑': return 'bg-purple-100 text-purple-800 border-purple-200';
      case '反省': return 'bg-blue-100 text-blue-800 border-blue-200';
      case '実用化': return 'bg-orange-100 text-orange-800 border-orange-200';
      case '詩人': return 'bg-pink-100 text-pink-800 border-pink-200';
      case '満足': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Lightbulb
        key={i}
        className={`h-3 w-3 ${i < count ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="blog" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">実験ログ</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            日々の小さな実験と発見を記録しています。<br />
            <span className="text-primary">失敗も成功も、すべては次の実験のためのデータです。</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className={`h-1 bg-gradient-to-r ${log.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${log.color} flex-shrink-0`}>
                        {React.createElement(log.icon, { className: "h-5 w-5 text-white" })}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                          {log.title}
                        </CardTitle>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{log.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{log.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={`text-xs ${getStatusColor(log.status)}`}>
                        {log.status}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {renderStars(log.funFactor)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {log.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {log.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{log.category}</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      続きを読む
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
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
            <a href="/blog" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              実験ログをもっと読む
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* 実験統計 */}
        <motion.div 
          className="mt-16 p-8 bg-muted/30 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl mb-6 text-center flex items-center justify-center gap-2">
            <Zap className="h-5 w-5" />
            実験統計
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: '実験回数', value: '127回', color: 'text-blue-600' },
              { label: '成功率', value: '73%', color: 'text-green-600' },
              { label: '記事投稿', value: '24本', color: 'text-purple-600' },
              { label: 'コーヒー消費', value: '∞杯', color: 'text-amber-600' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`text-2xl mb-1 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}