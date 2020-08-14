import * as React from "react"
import Svg, { Path, G } from "react-native-svg"

function Lotus(props) {
  return (
    <Svg viewBox="0 0 496.2 496.2" {...props}>
      <Path
        d="M0 248.1C0 111.1 111.1 0 248.1 0s248.1 111.1 248.1 248.1-111.1 248.1-248.1 248.1S0 385.1 0 248.1z"
        fill="#334d5c"
      />
      <G fill="#f2a5a5">
        <Path d="M249.1 347.4c.1 0 .3 0 .4-.1-.1-.1-.1-.2-.2-.2 0 .1-.1.2-.2.3zM324.8 310.9h-.3l.2.2c.1 0 .1-.1.1-.2z" />
        <Path d="M248.1 133.2c-69.9 69.9-69.9 183.2 0 253.2v.1c69.9-70 69.9-183.4 0-253.3zM171.4 311v.2c.1-.1.2-.1.2-.2h-.2z" />
        <Path d="M288.1 286.5c-.1 0-.1.1-.2.1.1 0 .2 0 .3.1-.1 0-.1-.1-.1-.2z" />
      </G>
      <Path
        d="M146.4 154.6c-36 92.1 9.6 195.9 101.7 231.9v.1c36-92.2-9.6-196.1-101.7-232z"
        fill="#e28d8d"
      />
      <G fill="#f2a5a5">
        <Path d="M147.6 348.2c0 .1.1.1.1.2 0-.1.1-.2.1-.2h-.2zM207.7 286.5c.1 0 .1.1.2.1-.1 0-.2 0-.3.1 0 0 .1-.1.1-.2z" />
      </G>
      <Path
        d="M349.3 154.6c36 92.1-9.5 195.9-101.7 231.9v.1c-35.9-92.2 9.6-196.1 101.7-232z"
        fill="#e28d8d"
      />
      <Path
        d="M348.2 348.2c0 .1-.1.1-.1.2 0-.1-.1-.2-.1-.2h.2z"
        fill="#f2a5a5"
      />
      <G fill="#ce8282">
        <Path d="M249 278.7l-.2.2h.3s0-.1-.1-.2zM69.1 207.3c-.1 98.8 80.1 179 179 179l.1.1c0-98.9-80.2-179.1-179.1-179.1zM140.5 387.3c.1 0 .1.1.2.1v-.3c0 .1-.1.2-.2.2zM247.4 278.7l.2.2h-.3c.1 0 .1-.1.1-.2zM427.4 207.3c.1 98.8-80.1 179-179 179l-.1.1c0-98.9 80.2-179.1 179.1-179.1zM355.9 387.3c-.1 0-.1.1-.2.1v-.3l.2.2z" />
      </G>
    </Svg>
  )
}

export default Lotus
