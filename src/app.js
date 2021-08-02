import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from "./containers/Home";

export default function Index() {
  return (
    <>
      <StatusBar style="auto" />
      <Home />
    </>
  );
}

