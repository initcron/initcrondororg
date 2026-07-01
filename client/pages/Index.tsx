import { ArrowRight, Sparkles, Brain, Zap } from "lucide-react";

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Initcron AI</div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("framework")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Framework
            </button>
            <button
              onClick={() => scrollToSection("engagement")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Engagement
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Why Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-20 md:pt-32 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Transform Your DevOps &amp; Platform Teams into
            <span className="text-primary"> AI-Native Engineering Organizations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Initcron AI helps technology leaders adopt <span className="font-semibold">Agentic DevOps, AI Infrastructure, and AI-Augmented Engineering</span> to improve delivery speed, platform maturity, engineering productivity, and enterprise AI readiness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("cta")}
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap"
            >
              Book an AI-Native Engineering Strategy Call
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("framework")}
              className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Explore the AI Trinity Framework
            </button>
          </div>
        </div>
      </section>

      {/* The Shift Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            DevOps is evolving. Your engineering organization needs to evolve with it.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Traditional DevOps helped teams automate software delivery.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            The next wave is <span className="font-semibold">AI-Native Engineering</span> — where engineering teams use AI to build, operate, secure, and scale modern software and AI systems.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 md:p-12">
            <p className="text-lg font-semibold text-gray-900 mb-6">This shift includes:</p>
            <ul className="space-y-4">
              {[
                "AI-assisted DevOps workflows",
                "AI infrastructure and platform engineering",
                "Agentic systems for delivery, operations, and reliability",
                "AI-native engineering skills and team enablement",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We help organizations modernize both technology and engineering capability.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Initcron AI works with CTOs, Heads of Engineering, Platform Leaders, DevOps Leaders, and AI/ML teams to design and implement practical transformation programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Native DevOps Transformation",
                description:
                  "Modernize DevOps and Platform Engineering using AI-assisted workflows, automation, guardrails, and engineering copilots.",
              },
              {
                title: "AI Infrastructure &amp; Platform Engineering",
                description:
                  "Design and implement platforms for MLOps, LLMOps, AI workloads, Kubernetes, inference, observability, and scalable AI delivery.",
              },
              {
                title: "Agentic DevOps Implementation",
                description:
                  "Build AI agents, multi-agent workflows, MCP-based tools, automation playbooks, and human-in-the-loop operating models.",
              },
              {
                title: "Enterprise Enablement &amp; Upskilling",
                description:
                  "Train DevOps, Platform, Cloud, SRE, and Engineering teams to become AI-native engineers through workshops, labs, and transformation programs.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section id="framework" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powered by the <span className="text-primary">AI Trinity Framework™</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our consulting and enablement approach is built around three practical transformation pillars:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-12 h-12 text-primary" />,
                title: "AI-Augmented DevOps",
                description:
                  "Use AI to improve existing engineering workflows across Infrastructure as Code, CI/CD, Kubernetes, observability, documentation, troubleshooting, and platform operations.",
              },
              {
                icon: <Brain className="w-12 h-12 text-primary" />,
                title: "AI Infrastructure",
                description:
                  "Build and operate production AI systems using MLOps, LLMOps, AI Platform Engineering, Kubernetes, GPUs, inference, evaluation, and observability.",
              },
              {
                icon: <Zap className="w-12 h-12 text-primary" />,
                title: "Agentic DevOps",
                description:
                  "Design semi-autonomous and autonomous engineering workflows using agents, MCP, memory, guardrails, evaluation, and governance.",
              },
            ].map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section id="engagement" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Engagement Models
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Native Engineering Assessment",
                description: "A short strategic assessment to evaluate your current DevOps, Platform, AI Infrastructure, and team readiness.",
                output: "maturity report, opportunity map, 90-day roadmap.",
              },
              {
                title: "Agentic DevOps Pilot",
                description:
                  "A focused implementation sprint to build one high-impact AI-assisted or agentic workflow.",
                output: "IaC assistant, Kubernetes troubleshooting agent, incident RCA agent, runbook automation agent.",
              },
              {
                title: "AI Infrastructure Readiness Program",
                description:
                  "A consulting program to help teams design the infrastructure and practices needed for MLOps, LLMOps, model serving, inference, monitoring, and governance.",
                output: "",
              },
              {
                title: "AI-Native Engineering Enablement",
                description:
                  "Hands-on workshops and learning programs for DevOps, Platform, Cloud, SRE, and Engineering teams.",
                output: "",
              },
            ].map((model, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{model.description}</p>
                {model.output && (
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Examples:</span> {model.output}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Built for engineering organizations entering the AI era
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We work with:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "CTOs and Technology Leaders",
              "Heads of Engineering",
              "Platform Engineering Leaders",
              "DevOps and SRE Leaders",
              "Cloud Infrastructure Teams",
              "AI/ML Platform Teams",
              "Enterprise Transformation Teams",
              "Global Capability Centers",
            ].map((audience, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-lg">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Initcron AI Section */}
      <section id="why" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Built on 14+ years of DevOps transformation experience
          </h2>

          <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 mb-8">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Before Initcron AI, we spent more than a decade helping organizations adopt DevOps, Kubernetes, Cloud Native, CI/CD, Infrastructure as Code, GitOps, and Platform Engineering.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Now we help organizations take the next step:
            </p>
            <p className="text-2xl font-bold text-primary mt-6">
              from DevOps transformation to AI-Native Engineering transformation.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Proof Points</h3>
            <ul className="space-y-4">
              {[
                "14+ years in DevOps, Cloud Native, and Platform Engineering",
                "500+ enterprise workshops delivered",
                "Thousands of engineers trained globally",
                "Practical implementation-first approach",
                "Deep expertise in Kubernetes, automation, AI infrastructure, and agentic workflows",
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="text-lg text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Ready to make your engineering organization AI-native?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Start with a strategy conversation.
          </p>

          <button className="px-10 py-5 bg-primary text-white font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity flex items-center gap-3 mx-auto mb-8">
            Book an AI-Native Engineering Strategy Call
            <ArrowRight className="w-6 h-6" />
          </button>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We'll help you identify where AI can improve engineering productivity, where your AI infrastructure needs maturity, and how to build a practical transformation roadmap for your teams.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Initcron Systems Pvt Ltd. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Transforming DevOps and Platform Teams into AI-Native Engineering Organizations
          </p>
        </div>
      </footer>
    </div>
  );
}
