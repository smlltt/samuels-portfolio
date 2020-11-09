import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import CarouselItem from './CarouselItem'

const ProjectsCards = () => {
  const [imgs] = useState([
    {
      title: 'yoga-hub',
      imgSrc: 'https://image.flaticon.com/icons/svg/2991/2991411.svg',
      description:
        'A yoga video database, maintained by the user themselves. Main technologies used: React JS, Redux, Firebase. Currenly under development.',
      link: 'https://github.com/Noicoo/yoga-hub',
    },
    {
      title: 'note-app',
      imgSrc: 'https://image.flaticon.com/icons/svg/752/752326.svg',
      description: 'Note app developed with the purpose of learning React.',
      link: 'https://codesandbox.io/s/friendly-raman-wqweg',
    },
    {
      title: 'weather-app',
      imgSrc: 'https://image.flaticon.com/icons/svg/2917/2917242.svg',
      description:
        'Weather app developed with the purpose of learning React and how to interface a front-end environment with a rest API.',
      link: 'https://codesandbox.io/s/trusting-kowalevski-lt0eq',
    },
  ])

  const mappedImgs = imgs.map((item) => <CarouselItem {...item} />)

  return (
    <>
      <Grid container spacing={10} justify="center">
        {mappedImgs}

        {/* <a href="https://www.vecteezy.com/free-vector/background">Background Vectors by Vecteezy fffffghhghgfdfdfdfdfdfdfdfdfd</a> */}
      </Grid>
    </>
  )
}

export default ProjectsCards
