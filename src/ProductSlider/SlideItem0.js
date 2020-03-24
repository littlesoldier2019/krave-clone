/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const SlideItem0 = ({ content, width }) => (
  <div
    css={css`
    height: 100%;
    width: ${width}px;
    display: flex;
    `}>
    <div 
      css={css`
      padding: 30px 40px;
      width: 50%;
      `}>
      <a href="/products/great-barrier-relief" target="_self">
        <img 
          css={css`
          vertical-align: middle;
          max-height: 750px;
          `}
          src={content.url} 
          rel="gallery" 
          data-image-id="4310600810571"/>
      </a>
    </div>
    <div 
      css={css`
      padding: 50px;
      width: 49%;
      text-align: center;
      margin: auto;
      `}>
      <div >
        <h2 
          css={css`
          padding: 15px 0;
          font-weight: bold;
          `}
        >
          Great Barrier Relief
        </h2>
        <p 
          css={css`
          margin: 0 0 15px;
          font-size: 16px;
          `}>
          <span ></span>
          <span >$28.00</span>
        </p>
          <a 
          css={css`
          background: #000000;
          color: #ffffff;
          box-shadow: none;
          border: 1px solid #ffffff;
          border-radius: 1px;
          display: inline-block;
          zoom: 1;
          height: 38px;
          line-height: 36px;
          letter-spacing: 1px;
          padding: 0 15px;
          vertical-align: bottom;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          `}
          href="/products/great-barrier-relief" target="_self">View Product</a>
      </div>
    </div>
  </div>
)

export default SlideItem0
