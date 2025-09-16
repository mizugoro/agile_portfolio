import { Card, CardContent } from './ui/card';
import { Code, Palette, Rocket } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: '保守性の高いコードを書くことを心がけています',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'ユーザー中心のデザインアプローチを採用',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: '高速で効率的なアプリケーションの開発',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5年以上のウェブ開発経験を持つフルスタックデベロッパーです。
            モダンなテクノロジーを活用して、ユーザーにとって価値のあるアプリケーションを作ることに情熱を注いでいます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              コンピュータサイエンスの学位を取得後、スタートアップから大手企業まで様々な環境でソフトウェア開発に携わってきました。
              フロントエンドからバックエンド、データベース設計まで、幅広い技術領域をカバーしています。
            </p>
            <p className="text-muted-foreground">
              新しい技術を学ぶことが好きで、常にベストプラクティスを追求し、
              チームメンバーと知識を共有することを大切にしています。
            </p>
          </div>
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}