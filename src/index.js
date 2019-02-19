import realHeight from 'coffeekraken-sugar/js/dom/realHeight'
import querySelectorLive from 'coffeekraken-sugar/js/dom/querySelectorLive'
import throttle from 'coffeekraken-sugar/js/utils/functions/throttle'

function setAccordionContentHeight($elm) {
  const isActive = $elm.classList.contains('active')
  $elm.style.transition = 'none'
  $elm.classList.add('active')
  $elm.style.height = ''
  const height = realHeight($elm)
  $elm.style.transition = 'none' // remove again the transitions cause the realHeight function reset them...
  if (!isActive) $elm.classList.remove('active')
  setTimeout(() => {
    $elm.style.transition = ''
  })
  $elm.style.height = `${height}px`
}

function setAccordionContentsHeight() {
  Array.from(document.querySelectorAll('.accordion__content'), $elm => {
    setAccordionContentHeight($elm)
  })
}

window.addEventListener(
  'resize',
  throttle(e => {
    setAccordionContentsHeight()
  }, 250)
)

querySelectorLive('.accordion__content', $elm => {
  setAccordionContentHeight($elm)

  if (!$elm._hasAccordionLoadedEventListener) {
    $elm._hasAccordionLoadedEventListener = true
    $elm.addEventListener(
      'load',
      e => {
        setAccordionContentHeight($elm)
      },
      true
    )
  }
})

setAccordionContentsHeight()

export default setAccordionContentsHeight
