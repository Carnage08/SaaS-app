import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div className='p-8 space-y-8'>
      <h1 className='text-2xl'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
        id='1'
        name='Companion 1'
        description='This is a description for Companion 1'
        subject='Math'
        duration={30}
        color='#dadada'
        />
         <CompanionCard 
        id='2'
        name='Companion 2'
        description='This is a description for Companion 2'
        subject='science'
        duration={30}
        color='#dsdmda'
        /> <CompanionCard 
        id='3'
        name='Companion 3'
        description='This is a description for Companion 3'
        subject='history'
        duration={30}
        color='#dkdfda'
        />
      </section>

      <section className='home-section'>
        <CompanionList
        title='Recently Completed Sessions'
        companions={recentSessions}
         classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>

      </section>
    </div>
  )
}

export default Page