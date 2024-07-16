import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function RegisterView() {
  return (
    <div className="flex items-center justify-center min-h-screen border">
      <form className="flex w-8/12 md:w-4/12 flex-col gap-4">
      <h1 className="text-5xl text-center">Đăng ký</h1>
      <a href="/chat/login" className="hover:text-sky-700 text-center">Bạn đã có tài khoản ?</a>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="userName" value="Tên đăng nhập" />
          </div>
          <TextInput
            id="userName"
            type="text"
            placeholder=""
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Nhập mật khẩu" />
          </div>
          <TextInput id="password" type="password" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="passwordEnsure" value="Nhập lại mật khẩu" />
          </div>
          <TextInput id="passwordEnsure" type="password" required />
        </div>
        <Button type="submit">Đăng ký</Button>
      </form>
    </div>
  );
}
