import React from 'react';
import CataHome from '../../components/catapage/catahome';
import { CataHeader } from '../../components/catapage/cataheader';

export default function Favors() {
  return (
    <main>
      <CataHome />
      <CataHeader activeSection="favors" />
    </main>
  );
}
