import React, { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout";

function Community() {
  const input = useRef();
  const textarea = useRef();

  const dummyPosts = [
    { title: "Hello2", content: "Here comes description in detail." },
    { title: "Hello1", content: "Here comes description in detail." },
  ];
  const getLocalData = () => {
    let data = localStorage.getItem("posts");
    if (data) {
      return JSON.parse(data);
    } else {
      return dummyPosts;
    }
  };
  const [posts, setPosts] = useState(getLocalData);
  const editInput = useRef(null);
  const editTextarea = useRef(null);

  const createPost = () => {
    const inputVal = input.current.value.trim();
    const textareaVal = textarea.current.value.trim();
    if (!inputVal || !textareaVal) {
      alert("제목과 본문을 입력해주세요");
      return;
    }
    setPosts([{ title: inputVal, content: textareaVal }, ...posts]);
    resetPost();
  };

  const resetPost = () => {
    input.current.value = "";
    textarea.current.value = "";
  };

  const deletePost = (index) => {
    console.log(index);
    setPosts(posts.filter((_, idx) => idx !== index));
  };

  const editPost = (index) => {
    setPosts(
      posts.map((post, idx) => {
        if (idx === index) post.enableUpdate = true;
        return post;
      })
    );
  };

  const updatePost = (index) => {
    const inputVal = editInput.current.value.trim();
    const textareaVal = editTextarea.current.value.trim();
    if (!inputVal || !textareaVal) {
      alert("제목과 본문을 입력해주세요");
      return;
    }
    setPosts(
      posts.map((post, idx) => {
        if (idx === index) {
          post.title = editInput.current.value;
          post.content = editTextarea.current.value;
          post.enableUpdate = false;
        }
        return post;
      })
    );
  };

  const cancelEdit = (index) => {
    setPosts(
      posts.map((post, idx) => {
        if (idx === index) post.enableUpdate = false;
        return post;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <Layout name={"Community"}>
      <div className="inputBox">
        <input type="text" placeholder="제목을 입력하세요" ref={input} />
        <textarea
          cols="30"
          rows="10"
          placeholder="본문을 입력하세요"
          ref={textarea}
        ></textarea>
        <button onClick={resetPost}>cancel</button>
        <button onClick={createPost}>create</button>
      </div>
      <div className="showBox">
        {posts.map((post, idx) => {
          return (
            <article key={idx}>
              {post.enableUpdate ? (
                <>
                  <input
                    type="text"
                    defaultValue={post.title}
                    ref={editInput}
                  ></input>
                  <textarea
                    defaultValue={post.content}
                    ref={editTextarea}
                  ></textarea>
                  <div className="btns">
                    <button
                      onClick={() => {
                        cancelEdit(idx);
                      }}
                    >
                      cancel
                    </button>
                    <button
                      onClick={() => {
                        updatePost(idx);
                      }}
                    >
                      save
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <div className="btns">
                    <button
                      onClick={() => {
                        editPost(idx);
                      }}
                    >
                      edit
                    </button>
                    <button
                      onClick={() => {
                        deletePost(idx);
                      }}
                    >
                      delete
                    </button>
                  </div>
                </>
              )}
            </article>
          );
        })}
      </div>
    </Layout>
  );
}

export default Community;
