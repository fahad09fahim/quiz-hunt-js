import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Topic from "./components/Shared/topic/Topic";
import Layout from "./components/Layout/Layout";
import Statics from "./components/Shared/statics/Statics";
import Blog from "./components/Shared/blog/Blog";
import TopicQuiz from "./components/Shared/topic/TopicQuiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topic />,
        },
        {
          path: "/topic",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topic />,
        },
        {
          path: "/topic/:topicId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            );
          },
          element: <TopicQuiz></TopicQuiz>,
        },
        {
          path: "statics",
          element: <Statics />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
