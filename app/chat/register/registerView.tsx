import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
export default function RegisterView() {
  let validateNullOK = false;
  const [isExist, setIsExist] = useState(false);
  const [userNameMsErr, setUserNameMsErr] = useState("");
  const [passMsErr, setPassMsErr] = useState("");
  const [passAgainMsErr, setPassAgainMsErr] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [passAgain, setPassAgain] = useState("");
  const [validateOK, setValidateOK] = useState(false);
  function validateNull(textValidate: String) {
    if (textValidate == "") {
      validateNullOK = false;
      return false;
    } else {
      validateNullOK = true;
      return true;
    }
  }
  function isGreaterThan6(textValidate: String) {
    if (textValidate.length >= 6) {
      return true;
    } else {
      return false;
    }
  }

  function checkACCExisted() {
    if (validateOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chat/checkExisted",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ten: userName,
          }),
        },
      ).then((res) => console.log("test response: ", res.ok));
      setIsExist(false);
    } else {
      console.log("api checking existed is failed");
    }
  }
  function validateAll() {
    let countOk = 0;
    let stt = false;
    if (validateNull(userName)) {
      if (isGreaterThan6(userName)) {
        checkACCExisted();
        if (isExist) {
          countOk++;
        } else {
          setUserNameMsErr("Tài khoản đã tồn tại");
        }
      } else {
        setUserNameMsErr("Số ký tự phải lớn hơn 6");
      }
    } else {
      setUserNameMsErr("Vui lòng nhập tên đăng nhập");
    }
    if (validateNull(pass)) {
      if (pass.length >= 6) {
        countOk++;
      } else {
        setPassMsErr("Số ký tự phải lớn hơn 6");
      }
    } else {
      setPassMsErr("Vui lòng lòng nhập password");
    }
    if (validateNull(passAgain)) {
      if (passAgain.length >= 6) {
        if (passAgain == pass) {
          countOk++;
        } else {
          setPassAgainMsErr("Password không khớp");
        }
      } else {
        setPassAgainMsErr("Số ký tự phải lớn hơn 6");
      }
    }
    if (countOk == 3) {
      setValidateOK(true);
    }
  }
  function doRegister() {
    //checknull here->checkexist->true->save->false->throw message
    if (validateOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chat/creat-account",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: userName,
            password: pass,
          }),
        },
      ).then((res) => {
        console.log("test response: ", res.ok);
        if (res) {
            //route page
        }
      });
    } else {
      console.log("not do post");
    }
    console.log("do sign up");
  }

  return (
    <div className="flex min-h-screen items-center justify-center border">
      <form className="flex w-8/12 flex-col gap-4 md:w-4/12">
        <h1 className="text-center text-5xl">Đăng ký</h1>
        <a href="/chat/login" className="text-center hover:text-sky-700">
          Bạn đã có tài khoản ?
        </a>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="userName" value="Tên đăng nhập" />
          </div>
          <TextInput
            id="userName"
            type="text"
            value={userName}
            onChange={() => setUserName(event.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Nhập mật khẩu" />
          </div>
          <TextInput
            id="password"
            type="password"
            value={pass}
            onChange={() => setPass(event.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="passwordEnsure" value="Nhập lại mật khẩu" />
          </div>
          <TextInput
            id="passwordEnsure"
            type="password"
            value={passAgain}
            onChange={() => setPassAgain(event.target.value)}
            required
          />
        </div>
        <Button
          onClick={() => {
            doRegister();
          }}
        >
          Đăng ký
        </Button>
      </form>
    </div>
  );
}
