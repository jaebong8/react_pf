import React, { useEffect, useState } from "react";

function News() {
  const getLocalData = () => {
    let data = localStorage.getItem("posts");
    const dummyPosts = [
      {
        title: "Hello4",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus autem praesentium incidunt iusto ad delectus doloribus excepturi labore a.",
      },
      {
        title: "Hello3",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus autem praesentium incidunt iusto ad delectus doloribus excepturi labore a.",
      },
      {
        title: "Hello2",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus autem praesentium incidunt iusto ad delectus doloribus excepturi labore a.",
      },
      { title: "Hello1", content: "Here comes description in detail." },
    ];
    if (data) {
      return JSON.parse(data);
    } else {
      return dummyPosts;
    }
  };

  const [posts, setposts] = useState(getLocalData);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, []);

  return (
    <section className="news myScroll">
      <div className="inner">
        <h2>Recent News</h2>

        <ul>
          {posts.map((post, idx) => {
            let con = post.content.split("\n");
            if (idx < 4) {
              return (
                <li key={idx}>
                  <span>{idx < 10 ? `0${idx + 1}.` : idx + 1 + "."}</span>
                  <h3>{post.title}</h3>
                  <p>
                    {con.map((txt, idx) => {
                      return (
                        <React.Fragment key={idx}>
                          {txt}
                          <br />
                        </React.Fragment>
                      );
                    })}
                  </p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}

export default News;
