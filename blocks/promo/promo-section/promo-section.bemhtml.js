block('promo-section')(
  content()(function(){
      return [
          {
              block: 'legos',
              mods: this.ctx.lego_mods
          },
          applyNext()
      ]
  })
);
