import Portfolio from '../../Components/Portfolio/Portfolio'

function Home () {
    return (
        <>
        <section id="home">
<div className="container">
<div className="row">
<div className="col-6 my-auto" >
    <div id="stay-put">
    <h1>Hi, my <br/>name is <br/>Justin</h1>
            <h2>A web developer</h2>
    </div>
               
            </div>            
            <div className="col-6 my-auto">
                <h3>Need a problem solver? I am passionate in this field and I have the talent to back it up with experience in headless cms, front end development, and design. I am a natural one man team but I can also thrive in collaborative settings. Learn more about me or just get to the projects.</h3>
            </div>
</div>
</div>
        </section>
        <Portfolio/>
        </>
    )
}

export default Home