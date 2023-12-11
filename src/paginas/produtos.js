import Button from 'react-bootstrap/Button';


import Card from 'react-bootstrap/Card';


function Produtos() {
    return(
        <div >
          <div data-bs-theme='dark' style={{ backgroundColor:'#1C1C1C', display: 'flex' }} >


            
          <Card style={{ width: '18rem', marginRight: '15px' }}>
              <Card.Img variant="top" src="https://static.netshoes.com.br/produtos/tenis-mizuno-cometa-masculino/02/2FU-5852-002/2FU-5852-002_zoom1.jpg?ts=1698352805&ims=544x" />
              <Card.Body>
                <Card.Title>R$ 161,49 <i>à vista! </i>🎁</Card.Title>
                <Card.Text>
                Tênis Mizuno Cometa
                ☑Categoria: Amortecimento
                ☑Material: Têxtil
                </Card.Text>
                <Button href='https://www.netshoes.com.br/tenis-mizuno-cometa-masculino-preto+vermelho-2FU-5852-002' variant="outline-info">Ver mais</Button>
              </Card.Body>
            </Card>

           

            <Card style={{ width: '18rem', marginRight: '15px' }}>
              <Card.Img variant="top" src="https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/46/NQQ-4379-346/NQQ-4379-346_zoom1.jpg?ts=1700494981&ims=544x" />
              <Card.Body>
                <Card.Title>R$ 199,99 <i>à vista! 🔖</i> </Card.Title>
                <Card.Text>
                  Tênis Adidas Breaknet
                  ☑Departamento BS: Esporte
                  ☑Material: Têxtil e Sintético  


                </Card.Text>
                <Button href='https://www.netshoes.com.br/tenis-adidas-breaknet-feminino-branco+lilas-NQQ-4379-346' variant="outline-info">Ver mais</Button>
              </Card.Body>
            </Card>
            <Card style={{  marginLeft:'15px',width: '18rem', marginRight: '15px' }}>
              <Card.Img variant="top" src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2/06/2FU-6367-006/2FU-6367-006_zoom1.jpg?ts=1700491780&ims=544x" />
              <Card.Body>
                <Card.Title>R$ 218,49 <i>no Pix! </i>💠 </Card.Title>
                <Card.Text>
                  Tênis Mizuno Wave Titan 2
                  ☑Material: Têxtil e Sintético    
                  ☑Categoria: Caminhada
                </Card.Text>
                <Button href='https://www.netshoes.com.br/tenis-mizuno-wave-titan-2-preto-2FU-6367-006' variant="outline-info">Ver mais</Button>
              </Card.Body>
            </Card>

            

            
            
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://static.netshoes.com.br/produtos/tenis-adidas-ultra-energy-feminino/42/FB8-8826-042/FB8-8826-042_zoom1.jpg?ts=1700501091&ims=544x" />
              <Card.Body>
                <Card.Title>R$ 179,99 <i>à vista!</i> 💥</Card.Title>
                <Card.Text>
                ☑Material: Têxtil e Sintético
                ☑Categoria: Caminhada

                </Card.Text>
                <Button href='https://www.netshoes.com.br/tenis-adidas-ultra-energy-feminino-laranja+neon+rosa-FB8-8826-042' variant="outline-info">Ver mais</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', marginLeft: '15px', marginRight: '15px' }}>
              <Card.Img variant="top" src="https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/14/NQQ-4379-014/NQQ-4379-014_zoom1.jpg?ts=1699633680&ims=544x" />
              <Card.Body>
                <Card.Title>R$ 185,99 <i>à vista! 🔖</i></Card.Title>
                <Card.Text>
                Tênis Adidas Breaknet
                ☑Indicado para: Dia a Dia
                ☑Material: Têxtil e Sintético

                </Card.Text>
                <Button href='https://www.netshoes.com.br/tenis-adidas-breaknet-feminino-branco-NQQ-4379-014' variant="outline-info">Ver mais</Button>
              </Card.Body>
            </Card>

            
        
            
              
      
          </div>
          
          <div style={{height:'135px',backgroundColor:'#1C1C1C'}}>
          <footer style={{ fontSize:'10pt', color:'white', paddingTop: '112px', paddingLeft:'1120px', textAlign: 'center' }}>
            <p>&copy; 2023 Netshoes | Bruno Henrique.</p>
          </footer>
          </div>
        </div>

    );

}

export default Produtos;