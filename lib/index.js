module.exports = {
  rules: {
    'no-lorem': {
      meta: {
        schema: [{
          type: 'object',
          properties: {
            pattern: { type: 'string' },
            message: { type: 'string' }
          },
          additionalProperties: false
        }]
      },
      create: context => {
        const options = context.options[0] || {};
        const pattern = options.pattern ? new RegExp(options.pattern, 'i') : /lorem\s+ipsum|לורם\s+איפסום/i;
        const message = options.message || 'Avoid Lorem Ipsum text';

        return {
          Literal: node => pattern.test(node.value) && context.report({ node, message })
        };
      }
    }
  }
};