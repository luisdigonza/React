import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import imagenUno from './images/image.png';

function FooterAux(){
    return(
        <div>
            <h1>Hola soy el footer</h1>
            <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAwFBMVEXoaGfn5+f/V3CsrKzNzc3a2trpYWDN0NDVtrboZmbn4eLod3f/U23n6+vntrXl8vD5fY7v7+9/f3/5an3/S2f/Ql14eHj/QmGCgoLj+/js0NP8ZnzxrLS4uLjx8fG+vr70oqzvusGQkJCcnJylpaX4i5n9YHfxrrbtw8jnpabdoaG+mJjoyMi7oKG2pKPobW3fe3vXhISnr6/Si4rMkZHvY2r/MFH4gpP2j5zq2Nrk+PX0m6f1Xm7/JEqioqLYr69wWm7OAAAD80lEQVR4nO3da3eaSACA4QBe1gYXuarRRpMmaraXtHbbbGg3+///1c4MiiBDQPlge3yfD0RMPnDewzAOHs3FBQAAAAAAAAAAAAAAAAAAAAAAOLVep65TH+mvqPf48Gc9f3V6pz7YX07v0ujX1H1Pv32dD32jptb6Y49+eZ03desZLWv96YJ+OQfls6xPj/TLOjCfZdEv6+B81iX9dg7PZ33mBWDqiHxr+qWOyGetv9Bv45h81vor/RJH5bPWf9NPOS4f/TaOzGet37OAuzgs312u30fyHZTPyOVjASwdkq99l6EWwKc++pM7JJ8IuNMS/jj7+eOwfNmSrVaXfJ2+U4l8Ot9+Cuaggu/fv9HdkD73fN9Mxa4Sht91A/zc85k1BWF4rxm/5JPn3na7OdW2z6gf9jafT74CFelpIraLJ3vxz71iL+4D+bx4yvQHNvlKqVNrfBOYwXw8mY5jx4njcXAznop+gTGeDJ+dgHylVL44yefb/mTpDPzJ8KbviGJzx/GHV33ylVP5nG0+O5g6E9sMRL6bIOj3yVdhk29oq3xmmm8VB0tnRb4KSb6r+Xy+ijP5nIlo9+FHTL7XJflUilw+OX4Xc/JVSKaO5fdh+CM7eB3TjlfhlHwV8lNHNt9A7JCvQmk+097mG8p1CPm0yvIt5BmX5BsMBk8L8mllVx2+KLYciwWcWHWoATsd+8PneCwsQ/LpqDXvJNna6dZMtmrHlxi8eq/fplJBba59pV7PtyPyDchX8LNmvjD890pzt/7c89XrZw9Dc6V7s+js8ymd6s9zONqPLpBP4n3eRsjXCPkaKcnn5h+6buEvyCfp87nWLM30Inbfvi30I5+kzefeetGmlzuKLLcdRdY1+TR0+WS97enWjaK24b54hX7kkzT5svVEuJHo5r4r9COfVMyn6qWpPE9dBa8L/cgnFfLl6rkzL0oeFfqRT9rPlz/3xN6Lm+nnki9vL1++niGm3G76q3w/8kn5fCKRN9slcu+8UWbvZTelkC+xl2808tqZEep5mdfL4kKYDmXyJfavfd4o2vWbRVEm7Szybhm8eYWZN9NPXAjfuSX1yKcUX/ft+omJo1VWj3yKZtWx7edau4mjUI98im7Nu+nnRunEUaxHPkV7x0X2M4yWvFtQVo98iv5+n+d57vVtmqxdrEc+peRu8+jOFadce7t7W6hHPqUk37W89u0Wb9ysL8FbRY2QrxHyNUK+RsjXCPkaIV8j5GuEfI2QrxHyNUK+RsjXSOe59nfWF/P9d/b5eg9H5hP1up/5Ar/OQ+3/OJFhdLvd1hfqiX6Pl8fhyyOV3pFOfdwAAAAAAAAAAAAAAAAAAAAAgN/e/1KWfdQlJ/n/AAAAAElFTkSuQmCC"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://miro.medium.com/max/600/1*OFsc0SD55jhi8cjo7aCA4w.jpeg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imagenUno}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default FooterAux;
