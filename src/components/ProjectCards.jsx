import "./ProjectCard.scss";

const ProjectCards = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="projects__items">
        {arr.map((item) => (
          <div key={item} className="projects__item">
            <img src={`../assets/img/project-${item}.jpg`} alt="My Project" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCards;
