import { useEffect } from 'react'

function PortfolioItem ({ project,URI }) {

    useEffect(() => {
        let portfolioCard = document.querySelector('.portfolio-card')
        let myModal = document.querySelector('.my-modal-overlay')
        let close = document.querySelector('.close')
        console.log(myModal)

        portfolioCard.addEventListener('mouseenter', event => event.target.querySelector('h3').classList.add('roll'))
        portfolioCard.addEventListener('mouseleave', event => event.target.querySelector('h3').classList.remove('roll'))
        portfolioCard.addEventListener('click', () => {
            myModal.classList.add('open')
            document.querySelector('body').classList.add('no-scroll')
        })
        myModal.addEventListener('click', event => {
            event.target.classList.remove('open')
            document.querySelector('body').classList.remove('no-scroll')
        })
        close.addEventListener('click', () => {
            myModal.classList.remove('open')
            document.querySelector('body').classList.remove('no-scroll')
        })

    },[])

    return (
        <div className="col-md-4">
           <div className="portfolio-card m-4 p-3" style={{backgroundImage:`url(${URI + project.Image.formats.small.url})`}} >
           <h3>{project.Title}</h3>
           </div>

           <div className="my-modal-overlay">
                <div className="my-modal-container">
                    <div className="row">
                        <div className="col-6">
                            <img src={URI + project.Image.url} alt={project.Title}/>
                        </div>
                        <div className="col-6 p-4">
                            <div className="close d-flex justify-content-end">X</div>
                        <div className="d-flex align-items-center">
                            <h3>{project.Title}</h3>
                                <a href={project.github} target="_blank" rel="noreferrer">Lorem</a>
                                <a href={project.link} target="_blank" rel="noreferrer">Ipsum</a>
                            </div>
                            <p>{project.description}</p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PortfolioItem