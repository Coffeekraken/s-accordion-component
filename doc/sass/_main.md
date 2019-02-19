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


### s-accordion

Print out the bare and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-accordion-bare

Print out the bare component css


### s-accordion-style

Print out the style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default


### s-accordion-title

Print out the bare and style title component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-accordion-title-bare

Print out the bare title component css


### s-accordion-title-style

Print out the style component title css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default


### s-accordion-title-opaque

Print out the bare and style title-opaq ue component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-accordion-title-opaque-bare

Print out the bare title-opaq ue component css


### s-accordion-title-opaque-style

Print out the style component title-opaque css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default


### s-accordion-content

Print out the bare and style content component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-accordion-content-bare

Print out the bare content component css


### s-accordion-content-style

Print out the style component content css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default