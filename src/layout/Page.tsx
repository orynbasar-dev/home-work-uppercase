import React, { PropsWithChildren } from 'react';

import Header, { HeaderProps } from './Header'
import Spinner from '../components/Spinner'

interface Props extends HeaderProps {
  isLoading?: boolean;
}

const Page: React.FC<PropsWithChildren<Props>> = ({ children, isLoading, ...headerProps }) => {
  console.log('name', isLoading)
  return (
    <>
      <Header {...headerProps} />
      <main className="container mx-auto max-w-screen-xl px-2 pb-6">
        {isLoading ? <Spinner /> : children}
      </main>
    </>
  );
};

export default Page;