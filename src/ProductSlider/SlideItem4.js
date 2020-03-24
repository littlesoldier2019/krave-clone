/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const SlideItem4 = ({ content, width }) => (
<div
    css={css`
      height: 100%;
      width: ${width}px;
    `}
  >
    <div 
      css={css`
      padding: 30px 40px;
    `}>
      <a href="/products/great-barrier-relief" target="_self">
        <img 
        css={css`
        vertical-align: center;
        max-height: 750px;
        `}
        src={content.url} 
        rel="gallery" 
        data-image-id="4312385847371"/>
      </a>
    </div>
  </div>
)

export default SlideItem4;