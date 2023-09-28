/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { CircleProperties } from '../patterns/circle';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export type CircleProps = Assign<HTMLStyledProps<'div'>, DistributiveOmit<CircleProperties, "">>


export declare const Circle: Component<CircleProps>