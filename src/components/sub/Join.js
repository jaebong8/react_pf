import React, { useEffect, useState } from "react";
import Layout from "../common/Layout";

function Join() {
  const path = process.env.PUBLIC_URL;
  const initVal = {
    userid: "",
    pwd1: "",
    pwd2: "",
    email: "",
    comments: "",
    gender: null,
    interests: null,
    edu: "",
  };
  const [Val, setVal] = useState(initVal);
  const [Err, setErr] = useState({});
  const [Success, setSuccess] = useState(false);
  const [IsSubmit, setIsSubmit] = useState(false);
  const check = (Val) => {
    const errs = {};
    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const spc = /[~!@#$%^&*()_+]/;

    if (Val.userid.length < 5) {
      errs.userid = "아이디를 5글자 이상 입력하세요";
    }
    if (
      Val.pwd1 < 5 ||
      !eng.test(Val.pwd1) ||
      !num.test(Val.pwd1) ||
      !spc.test(Val.pwd1)
    ) {
      errs.pwd1 = "비밀번호는 5글자 이상 특수문자 영어를 포함해주세요";
    }
    if (Val.pwd1 !== Val.pwd2 || !Val.pwd2) {
      errs.pwd2 = "비밀번호가 일치하지 않습니다.";
    }
    if (Val.email < 5 || !/@/.test(Val.email)) {
      errs.email = "@를 포함해 5글자 이상 입력해주세요";
    }
    if (Val.comments.length < 10) {
      errs.comments = "10글자 이상 남겨주세요";
    }
    if (!Val.gender) {
      errs.gender = "성별을 선택해주세요";
    }
    if (!Val.interests) {
      errs.interests = "관심사를 하나 이상 선택해주세요";
    }
    if (Val.edu === "") {
      errs.edu = "최종 학력을 선택해주세요";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...Val, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(check(Val));
  };

  const handleReset = () => {
    setVal(initVal);
    setErr({});
  };

  const handleRadio = (e) => {
    const { name } = e.target;
    const isCheck = e.target.checked;
    setVal({ ...Val, [name]: isCheck });
  };

  const handleCheck = (e) => {
    let isCheck = false;
    const { name } = e.target;
    const inputs = e.target.parentElement.querySelectorAll("input");
    inputs.forEach((el) => {
      if (el.checked) isCheck = true;
    });
    setVal({ ...Val, [name]: isCheck });
  };
  const handleSelect = (e) => {
    const { name } = e.target;
    const isSelected = e.target.options[e.target.selectedIndex].value;
    setVal({ ...Val, [name]: isSelected });
  };
  useEffect(() => {
    const len = Object.keys(Err).length;

    if (len === 0 && IsSubmit) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [Err]);

  useEffect(() => {
    handleReset();
  }, [Success]);

  return (
    <Layout name={"Join"}>
      <div className="terms">
        <div className="inner">
          <h2>
            TERMS OF RELATED JOIN <br />
            TO BEIGE
          </h2>
          <ul>
            <li>
              <span>01.</span>
              <h2>TERMS</h2>
              <p>
                Specialized in adornments, it will bring charm to any
                environment. There are thousands of high quality pieces, with
                styles that transition from classic to contemporary.
              </p>
            </li>
            <li>
              <span>02.</span>
              <h2>POLICY</h2>
              <p>
                The pieces stand out for their contemporary straight lines and
                imposing presence. Current, following the world trend of the
                great masters, the furniture stands out for its noble and
                innovative materials.
              </p>
            </li>
            <li>
              <span>03.</span>
              <h2>AGREEMENT</h2>
              <p>
                With a mix of possibilities and high customization, the
                furniture meets any expectations, composing cozy and charming
                rooms, exclusive furniture for the most intimate areas of the
                house.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="sign">
        <div className="pic">
          <img src={`${path}/img/SCENE03_1.webp`} />
          <div className="text">
            <h2>
              BE PART OF OUR CLUB <br /> FOR DISCOUNT
            </h2>
            <button>YOUR EMAIL</button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="h">회원가입 폼 양식</legend>
            <table>
              <caption className="h">회원가입 정보입력</caption>
              <tbody>
                <tr>
                  <th scope="row">
                    <label htmlFor="userid">USER ID</label>
                  </th>
                  <td>
                    <input
                      type="text"
                      id="userid"
                      name="userid"
                      placeholder="아이디를 입력하세요"
                      value={Val.userid}
                      onChange={handleChange}
                    />
                    <span className="errTxt">{Err.userid}</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <label htmlFor="pwd1">PASSWORD</label>
                  </th>
                  <td>
                    <input
                      type="password"
                      name="pwd1"
                      id="pwd1"
                      placeholder="비밀번호를 입력하세요"
                      value={Val.pwd1}
                      onChange={handleChange}
                    />
                    <span className="errTxt">{Err.pwd1}</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <label htmlFor="pwd2">RE PASSWORD</label>
                  </th>
                  <td>
                    <input
                      type="password"
                      name="pwd2"
                      id="pwd2"
                      placeholder="비밀번호를 재입력하세요"
                      value={Val.pwd2}
                      onChange={handleChange}
                    />
                    <span className="errTxt">{Err.pwd2}</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <label htmlFor="email">EMAIL</label>
                  </th>
                  <td>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="이메일을 입력하세요"
                      value={Val.email}
                      onChange={handleChange}
                    />
                    <span className="errTxt">{Err.email}</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">GENDER</th>
                  <td>
                    <div>
                      <label htmlFor="male">MALE</label>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        onChange={handleRadio}
                      />
                    </div>
                    <div>
                      <label htmlFor="female">FEMALE</label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        onChange={handleRadio}
                      />
                    </div>

                    <span className="errTxt">{Err.gender}</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">INTERESTS</th>
                  <td>
                    <div>
                      <label htmlFor="sports">SPORTS</label>
                      <input
                        type="checkbox"
                        name="interests"
                        id="sports"
                        onChange={handleCheck}
                      />
                    </div>
                    <div>
                      <label htmlFor="game">GAME</label>
                      <input
                        type="checkbox"
                        name="interests"
                        id="game"
                        onChange={handleCheck}
                      />
                    </div>
                    <div>
                      <label htmlFor="music">MUSIC</label>
                      <input
                        type="checkbox"
                        name="interests"
                        id="music"
                        onChange={handleCheck}
                      />
                    </div>

                    <span className="errTxt">{Err.interests}</span>
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    <label htmlFor="edu">EDUCTAION</label>
                  </th>
                  <td>
                    <select name="edu" id="edu" onChange={handleSelect}>
                      <option value="">학력을 선택하세요</option>
                      <option value="elementary-school">초등학교 졸업</option>
                      <option value="middle-school">중학교 졸업</option>
                      <option value="high-school">고등학교 졸업</option>
                      <option value="college">대학교 졸업</option>
                    </select>
                    <span className="errTxt">{Err.edu}</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <label htmlFor="comments">LEAVE COMMENTS</label>
                  </th>
                  <td>
                    <textarea
                      name="comments"
                      id="comments"
                      cols="30"
                      rows="10"
                      value={Val.comments}
                      onChange={handleChange}
                    />
                    <span className="errTxt">{Err.comments}</span>
                  </td>
                </tr>

                <tr>
                  <th colSpan="2" className="btnBox">
                    <input
                      type="reset"
                      value="CANCEL"
                      className="reset"
                      onClick={handleReset}
                    />
                    <input
                      type="submit"
                      value="SEND"
                      className="send"
                      onClick={() => {
                        setIsSubmit(true);
                      }}
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </form>
      </div>
    </Layout>
  );
}

export default Join;
