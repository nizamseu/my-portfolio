import React from "react";
const technology = [
  {
    logo: "https://iconape.com/wp-content/files/rj/371212/svg/371212.svg",
    name: "JavaScript",
  },
  {
    logo: "https://i.ibb.co/pvQ74RV/react-logo.png",
    name: "React JS",
  },
  {
    logo: "https://iconape.com/wp-content/png_logo_vector/nextjs.png",
    name: "Next JS",
  },
  {
    logo: "https://iconape.com/wp-content/png_logo_vector/node-js.png",
    name: "Node JS",
  },
  {
    logo: "https://img.icons8.com/officel/344/express-js.png",
    name: "Express JS",
  },
  {
    logo: "https://iconape.com/wp-content/png_logo_vector/react-router.png",
    name: "React-Router",
  },
  {
    logo: "https://iconape.com/wp-content/png_logo_vector/redux.png",
    name: "Redux",
  },
  {
    logo: "https://iconape.com/wp-content/files/xr/371514/svg/371514.svg",
    name: "Stripe",
  },
  {
    logo: "https://iconape.com/wp-content/files/pq/371539/svg/371539.svg",
    name: "Tailwind CSS",
  },
  {
    logo: "https://iconape.com/wp-content/files/ej/371250/svg/371250.svg",
    name: "Material UI",
  },
  {
    logo: "https://iconape.com/wp-content/files/vp/370638/svg/bootstrap-logo-icon-png-svg.png",
    name: "Bootstrap",
  },
  {
    logo: "https://iconape.com/wp-content/files/hl/371476/svg/371476.svg",
    name: "Socket.io",
  },
  {
    logo: "https://iconape.com/wp-content/png_logo_vector/progressive-web-apps-logo.png",
    name: "PWA",
  },
  {
    logo: "https://iconape.com/wp-content/files/yl/370873/svg/370873.svg",
    name: "Firebase",
  },
  {
    logo: "https://iconape.com/wp-content/png_logo_vector/cib-mongodb.png",
    name: "MongoDB",
  },
  {
    logo: "https://iconape.com/wp-content/files/xn/371066/svg/371066.svg",
    name: "Heroku",
  },
];
const Skills = () => {
  return (
    <div>
      {/*...................... Uses  Technology .................*/}
      <div className="container my-5">
        <h2 className="text-center primary-color my-5">MY SKILLS</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {technology.map((logo) => (
            <div key={logo.name} className="p-3 m-lg-5 m-3 logoo">
              <img
                width="80px"
                className="tec-icon"
                height="80px"
                src={logo.logo}
                alt=""
              />
              <h6 className="text-center text-gray mt-2">{logo.name}</h6>
            </div>
          ))}
        </div>
        <hr className="my-5" />
      </div>
    </div>
  );
};

export default Skills;
