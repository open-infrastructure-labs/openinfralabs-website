import React from 'react'
import PropTypes from 'prop-types'
import { CustomPageTemplate } from '../../templates/custom-page'

const CustomPagePreview = ({ entry, getAsset, widgetFor }) => {
  return (
    <CustomPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  )
}

CustomPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CustomPagePreview
