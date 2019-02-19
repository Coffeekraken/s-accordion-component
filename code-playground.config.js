module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-accordion-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {
    // compile server port
    port: 4000
  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <dl class="accordion m-b">
          <dt class="accordion__title">
            <a href="#accordion-1-1" is="s-activate" group="accordion-1">
              Accordion title #1
              <div class="pull-right">
                <s-icon class="accordion__close" driver="fontawesome" icon="fas fa-minus"></s-icon>
                <s-icon class="accordion__open" driver="fontawesome" icon="fas fa-plus"></s-icon>
              </div>
            </a>
          </dt>
          <dd class="accordion__content" id="accordion-1-1">
            <div class="mo">
              <div class="mo__content p-r">
                  <img src="https://source.unsplash.com/random/250x250" />
              </div>
              <div class="mo__content">
                <h2 class="h3 m-b">Quis sociosqu praesent faucibus quam</h2>
                <p class="p p--lead">
                  Eleifend rhoncus augue dictum per ornare in senectus habitant turpis ultrices adipiscing est a feugiat urna ac amet natoque praesent convallis hac sem id class et inceptos ipsum enim tincidunt
                </p>
                <p class="p">
                  Penatibus a tristique cubilia sociis accumsan conubia sollicitudin suspendisse adipiscing nisi habitasse luctus hac augue mollis pharetra senectus amet faucibus
                </p>
              </div>
            </div>
          </dd>
          <dt class="accordion__title">
            <a href="#accordion-1-2" is="s-activate" group="accordion-1">
              Accordion title #2
              <div class="pull-right">
                <s-icon class="accordion__close" driver="fontawesome" icon="fas fa-minus"></s-icon>
                <s-icon class="accordion__open" driver="fontawesome" icon="fas fa-plus"></s-icon>
              </div>
            </a>
          </dt>
          <dd class="accordion__content" id="accordion-1-2">
            <h2 class="h3 m-b">Quis sociosqu praesent faucibus quam</h2>
            <p class="p p--lead">
              Eleifend rhoncus augue dictum per ornare in senectus habitant turpis ultrices adipiscing est a feugiat urna ac amet natoque praesent convallis hac sem id class et inceptos ipsum enim tincidunt
            </p>
          </dd>
          <dt class="accordion__title">
            <a href="#accordion-1-3" is="s-activate" group="accordion-1">
              Accordion title #3
              <div class="pull-right">
                <s-icon class="accordion__close" driver="fontawesome" icon="fas fa-minus"></s-icon>
                <s-icon class="accordion__open" driver="fontawesome" icon="fas fa-plus"></s-icon>
              </div>
            </a>
          </dt>
          <dd class="accordion__content" id="accordion-1-3">
            <h2 class="h3 m-b">Quis sociosqu praesent faucibus quam</h2>
          </dd>
        </dl>

        <dl class="accordion accordion--primary m-b">
          <dt class="accordion__title">
            <a href="#accordion-2-1" class="active" is="s-activate" toggle group="accordion-2">
              Accordion title #1
              <div class="pull-right">
                <s-icon class="accordion__close" driver="fontawesome" icon="fas fa-minus"></s-icon>
                <s-icon class="accordion__open" driver="fontawesome" icon="fas fa-plus"></s-icon>
              </div>
            </a>
          </dt>
          <dd class="accordion__content" id="accordion-2-1">
            <div class="mo">
              <div class="mo__content">
                <h2 class="h3 m-b">Quis sociosqu praesent faucibus quam</h2>
                <p class="p p--lead">
                  Eleifend rhoncus augue dictum per ornare in senectus habitant turpis ultrices adipiscing est a feugiat urna ac amet natoque praesent convallis hac sem id class et inceptos ipsum enim tincidunt
                </p>
                <p class="p">
                  Penatibus a tristique cubilia sociis accumsan conubia sollicitudin suspendisse adipiscing nisi habitasse luctus hac augue mollis pharetra senectus amet faucibus
                </p>
              </div>
              <div class="mo__content p-l">
                  <img src="https://source.unsplash.com/random/250x250" />
              </div>
            </div>
          </dd>
          <dt class="accordion__title">
            <a href="#accordion-2-2" is="s-activate" toggle group="accordion-2">
              Accordion title #2
              <div class="pull-right">
                <s-icon class="accordion__close" driver="fontawesome" icon="fas fa-minus"></s-icon>
                <s-icon class="accordion__open" driver="fontawesome" icon="fas fa-plus"></s-icon>
              </div>
            </a>
          </dt>
          <dd class="accordion__content" id="accordion-2-2">
            <h2 class="h3 m-b">Quis sociosqu praesent faucibus quam</h2>
            <p class="p p--lead">
              Eleifend rhoncus augue dictum per ornare in senectus habitant turpis ultrices adipiscing est a feugiat urna ac amet natoque praesent convallis hac sem id class et inceptos ipsum enim tincidunt
            </p>
          </dd>
          <dt class="accordion__title">
            <a href="#accordion-2-3" is="s-activate" toggle group="accordion-2">
              Accordion title #3
              <div class="pull-right">
                <s-icon class="accordion__close" driver="fontawesome" icon="fas fa-minus"></s-icon>
                <s-icon class="accordion__open" driver="fontawesome" icon="fas fa-plus"></s-icon>
              </div>
            </a>
          </dt>
          <dd class="accordion__content" id="accordion-2-3">
            <h2 class="h3 m-b">Quis sociosqu praesent faucibus quam</h2>
          </dd>
        </dl>

        <dl class="accordion accordion--secondary">
          <dt class="accordion__title">
            <a href="#accordion-3-1" class="active" is="s-activate" toggle>
              Accordion title #1
              <div class="pull-right">
                <s-icon class="accordion__close" driver="fontawesome" icon="fas fa-minus"></s-icon>
                <s-icon class="accordion__open" driver="fontawesome" icon="fas fa-plus"></s-icon>
              </div>
            </a>
          </dt>
          <dd class="accordion__content" id="accordion-3-1">
            <div class="mo">
              <div class="mo__content p-r">
                  <img src="https://source.unsplash.com/random/250x250" />
              </div>
              <div class="mo__content">
                <h2 class="h3 m-b">Quis sociosqu praesent faucibus quam</h2>
                <p class="p p--lead">
                  Eleifend rhoncus augue dictum per ornare in senectus habitant turpis ultrices adipiscing est a feugiat urna ac amet natoque praesent convallis hac sem id class et inceptos ipsum enim tincidunt
                </p>
                <p class="p">
                  Penatibus a tristique cubilia sociis accumsan conubia sollicitudin suspendisse adipiscing nisi habitasse luctus hac augue mollis pharetra senectus amet faucibus
                </p>
              </div>
            </div>
          </dd>
          <dt class="accordion__title">
            <a href="#accordion-3-2" is="s-activate" toggle>
              Accordion title #2
              <div class="pull-right">
                <s-icon class="accordion__close" driver="fontawesome" icon="fas fa-minus"></s-icon>
                <s-icon class="accordion__open" driver="fontawesome" icon="fas fa-plus"></s-icon>
              </div>
            </a>
          </dt>
          <dd class="accordion__content" id="accordion-3-2">
            <h2 class="h3 m-b">Quis sociosqu praesent faucibus quam</h2>
            <p class="p p--lead">
              Eleifend rhoncus augue dictum per ornare in senectus habitant turpis ultrices adipiscing est a feugiat urna ac amet natoque praesent convallis hac sem id class et inceptos ipsum enim tincidunt
            </p>
          </dd>
          <dt class="accordion__title">
            <a href="#accordion-3-3" is="s-activate" toggle>
              Accordion title #3
              <div class="pull-right">
                <s-icon class="accordion__close" driver="fontawesome" icon="fas fa-minus"></s-icon>
                <s-icon class="accordion__open" driver="fontawesome" icon="fas fa-plus"></s-icon>
              </div>
            </a>
          </dt>
          <dd class="accordion__content" id="accordion-3-3">
            <h2 class="h3 m-b">Quis sociosqu praesent faucibus quam</h2>
          </dd>
        </dl>
      `
    },
    css: {
      language: 'scss',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        body {
          padding: s-space(bigger);
        }
        @include s-accordion-classes(
          $colors: default primary secondary success error warning info
        );
      `
    },
    js: {
      language: 'js',
      data: `
        import 'coffeekraken-s-icon-component'
        import 'coffeekraken-s-activate-component'
        import './dist/index'
      `
    }
  }
}
