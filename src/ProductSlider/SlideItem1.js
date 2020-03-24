/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const SlideItem1 = ({ content, width }) => (
<div
    css={css`
    height: 100%;
    width: ${width}px;
    display: flex;
    `}>
      <div 
        css={css`
        padding: 50px 50px 50px 100px;
        width: 50%;
        white-space: normal;
        text-align: left;
        `}>
        <h5><b>What it is</b></h5>
        <p>Great Barrier Relief is a skin-soothing serum that restores your damaged skin barrier while evening out your complexion. This nourishing formula offers irritated skin a reset button by using tamanu oil and other ingredients that mimic a healthy barrier to replenish what your skin lacks. </p>
        <div>&nbsp;</div>
        <div
          css={css`
          text-align: center;
          `}>
          <iframe width="320" height="180" src="https://www.youtube.com/embed/q_HcZm9OjJ8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
        </div>
        <p>Every purchase of Great Barrier Relief helps protect the Great Barrier Reef. 2% of all sales from Great Barrier Relief will be donated to the Great Barrier Reef Foundation. To learn more about how the help protect one of the seven natural wonders of the world, click 
          <a 
            css={css`
            color: #65cfa2;
            font-weight: bold;
            &:visited {
              color: #65cfa2;
              font-weight: bold;
              }
          `}
            href="https://www.barrierreef.org" target="_blank" rel="noopener"> here</a>.</p>
        <div>&nbsp;</div>
        <h5><b>Who needs it</b></h5>
        <p>Someone who needs to press reset on their irritated skin. More specifically:</p>
          <ul>
           <li>who washes their face more than twice a day</li>
           <li>who overdoes skincare by using harsh acne treatments or anti-aging products too often </li>
           <li>whose skin is constantly dehydrated</li>
           <li>who has constant redness and dry patches</li>
           <li>who is sensitive to many skincare products</li>
           <li>who has chronic stress (yes, cortisol affects the skin barrier too!)</li>
           <li>who is looking to get rid of hyperpigmentation</li>
           <li>who has aging or mature skin</li>
           <li>anyone who intends to maintain a healthy skin barrier function</li>
           <li>who has skin problems associated with a damaged skin barrier</li>
          </ul>
        <p>&nbsp;</p>
      </div> 
      <div 
        css={css`
        padding: 30px 40px;
        width: 50%;
        `}>
        <a href="/products/great-barrier-relief" target="_self">
          <img 
            css={css`
            vertical-align: center;
            max-height: 750px;
            float: left;
            `}
            src={content.url} 
            rel="gallery" 
            data-image-id="4310600810571"/>
        </a>
      </div> 
  </div>
)

export default SlideItem1

