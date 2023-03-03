import { render } from '@testing-library/react';
import React from 'react'
import { TestContextProvider } from '../../../test/test-container';
import AppFooter from './app-footer';

describe("CardBikes", () => {
    let baseElement: any, container, screen;
    beforeEach(() => {
      ({ container, baseElement, ...screen } = render(
        <AppFooter/>,
        {
          wrapper: TestContextProvider,
        }
      ));
    });
  
    it("Matches Snapshot", () => {
      expect(baseElement).toMatchSnapshot();
    });
  });