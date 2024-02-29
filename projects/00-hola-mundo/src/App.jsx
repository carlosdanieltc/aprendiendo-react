import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="carlosdanieltc" name="Carlos Tabares"></TwitterFollowCard> 
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="JoeBiden" name="Joe Biden"></TwitterFollowCard> 
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="DonaldJTrump" name="Donald Trump"></TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="BarackObama" name="Barack Obama"></TwitterFollowCard>
        </section>
    )
}