import React from 'react';
import classes from './page-loader.module.css'

const PageLoader = ({loadingText = "Loading..."}) => {
  return (
    <p className={classes.loading}>{loadingText}</p>
  )
}

export default PageLoader