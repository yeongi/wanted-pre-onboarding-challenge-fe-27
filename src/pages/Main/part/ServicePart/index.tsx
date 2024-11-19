import { Link } from 'react-router-dom';
import { internalPages } from '@/route.tsx';
import { Button } from '@/components/ui/button.tsx';
import { tokenClient } from '@/util/tokenClient.ts';

export const ServicePart = () => {
  const isLoggedIn = tokenClient.get();

  if (!isLoggedIn)
    return (
      <div>
        <p>서비스를 소개하는 페이지 입니다.</p>
        <h1>로그인이 필요한 서비스입니다.</h1>
      </div>
    );

  return (
    <div>
      <h3>저희는 현재 다음과 같은 서비스를 제공중입니다.</h3>
      <div>
        <h1>투두리스트 서비스</h1>
        <ul>
          <h1>오늘의 할 일 목록</h1>
          <li>할 일 1</li>
          <li>할 일 2</li>
          <li>할 일 3</li>
          <li>할 일 4</li>
        </ul>
      </div>
      <Link to={internalPages.TODO}>
        <Button>투두리스트 보러가기</Button>
      </Link>
    </div>
  );
};
