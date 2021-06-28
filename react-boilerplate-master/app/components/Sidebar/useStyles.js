import { makeStyles } from '@material-ui/core/styles';
import SidebarImage from '../../images/sidebar.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100vh',
    maxWidth: 300,
    position: 'relative',
    backgroundImage: `url(${SidebarImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  item: {
    color: '#d4d4d4',
    fontWeight: '100',
  },
  category: {
    color: '#d4d4d4',
    fontSize: '20px',
    marginTop: '10px',
  },
  separation: {
    background: '#d4d4d4',
    borderTop: '0',
    margin: '5px 0',
  },
  center: {
    display: 'block',
    textAlign: 'center',
  },
}));

export default useStyles;
