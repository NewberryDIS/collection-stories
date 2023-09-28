/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { GridProperties } from '../patterns/grid';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export type GridProps = Assign<HTMLStyledProps<'div'>, DistributiveOmit<GridProperties, "">>


export declare const Grid: Component<GridProps>