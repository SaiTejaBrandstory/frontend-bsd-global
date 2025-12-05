import { CommonBanner } from '@/component/pages/common/CommonBanner'

const withProtocol = (url) => {
  if (!url) return undefined
  if (/^https?:\/\//i.test(url)) {
    return url
  }
  return `https://${url}`
}

export const FirstSection = ({
  heading,
  highlightedText,
  paragraph1,
  paragraph2,
  button1Link,
  button1,
  button2Link,
  button2,
}) => {
  const primaryParagraph = highlightedText
    ? `<div><b class="highlited-text">${highlightedText}</b></div>${
        paragraph1 ? `<div>${paragraph1}</div>` : ''
      }`
    : paragraph1

  return (
    <CommonBanner
      heading={heading ?? ''}
      paragraph={primaryParagraph ?? ''}
      paragraph2={paragraph2 ?? ''}
      buttonLink={withProtocol(button1Link) ?? '#'}
      buttonText={button1 ?? ''}
      buttonLink2={withProtocol(button2Link) ?? '#'}
      buttonText2={button2 ?? ''}
    />
  )
}
