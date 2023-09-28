/* eslint-disable */
import type { Component, QwikIntrinsicElements } from '@builder.io/qwik'
import type { Assign, JsxStyleProps, PatchedHTMLProps } from './system-types'
import type { RecipeDefinition, RecipeSelection, RecipeVariantRecord } from './recipe'

type ElementType = keyof QwikIntrinsicElements | Component<any>

type ComponentProps<T extends ElementType> = T extends keyof QwikIntrinsicElements
  ? QwikIntrinsicElements[T]
  : T extends Component<infer P>
  ? P
  : never

type Dict = Record<string, unknown>

export type StyledComponent<T extends ElementType, P extends Dict = {}> = Component<Assign<ComponentProps<T> & PatchedHTMLProps, Assign<JsxStyleProps, P>>>

type RecipeFn = { __type: any }

interface JsxFactory {
  <T extends ElementType>(component: T): StyledComponent<T, {}>
  <T extends ElementType, P extends RecipeVariantRecord>(component: T, recipe: RecipeDefinition<P>): StyledComponent<
    T,
    RecipeSelection<P>
  >
  <T extends ElementType, P extends RecipeFn>(component: T, recipeFn: P): StyledComponent<T, P['__type']>
}

type JsxElements = { [K in keyof QwikIntrinsicElements]: StyledComponent<K, {}> }

export type Styled = JsxFactory & JsxElements

export type HTMLStyledProps<T extends ElementType> = Assign<ComponentProps<T>, JsxStyleProps>