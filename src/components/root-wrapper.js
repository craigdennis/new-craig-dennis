import { MDXProvider } from "@mdx-js/mdx"
import React from "react"
import CodeBlock from "./src/components/highlight/CodeBlock"

const component = {
    pre: CodeBlock
}

export const WrapPageElement = ({ element }) => (
    <MDXProvider component={component}>{element}</MDXProvider>
)