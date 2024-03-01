import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { useState } from 'react'

export function App(){
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="carlosdanieltc">
                Carlos Tabares
            </TwitterFollowCard> 

            <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="JoeBiden">
                Joe Biden
            </TwitterFollowCard> 

            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="DonaldJTrump">
                Donald Trump
            </TwitterFollowCard>

            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="BarackObama">
                Barack Obama
            </TwitterFollowCard>
        </section>
    )
}