import { device, styles, color } from '../constants'

view MessengerButton {
  let buttonSize = view.props.iconSize || 33

  <button>
    <img src="http://i.imgur.com/91CqGdN.png" width={buttonSize} height={buttonSize} />
    {view.props.text || 'Messenger'}
  </button>

  let fadeText = view.props.fadeText || false
  let textColor = 'white'
  on.scroll(window, () => {
    let normalizedDecimalScroll = Math.min(1, window.pageYOffset / window.outerHeight)
    let rgbVal = Math.ceil((1 - normalizedDecimalScroll) * 255)
    textColor = fadeText ? ['rgb(', ',', ',', ')'].join(rgbVal) : textColor
  })

  let ogPadding = [6, 25, 6 , 10]
  $button = [styles.flexAndCenter, {
    padding: ogPadding,
    background: view.props.backgroundColor || color.facebookBlue,
    color: textColor,
    fontSize: view.props.fontSize || 18,
    border: 'solid',
    borderRadius: 5,
    borderWidth: view.props.borderWidth || 1,
    borderColor: textColor,
    cursor: 'pointer',

    transitionDuration: '0.4s',
    hover: {
      color: 'white',
      borderColor: 'white',
      background: color.facebookBlue,
    },

    [device.small]: {
      padding: view.props.shrink ? [3, 12, 3, 5] : ogPadding,
    },
  }]

  $img = {
    margin: [0, 5]
  }
}
