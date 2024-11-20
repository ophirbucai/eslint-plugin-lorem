module.exports = {
  configs: {
    recommended: {
      plugins: ['lorem'],
      rules: {
        'lorem/no-lorem': 'error'
      }
    }
  },
  rules: {
    'no-lorem': {
      meta: {
        schema: [{
          type: 'object',
          properties: {
            strings: {
              type: 'array',
              items: { type: 'string' }
            },
            override: { type: 'boolean' },
            message: { type: 'string' }
          },
          additionalProperties: false
        }]
      },
      create: context => {
        const options = context.options[0] || {};
        const defaultStrings = ['lorem', 'ipsum', 'לורם', 'איפסום'];
        const strings = options.override
          ? (options.strings || defaultStrings)
          : [...defaultStrings, ...(options.strings || [])];

        const safeRegexString = str => str.toLowerCase().split('').map(char => {
          const specialChars = /[.*+?^${}()|[\]\\]/g;
          return specialChars.test(char) ? `\\${char}` : char;
        }).join('');

        const pattern = new RegExp(strings.map(safeRegexString).join('|'), 'i');
        const message = options.message || 'Avoid placeholder text';

        const checkNode = node => {
          const textContent = node.value?.raw || node.value;
          if (pattern.test(textContent)) {
            const comments = context.getSourceCode().getAllComments();
            const line = node.loc.start.line;

            const hasDisablingComment = comments.some(comment => {
              const commentLine = comment.loc.start.line;
              return (commentLine === line || commentLine === line - 1) &&
                /eslint-disable(?:-next)?-line.*lorem\/no-lorem/.test(comment.value);
            });

            if (!hasDisablingComment) {
              context.report({ node, message });
            }
          }
        };

        return {
          Literal: checkNode,
          JSXText: checkNode,
          TemplateElement: checkNode,
          VText: checkNode,
          VLiteral: checkNode,
          TextNode: checkNode,
          HTMLText: checkNode
        };
      }
    }
  }
};