import stevePic from "../assets/steve.png"

export const Heading = () => {
    return (
    <div className='app-heading'>
        <h1 className='app-heading-text'>Chuckle Checklist</h1> 
        <div className='app-heading-circle'>
            <img className='app-logo' src={stevePic} alt='Good job Steve' />
        </div>
    </div>
    )
}

