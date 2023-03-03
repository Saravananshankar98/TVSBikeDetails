import { render } from '@testing-library/react';
import React from 'react'
import { TestContextProvider } from '../../../test/test-container';
import AppHeader from './app-header';

describe("CardBikes", () => {
    let baseElement: any, container, screen;
    beforeEach(() => {
      ({ container, baseElement, ...screen } = render(
        <AppHeader/>,
        {
          wrapper: TestContextProvider,
        }
      ));
    });
  
    it("Matches Snapshot", () => {
      expect(baseElement).toMatchSnapshot();
    });
  });