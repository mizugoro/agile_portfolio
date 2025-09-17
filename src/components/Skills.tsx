import { useState } from 'react';
import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Code, 
  Palette, 
  Database, 
  TestTube, 
  Wrench,
  Heart,
  Zap
} from 'lucide-react';

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillsData = [
    // Frontend
    { name: 'React', comment: 'UIは遊び心の実験場', category: 'frontend', size: 'large', icon: Code },
    { name: 'TypeScript', comment: '型安全性は心の平穏', category: 'frontend', size: 'large', icon: Code },
    { name: 'Next.js', comment: 'フルスタックの魔法', category: 'frontend', size: 'medium', icon: Code },
    { name: 'Tailwind CSS', comment: 'デザインシステムの親友', category: 'frontend', size: 'medium', icon: Palette },
    { name: 'Vue.js', comment: 'シンプルさの美学', category: 'frontend', size: 'small', icon: Code },
    { name: 'Kotlin', comment: 'Androidの新しい相棒', category: 'frontend', size: 'medium', icon: Code },
    
    // Backend & Data
    { name: 'Node.js', comment: 'JavaScriptで世界制覇', category: 'backend', size: 'large', icon: Database },
    { name: 'Python', comment: 'AI実験の最強パートナー', category: 'backend', size: 'large', icon: Database },
    { name: 'PostgreSQL', comment: 'データの安全な家', category: 'backend', size: 'medium', icon: Database },
    { name: 'MongoDB', comment: 'ドキュメントの自由度', category: 'backend', size: 'small', icon: Database },
    { name: 'GraphQL', comment: 'APIの未来形', category: 'backend', size: 'small', icon: Database },
    
    // QA & Tools
    { name: 'Jest', comment: 'バグハンターの武器', category: 'qa', size: 'medium', icon: TestTube },
    { name: 'Playwright', comment: 'E2Eテストの魔術師', category: 'qa', size: 'medium', icon: TestTube },
    { name: 'Selenium', comment: 'ブラウザ操作の古参', category: 'qa', size: 'small', icon: TestTube },
    { name: 'Quality Assurance', comment: '品質は未来への投資', category: 'qa', size: 'large', icon: Heart },
    
    // DevOps & Tools
    { name: 'Docker', comment: 'コンテナで環境統一', category: 'tools', size: 'medium', icon: Wrench },
    { name: 'AWS', comment: 'クラウドの大海原', category: 'tools', size: 'medium', icon: Wrench },
    { name: 'Git', comment: 'バージョン管理の基本', category: 'tools', size: 'medium', icon: Wrench },
    { name: 'Figma', comment: 'デザイナーとの橋渡し', category: 'tools', size: 'small', icon: Palette },
    
    // Experimental
    { name: 'Machine Learning', comment: 'AIとの対話実験', category: 'experimental', size: 'medium', icon: Sparkles },
    { name: 'Computer Vision', comment: '機械の目を作る楽しみ', category: 'experimental', size: 'small', icon: Sparkles },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend Magic', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', name: 'Backend Power', icon: Database, color: 'from-green-500 to-emerald-500' },
    { id: 'qa', name: 'Quality Guardian', icon: TestTube, color: 'from-purple-500 to-pink-500' },
    { id: 'tools', name: 'DevOps Toolkit', icon: Wrench, color: 'from-orange-500 to-red-500' },
    { id: 'experimental', name: 'Experimental Lab', icon: Sparkles, color: 'from-yellow-500 to-amber-500' },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large': return 'text-lg px-4 py-2';
      case 'medium': return 'text-base px-3 py-1.5';
      case 'small': return 'text-sm px-2 py-1';
      default: return 'text-base px-3 py-1.5';
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">実験道具箱</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            それぞれの技術に個性があって、組み合わせ次第で無限の可能性が生まれます。<br />
            <span className="text-primary">ホバーして、技術への想いを聞いてみてください。</span>
          </p>
        </motion.div>

        {/* カテゴリ別スキル表示 */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skillsData.filter(skill => skill.category === category.id);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        {React.createElement(category.icon, { className: "h-5 w-5 text-white" })}
                      </div>
                      <h3 className="text-xl">{category.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.05, zIndex: 10 }}
                          className="relative"
                        >
                          <Badge
                            variant="secondary"
                            className={`${getSizeClasses(skill.size)} cursor-pointer transition-all duration-200 hover:bg-primary hover:text-primary-foreground flex items-center gap-2`}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            {React.createElement(skill.icon, { className: "h-3 w-3" })}
                            {skill.name}
                            <Zap className="h-3 w-3 opacity-0 hover:opacity-100 transition-opacity" />
                          </Badge>
                          
                          {/* ホバー時のコメント */}
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.9 }}
                              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20"
                            >
                              <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                                {skill.comment}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* 実験レベルメーター */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mb-8 flex items-center justify-center gap-2">
            <TestTube className="h-6 w-6" />
            実験熟練度
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: 'Frontend Development', level: 90, color: 'from-blue-500 to-cyan-500' },
              { skill: 'Quality Assurance', level: 85, color: 'from-purple-500 to-pink-500' },
              { skill: 'Backend Development', level: 80, color: 'from-green-500 to-emerald-500' },
              { skill: 'Research & Experiment', level: 75, color: 'from-yellow-500 to-amber-500' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-muted"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="url(#gradient-{index})"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      initial={{ strokeDashoffset: `${2 * Math.PI * 40}` }}
                      whileInView={{ strokeDashoffset: `${2 * Math.PI * 40 * (1 - item.level / 100)}` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                      className="drop-shadow-sm"
                    />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className="text-primary" stopColor="currentColor" />
                        <stop offset="100%" className="text-accent" stopColor="currentColor" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm">{item.level}%</span>
                  </div>
                </div>
                <p className="text-sm">{item.skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}