block('promo-section')(
  content()(function() {
      return [
          !this.mods['no-legos'] && {
              block: 'legos',
              mods: { color: this.ctx.mods.color }
          },
          applyNext()
      ]
  })
);
