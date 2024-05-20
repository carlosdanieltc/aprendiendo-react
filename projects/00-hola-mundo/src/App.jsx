import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'carlosdanieltc',
        name: 'Carlos Tabares',
        isFollowing: true
    },
    {
        userName: 'JoeBiden',
        name: 'Joe Biden',
        isFollowing: false
    },
    {
        userName: 'DonaldJTrump',
        name: 'Donald Trump',
        isFollowing: true
    },
    {
        userName: 'BarackObama',
        name: 'Barack Obama',
        isFollowing: false
    }
]

export function App(){
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            {
                users.map( ({userName, name, isFollowing}) => {
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName} 
                            initialIsFollowing={isFollowing}
                            formatUserName = {formatUserName}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}