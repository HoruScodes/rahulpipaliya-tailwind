import React from "react";
// import { useRouter } from "next/router";
import { projectsData } from "../../../data";
import { Layout } from "../../../components/Layout";
import { ProjectComponent } from "../../../components/ProjectComponent";

const Project = ({ project }) => {
  return (
    <Layout>
      <ProjectComponent project={project} />
    </Layout>
  );
};

export default Project;

export async function getStaticProps(context) {
  const pid = context.params.id;
  return {
    props: { project: projectsData.filter((project) => pid == project.id)[0] },
  };
}

export const getStaticPaths = () => {
  const ids = projectsData.map((project) => project.id);
  const paths = ids.map((projId) => ({ params: { id: projId.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
