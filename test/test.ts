import adoc from '@asciidoctor/core'
import { AsciidoctorShiki } from '../src/index'

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
