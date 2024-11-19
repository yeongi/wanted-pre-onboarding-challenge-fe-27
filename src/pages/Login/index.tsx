import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Link } from 'react-router-dom'
import { internalPages } from '@/route.tsx'

export const Login = () => {
  const handleLogin = () => {
    console.log('로그인 하기')
    alert('로그인')
  }

  return (
    <>
      <h1> 로그인 페이지 </h1>
      <div>
        <label>아이디</label>
        <Input />
      </div>
      <div>
        <label>아이디</label>
        <Input />
      </div>
      <Button onClick={handleLogin}>로그인 하기</Button>

      <Link to={internalPages.SIGN_UP}>
        <Button>회원가입 하기</Button>
      </Link>
    </>
  )
}
