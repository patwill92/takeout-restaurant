import React from 'react'
import withStyles from 'react-jss'
import { Card } from 'semantic-ui-react'

import ImageCard from './ImageCard'
import ButtonCard from './ButtonCard'
import InfoCard from './InfoCard'
import SpecialsCard from './SpecialsCard'

const styles = theme => ({
    root: {
        width: '100% !important',
        height: 'auto !important'
    }
});

const HomeCard = ({classes, type, src, carousel, content}) => {
    switch(type) {
        case 'carousel': return <Card className={classes.root} image={src} />;
        case 'info': return <InfoCard className={classes.root} />;
        case 'button': return <ButtonCard src={src} content={content}/>;
        case 'specials': return <SpecialsCard />;
        case 'image': return <ImageCard src={src} />;
    }
};

export default withStyles(styles)(HomeCard)