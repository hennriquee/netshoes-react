import Carousel from 'react-bootstrap/Carousel';


function Home() {
        return(
            <> 
                <div>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item  >
                            
                            <img
                            className="d-block w-100"
                            src='https://img.ltwebstatic.com/images3_ccc/2023/07/20/16898176875abde623da198e951dbd30b4be227ca6_thumbnail_2000x.webp'
                            alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                            className="d-block w-100"
                            src='https://img.ltwebstatic.com/images3_ccc/2023/07/12/16891437217deee4a70fd79133c5e50cf92306efc0_thumbnail_2000x.webp'
                            alt="Second slide"
                            />
                            
                        </Carousel.Item>
                    </Carousel>
                </div>
                <footer style={{fontSize:'10pt',padding: '5px', textAlign: 'center', marginTop: '0px' }}>
                    <p>&copy; 2023 Netshoes | Bruno Henrique.</p>
                </footer>
            </>
        );

    }
    
    export default Home;

