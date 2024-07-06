import React, { useEffect, useState } from "react";
import Button from "../components/button/Button";
import { FaEdit } from "react-icons/fa";
// import { articles } from "../data/Articles";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [message, setMessage] = useState("");
  const handleFetch = async () => {
    try {
      const articleUrl = "http://localhost:5000/api/schools-mine/articles";
      const articles = await axios.get(articleUrl);
      if (!articles.ok) {
        setMessage("No articles at the moment found");
      }
      setArticles(articles.data.data);
      console.log(articles);
    } catch (error) {
      console.error(error.Message);
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <div className="px-10 md:px-20">
      <div className="w-full h-[80vh] flex items-center justify-center flex-col">
        <div className="bg-primaryBlueColor w-full rounded-xl text-center p-4 flex flex-col items-center">
          <h1 className="font-bold text-2xl md:text-6xl text-primaryWhiteColor capitalize text-center">
            Share your story to inspire students to learn!
          </h1>
          <p className="text-md md:text-xl text-primaryWhiteColor mt-2">
            Read and also share a brief article about your schooling experience
            which you feel can be of help to foster learning
          </p>
          <Link to="/articles-write">
            <Button
              title="Write An Article"
              border="border"
              icon={<FaEdit />}
            />
          </Link>
        </div>
      </div>
      <div>
        {articles.length > 0 ? (
          <h1 className="text-primaryBlackColor font-bold text-center md:text-start text-2xl md:text-4xl">
            Articles Written
          </h1>
        ) : (
          <p className="text-primaryBlackColor font-bold text-center md:text-start text-2xl md:text-4xl">
            No Articles Found
          </p>
        )}
        <div>
          {articles.map((article) => (
            <div
              className="border shadow-xl rounded-xl mt-4 p-4"
              key={article.article_id}
            >
              <h1 className="font-semibold text-secondaryBlackColor uppercase">
                <span className="text-primaryBlueColor">Title: </span>
                {article.article_title}
              </h1>
              <p className="my-2">{article.article_message}</p>
              <p className="text-right font-medium text-secondaryBlackColor">
                <span className="text-primaryBlueColor uppercase font-semibold">
                  Writer:{" "}
                </span>
                {article.article_author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
