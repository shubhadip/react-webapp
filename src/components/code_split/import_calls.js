import React from 'react';
import importComponent from './async_component';

export const Foo = importComponent(() =>
  System.import('../foo').then(module => module.default)
)

export const Welcome = importComponent(() =>
  System.import('../welcome').then(module => module.default)
)

export const About  = importComponent(() =>
  System.import('../about').then(module => module.default)
)

export const Feature  = importComponent(() =>
  System.import('../feature').then(module => module.default)
)

export const Service  = importComponent(() =>
  System.import('../service').then(module => module.default)
)