/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const SlideItem0 = ({ content, width }) => (
  <div>
    <div>Test Test</div>
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
  </div>
  
)

export default SlideItem0