import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'ivanlosarcos',
        name: 'Iván Los Arcos',
        initialIsFollowing: true
    },
    {
        userName: 'martaa_castaa',
        name: 'Marta Castañeda',
        isFollowing: true
    },
    {
        name: 'Abril Los Arcos Castañeda',
        isFollowing: false
    }
]

export function App() {

    return (
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard 
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing}
                        >
                    
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}