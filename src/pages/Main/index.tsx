import { Link } from 'react-router-dom'

import { internalPages } from '@/route.tsx'
import { Button } from '@/components/ui/button.tsx'

export const Main = () => {
  return (
    <>
      <h2>메인 페이지</h2>
      <Link to={internalPages.LOGIN}>
        <Button>로그인 하러가기</Button>
      </Link>
    </>
  )
}
