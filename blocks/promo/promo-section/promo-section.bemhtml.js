block('promo-section')(
  content()(function() {
      return [
          {
              block: 'legos',
              mods: { color: this.ctx.mods.color }
          },
          applyNext()
      ]
  })
);
