import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

const Derecha = () => {
  return(
    <div>
        <div class="right-section">
            <div class="name text-end m-3">
                <h1 class="fw-bold">Diego Osorio</h1>
                <span class="fs-5">Desarrollador Web</span>
            </div>
            <div class="section-profile m-3">
                <h2 class="border-bottom border-3 fw-bold"><i class="bi bi-person"></i> Perfil</h2>
                <div class="descr-person">
                    <p>Soy una persona paciente, amable y con muchas ganas de aprender. En el momento me encuentro en la búsqueda de un empleo en atención al cliente en el cual pueda demostrar mis habilidades para entablar relaciones interpersonales. Soy muy responsable, aprendo rápido y tengo muy buena disposición.</p>
                </div>
            </div>
            <div class="section-experience m-3">
                <h2 class="border-bottom border-3 fw-bold"><i class="bi bi-briefcase"></i> Experiencia Laboral</h2>
                <div class="exp-lab">
                    <div class="d-flex justify-content-between">
                        <h6 class="fw-bold">Soporte area de sistemas</h6>
                        <span>2020</span>
                    </div>

                    <i>Colegio Divina Providencia / Manizales, Caldas</i>
                    <ul>
                        <li style={{'list-style': 'none'}}><i class="bi bi-check2"></i> Mantenimiento a los equipos de computo</li>
                        <li style={{'list-style': 'none'}}><i class="bi bi-check2"></i> Control de las salas de 
                            Sistemas
                            </li>
                        <li style={{'list-style': 'none'}}><i class="bi bi-check2"></i> Atender a solicitudes de soporte tecnico</li>
                        <li style={{'list-style': 'none'}}><i class="bi bi-check2"></i> Mantenimiento a cableado de red</li>
                        <li style={{'list-style': 'none'}}><i class="bi bi-check2"></i> Ingreso de informacion a base de datos simat y simpade</li>
                    </ul>
                </div>
                <div class="exp-lab">
                    <div class="d-flex justify-content-between">
                        <h6 class="fw-bold">Operario productivo</h6>
                        <span>2021</span>
                    </div>

                    <i>Empresa plasticos / Manizales, Caldas</i>
                    <ul>
                        <li style={{'list-style': 'none'}}><i class="bi bi-check2"></i> Realizar procedimientos en los controles de calidad y pruebas.</li>
                        <li style={{'list-style': 'none'}}><i class="bi bi-check2"></i> Proporcionar la materia prima a las máquinas de producción</li>
                        <li style={{'list-style': 'none'}}><i class="bi bi-check2"></i> Supervisar los procesos de producción</li>
                    </ul>
                </div>
                <div class="exp-lab">
                    <div class="d-flex justify-content-between">
                        <h6 class="fw-bold">Empleado</h6>
                        <span>2021-ACTUAL</span>
                    </div>

                    <i>Granero El Condor / Manizales, Caldas</i>
                    <ul>
                        <li style={{'list-style': 'none'}}><i class="bi bi-check2"></i> Atencio al cliente</li>
                        <li style={{'list-style': 'none'}}><i class="bi bi-check2"></i> Realizar inventario Bodega</li>
                        <li style={{'list-style': 'none'}}><i class="bi bi-check2"></i> Organizacion de mercancia</li>
                    </ul>
                </div>
            </div>                    
            <div class="section-education m-3">
                <h2 class="border-bottom border-3 fw-bold"><i class="bi bi-mortarboard"></i> Educacion</h2>
                <div class="education">
                    <ul class="row no-margin px-0 py-3">
                        <li class="col-md-6 box-education"><span>2016-2017</span>
                            Tecnico en sistemas - Andap Sena
                        </li>
                        <li class="col-md-6 box-education"><span>2020-ACTUAL</span>
                            Ingenieria en Sistemas y Telecomunicaciones
                        </li>
                        <li class="col-md-6 box-education"><span>2018-2020</span>
                            Mantenimiento en equipos de computo, diseño e instalacion de Cableado estructurado - Sena
                        </li>
                    </ul>
                </div>
            </div>
            <div class="section-skills m-3">
                <h2 class="border-bottom border-3 fw-bold"><i class="bi bi-person-workspace"></i> Habilidades</h2>
                <div class="row no-margin my-3">
                    <div class="col-md-6">
                        <div class=" prog-row row">
                            <div class="col-sm-6">
                                JAVASCRIPT
                            </div>
                            <div class="col-sm-6">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row prog-row">
                            <div class="col-sm-6">
                                HTML
                            </div>
                            <div class="col-sm-6">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row prog-row">
                            <div class="col-sm-6">
                                CSS
                            </div>
                            <div class="col-sm-6">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row prog-row">
                            <div class="col-sm-6">
                                JAVA
                            </div>
                            <div class="col-sm-6">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  );
};

export default Derecha;
