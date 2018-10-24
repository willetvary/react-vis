import React from 'react';

import {mapSection} from '../showcase-components/showcase-utils';
import {showCase} from '../index';
const {
  DynamicHints
} = showCase;

/* eslint-disable max-len */
const AXES = [
];

const TOOLTIPS = [
  {
    name: 'Dynamic Hints',
    comment: 'Move mouse over the point to see the hint.',
    component: DynamicHints,
    componentName: 'DynamicHints'
  }
];
/* eslint-enable max-len */
const DECORATIVE_AXES = [
];

function AxesShowcase(props) {
  return (
    <article id="axes">
      <h2>Axes</h2>
      {AXES.map(mapSection)}
      <h2>Tooltips</h2>
      {TOOLTIPS.map(mapSection)}
      <h2>DecorativeAxis</h2>
      {DECORATIVE_AXES.map(mapSection)}
    </article>
  );
}

export default AxesShowcase;
