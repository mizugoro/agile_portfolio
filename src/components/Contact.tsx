import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { motion } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  TestTube, 
  Bug, 
  Shield, 
  Coffee,
  Lightbulb,
  Zap,
  Github,
  Linkedin,
  MessageCircle
} from 'lucide-react';
import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactType: 'collaboration'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('実験参加の申し込みを受信しました！24時間以内に返信いたします。');
    setFormData({ name: '', email: '', message: '', contactType: 'collaboration' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactOptions = [
    {
      id: 'experiment',
      icon: TestTube,
      title: '実験に誘う',
      description: '新しいアイデアの実験パート���ーを募集中',
      color: 'from-blue-500 to-cyan-500',
      placeholder: '一緒に実験したいアイデアを教えてください...'
    },
    {
      id: 'bug-report',
      icon: Bug,
      title: 'バグ報告はこちら',
      description: '品質保証のプロが責任を持って調査します',
      color: 'from-red-500 to-pink-500',
      placeholder: 'どんなバグを発見しましたか？再現手順も教えてください...'
    },
    {
      id: 'quality-check',
      icon: Shield,
      title: '品質保証済みのDMはこちら',
      description: 'QAテスト済みの安全な連絡チャンネル',
      color: 'from-green-500 to-emerald-500',
      placeholder: 'プロジェクトの詳細、技術相談、何でもどうぞ...'
    },
    {
      id: 'coffee',
      icon: Coffee,
      title: 'コーヒーブレイク',
      description: 'カジュアルな技術談義をしましょう',
      color: 'from-amber-500 to-orange-500',
      placeholder: 'コーヒーを飲みながら話したいことはありますか？'
    }
  ];

  const [selectedOption, setSelectedOption] = useState(contactOptions[0]);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'experiment@johndoe.dev',
      href: 'mailto:experiment@johndoe.dev',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+81 90-XXXX-XXXX',
      href: 'tel:+819012345678',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Tokyo, Japan (実験室)',
      href: '#',
      color: 'text-purple-600'
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: MessageCircle, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">実験パートナー募集中</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            新しいアイデアの実験、技術の相談、または単純に「面白そう！」と思ったら、<br />
            <span className="text-primary">お気軽に実験室の扉をノックしてください。</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 連絡方法選択 */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl mb-6 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              連絡の種類を選んでください
            </h3>
            <div className="space-y-4">
              {contactOptions.map((option) => (
                <Card
                  key={option.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedOption.id === option.id 
                      ? 'ring-2 ring-primary shadow-lg' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedOption(option)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${option.color}`}>
                        <option.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{option.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 連絡先情報 */}
            <div className="mt-8">
              <h4 className="mb-4 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                直接連絡
              </h4>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-muted rounded-lg">
                      <info.icon className={`h-4 w-4 ${info.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{info.title}</p>
                      <a
                        href={info.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ソーシャルリンク */}
            <div className="mt-8">
              <h4 className="mb-4">SNSで繋がろう</h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
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
                      <link.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* メッセージフォーム */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className={`h-2 bg-gradient-to-r ${selectedOption.color}`} />
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <selectedOption.icon className="h-5 w-5" />
                  {selectedOption.title}
                </CardTitle>
                <p className="text-muted-foreground">{selectedOption.description}</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">お名前</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="実験パートナーのお名前"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">メールアドレス</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">メッセージ</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={selectedOption.placeholder}
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full flex items-center gap-2"
                      size="lg"
                    >
                      <selectedOption.icon className="h-4 w-4" />
                      実験参加の申し込み
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>実験室からのお約束：</strong> 
                    24時間以内に返信いたします。技術的な質問、プロジェクトの相談、
                    新しいアイデアの実験パートナー、何でも大歓迎です。
                    一緒に面白いものを作りましょう！
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}