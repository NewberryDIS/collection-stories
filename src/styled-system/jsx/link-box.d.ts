/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { LinkBoxProperties } from '../patterns/link-box';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export type LinkBoxProps = Assign<HTMLStyledProps<'div'>, DistributiveOmit<LinkBoxProperties, "">>


export declare const LinkBox: Component<LinkBoxProps>