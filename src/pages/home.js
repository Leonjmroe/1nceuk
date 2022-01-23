import { makeStyles } from '@material-ui/core/styles';

export default function Home() {

  const useStyles = makeStyles(() => ({
    container: {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'max-width': '80vw',
      'margin-top': '5vh',
      'margin-left': '10vw',
      'background-color': '#dddddd',
      'padding': '0% 0% 4% 0%',
    }
  }));
  const classes = useStyles();

   return (
    <div className={classes.container}>

    </div>
  );
}

