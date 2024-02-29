export function TwitterFollowCard({formatUserName, userName, name, isFollowing}){
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={`https://unavatar.io/${userName}`} alt="Imagen" className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}