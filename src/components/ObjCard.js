import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';

class ObjCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    newLat: this.props.lat,
    newLng: this.props.lng,
  };

  render() {
    const { name, lat, lng } = this.props;
    return (
      <div>
        <ListItem button onClick={() => this.props.updateCenter({ lat, lng })}>
          <Card style={{ width: '100%' }}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Название объекта
              </Typography>
              <Typography variant='h5' component='h2'>
                {name}
              </Typography>
              <Typography color='textSecondary'>Координаты объекта</Typography>
              <Typography variant='body2' component='p'>
                Широта: {lat}
                <br />
                Долгота: {lng}
              </Typography>
            </CardContent>
          </Card>
        </ListItem>
      </div>
    );
  }
}

export default ObjCard;
