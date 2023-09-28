/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { WrapProperties } from '../patterns/wrap';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export type WrapProps = Assign<HTMLStyledProps<'div'>, DistributiveOmit<WrapProperties, "">>


export declare const Wrap: Component<WrapProps>