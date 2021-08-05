
import PortfolioItem from "./PortfolioItem"
import { useEffect, useState } from 'react'
import { getProjects, URI } from '../../Helpers'


function Portfolio () {
    const [state, setState] = useState({
        loading:false,
        projects:[]
    })

    useEffect(() => {
        setState(prevState => ({ ...prevState, loading:true }))

        getProjects()
        .then(projects => {
            if(state.loading) {
                setState(prevState => ({ ...prevState, projects:projects }))
            }
        })
        .catch( err => console.error(err) )

        return () => setState(prevState => ({ ...prevState, loading:false }))

    },[state.loading])

    return (
        <section id="portfolio" className="py-4 text-center">
           <div className="container-fluid" id="cover">
           <h2 className="text-center">
                Lorem Ipsum
            </h2>
            <div className="row">
               {state.projects.map(project => <PortfolioItem project={project} key={project.id} URI={URI}/> )}
           </div>
           </div>
        </section>
    )
}

export default Portfolio