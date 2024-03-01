import { useState } from "react"

export function TwitterFollowCard({children, formatUserName, userName = 'unknown'}){
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={`https://unavatar.io/${userName}`} alt="Imagen" className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}