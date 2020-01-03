import "jest-styled-components";
import React from "react";
import { ThemeProvider } from "styled-components";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";
import { lightTheme } from 'src/utils/theme';
import { Home } from '../Home';

/* random tests to check if it works */
describe("Home", () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={lightTheme}>
        <Home onTheAir={{ isLoading: false }} />
      </ThemeProvider>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should shows "link to auth" in a <p> tag', () => {
    const app = shallow(<Home onTheAir={{ isLoading: false }} />);
    expect(app.find("a").text()).toEqual("link to auth");
  });
});