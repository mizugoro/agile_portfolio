import { useState } from 'react';
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Code, 
  TestTube, 
  Rocket, 
  ChevronRight,
  Calendar,
  MapPin,
  Lightbulb
} from 'lucide-react';

import research_image from "../assets/研究.png";
import development_image from "../assets/開発.png";
import qa_image from "../assets/QA.png";

export function Timeline() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: '大学院（研究）',
      period: '2023-2024',
      location: '立命館大学大学院情報理工学研究科',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      description: 'ウェアラブルデバイスのデータ収集と分析を行った',
      achievements: [
        '国際会議での論文発表 1本',
        '脈拍センサを用いたデータ収集とゲームアプリ開発',
        'データ分析と可視化'
      ],
      image: research_image,
      experiment: '深夜のコード実験で、AIが猫を認識する瞬間に感動した日々'
    },
    {
      id: 1,
      title: '開発（Web・モバイル）',
      period: '2022-2024',
      location: 'スタートアップ',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      description: 'ユーザーが触れるインターフェースを作る楽しさを発見。React との出会いが転機に。',
      achievements: [
        'React/React Native でアプリをリリース',
        'Webアプリを開発',
        'チームリードとして若手エンジニアを指導'
      ],
      image: development_image,
      experiment: 'ユーザーの「おお！」という声が聞こえる瞬間を追い求めて'
    },
    {
      id: 2,
      title: 'QA（品質保証）',
      period: '2025-',
      location: 'QAエンジニア・テスト設計',
      icon: TestTube,
      color: 'from-purple-500 to-pink-500',
      description: 'テストの奥深さと、品質の重要性を身をもって学ぶ。',
      achievements: [
        'テスト自動化フレームワークの構築',
        'バグ検出率を40%向上させる仕組みを開発',
        'QAプロセスの標準化を推進'
      ],
      image: qa_image,
      experiment: 'エッジケースを見つけるのは宝探しのよう。隠れたバグとの知恵比べ'
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">実験の軌跡</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            研究から開発、そして品質保証まで。<br />
            それぞれのフェーズで得た学びが、今の実験スタイルを形作っています。
          </p>
        </motion.div>

        {/* タイムラインナビゲーション */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex gap-4 p-4">
            {phases.map((phase, index) => (
              <Button
                key={phase.id}
                variant={activePhase === index ? "default" : "outline"}
                onClick={() => setActivePhase(index)}
                className="flex items-center gap-2 min-w-fit"
              >
                {React.createElement(phase.icon, { className: "h-4 w-4" })}
                <span className="hidden sm:inline">{phase.title}</span>
                <span className="sm:hidden">{phase.period}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* アクティブフェーズの詳細 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <div className={`absolute inset-0 bg-gradient-to-br ${phases[activePhase].color} opacity-20`} />
                  <ImageWithFallback
                    src={phases[activePhase].image}
                    alt={phases[activePhase].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 p-3 bg-background/90 backdrop-blur-sm rounded-full">
                    {React.createElement(phases[activePhase].icon, { className: "h-6 w-6" })}
                  </div>
                </div>
                
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${phases[activePhase].color}`}>
                      {React.createElement(phases[activePhase].icon, { className: "h-6 w-6 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-2xl">{phases[activePhase].title}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{phases[activePhase].period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{phases[activePhase].location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {phases[activePhase].description}
                  </p>

                  <div className="mb-6">
                    <h4 className="mb-3 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      主な成果
                    </h4>
                    <ul className="space-y-2">
                      {phases[activePhase].achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <p className="text-sm italic">
                      💭 実験ノート：{phases[activePhase].experiment}
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* プログレスバー */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            {phases.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activePhase ? 'w-8 bg-primary' : 'w-2 bg-muted'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}