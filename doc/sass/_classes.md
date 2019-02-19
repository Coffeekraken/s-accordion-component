# SAccordionComponent

Provide some clean accordion with colors support


### Example
```html
	<dl class="accordion">
  <dt class="accordion__title">
    <a href="#accordion-1" is="s-activate" group="accordion-1">
      Accordion title #1
      <div class="pull-right">
        <s-icon class="accordion__close" driver="fontawesome" icon="fas fa-minus"></s-icon>
        <s-icon class="accordion__open" driver="fontawesome" icon="fas fa-plus"></s-icon>
      </div>
    </a>
  </dt>
  <dd class="accordion__content" id="accordion-1">
    Accordion content #1
  </dd>
  <dt class="accordion__title">
    <a href="#accordion-2" is="s-activate" group="accordion-1">
      Accordion title #2
      <div class="pull-right">
        <s-icon class="accordion__close" driver="fontawesome" icon="fas fa-minus"></s-icon>
        <s-icon class="accordion__open" driver="fontawesome" icon="fas fa-plus"></s-icon>
      </div>
    </a>
  </dt>
  <dd class="accordion__content" id="accordion-2">
    Accordion content #2
  </dd>
  <dt class="accordion__title">
    <a href="#accordion-3" is="s-activate" group="accordion-1">
      Accordion title #3
      <div class="pull-right">
        <s-icon class="accordion__close" driver="fontawesome" icon="fas fa-minus"></s-icon>
        <s-icon class="accordion__open" driver="fontawesome" icon="fas fa-plus"></s-icon>
      </div>
    </a>
  </dt>
  <dd class="accordion__content" id="accordion-3">
    Accordion content #3
  </dd>
</dl>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


## Mixins


### s-accordion-classes

Print out the bare and style component css
Generated classes:
- `.accordion`
- `.accordion--{color}`
- `.accordion__title`
- `.accordion__title a`
- `.accordion__title a.active`
- `.accordion__content`
- `.accordion__content.active`
- `.accordion__close`
- `.accordion__open`


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary


### s-accordion-classes-bare

Print out the bare component css
Generated classes:
- `.accordion`
- `.accordion__title`
- `.accordion__title a`
- `.accordion__title a.active`
- `.accordion__content`
- `.accordion__content.active`
- `.accordion__close`
- `.accordion__open`


### s-accordion-classes-style

Print out the style component css
Generated classes:
- `.accordion`
- `.accordion--{color}`
- `.accordion__title`
- `.accordion__title a`
- `.accordion__title a.active`
- `.accordion__content`
- `.accordion__content.active`
- `.accordion__close`
- `.accordion__open`


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary