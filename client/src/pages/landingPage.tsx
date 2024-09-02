import DefaultLayout from '@/layouts/default'
import { title } from "@/components/primitives";
import React from 'react'
import Hero from '@/components/landingpage/hero';

const LandingPage = () => {
  return (
    <DefaultLayout>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <Hero />
      </div>
    </section>
  </DefaultLayout>
  )
}

export default LandingPage