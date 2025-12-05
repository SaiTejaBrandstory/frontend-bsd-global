import { CommonOptionSelector } from "../pages/common/CommonOptionSelector"

export const EleventhSection = (props) => {
  // Return null if no data from Strapi
  if (!props?.title && (!props?.eleventhSectionOptions || props.eleventhSectionOptions.length === 0)) {
    return null
  }

  // Map Strapi eleventhSectionOptions to CommonOptionSelector format
  const options = props?.eleventhSectionOptions && props.eleventhSectionOptions.length > 0
    ? props.eleventhSectionOptions.map((opt) => {
        // Combine description with list items if they exist
        let fullDescription = opt?.description ?? ''
        
        // If listItems exist, create HTML list
        if (opt?.listItems && Array.isArray(opt.listItems) && opt.listItems.length > 0) {
          const listItemsHtml = opt.listItems
            .map((listItem) => {
              // Handle both direct string and object with item property
              const itemText = typeof listItem === 'string' 
                ? listItem 
                : listItem?.item ?? ''
              return itemText ? `<li>${itemText}</li>` : ''
            })
            .filter(Boolean)
            .join('')
          
          if (listItemsHtml) {
            fullDescription = fullDescription 
              ? `${fullDescription}<br/><br/><ul>${listItemsHtml}</ul>`
              : `<ul>${listItemsHtml}</ul>`
          }
        }
        
        return {
          heading: opt?.heading ?? '',
          description: fullDescription,
        }
      })
    : []

  // Return null if no options data
  if (options.length === 0) {
    return null
  }

  const title = props?.title ?? ''
  const desc = props?.description ?? ''

  return (
    <CommonOptionSelector title={title} description={desc} options={options} splitRatio={props?.splitRatio} />
  )
}