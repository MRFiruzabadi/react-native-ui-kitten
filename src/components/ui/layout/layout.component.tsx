/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import { Overwrite } from 'utility-types';
import {
  styled,
  StyledComponentProps,
} from '../../theme';

type LayoutStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | string;
}>;

export interface LayoutProps extends ViewProps, LayoutStyledProps {
  children?: React.ReactNode;
  level?: '1' | '2' | '3' | '4' | string;
}

export type LayoutElement = React.ReactElement<LayoutProps>;

/**
 * Overall page container.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the layout.
 *
 * @property {string} level - Background color level of component.
 * Can be `1`, `2`, `3` or `4`.
 * Defaults to *1*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example LayoutLevel
 *
 * Layout should be used as a root component of the screen.
 * Comparative to `View` element, it uses a background color with respect to current theme.
 *
 * Layouts can be used in different levels.
 * It is useful, when needed to highlight the container relative to another.
 */
export class LayoutComponent extends React.Component<LayoutProps> {

  static styledComponentName: string = 'Layout';

  public render(): React.ReactElement<ViewProps> {
    const { eva, style, ...viewProps } = this.props;

    return (
      <View
        {...viewProps}
        style={[eva.style, style]}
      />
    );
  }
}

export const Layout = styled<LayoutProps>(LayoutComponent);
