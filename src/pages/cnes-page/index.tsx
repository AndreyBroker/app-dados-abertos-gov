import { Box } from "@mui/material";
import TableCNES from "../../components/TableCNES";


const CnesPage = () => {

    return(
        <Box sx={{
            width: "100%",
            height: "90%",
            display: "flex",
            justifyContent: "center"
        }}> 
            <TableCNES />
        </Box>
    )
}

export default CnesPage;