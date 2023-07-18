import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicShow from "./TopicShow";

const Topic = () => {
  const topics = useLoaderData();
  const data = topics.data;
  return (
    <div className=" grid  grid-cols-4  gap-4 my-9 mx-9">
      {data.map((t) => (
        <TopicShow t={t} key={t.id} />
      ))}
    </div>
  );
};

export default Topic;
