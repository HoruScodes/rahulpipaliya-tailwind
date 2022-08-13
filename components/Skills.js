export const Skills = () => {
  return (
    <div className="mt-12">
      <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
        My Skills
      </h1>
      <div className="flex flex-col text-gray-700">
        <p className="my-2">
          Through my studies & side-projects , I have gained a solid
          understanding of computer science and web development concepts, and
          have dedicated a lot of my free time to apply these concepts to
          real-world scenarios and applications.
        </p>
        <ul className="list-inside justify-items-start list-none md:list-disc grid md:grid-cols-4 sm:grid-cols-2 gap-4 my-4">
          <li>ReactJs</li>
          <li>JavaScript(ES6+)</li>
          <li>HTML5/(S)CSS</li>
          <li>Python</li>
          <li>NodeJs</li>
          <li>NextJs</li>
          <li>AngularJs</li>
          <li>PHP & SQL</li>
        </ul>
      </div>
    </div>
  );
};
