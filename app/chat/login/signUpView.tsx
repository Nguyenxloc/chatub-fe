import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
export default function SignUpView() {
  let validateNullOK = false;
  const [isExist, setIsExist] = useState(false);
  const [userNameMsErr, setUserNameMsErr] = useState("");
  const [passMsErr, setPassMsErr] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
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
  function validateAll() {
    let countOk = 0;
    let stt = false;
    if (validateNull(userName)) {
      if (isGreaterThan6(userName)) {
        countOk++;
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
    if (countOk == 2) {
      setValidateOK(true);
    }
  }

  function doSignUp() {
    //checknull here->checkexist->true->save->false->throw message
    if (validateOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chat/signup",
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
        if(res){
          //route to main page
          //body->true->route to specificpage/// get method have body
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
        <h1 className="text-center text-5xl">Đăng Nhập</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="userName" value="Tên đăng nhập" />
          </div>
          <TextInput id="userName" type="text" placeholder="" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Nhập mật khẩu" />
          </div>
          <TextInput id="password" type="password" required />
        </div>
        <Button type="submit">Đăng nhập</Button>
      </form>
    </div>
  );
}
