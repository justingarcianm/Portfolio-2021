import { useEffect, useState } from 'react'
import { getSkills, getAbout, URI } from '../../Helpers'

function About() {

    const [state, setState] = useState({
        about:{},
        skills:[],
        loading:false
    })

    useEffect(() => {
        setState(prevState =>({ ...prevState, loading: true }))
        
        getSkills()
        .then(items => {
            if(state.loading) {
                setState(prevState => ({ ...prevState, skills:items }))
            }
        })
        .catch( err => console.error(err) )

        getAbout()
        .then(item => {
            if(state.loading) {
                setState(prevState => ({ ...prevState, about:item }))
            }
        })
        .catch( err => console.error(err) )

        return () => setState(prevState =>({ ...prevState, loading: false }))

    }, [state.loading])
    return (
        <div id="about">
            
            <div className="container">
                <div className="row">
                    <div className="col-md-4" >
                        <div id="stay-put" >
                             { state.about.profileImage ? <img src={URI + state.about.profileImage.formats.medium.url} alt={state.about.profileImage.formats.medium.name} /> : ""}
                            
                        </div>

                    </div>
                    <div className="col-md-8">
                        <h1>Lorem Ipsum</h1>
                        <p>{state.about.description}</p>

                        <hr />

                        <h3>Lorem</h3>
                        <ul>
                            {state.skills.map( item => {
                                return (
                                    <li key={item.id}>{item.entry}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About