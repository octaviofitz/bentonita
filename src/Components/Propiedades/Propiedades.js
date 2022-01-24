//styles
import '../Propiedades/propiedades.css'
//material ui
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Propiedades({key, data}) {

  return (

    <Card sx={{ maxWidth: 400 }} className='card-propiedades' key={data.id}>
      <CardMedia
        component="img"
        height="260"
        image={`../assets/${data.img}`}
        alt={data.title}
        className='data-img-propiedad'
      />
      
      <CardContent className='container-data-card'>
        <h5 className='title-card'>
          {data.title}
        </h5>
        <p className='description-card'>
          {data.description}
        </p>
      </CardContent>
    </Card>
  );
}

