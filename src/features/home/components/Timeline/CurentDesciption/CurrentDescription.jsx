import React, { useEffect, useState } from 'react';

export const CurrentDescription = ({}) => {
  const [artist, setAtrist] = useState(null);

  useEffect(() => {
    const myDiv = document.getElementById('rbcloud_nowplaying6327').innerHTML;
  }, []);

  return (
    <>
      <div id="rbcloud_nowplaying6327"></div>
    </>
  );
};
