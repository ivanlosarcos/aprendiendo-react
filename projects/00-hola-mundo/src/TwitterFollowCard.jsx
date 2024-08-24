import { useState } from "react"

export function TwitterFollowCard ({userName = 'unknown', name, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const [isHovering, setIsHoveering] = useState(false)

    const text = isFollowing ? (isHovering ? 'Dejar de Seguir' : 'Siguiendo') : 'Seguir'

    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    } 

    const handleHovering = () => {
        setIsHoveering(!isHovering)
    }

    const addAt = (userName) =>  `@${userName}`
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    alt="Foto de Perfil" 
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-username'> {addAt(userName)} </span>
                </div>
            </header>


            <aside>
                <button className={buttonClassName} onClick={handleClick} onMouseEnter={handleHovering} onMouseLeave={handleHovering}>  
                    {text}
                </button>
            </aside>
        </article>
    )
}