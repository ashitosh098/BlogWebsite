import { Button,makeStyles,Table,TableBody,TableCell,TableHead,TableRow} from "@material-ui/core"
import { categories } from "../../constants/data";
import { Link,useLocation } from "react-router-dom";


const useStyle=makeStyles({
    create:{
        margin:20,
        background:'#6495ed',
        color:'#fff',
        width:'86%'

    },
    table:{
border:'1px solid rgba(224,224,224,1)'
    },
    link:{
        textDecoration:'none',
         color:'inherit'
    }
})

const Categories=({ match })=>
{
    const classes = useStyle();
    const location = useLocation();
    let params = new URLSearchParams(location.search);

    return(
        <>
    <Link className={classes.link} to={`/create/${location.search}`}>   <Button variant='contained' className={classes.create}>Create Blog</Button></Link> 
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Link to={'/'} className={classes.link}>
                        All Categories
                        </Link>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                categories.map(category=>(
                    <TableRow>
                        <TableCell>
                            <Link to={`/?category=${category}`} className={classes.link}>
                            {category}
                            </Link>
                        </TableCell>
                    </TableRow>
                ))
            }
            </TableBody>
        </Table>
        </>
    )
}
export default Categories