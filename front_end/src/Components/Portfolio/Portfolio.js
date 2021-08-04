
import PortfolioItem from "./PortfolioItem"

function Portfolio () {
    const portfolioArray = ['Project One','Project Two', 'Project Three','Project Four'];
    return (
        <section id="portfolio" className="py-4 text-center">
           <div className="container-fluid" id="cover">
           <h2 className="text-center">
                Lorem Ipsum
            </h2>
            <div className="row">
               {portfolioArray.map(item => <PortfolioItem pItem={item} key={item}/>)}
           </div>
           </div>
        </section>
    )
}

export default Portfolio