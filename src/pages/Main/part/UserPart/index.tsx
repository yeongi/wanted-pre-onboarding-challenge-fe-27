import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import { internalPages } from '@/route.tsx';
import { tokenClient } from '@/util/tokenClient.ts';

export const UserPart = () => {
  const isLoggedIn = tokenClient.get();

  const handleLogout = () => {
    tokenClient.remove();
    window.location.reload();
  };

  return (
    <section>
      <div>
        {isLoggedIn ? (
          <Button onClick={handleLogout}>로그아웃하기</Button>
        ) : (
          <Link to={internalPages.LOGIN}>
            <Button>로그인 하러가기</Button>
          </Link>
        )}
      </div>
    </section>
  );
};
