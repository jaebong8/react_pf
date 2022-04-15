import React, { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Community() {
  const path = process.env.PUBLIC_URL;
  const input = useRef();
  const textarea = useRef();

  const getLocalData = () => {
    let data = localStorage.getItem("posts");
    return JSON.parse(data);
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
      <div className="inner">
        <div className="inputBox">
          <input
            type="text"
            placeholder="Please write title here"
            ref={input}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Please write content here"
            ref={textarea}
          ></textarea>

          <div className="btns">
            <button onClick={resetPost}>cancel</button>
            <button onClick={createPost}>create</button>
          </div>
        </div>
        <div className="showBox">
          {posts.map((post, idx) => {
            let con = post.content.split("\n");
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
                      rows={5}
                    ></textarea>
                    <div className="editBtns">
                      <button
                        onClick={() => {
                          updatePost(idx);
                        }}
                      >
                        save
                      </button>
                      <button
                        onClick={() => {
                          cancelEdit(idx);
                        }}
                      >
                        cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
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

                    <div className="btns">
                      <button
                        onClick={() => {
                          editPost(idx);
                        }}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                      <button
                        onClick={() => {
                          deletePost(idx);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>
        <div className="pic1">
          <img src={`${path}/img/community3.jpg`} />
        </div>
        <div className="pic2">
          <img src={`${path}/img/community2.jpg`} />
        </div>
      </div>
    </Layout>
  );
}

export default Community;
