import type { Asciidoctor } from '@asciidoctor/core'

import * as shiki from 'shiki'
import deasync from 'deasync'

export const AsciidoctorShiki: Asciidoctor.SyntaxHighlighterFunctions = {
  initialize(_name, _backend, { document }) {
    const options: shiki.HighlighterOptions = {}
    if (document.hasAttribute('shiki-theme'))
      options.theme = document.getAttribute('shiki-theme')
    this.highlighter = deasync((cb) => {
      shiki.getHighlighter(options)
        .then(highlighter => {
          cb(undefined, highlighter)
        })
    })()
    this.super()
  },
  highlight(_node, content, lang) {
    return this.highlighter.codeToHtml(content, { lang })
  },
  handlesHighlighting() {
    return true
  }
}
