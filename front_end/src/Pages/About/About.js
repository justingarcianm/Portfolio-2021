import { useEffect, useState } from 'react'
import { getSkills, getAbout, URI } from '../../Helpers'

function About() {
    const [skills, setSkills] = useState([])
    const [about,setAbout] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);

        getAbout()
        .then( items => {
            if(loading) {
                setAbout(items)
            }
        })

        getSkills()
        .then( items => {
            if(loading) {
                setSkills(items)
            }
        })
        setLoading(false);
    }, [loading])

    // const trimmedURI = loading ?  "" : URI.substring(0,URI.length-1)
    // const {url, name} = loading ? '' : about.profileImage.formats.medium

    return (
        <div id="about">
            
            <div className="container">
                <div className="row">
                    <div className="col-md-4" >
                        <div id="stay-put" >
                            {/* {loading ?  '' : <img src={trimmedURI + url} alt={name} />} */}
                            
                        </div>

                    </div>
                    <div className="col-md-8">
                        <h1>Lorem Ipsum</h1>
                        {about.description}

                        <hr />

                        <h3>Lorem</h3>
                        <ul>
                            {skills.map( item => {
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