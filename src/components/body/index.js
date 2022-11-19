import foto from './images/foto-diego.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

const Body = () => {
  return(
    <div>
      <div class="main-content border px-3 py-3 my-3 rounded-5">
          <div class="card card-profile shadow my-3 rounded-5" >
              <img src={foto} className="card-img-top img-fluid rounded-5 shadow" alt="foto-diego"/>
                <div class="card-body">
                  <h5 class="card-text card-text-profile">Luis Diego Osorio Gonzalez<br/><span>Desarrollador Web</span></h5>
                </div>
          </div>
          <div class="contact my-3 py-3 align-items-center">
              <h4 class="border-bottom"><b>Contacto</b></h4>
              <div class="contact-box">
                  <div class="icon my-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                          <path d="M15 7a2 2 0 0 1 2 2" />
                          <path d="M15 3a6 6 0 0 1 6 6" />
                      </svg>
                  </div>
                  <div class="num-contact m-1 p-1">
                      <ul class="m-auto">
                          <li>+57 321 930 0662</li>
                          <li>+57 312 361 4355</li>
                      </ul>
                  </div>
              </div>
              <div class="mail-box">
                  <div class="icon my-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <polyline points="3 7 12 13 21 7" />
                      </svg>
                  </div>
                  <div class="mail my-auto">
                      <ul class="m-auto">
                          <li>ldosorio82524@umanizales.edu.co</li>
                          <li>diegoosoriogonzalez@gmail.com</li>
                      </ul>
                  </div>
              </div>
              <div class="address-box">
                  <div class="icon my-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <circle cx="12" cy="11" r="3" />
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                      </svg>
                  </div>
                  <div class="address my-auto">
                      <ul class="m-auto">
                          <li>Calle 21 # 15-51 Liborio, Manizales Caldas, Colombia. </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="social-networks my-3 py-3 align-items-center">
              <h4 class="border-bottom"><b>Redes Sociales</b></h4>
              <div class="icon-social-networks d-flex justify-content-around">
                  <a href="#" class="icon my-auto border rounded-circle p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                      </svg>
                  </a>
                  <a href="#" class="icon my-auto border rounded-circle p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                      </svg>
                  </a>
                  <a href="#" class="icon my-auto border rounded-circle p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
                      </svg>
                  </a>
                  <a href="#" class="icon my-auto border rounded-circle p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <line x1="8" y1="11" x2="8" y2="16" />
                          <line x1="8" y1="8" x2="8" y2="8.01" />
                          <line x1="12" y1="16" x2="12" y2="11" />
                          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                      </svg>
                  </a>
                  <a href="#" class="icon my-auto border rounded-circle p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                  </a>
              </div>
          </div>
          <div class="references my-3 py-3 align-items-center">
              <h4 class="border-bottom"><b>Referencias</b></h4>
              <div class="content-references my-3">
                  <b>Juliana Betancur Noreña</b>
                  <p>Secretaria</p>
                  <p>Colegio Divina Providencia (Manizales-Colombia)</p>
                  <span>+57 301 751 5545</span>
              </div>
              <div class="content-references">
                  <b>William Alberto Osorio</b>
                  <p>Granero</p>
                  <p>El Condor (Manizales-Colombia)</p>
                  <span>+57 312 361 4355</span>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Body;
