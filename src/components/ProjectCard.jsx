function ProjectCard({ title, description, date }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
            <div className="mt-4 text-sm text-gray-500">Created on: {date}</div>
        </div>
    );
}

export default ProjectCard;
