import React, { useEffect, useState } from "react";
import SanityClient from "../client";
export default function Project() {
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projctType,
      link,
      tag
    }`
    )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-green-200 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Pojects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome To my project page!
        </h2>
        <section className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white lg:p-16 sm:p-2">
                <h3 className="text-gray-800 lg:text-3xl sm:text-2xl font-bold mb-2 hover:text-red-700 p-5">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold px-5">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red lg:p-1 p-11 "
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      ????
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
