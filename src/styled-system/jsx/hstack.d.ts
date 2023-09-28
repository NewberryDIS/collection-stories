/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { HstackProperties } from '../patterns/hstack';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export type HstackProps = Assign<HTMLStyledProps<'div'>, DistributiveOmit<HstackProperties, "">>


export declare const HStack: Component<HstackProps>