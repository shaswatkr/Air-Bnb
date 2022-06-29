import img from "../assets/dashboardImage.png";

const Hero = () => {
    return (
        <main className="hero">
            <img src={img} className="dashboard-image" alt="DashBoard" />

            <h1> Online Experience </h1>

            <p> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
        </main>
    );
};

export default Hero;