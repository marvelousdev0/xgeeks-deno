import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Path } from "../types.ts";

let paths: Path[] = [
  { path: "Devops", tech: ["Azure", "Ansible", "Docker", "Kubernetes"] },
  { path: "Data Science", tech: [] },
  {
    path: "Python",
    tech: ["Basics", "Python for Data Science", "Python Web (Django)"],
  },
  { path: "Artificial Intelligence", tech: [] },
  { path: "Machine Learning", tech: ["Python", "Tensorflow"] },
  { path: "Cyber Security", tech: [] },
  { path: "Chatbot", tech: ["Rasa"] },
  {
    path: "Blockchain",
    tech: [
      "Basics",
      "Advanced",
      "Advanced with Ethereum",
      "Advanced with Hyperledger",
    ],
  },
  { path: "Java", tech: ["Core", "J2EE", "Spring"] },
  { path: ".NET", tech: ["C#"] },
];

// @desc    Get all paths
// @route   GET /api/v1/paths
const getPaths = ({ response }: { response: any }) => {
  let careerPaths: Array<string> = [];
  paths.forEach((p) => {
    careerPaths.push(p.path);
  });
  response.body = {
    success: true,
    data: careerPaths,
  };
};

// @desc    Get single product
// @route   GET /api/v1/paths/:path
const getPath = ({
  params,
  response,
}: {
  params: { path: string };
  response: any;
}) => {
  const path: Path | undefined = paths.find((p) => p.path === params.path);

  if (path) {
    response.status = 200;
    response.body = {
      success: true,
      data: path,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No career path found",
    };
  }
};

export { getPaths, getPath };
