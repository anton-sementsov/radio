import React, { useState } from 'react';

export const ToggleMode = () => {
  const [mode, setMode] = uSeState(true);
  return <button onClick={() => setMode(!mode)}>{mode} mode</button>;
};
