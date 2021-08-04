import Portfolio from '../../Components/Portfolio/Portfolio'

function Home () {
    return (
        <>
        <section id="home">
<div className="container">
<div className="row">
<div className="col-6 my-auto" >
    <div id="stay-put">
    <h1>Lorem ipsum dolor sit amet</h1>
            <h2>purus in massa</h2>
    </div>
               
            </div>            
            <div className="col-6 my-auto">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Vestibulum morbi blandit cursus risus at ultrices mi tempus. </h3>
            </div>
</div>
</div>
        </section>
        <Portfolio/>
        </>
    )
}

export default Home