/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const SlideItem4 = ({ content, width }) => (
<div
    css={css`
      height: 100%;
      width: ${width}px;
      background-image: url('${content.url}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  >
  </div>
)

export default SlideItem4;