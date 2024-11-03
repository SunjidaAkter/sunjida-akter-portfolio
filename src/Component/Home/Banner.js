import React, { useCallback } from "react";
import TypeAnimation from "react-type-animation";
import facebookIcon from "../../Assets/icons/facebookIcon.png";
import twitterIcon from "../../Assets/icons/twitterIcon.png";
import instagramIcon from "../../Assets/icons/instagramIcon.png";
import githubIcon from "../../Assets/icons/icons8-github-100.png";
import linkedinIcon from "../../Assets/icons/icons8-linkedin-48.png";
// import ParticlesBackground from './PartclesBackground';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Fade from "react-reveal/Fade";

const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //     await console.log(container);
  // }, []);
  return (
    <div
      id="home"
      class="hero h-[500px]"
      style={{
        "background-image":
          "url(https://i.ibb.co/HByrc1h/Margarita-Perez-4-Copy.png)",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
        }}
      />
      <div class="hero-overlay bg-opacity-40 dark:bg-opacity-70"></div>
      <div class=" text-center text-[#e1e1e1ce]">
        <div class="max-w-md">
          <p class="mb-5 lg:text-5xl text-2xl font-bold">
            <Fade left cascade>
              {" "}
              <TypeAnimation
                cursor={true}
                sequence={[
                  "Designer.",
                  1000,
                  "Programmer.",
                  1000,
                  "Developer.",
                  1000,
                  "Blogger.",
                  1000,
                ]}
                wrapper="b"
                repeat={Infinity}
              />
            </Fade>
          </p>
          <Fade left cascade>
            <p className="my-5 text-xl font-semibold">
              Connect with me on <br />
              <div className="flex justify-center items-center w-full">
                <a
                  href="https://www.linkedin.com/in/sanjida-akter-6804bb215/"
                  target="blank"
                >
                  <img
                    className="me-2"
                    style={{ width: "30px" }}
                    src={linkedinIcon}
                    alt=""
                  />
                </a>

                <a href="https://github.com/SunjidaAkter" target="blank">
                  <img
                    className="me-2"
                    style={{ width: "39px" }}
                    src={githubIcon}
                    alt=""
                  />
                </a>

                <a href="https://www.instagram.com/" target="blank">
                  <img
                    className="me-2"
                    style={{ width: "35px" }}
                    src={instagramIcon}
                    alt=""
                  />
                </a>

                <a href="https://facebook.com/" target="blank">
                  <img
                    className="me-2"
                    style={{ width: "32px" }}
                    src={facebookIcon}
                    alt=""
                  />
                </a>

                <a href="https://twitter.com/" target="blank">
                  <img
                    className="me-2"
                    style={{ width: "32px" }}
                    src={twitterIcon}
                    alt=""
                  />
                </a>
              </div>
            </p>
          </Fade>
          {/* https://drive.google.com/uc?export=download&id=1Wr27kaqMzTyntleo2XSVpGZVhrFgZcCh */}
          <Fade left cascade>
            <a
              href="https://drive.google.com/uc?export=download&id=1qivmigV54reB9zKbu7Yqa8nuVylBNEyR"
              className="btn btn-outline btn-primary"
            >
              Resume
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Banner;
