import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const cheats = [
  {
    id: 1,
    name: "Nursultan Client",
    versions: "1.12.2 + 1.16.5",
    description: "Мощный чит-клиент с расширенным функционалом для комфортной игры",
    downloadUrl: "https://t.me/FreeCheats28/262",
    features: ["Kill Aura", "Fly", "X-Ray", "Auto Mine"],
    logo: "https://cdn.poehali.dev/files/1c5d6544-ba79-4ce3-bb17-d60b3b1deadf.jpeg"
  },
  {
    id: 2,
    name: "Delta Client",
    versions: "1.16.5",
    description: "Продвинутый клиент с акцентом на PvP и боевые модули",
    downloadUrl: "https://t.me/FreeCheats28/229",
    features: ["Velocity", "Speed", "ESP", "Auto Armor"],
    logo: "https://cdn.poehali.dev/files/acf32afd-a856-490d-a1b3-b709061daf3f.jpg"
  },
  {
    id: 3,
    name: "Catlavan Client",
    versions: "1.16.5",
    description: "Стабильный чит с оптимизацией и широким набором возможностей",
    downloadUrl: "https://t.me/FreeCheats28/211",
    features: ["Scaffold", "NoFall", "Fast Break", "Auto Totem"],
    logo: "https://cdn.poehali.dev/files/5c5628a7-7893-447e-88dd-44480daaa1d1.jpg"
  },
  {
    id: 4,
    name: "Wexside",
    versions: "1.16.5",
    description: "Легковесный клиент с интуитивным интерфейсом",
    downloadUrl: "https://t.me/FreeCheats28/226",
    features: ["Reach", "Criticals", "Timer", "Auto Sprint"],
    logo: "https://cdn.poehali.dev/files/b62a2b78-53bf-4f57-8af0-71cac254f0fe.jpeg"
  },
  {
    id: 5,
    name: "Celestial Recode",
    versions: "1.16.5",
    description: "Переработанная версия популярного клиента с улучшенной стабильностью",
    downloadUrl: "https://t.me/FreeCheats28/29",
    features: ["Auto Clicker", "Velocity", "Blink", "Phase"]
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/225273f3-4ed1-4972-970b-227510d362b6.png" 
              alt="Heavy Cheats Logo" 
              className="w-10 h-10 object-contain brightness-0 invert"
            />
            <h1 className="text-2xl font-bold text-foreground">Heavy Cheats</h1>
          </div>
          <Button asChild variant="outline" size="sm">
            <a href="https://t.me/FreeCheats28" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" size={16} className="mr-2" />
              Telegram
            </a>
          </Button>
        </div>
      </nav>

      <main className="pt-20">
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Icon name="Sparkles" size={16} />
              <span>Бесплатные читы для Minecraft</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Доминируй в <span className="text-primary">Minecraft</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Лучшая коллекция проверенных чит-клиентов для версий 1.12.2 и 1.16.5. 
              Скачивай бесплатно и получай преимущество в игре.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button asChild size="lg" className="gap-2">
                <a href="#cheats">
                  <Icon name="Download" size={20} />
                  Скачать читы
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="https://t.me/FreeCheats28" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} />
                  Наш канал
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="cheats" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-3">Доступные читы</h3>
            <p className="text-muted-foreground">Выбери клиент под свои задачи</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cheats.map((cheat, index) => (
              <Card 
                key={cheat.id} 
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors overflow-hidden">
                      {cheat.logo ? (
                        <img 
                          src={cheat.logo} 
                          alt={`${cheat.name} logo`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Icon name="Box" size={24} className="text-primary" />
                      )}
                    </div>
                    <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                      {cheat.versions}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{cheat.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {cheat.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Основные функции:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cheat.features.map((feature) => (
                        <span 
                          key={feature}
                          className="text-xs px-2 py-1 bg-primary/5 text-primary rounded-md border border-primary/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground">
                    <a href={cheat.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Icon name="Download" size={16} />
                      Скачать
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Icon name="Send" size={24} />
                Присоединяйся к сообществу
              </CardTitle>
              <CardDescription className="text-base">
                Новые читы, обновления и поддержка в нашем Telegram канале
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
              <Button asChild size="lg" className="gap-2">
                <a href="https://t.me/FreeCheats28" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} />
                  Открыть канал
                </a>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/225273f3-4ed1-4972-970b-227510d362b6.png" 
                alt="Heavy Cheats Logo" 
                className="w-6 h-6 object-contain brightness-0 invert"
              />
              <span className="text-sm text-muted-foreground">
                Heavy Cheats © 2024
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://t.me/FreeCheats28" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Telegram канал
              </a>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">
                Все читы бесплатны
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}