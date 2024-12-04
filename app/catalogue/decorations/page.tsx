import React from 'react';
import CataHome from '../../components/catapage/catahome';
import { CataHeader } from '../../components/catapage/cataheader';

export default function Decorations() {
  return (
    <main>
      <CataHome />
      <CataHeader activeSection="decorations" />
    </main>
  );
}
