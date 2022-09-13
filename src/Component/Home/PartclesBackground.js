import Particles from "react-particles";

const ParticlesBackground = () => {
    return (
        <div>
            <Particles
                options={
                    {
                        "particles": {
                            "number": {
                                "value": 99,
                                "density": {
                                    "enable": true,
                                    "value_area": 394.57382081613633
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 0.21646062821684559,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 0.8932849335314796,
                                    "opacity_min": 0.06496617698410762,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 128.27296486924183,
                                "color": "#ffffff",
                                "opacity": 0.20844356791251797,
                                "width": 0.9620472365193136
                            },
                            "move": {
                                "enable": true,
                                "speed": 3.206824121731046,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "bounce",
                                "bounce": false,
                                "attract": {
                                    "enable": true,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "grab"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 194.89853095232286,
                                    "line_linked": {
                                        "opacity": 0.4688965301656772
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true
                    }
                }
            ></Particles>
        </div>
    )
}

export default ParticlesBackground;