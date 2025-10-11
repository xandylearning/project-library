import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import LightRays from '@/components/LightRays'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#6ecff6"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="container mx-auto px-4 pt-36 pb-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#6ecff6] to-[#6ecff6] bg-clip-text text-transparent">
              AI4K Project Library
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering students with hands-on AI and Machine Learning projects. 
              Learn, build, and innovate with structured learning paths designed for Kerala's future leaders.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-[#6ecff6] hover:bg-[#6ecff6]/90 text-black font-semibold px-8 py-3">
              <Link href="/browse">Explore Projects</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-[#f05563] text-[#f05563] hover:bg-[#f05563] hover:text-white px-8 py-3">
              <Link href="https://www.ai4kerala.org/" target="_blank" rel="noopener noreferrer">
                Visit AI4Kerala
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-7xl mx-auto">
          <Card className="bg-background/40 backdrop-blur-sm border-white/10 hover:bg-background/60 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-[#6ecff6]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#6ecff6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <CardTitle className="text-xl">Structured Learning Paths</CardTitle>
              <CardDescription className="text-base">
                Step-by-step AI/ML projects designed for different skill levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From beginner-friendly data analysis to advanced neural networks, our projects guide you through the complete AI/ML journey with clear milestones and checkpoints.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/40 backdrop-blur-sm border-white/10 hover:bg-background/60 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-[#f05563]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#f05563]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <CardTitle className="text-xl">Real-World Applications</CardTitle>
              <CardDescription className="text-base">
                Industry-relevant projects that solve actual problems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Work on projects that mirror real industry challenges - from healthcare AI to agricultural automation, preparing you for Kerala's tech ecosystem.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/40 backdrop-blur-sm border-white/10 hover:bg-background/60 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-[#6ecff6]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#6ecff6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <CardTitle className="text-xl">Community & Mentorship</CardTitle>
              <CardDescription className="text-base">
                Connect with peers and industry experts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Join Kerala's growing AI community. Get guidance from industry professionals and collaborate with fellow students on innovative projects.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students across Kerala who are building the future with AI and Machine Learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f05563] hover:bg-[#f05563]/90 text-white font-semibold px-8 py-3">
              <Link href="/browse">Get Started Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
              <Link href="https://www.ai4kerala.org/" target="_blank" rel="noopener noreferrer">
                Learn About AI4Kerala
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}