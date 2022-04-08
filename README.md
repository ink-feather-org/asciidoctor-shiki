# Asciidoctor Syntax Highlight Extension for Node.js

## Installation

This extension is available on npmjs.com

```shell
$ node install @ink-feather-org/asciidoctor-shiki
```

## Usage

This extension is not designed for browser.
You must not use this extension without Node.js.

```ts
import adoc from '@asciidoctor/core'
import { AsciidoctorShiki } from '@ink-feather-org/asciidoctor-shiki'

const asciidoctor = adoc()
asciidoctor.SyntaxHighlighter.register('shiki', AsciidoctorShiki)

const options = {
  attributes: {
    'source-highlighter': 'shiki',
    'shiki-theme': 'nord'
  }
}
const document = `
[source,ruby]
----
p "Hello"
----
`;
console.log(asciidoctor.convert(document, options))
```

1. Register this extension using `SyntaxHighlighter.register`
2. Set the attribute `source-highlighter`
3. Set the attribute `shiki-theme`

## Copyright and License

Copyright (c) 2022 TANIGUCHI Masaya. All rights reserved.

This extension is licensed under the MIT license https://git.io/mit-license
