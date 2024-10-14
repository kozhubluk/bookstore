'use client';

import Link from 'next/link';
import React, { FC, ReactNode, SVGProps } from 'react';

interface NavItemProps {
  title: string;
  icon: FC<SVGProps<SVGElement>>;
}

export const NavItem = (props: NavItemProps) => {
  const { title, icon: Icon } = props;
  return (
    <Link href='#'>
      {title}
      <Icon />
    </Link>
  );
};
