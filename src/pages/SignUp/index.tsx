import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'

export const SignUp = () => {
  const handleSignUp = () => {
    console.log('회원가입 하기')
    alert('회원가입')
  }

  return (
    <>
      <h1> 회원가입 페이지 </h1>

      <div>
        <label>아이디</label>
        <Input />
      </div>

      <div>
        <label>비밀번호</label>
        <Input />
      </div>

      <Button onClick={handleSignUp}>회원가입 하기</Button>
    </>
  )
}
