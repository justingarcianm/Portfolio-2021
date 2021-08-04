function About() {

    const knowledgeArray = ['Ipsum', 'Ipsum', 'Ipsum', 'Ipsum', 'Ipsum', 'Ipsum', 'Ipsum', 'Ipsum', 'Ipsum', 'Ipsum', 'Ipsum', 'Ipsum', 'Ipsum', 'Ipsum']

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-4" >
                        <div id="stay-put" >
                            <img src="" alt="lorem" />
                        </div>

                    </div>
                    <div className="col-md-8">
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Vestibulum morbi blandit cursus risus at ultrices mi tempus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Vestibulum morbi blandit cursus risus at ultrices mi tempus.</p>

                        <hr />

                        <h3>Lorem</h3>
                        <ul>
                            {knowledgeArray.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
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