import { Hero } from "@/components/hero";
import { FAQ } from "@/components/about/faq";

const discordFeatures = [
  {
    emoji: "💬",
    title: "Community Discussions",
    description:
      "Join dedicated channels for ETH discussions, technical support, and community collaboration.",
  },
  {
    emoji: "🔔",
    title: "Event Announcements",
    description:
      "Stay updated with the latest Ether Guild events, quests, and community initiatives.",
  },
  {
    emoji: "🤝",
    title: "Connect with Members",
    description:
      "Network with like-minded ETH supporters, builders, and advocates from around the world.",
  },
];

export default function Discord() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero
        imagePath="/image/ether-guild-discord.png"
        splashText="Ether Guild Discord"
      />

      <div className="container mx-auto px-4 -mt-[15%] relative z-10">
        <div className="bg-card rounded-xl shadow-xl p-8 md:p-12 space-y-16 max-w-6xl mx-auto">
          {/* Community Hub */}
          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
              Our Community Hub
            </h2>
            <p className="text-xl leading-relaxed">
              Join the Ether Guild Discord server to connect with fellow ETH supporters,
              participate in community discussions, and stay updated on the latest guild initiatives.
            </p>
          </section>

          {/* Join Button */}
          <section className="text-center">
            <a
              href="https://discord.gg/dAM6jwm9Ww"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-xl font-semibold transition-colors duration-300"
            >
              Join Our Discord
            </a>
          </section>

          {/* What to Expect */}
          <section className="bg-accent/20 rounded-xl p-8 hover:bg-accent/30 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-4 text-center">
              What to Expect
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              Our Discord server is the central hub for all Ether Guild activities and community engagement.
              Connect with guild officers, participate in quests, and contribute to initiatives supporting ETH.
            </p>
          </section>

          {/* Community Guidelines */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Community Guidelines
            </h2>
            <blockquote className="text-xl italic text-center mb-8 relative">
              <span className="absolute -left-4 -top-4 text-6xl text-primary/20">
                &ldquo;
              </span>
              <p className="relative z-10">
                A strong community is built on respect, collaboration, and shared values.
              </p>
              <span className="absolute -right-4 bottom-0 text-6xl text-primary/20">
                &rdquo;
              </span>
            </blockquote>
            <p className="text-lg leading-relaxed mb-4">
              We maintain a welcoming environment for all ETH supporters. Our community values
              constructive discussions, mutual respect, and a shared commitment to elevating ETH.
            </p>
            <p className="text-lg leading-relaxed mb-12">
              By joining our Discord, you agree to follow our community guidelines and
              contribute positively to our collective mission.
            </p>
          </section>

          <section className="space-y-8">
            <div className="bg-gradient-to-b from-accent/10 to-transparent rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-8 text-center">
                Discord Features
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {discordFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 rounded-lg
                             hover:bg-accent/20 transition-colors duration-300"
                  >
                    <span className="text-4xl mb-4">{feature.emoji}</span>
                    <h4 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQ />
        </div>
      </div>
    </main>
  );
} 