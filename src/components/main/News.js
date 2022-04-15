import React, { useEffect, useState } from "react";

function News() {
  const getLocalData = () => {
    let data = localStorage.getItem("posts");
    const dummyPosts = [
      { title: "Hello4", content: "Here comes description in detail." },
      { title: "Hello3", content: "Here comes description in detail." },
      { title: "Hello2", content: "Here comes description in detail." },
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
    <main>
      <h1>Recent News</h1>

      <ul>
        {posts.map((post, idx) => {
          let con = post.content.split("\n");
          if (idx < 3) {
            return (
              <li key={idx}>
                <h2>{post.title}</h2>
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
    </main>
  );
}

export default News;
