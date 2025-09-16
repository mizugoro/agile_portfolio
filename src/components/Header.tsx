import { useState } from 'react';
import { Menu, X, TestTube, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#timeline', label: '実験の軌跡', icon: '🧪' },
    { href: '#skills', label: '道具箱', icon: '🔧' },
    { href: '#projects', label: '作品集', icon: '🎨' },
    { href: '#blog', label: '実験ログ', icon: '📝' },
    { href: '#contact', label: '実験に誘う', icon: '⚡' },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a 
            href="#" 
            className="font-semibold text-xl flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
              <TestTube className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="hidden sm:inline">実験室</span>
            <span className="sm:hidden">Lab</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className="md:hidden overflow-hidden"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1 },
            closed: { height: 0, opacity: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 border-t border-border">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 py-3 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}