'use client';

import { NavItem } from '@/widgets/header/NavItem';
import Icon from '@/shared/icons/open-box.svg';

// interface HeaderProps {}

export const Header = () => {
  return (
    <header>
      <div>
        <div>
          <a>logo</a>
          <button></button>
          <form>
            <div>
              <input type='text' />
            </div>
            <button></button>
          </form>
          <div>
            <NavItem icon={Icon} title='заказы' />
            <NavItem icon={Icon} title='заказы' />
            <NavItem icon={Icon} title='заказы' />
            <NavItem icon={Icon} title='заказы' />
          </div>
        </div>
      </div>
    </header>
  );
};
