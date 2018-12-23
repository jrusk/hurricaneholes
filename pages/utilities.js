import React from 'react';
import Link from 'next/link';
//import Layout from '../components/layout';

export default () => (
  <div>
    <h1 className="title">Utilities</h1>
    <p>
      You must concact Arizona 811 (Arizona Bluestake) before we dig:{' '}
      <Link href="http://www.azbluestake.com">
        <a>Arizona 811</a>
      </Link>
    </p>
  </div>
);
