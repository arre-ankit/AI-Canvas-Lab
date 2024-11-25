'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { GrGithub } from "react-icons/gr"
import { GoWorkflow } from "react-icons/go";
import { useRouter } from 'next/navigation';
import { BsArrowRight } from 'react-icons/bs';
import { Testimonials } from "@/components/landing-page/Testimonials";
export default function Hero() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <GoWorkflow className="w-8 h-8" />  
                <span className="text-xl font-semibold">AI Canvas Lab</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <GrGithub className="w-8 h-8 hover:cursor-pointer" onClick={() => window.open('https://github.com/arre-ankit/ai-canvas-lab', '_blank')} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 mb-8">
            <span className="text-sm font-medium">✨ No Sign Up Required</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            AI Workflows,
            <br />
            created effortlessly
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
             Bring your ideas to life with AI Workflows on the infinite canvas
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button className="bg-[#C1FF5C] text-black hover:bg-[#B1EF4C] font-medium w-full sm:w-auto" onClick={() => router.push('/canvas')}>
              Get Started
            </Button>
          </div>
        </div>

        {/* App Preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Panel */}
          <div className="flex items-center justify-center">
              <Image src="/b.png" alt="App Preview" width={800} height={800} className="max-w-full h-auto" />
          </div>

          <div className="hidden md:flex justify-center items-center">
            <BsArrowRight className="w-full h-12 text-gray-500" />
          </div>

          <div className="flex items-center justify-center">
            <Image src="/righthero.png" alt="App Preview" width={1000} height={1000} className="max-w-full h-auto" /> 
          </div>
        </div>
        <Testimonials />
      </main>
    </div>
  )
}

