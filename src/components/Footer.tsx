import { Github, Linkedin, Mail, Twitter, TestTube, Coffee, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { motion } from 'motion/react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-600' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:experiment@johndoe.dev', label: 'Email', color: 'hover:text-green-600' },
  ];

  const quickLinks = [
    { href: '#timeline', label: '実験の軌跡', icon: '🧪' },
    { href: '#skills', label: '道具箱', icon: '🔧' },
    { href: '#projects', label: '作品集', icon: '🎨' },
    { href: '#blog', label: '実験ログ', icon: '📝' },
    { href: '#contact', label: '実験に誘う', icon: '⚡' },
  ];

  const experimentTypes = [
    '🌐 ウェブアプリ開発',
    '📱 モバイルアプリ',
    '🔬 QA・テスト自動化',
    '🤖 AI・機械学習',
    '🎮 インタラクティブ体験',
  ];

  const techStack = [
    '⚛️ React & Next.js',
    '🟢 Node.js & Python',
    '📘 TypeScript',
    '☁️ クラウド & DevOps',
    '🎯 Quality Engineering',
  ];

  return (
    <footer className="bg-gradient-to-br from-muted/30 to-muted/10 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-full">
              <TestTube className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl">実験系エンジニアの研究室</h3>
          </motion.div>
          
          <motion.p 
            className="text-muted-foreground mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            コードで遊び、品質で育てる。<br />
            日々の実験を通じて、面白いものを作り続けています。
          </motion.p>

          <motion.div 
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className={`transition-colors ${link.color}`}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Separator className="mb-8" />

        <div className="grid sm:grid-cols-3 gap-8 text-sm text-muted-foreground mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
              🗺️ クイックナビ
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
              🧪 実験分野
            </h4>
            <ul className="space-y-2">
              {experimentTypes.map((type, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  {type}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
              🔧 技術スタック
            </h4>
            <ul className="space-y-2">
              {techStack.map((tech, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 実験統計ミニ */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-muted/20 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[
            { label: '実験回数', value: '127+', icon: '🧪' },
            { label: 'プロジェクト', value: '23個', icon: '🎯' },
            { label: 'コーヒー', value: '∞杯', icon: '☕' },
            { label: 'バグ修正', value: '1,337個', icon: '🐛' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="text-lg mb-1">{stat.icon}</div>
              <div className="text-lg text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <Separator className="mb-6" />

        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center gap-2">
            <span>&copy; 2024 実験系エンジニア. Made with</span>
            <Heart className="h-3 w-3 text-red-500 fill-current" />
            <span>and</span>
            <Coffee className="h-3 w-3 text-amber-600" />
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">プライバシー</a>
            <a href="#" className="hover:text-foreground transition-colors">利用規約</a>
            <a href="#" className="hover:text-foreground transition-colors">実験規約</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}